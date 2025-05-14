document.addEventListener('DOMContentLoaded', function() {
    // Данные рецензий
    const reviewsData = [
        {
            id: 1,
            title: "Дюна: Часть вторая - эпичное продолжение",
            image: "rev1.png",
            rating: 5,
            film: "Дюна: Часть вторая",
            excerpt: "Вилнёв снова поражает зрителей масштабным видением вселенной Дюны...",
            content: "Полнометражная рецензия на фильм 'Дюна: Часть вторая'. Вилльнёв мастерски развивает сюжет, сохраняя баланс между экшеном и философскими темами. Визуальные эффекты и операторская работа на высочайшем уровне. Актерский состав блестяще справляется со своими ролями, особенно выделяется Тимоти Шаламе в роли Пола Атрейдеса. Фильм глубже раскрывает темы предательства и жертвы, давая зрителю возможность задуматься о природе власти и судьбы. Звуковое оформление, созданное Хансом Циммером, дополняет эпическую атмосферу, а пейзажи Арракиса поражают своей красотой.",
            likes: 124,
            dislikes: 8
        },
        {
            id: 2,
            title: "Мартовские иды - разочарование года",
            image: "rev2.png",
            rating: 2,
            film: "Мартовские иды",
            excerpt: "Ожидалось нечто большее от такого звездного состава...",
            content: "Рецензия на фильм 'Мартовские иды'. К сожалению, фильм не оправдывает ожиданий. Сценарий слабый, персонажи плохо проработаны, и их мотивация вызывает вопросы. Даже звездный состав, включая таких актёров, как Джейк Джилленхол и Джессика Честейн, не спасает ситуацию. Единственное достоинство - хорошая игра отдельных актеров, но этого недостаточно, чтобы спасти фильм. Режиссерская работа оставляет желать лучшего: многие сцены выглядят неестественно и натянуто, а диалоги кажутся искусственными. В итоге, 'Мартовские иды' становятся одним из тех фильмов, которые хочется забыть.",
            likes: 34,
            dislikes: 89
        },
        {
            id: 3,
            title: "Барби - яркая феерия",
            image: "rev3.png",
            rating: 4,
            film: "Барби",
            excerpt: "Фильм о Барби с неожиданным глубоким смыслом.",
            content: "Рецензия на фильм 'Барби'. Это не просто детская сказка, а настоящий социальный комментарий. Яркие цвета, запоминающаяся музыка и отличная игра актеров делают его запоминающимся. Месси и Лаура в главных ролях показывают удивительную химию, а сюжет, включающий в себя темы гендерной идентичности и самопринятия, заставляет задуматься. Несмотря на легкость подачи, фильм затрагивает важные вопросы и оставляет приятное послевкусие. Однако некоторые моменты могут показаться излишне утрированными, что не всем зрителям придется по душе.",
            likes: 150,
            dislikes: 15
        },
        {
            id: 4,
            title: "Опенгеймер - историческая драма с натяжкой",
            image: "rev4.png",
            rating: 3,
            film: "Опенгеймер",
            excerpt: "Сильный актерский состав, но сюжетная линия не всегда захватывает.",
            content: "Рецензия на фильм 'Опенгеймер'. Несмотря на блестящую игру актёров, таких как Киллиан Мерфи и Эмили Блант, фильм иногда затягивается, и некоторые сцены ощущаются излишне длинными. Режиссура Нолана привычно на высоком уровне, однако недостаток динамики в некоторых моментах вызывает недоумение. Фильм пытается показать внутреннюю борьбу Опенгеймера с моральными последствиями его работы, но не все сюжетные линии развиты должным образом. В итоге, 'Опенгеймер' оставляет смешанные чувства: это качественное кино, но не без своих недостатков.",
            likes: 80,
            dislikes: 40
        },
        {
            id: 5,
            title: "Побег из Шоушенка - классика жанра",
            image: "rev5.png",
            rating: 5,
            film: "Побег из Шоушенка",
            excerpt: "Непревзойденная история о надежде и дружбе.",
            content: "Рецензия на фильм 'Побег из Шоушенка'. Эта картина олицетворяет силу человеческого духа и стойкость перед лицом невзгод. Великолепные актерские работы, особенно Тим Роббинс и Морган Фриман, заставляют сопереживать героям. Захватывающий сюжет, удивительные повороты и глубокие философские размышления делают этот фильм настоящей классикой, которая не теряет актуальности с годами. Музыка Томаса Ньюмана идеально дополняет атмосферу, а откровения о дружбе и надежде остаются в памяти надолго.",
            likes: 200,
            dislikes: 5
        },
        {
            id: 6,
            title: "Форест Гамп - наивная сказка или шедевр?",
            image: "rev6.png",
            rating: 3,
            film: "Форест Гамп",
            excerpt: "Не всем понравится его наивность.",
            content: "Рецензия на фильм 'Форест Гамп'. Несмотря на культовый статус, некоторые моменты кажутся слишком идеализированными. Приключения Фореста, его случайные встречи с историческими личностями и наивный взгляд на мир создают уникальную атмосферу, но не все смогут оценить такую наивность. Тем не менее, фильм затрагивает важные темы, такие как любовь, потеря и искренность, и оставляет приятное послевкусие. Это не идеальное произведение, но оно имеет свои прелести, которые могут тронуть сердце зрителя.",
            likes: 90,
            dislikes: 30
        },
        {
            id: 7,
            title: "Достать ножи - захватывающий детектив",
            image: "rev7.png",
            rating: 4,
            film: "Достать ножи",
            excerpt: "Интригующий сюжет с неожиданными поворотами.",
            content: "Рецензия на фильм 'Достать ножи'. Этот детектив удерживает зрителя в напряжении до самого конца. Смешение жанров, от классического детектива до черной комедии, делает его уникальным. Отличная игра актеров, включая Дэниела Крейга и Ана де Армас, добавляет фильму шарма. Сюжет полон неожиданных поворотов, которые держат в напряжении, а юмор разбавляет атмосферу. 'Достать ножи' — это не просто детектив, а настоящая игра разума, которая заставляет задуматься о природе лжи и правды.",
            likes: 110,
            dislikes: 10
        },
        {
            id: 8,
            title: "Король Лев - ностальгия или новый провал?",
            image: "rev8.png",
            rating: 2,
            film: "Король Лев",
            excerpt: "Новый 'Король Лев' не дотягивает до оригинала.",
            content: "Рецензия на фильм 'Король Лев'. Несмотря на великолепную анимацию и технические достижения, фильм не передает той же эмоциональной глубины, как оригинал. Персонажи выглядят реалистично, но их выражения не передают нужных эмоций, что делает сцены менее трогательными. Сценарий лишен той искры, что делала оригинал таким любимым. Словно все чувства были выжаты из персонажей, и это сильно портит впечатление. 'Король Лев' 2019 года — это разочарование для многих поклонников классики.",
            likes: 50,
            dislikes: 100
        },
        {
            id: 9,
            title: "Титаник - история любви вне времени",
            image: "rev9.png",
            rating: 5,
            film: "Титаник",
            excerpt: "Вечная классика о любви и утрате.",
            content: "Рецензия на фильм 'Титаник'. Этот фильм стал символом романтики и трагедии. Непревзойденные актерские работы, потрясающая музыка и захватывающий сюжет создают незабываемую атмосферу. История любви Джек и Роуз, разворачивающаяся на фоне катастрофы, вызывает слезы и восхищение. Режиссура Джеймса Кэмерона на высоте, и каждая сцена наполнена эмоциями. 'Титаник' — это не просто фильм, это культурное явление, которое затрагивает сердца зрителей всех поколений.",
            likes: 180,
            dislikes: 20
        },
        {
            id: 10,
            title: "Minecraft в кино - неудачный эксперимент",
            image: "rev10.png",
            rating: 1,
            film: "Minecraft в кино",
            excerpt: "Неудачная попытка адаптации популярной игры.",
            content: "Рецензия на фильм 'Minecraft в кино'. К сожалению, фильм не оправдывает ожиданий. Слабый сценарий и плоские персонажи делают его скучным. Даже фанаты игры могут не оценить этот проект, так как он не передает дух оригинала. Попытка создать увлекательный сюжет об исследованиях и приключениях в мире Minecraft выглядит неудачной. Элементы юмора не срабатывают, и в итоге зритель остается разочарованным. 'Minecraft в кино' — это пример того, как не стоит адаптировать игровую франшизу.",
            likes: 25,
            dislikes: 150
        }
       
    ];

    // DOM элементы
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reviewModal = document.getElementById('reviewModal');
    const themeBtn = document.getElementById('themeBtn');

    // Отображение рецензий в сетке
    function displayReviews() {
        reviewsGrid.innerHTML = '';
        
        reviewsData.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.dataset.id = review.id;
            reviewCard.innerHTML = `
                <img src="images/${review.image}" alt="${review.title}" class="review-card__image">
                <div class="review-card__content">
                    <h3 class="review-card__title">${review.title}</h3>
                    <div class="review-card__rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    <p class="review-card__excerpt">${review.excerpt}</p>
                    <a class="review-card__read-more">Читать дальше</a>
                </div>
            `;
            reviewsGrid.appendChild(reviewCard);
        });
        
   
        document.querySelectorAll('.review-card').forEach(card => {
            card.addEventListener('click', function() {
                const reviewId = parseInt(this.dataset.id);
                openReviewModal(reviewId);
            });
        });
    }

    // Открытие модального окна рецензии
    function openReviewModal(reviewId) {
        const review = reviewsData.find(r => r.id === reviewId);
        if (!review) return;
       
        document.getElementById('modalReviewTitle').textContent = `${review.film}: ${review.title}`;
        document.getElementById('modalReviewRating').innerHTML = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        document.getElementById('modalReviewPoster').src = `images/${review.image}`;
        document.getElementById('modalReviewPoster').alt = review.title;
        document.getElementById('modalReviewText').textContent = review.content;
        document.getElementById('likeCount').textContent = review.likes;
        document.getElementById('dislikeCount').textContent = review.dislikes;
        
     
        const modalContent = document.querySelector('.review-modal');
        modalContent.classList.remove('positive', 'negative');
        if (review.rating >= 4) {
            modalContent.classList.add('positive');
        } else {
            modalContent.classList.add('negative');
        }
        
    
        reviewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Закрытие модального окна
    function closeReviewModal() {
        reviewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
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

    // Инициализация системы лайков
    function initLikeSystem() {
        document.getElementById('likeBtn').addEventListener('click', function() {
            const likeCount = document.getElementById('likeCount');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
        
        document.getElementById('dislikeBtn').addEventListener('click', function() {
            const dislikeCount = document.getElementById('dislikeCount');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        });
    }

    // Инициализация модальных окон
    function initModals() {
        document.querySelector('.close').addEventListener('click', closeReviewModal);
        
        window.addEventListener('click', function(event) {
            if (event.target === reviewModal) {
                closeReviewModal();
            }
        });
    }

    // Основная функция инициализации
    function init() {
        displayReviews();
        initThemeSystem();
        initLikeSystem();
        initModals();
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