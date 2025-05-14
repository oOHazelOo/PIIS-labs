document.addEventListener('DOMContentLoaded', function() {
    // Ключ для localStorage
    const INTERVIEWS_DATA_KEY = 'filmora_interviews_data';

    // Данные интервью
    const interviewsData = [
        {
            id: 1,
            title: "Киллиан Мерфи об Оскаре за 'Оппенгеймер'",
            image: "int1.jpg",
            youtubeId: "dQw4w9WgXcQ", 
            excerpt: "Актер рассказывает о своей роли в фильме Кристофера Нолана и подготовке к ней.",
            likes: 245,
            dislikes: 12
        },
        {
            id: 2,
            title: "Марго Робби: от Харли Квинн до Барби",
            image: "int2.jpg",
            youtubeId: "dQw4w9WgXcQ",
            excerpt: "Актриса делится впечатлениями о съемках в культовой роли и своем продюсерском опыте.",
            likes: 189,
            dislikes: 8
        },
        {
            id: 3,
            title: "Леонардо ДиКаприо об экологии и кино",
            image: "int3.jpg",
            youtubeId: "dQw4w9WgXcQ",
            excerpt: "Звезда Голливуда совмещает актерскую карьеру с активной экологической позицией.",
            likes: 312,
            dislikes: 15
        },
        {
            id: 4,
            title: "Джек Блэк о 'Майнкрафт' фильме",
            image: "int4.jpg",
            youtubeId: "dQw4w9WgXcQ",
            excerpt: "Комедийный актер рассказывает о своей роли в экранизации популярной игры.",
            likes: 178,
            dislikes: 20
        },
        {
            id: 5,
            title: "Флоренс Пью: от драмы к супергероике",
            image: "int5.jpg",
            youtubeId: "dQw4w9WgXcQ",
            excerpt: "Молодая актриса о своем стремительном взлете в Голливуде.",
            likes: 156,
            dislikes: 5
        },
        {
            id: 6,
            title: "Тим Шаламе: новый голос поколения",
            image: "int6.jpg",
            youtubeId: "dQw4w9WgXcQ",
            excerpt: "Интервью с одним из самых востребованных актеров современности.",
            likes: 267,
            dislikes: 9
        }
    ];

    // Загрузка данных из localStorage
    function loadInterviewsData() {
        const savedData = JSON.parse(localStorage.getItem(INTERVIEWS_DATA_KEY));
        return savedData || interviewsData;
    }

    // Сохранение данных в localStorage
    function saveInterviewsData(data) {
        localStorage.setItem(INTERVIEWS_DATA_KEY, JSON.stringify(data));
    }

    // DOM элементы
    const interviewsList = document.getElementById('interviewsList');
    const themeBtn = document.getElementById('themeBtn');

    // Отображение интервью
    function displayInterviews() {
        const data = loadInterviewsData();
        
        interviewsList.innerHTML = data.map(interview => `
            <div class="interview-card" data-id="${interview.id}">
                <div class="interview-card__video">
                    <img src="images/${interview.image}" alt="${interview.title}">
                    <div class="interview-card__play-btn"></div>
                </div>
                <div class="interview-card__content">
                    <h3 class="interview-card__title">${interview.title}</h3>
                    <p class="interview-card__excerpt">${interview.excerpt}</p>
                    <div class="interview-card__actions">
                        <button class="like-btn">👍 ${interview.likes}</button>
                        <button class="dislike-btn">👎 ${interview.dislikes}</button>
                    </div>
                </div>
            </div>
        `).join('');

    
        addInterviewHandlers();
    }


    function addInterviewHandlers() {
      
        document.querySelectorAll('.interview-card__video').forEach(video => {
            video.addEventListener('click', function() {
                const interviewId = parseInt(this.closest('.interview-card').dataset.id);
                const interview = loadInterviewsData().find(i => i.id === interviewId);
                if (interview) {
                    window.open(`https://youtube.com/watch?v=${interview.youtubeId}`, '_blank');
                }
            });
        });

        // Лайки/дизлайки
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.interview-card');
                const interviewId = parseInt(card.dataset.id);
                updateLikes(interviewId, 'like');
            });
        });

        document.querySelectorAll('.dislike-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.interview-card');
                const interviewId = parseInt(card.dataset.id);
                updateLikes(interviewId, 'dislike');
            });
        });
    }

    // Обновление лайков/дизлайков
    function updateLikes(interviewId, type) {
        const data = loadInterviewsData();
        const interview = data.find(i => i.id === interviewId);
        
        if (interview) {
            if (type === 'like') {
                interview.likes++;
            } else {
                interview.dislikes++;
            }
            
            saveInterviewsData(data);
            updateLikeButtons(interviewId, interview.likes, interview.dislikes);
        }
    }

    // Обновление кнопок лайков
    function updateLikeButtons(id, likes, dislikes) {
        const card = document.querySelector(`.interview-card[data-id="${id}"]`);
        if (card) {
            card.querySelector('.like-btn').textContent = `👍 ${likes}`;
            card.querySelector('.dislike-btn').textContent = `👎 ${dislikes}`;
        }
    }

    // Инициализация системы тем
    function initThemeSystem() {
        const html = document.documentElement;
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);
        
        themeBtn.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
        
        function updateButtonText(theme) {
            themeBtn.textContent = theme === 'light' ? 'Тёмная тема' : 'Светлая тема';
        }
    }

    // Основная функция инициализации
    function init() {
        displayInterviews();
        initThemeSystem();
    }

  
    init();
});
document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Блокировка скролла при открытом меню
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});