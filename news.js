document.addEventListener('DOMContentLoaded', function() {
    // Ключи для localStorage
    const NEWS_DATA_KEY = 'filmora_news_data';
    const CURRENT_USER_KEY = 'currentUser';

    // Начальные данные новостей
    const initialNewsData = [
        {
            id: 1,
            title: "НОВЫЙ ФИЛЬМ КВЕНТИНА ТАРАНТИНО В РАЗРАБОТКЕ",
            image: "news1.png",
            excerpt: "Легендарный режиссер анонсировал свой последний фильм, который станет завершением его карьеры.",
            content: `
                <p>Квентин Тарантино официально подтвердил, что работает над своим десятым и, как он утверждает, последним фильмом. По словам режиссера, это будет эпическое завершение его кинематографического пути.</p>
                
                <p>"Я всегда говорил, что сниму только 10 фильмов. Мне нравится идея уйти на пике, оставив после себя только качественное кино", - заявил Тарантино на пресс-конференции в Лос-Анджелесе.</p>
                
                <img src="images/newscart11.png" alt="Квентин Тарантино на съемках">
                
                <p>Детали сюжета пока держатся в секрете, но по слухам, это может быть приквел к "Омерзительной восьмерке" или совершенно новый проект. Съемки начнутся в следующем году.</p>
                
                <p>Продюсеры уже ведут переговоры с ведущими актерами Голливуда. По неподтвержденным данным, в проекте могут принять участие Леонардо ДиКаприо и Брэд Питт, которые уже сотрудничали с режиссером в "Однажды в Голливуде".</p>
                
                <img src="images/newscart12.png" alt="Леонардо ДиКаприо и Брэд Питт">
            `,
            comments: []
        },
        {
            id: 2,
            title: "MARVEL АНОНСИРОВАЛА НОВУЮ СЕРИЮ ФИЛЬМОВ",
            image: "news2.png",
            excerpt: "Кинокомиксная вселенная расширяется - студия представила планы на следующие 5 лет.",
            content: `
                <p>На специальном мероприятии для прессы Marvel Studios раскрыла планы на следующую фазу кинематографической вселенной. В планах студии 10 новых фильмов и 5 сериалов, которые выйдут в течение следующих 5 лет.</p>
                
                <p>Среди анонсированных проектов - новые части про Человека-паука, Доктора Стрэнджа, а также совершенно новые герои, которые ранее не появлялись на экранах.</p>
                
                <img src="images/newscart21.png" alt="Логотип Marvel">
                
                <p>"Мы хотим удивить зрителей и предложить им что-то действительно новое", - заявил президент Marvel Studios Кевин Файги. - "Это будет смелый новый этап для нашей вселенной."</p>
                
                <p>Первым фильмом новой фазы станет "Фантастическая четверка", премьера которого запланирована на ноябрь следующего года. Кастинг на главные роли уже начался.</p>
                
                <img src="images/newscart22.png" alt="Концепт-арт Фантастической четверки">
            `,
            comments: []
        },

        {
            id: 3,
            title: "КИНОФИЛЬМ 'ДЮНА' ПОЛУЧИЛ ПРЕМИЮ ОСКАР",
            image: "news3.png",
            excerpt: "Экранизация романа Фрэнка Герберта стала обладателем нескольких статуэток на церемонии Оскар.",
            content: `
                <p>Кинофильм "Дюна", режиссированный Дени Вильневом, завоевал признание на 94-й церемонии вручения премии Оскар, получив награды за лучшие визуальные эффекты и оригинальный саундтрек.</p>
                
                <p>По словам Вильнева, успех фильма стал возможен благодаря команде талантливых специалистов, которые вложили душу в этот проект.</p>
                
                <img src="images/newscart31.png" alt="Кадр из фильма Дюна">
                
                <p>Фильм основан на культовом романе Фрэнка Герберта и рассказывает историю молодого Пола Атрейдеса, который оказывается в центре межгалактической борьбы за контроль над планетой Арракис.</p>
                
                <p>Критики высоко оценили как визуальный стиль, так и глубокую философскую составляющую, что сделало "Дюну" одной из самых обсуждаемых картин года.</p>
            `,
            comments: []
        },
        {
            id: 4,
            title: "НОВЫЙ ФИЛЬМ О 'ДЖAMES BOND' В РАЗРАБОТКЕ",
            image: "news4.png",
            excerpt: "Студия MGM подтвердила работу над новым фильмом о легендарном агенте 007.",
            content: `
                <p>Студия MGM официально объявила о начале разработки нового фильма о Джеймсе Бонде, который станет 26-й частью франшизы.</p>
                
                <p>Сценарист поработает над проектом вместе с продюсерами, которые намерены вернуть кинокартину к классическим элементам, за которые зрители полюбили агента 007.</p>
                
                <img src="images/newscart41.png" alt="Джеймс Бонд">
                
                <p>По слухам, в новом фильме могут появиться как знакомые персонажи, так и новые лица, что добавит свежести в полюбившуюся историю.</p>
                
                <p>Дата выхода пока не объявлена, однако студия планирует выпустить фильм в ближайшие годы.</p>
            `,
            comments: []
        },
        {
            id: 5,
            title: "РЕЖИССЕР 'ЗВЕЗДНЫХ ВОЙН' УВЕДОМИЛ О НОВОМ ПРОЕКТЕ",
            image: "news5.png",
            excerpt: "Джордж Лукас анонсировал новый фильм во вселенной 'Звездных войн'.",
            content: `
                <p>Джордж Лукас, создатель культовой франшизы "Звездные войны", сообщил о том, что работает над новым проектом, который обещает расширить вселенную саги.</p>
                
                <p>Лукаса вдохновляют новые технологии и возможности, которые позволяют рассказывать истории, ранее невозможные в кино.</p>
                
                <img src="images/newscart51.png" alt="Звездные войны">
                
                <p>Хотя подробности проекта пока держатся в секрете, фанаты уже с нетерпением ждут анонсов о сюжете и кастинге.</p>
                
                <p>По словам режиссера, это будет уникальный подход к знакомым персонажам, и зрители смогут увидеть их с другой стороны.</p>
            `,
            comments: []
        }
    
    ];

    // Загрузка данных
    let newsData = loadNewsData();

    function loadNewsData() {
        const savedData = JSON.parse(localStorage.getItem(NEWS_DATA_KEY));
        return savedData || initialNewsData;
    }

    function saveNewsData() {
        localStorage.setItem(NEWS_DATA_KEY, JSON.stringify(newsData));
    }

    // DOM элементы
    const newsList = document.getElementById('newsList');
    const newsModal = document.getElementById('newsModal');
    const themeBtn = document.getElementById('themeBtn');

    // Отображение новостей
    function displayNews() {
        newsList.innerHTML = '';
        newsData.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.dataset.id = news.id;
            newsCard.innerHTML = `
                <img src="images/${news.image}" alt="${news.title}" class="news-card__image">
                <div class="news-card__content">
                    <h3 class="news-card__title">${news.title}</h3>
                    <p class="news-card__excerpt">${news.excerpt}</p>
                    <a class="news-card__read-more">Читать дальше</a>
                </div>
            `;
            newsList.appendChild(newsCard);
        });

        document.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', function() {
                openNewsModal(parseInt(this.dataset.id));
            });
        });
    }

    // Работа с модальным окном
    function openNewsModal(newsId) {
        const news = newsData.find(n => n.id === newsId);
        if (!news) return;

        document.getElementById('modalNewsTitle').textContent = news.title;
        document.getElementById('modalNewsMainImage').src = `images/${news.image}`;
        document.getElementById('modalNewsContent').innerHTML = news.content;
        updateCommentsList(news);

        newsModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeNewsModal() {
        newsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('commentsContainer').classList.add('hidden');
        document.getElementById('toggleComments').textContent = 'Показать комментарии';
    }

    function initModalHandlers() {
        // Закрытие по крестику
        document.querySelector('.news-modal .close').addEventListener('click', closeNewsModal);
        
        // Закрытие по клику вне карточки
        newsModal.addEventListener('click', function(e) {
            if (e.target === this) closeNewsModal();
        });
        
        // Закрытие по Esc
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && newsModal.style.display === 'block') {
                closeNewsModal();
            }
        });
    }

    // Комментарии
    function updateCommentsList(news) {
        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = news.comments.length 
            ? news.comments.map(comment => `
                <div class="comment">
                    <div class="comment-user">${comment.user}</div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-date">${comment.date}</div>
                </div>
              `).join('')
            : '<p>Пока нет комментариев. Будьте первым!</p>';
    }

    function initCommentSystem() {
        document.getElementById('toggleComments').addEventListener('click', function() {
            const container = document.getElementById('commentsContainer');
            container.classList.toggle('hidden');
            this.textContent = container.classList.contains('hidden') 
                ? 'Показать комментарии' 
                : 'Скрыть комментарии';
            
            if (!container.classList.contains('hidden')) {
                const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
                document.getElementById('commentFormContainer').classList.toggle('hidden', !currentUser);
                document.getElementById('loginPrompt').classList.toggle('hidden', !!currentUser);
            }
        });

        document.getElementById('submitComment').addEventListener('click', function() {
            const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
            if (!currentUser) return;

            const text = document.getElementById('commentText').value.trim();
            if (!text) return alert('Введите текст комментария!');

            const newsId = parseInt(document.querySelector('.news-card[data-id]').dataset.id);
            const news = newsData.find(n => n.id === newsId);
            
            news.comments.unshift({
                user: currentUser.name,
                text: text,
                date: new Date().toLocaleString('ru-RU')
            });
            
            saveNewsData();
            updateCommentsList(news);
            document.getElementById('commentText').value = '';
        });
    }

    // Тема
    function initThemeSystem() {
        const html = document.documentElement;
        const theme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', theme);
        themeBtn.textContent = theme === 'light' ? 'Тёмная тема' : 'Светлая тема';
        
        themeBtn.addEventListener('click', () => {
            const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeBtn.textContent = newTheme === 'light' ? 'Тёмная тема' : 'Светлая тема';
        });
    }

    // Инициализация
    function init() {
        displayNews();
        initThemeSystem();
        initModalHandlers();
        initCommentSystem();
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