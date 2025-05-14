document.addEventListener('DOMContentLoaded', function() {
    // Ключи для localStorage
    const FILMS_DATA_KEY = 'filmora_films_data';
    const CURRENT_USER_KEY = 'currentUser';

    // Начальные данные фильмов
    const initialFilmsData = [
        { 
            id: 1, 
            title: "Крестный отец", 
            year: 1972, 
            genre: "Криминал, Драма",
            director: "Фрэнсис Форд Коппола",
            actors: "Марлон Брандо, Аль Пачино, Джеймс Каан",
            description: "«Крестный отец» — классический криминальный фильм 1972 года, основанный на романе Марио Пьюзо. Он рассказывает историю семьи Корлеоне, одной из самых влиятельных мафиозных семей в США. Главный герой, Вито Корлеоне, стремится защитить свою семью и сохранить её влияние в мире преступности, одновременно сталкиваясь с предательством и насилием. Фильм исследует темы власти, loyalty и морального выбора, а также показывает, как преступный мир влияет на личные отношения. Режиссёр Фрэнсис Форд Коппола создал культовое произведение, которое стало символом жанра и оказало огромное влияние на киноискусство",
            reviews: []
        },
        { 
            id: 2, 
            title: "Побег из Шоушенка", 
            year: 1994, 
            genre: "Драма",
            director: "Фрэнк Дарабонт",
            actors: "Тим Роббинс, Морган Фриман, Боб Гантон",
            description: "«Побег из Шоушенка» — драматический фильм 1994 года, основанный на новелле Стивена Кинга. Сюжет рассказывает о Энди Дюфрейне, банкире, который оказывается в тюрьме Шоушенк за преступление, которого не совершал. В тюрьме он находит товарищей, включая заключённого Реда, и начинает строить планы по побегу. Фильм исследует темы надежды, свободы и дружбы, показывая, как Энди использует свои умения и стойкость, чтобы преодолеть ужасные условия заключения. Режиссёр Фрэнк Дарабонт создал глубокую и вдохновляющую историю, ставшую культовой и получившую признание критиков.",
            reviews: []
        },
        { 
            id: 3, 
            title: "Темный рыцарь", 
            year: 2008, 
            genre: "Боевик, Триллер",
            director: "Кристофер Нолан",
            actors: "Кристиан Бэйл, Хит Леджер, Аарон Экхарт",
            description: "«Темный рыцарь» — культовый фильм о супергероях, который продолжает историю Бэтмена, борющегося с преступностью в Готэме. Режиссёр Кристофер Нолан создает мрачный и реалистичный мир, где Бэтмен сталкивается с новым врагом — Джокером, который сеет хаос и разрушение. Фильм исследует моральные дилеммы, жертвы и пределы добродетели, демонстрируя, как даже самые благие намерения могут привести к непредсказуемым последствиям.",
            reviews: []
        },
        { 
            id: 4, 
            title: "Форрест Гамп", 
            year: 1994, 
            genre: "Драма, Мелодрама",
            director: "Роберт Земекис",
            actors: "Том Хэнкс, Робин Уилки, Гари Синиз",
            description: "«Форрест Гамп» — трогательная история жизни человека с низким IQ, который становится свидетелем и участником значительных исторических событий. Фильм показывает, как Форрест, благодаря своей доброте и наивности, преодолевает трудности жизни. Режиссёр Роберт Земекис создает уникальную атмосферу, сочетая комедию и драму, и поднимает важные темы любви, дружбы и судьбы.",
            reviews: []
        },
        { 
            id: 5, 
            title: "Начало", 
            year: 2010, 
            genre: "Фантастика, Боевик",
            director: "Кристофер Нолан",
            actors: "Леонардо ДиКаприо, Джозеф Гордон-Левитт, Эллен Пейдж",
            description: "«Начало» — захватывающий триллер о мире снов, где группа воров проникает в подсознание своих жертв. Режиссёр Кристофер Нолан создает сложный и многослойный сюжет, исследующий природу реальности и восприятия. Фильм задает важные вопросы о памяти, сожалении и искуплении, предлагая зрителям умопомрачительные визуальные эффекты и напряженный сюжет.",
            reviews: []
        },
        { 
            id: 6, 
            title: "Матрица", 
            year: 1999, 
            genre: "Фантастика, Боевик",
            director: "Лана и Лилли Вачовски",
            actors: "Киану Ривз, Лоренс Фишберн, Керри-Энн Мосс",
            description: "«Матрица» — революционный научно-фантастический фильм, который задает вопросы о реальности и свободе воли. История следует за Нео, хакером, который открывает правду о мире, в котором живет. Режиссёры Вачовски создают визуально потрясающее произведение, исследующее философские темы, и вводят зрителей в уникальный мир виртуальной реальности.",
            reviews: []
        },
        { 
            id: 7, 
            title: "Список Шиндлера", 
            year: 1993, 
            genre: "Драма, Военный",
            director: "Стивен Спилберг",
            actors: "Лиам Нисон, Бен Кинсли, Рэйф Файнс",
            description: "«Список Шиндлера» — мощный фильм, основанный на реальных событиях, о немецком бизнесмене, который спас более тысячи евреев во время Холокоста. Режиссёр Стивен Спилберг создает эмоционально насыщенное произведение, исследующее темы человечности и жертвы. Этот фильм стал символом надежды и мужества в самые мрачные времена истории.",
            reviews: []
        },
        { 
            id: 8, 
            title: "Криминальное чтиво", 
            year: 1994, 
            genre: "Криминал, Драма",
            director: "Квентин Тарантино",
            actors: "Джон Траволта, Ума Турман, Самуэль Л. Джексон",
            description: "«Криминальное чтиво» — знаковый фильм, который переплетает несколько историй о преступниках в Лос-Анджелесе. Режиссёр Квентин Тарантино использует нестандартный подход к повествованию, создавая культовые сцены и диалоги. Фильм исследует темы насилия, предательства и судьбы, оставляя зрителей под впечатлением.",
            reviews: []
        },
        { 
            id: 9, 
            title: "Зеленая миля", 
            year: 1999, 
            genre: "Драма, Фэнтези",
            director: "Фрэнк Дарабонт",
            actors: "Том Хэнкс, Майкл Кларк Дункан, Дэвид Морс",
            description: "«Зеленая миля» — трогательная история о тюремном надзирателе, который встречает заключённого с необычными способностями. Режиссёр Фрэнк Дарабонт создает атмосферу надежды и чудес, исследуя темы сострадания и несправедливости. Фильм оставляет глубокий след в душе зрителей, заставляя задуматься о природе человечности.",
            reviews: []
        },
        { 
            id: 10, 
            title: "Леон", 
            year: 1994, 
            genre: "Боевик, Криминал",
            director: "Люк Бессон",
            actors: "Жан Рено, Натали Портман, Гэри Олдман",
            description: "«Леон» — захватывающая история о дружбе между опытным киллером и молодой девочкой, которую он спасает. Режиссёр Люк Бессон создает уникальную атмосферу, смешивая элементы драмы и боевика. Фильм исследует темы протекции, любви и потерь, оставляя зрителей с глубокой эмоциональной связью с персонажами.",
            reviews: []
        },
        { 
            id: 11, 
            title: "Интерстеллар", 
            year: 2014, 
            genre: "Фантастика, Драма",
            director: "Кристофер Нолан",
            actors: "Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн",
            description: "«Интерстеллар» — эпическая научно-фантастическая история о путешествии через червоточины в поисках нового дома для человечества. Режиссёр Кристофер Нолан исследует темы любви, времени и выживания, создавая визуально потрясающий и эмоционально насыщенный фильм, который оставляет зрителей задумываться о будущем.",
            reviews: []
        },
        { 
            id: 12, 
            title: "Бойцовский клуб", 
            year: 1999, 
            genre: "Драма, Триллер",
            director: "Дэвид Финчер",
            actors: "Эдвард Нортон, Брэд Питт, Хелена Бонем Картер",
            description: "«Бойцовский клуб» — провокационный фильм о мужчине, который создает подпольный клуб для борьбы, чтобы справиться с кризисом своей идентичности. Режиссёр Дэвид Финчер создает мрачный и напряженный мир, исследуя темы потребительства, насилия и саморазрушения. Фильм стал культовым и продолжает вызывать обсуждения.",
            reviews: []
        },
        { 
            id: 13, 
            title: "Король Лев", 
            year: 1994, 
            genre: "Мультфильм, Мюзикл",
            director: "Роджер Аллос, Роб Минкофф",
            actors: "Мэттью Бродерик, Джереми Айронс, Нэйтан Лейн",
            description: "«Король Лев» — классический анимационный фильм, рассказывающий историю молодого льва Симбы, который должен вернуться, чтобы занять свое место в круге жизни. Режиссёры Роджер Аллос и Роб Минкофф создают красочный и трогательный мир, исследуя темы ответственности, любви и потерь. Музыка и визуальные эффекты делают его незабываемым.",
            reviews: []
        },
        { 
            id: 14, 
            title: "Гладиатор", 
            year: 2000, 
            genre: "Боевик, Драма",
            director: "Ридли Скотт",
            actors: "Рассел Кроу, Джоакин Феникс, Конни Нилсен",
            description: "«Гладиатор» — эпическая история о римском генерале, который становится гладиатором, чтобы отомстить за предательство. Режиссёр Ридли Скотт создает масштабное зрелище, полное битв и драмы. Фильм исследует темы чести, мести и искупления, оставляя зрителей в восторге от невероятных визуальных эффектов и мощного сюжета.",
            reviews: []
        },
        { 
            id: 15, 
            title: "Титаник", 
            year: 1997, 
            genre: "Драма, Мелодрама",
            director: "Джеймс Кэмерон",
            actors: "Леонардо ДиКаприо, Кейт Уинслет, Билли Зейн",
            description: "«Титаник» — романтическая драма, основанная на трагических событиях крушения легендарного лайнера. Режиссёр Джеймс Кэмерон создает захватывающую историю о любви между Розой и Джека, которые сталкиваются с ужасом катастрофы. Фильм стал символом любви и потерь, а его визуальные эффекты и музыка завоевали множество наград.",
            reviews: []
        },
        { 
            id: 16, 
            title: "Властелин колец: Возвращение короля", 
            year: 2003, 
            genre: "Фэнтези, Приключения",
            director: "Питер Джексон",
            actors: "Элайджа Вуд, Иэн Макинтош, Вигго Мортенсен",
            description: "«Властелин колец: Возвращение короля» — заключительная часть эпической трилогии, рассказывающая о финальной битве за Средиземье. Режиссёр Питер Джексон создает масштабное зрелище, полное героизма, дружбы и жертвенности. Фильм исследует темы добра и зла, оставляя зрителей в восторге от его эмоциональной глубины и визуальной красоты.",
            reviews: []
        },
        { 
            id: 17, 
            title: "Джанго освобожденный", 
            year: 2012, 
            genre: "Вестерн, Драма",
            director: "Квентин Тарантино",
            actors: "Джейми Фокс, Кристоф Вальц, Леонардо ДиКаприо",
            description: "«Джанго освобожденный» — захватывающий вестерн о бывшем рабe, который становится охотником за головами. Режиссёр Квентин Тарантино создает яркую и жестокую историю о мести и свободе. Фильм исследует темы расизма и человеческой стойкости на фоне потрясающих визуальных эффектов и запоминающегося саундтрека.",
            reviews: []
        },
        { 
            id: 18, 
            title: "Однажды в Голливуде", 
            year: 2019, 
            genre: "Драма, Комедия",
            director: "Квентин Тарантино",
            actors: "Леонардо ДиКаприо, Брэд Питт, Марго Робби",
            description: "«Однажды в Голливуде» — ностальгическая драма о закате эпохи золотого века Голливуда. Фильм следует за актёром и его дублером, которые пытаются сохранить свои карьеры на фоне изменяющегося кинематографа. Тарантино мастерски сочетает комедию и драму, создавая яркие образы и затрагивая темы дружбы и амбиций.",
            reviews: []
        },
        { 
            id: 19, 
            title: "Достать ножи", 
            year: 2019, 
            genre: "Детектив, Комедия",
            director: "Риан Джонсон",
            actors: "Дэниел Крейг, Ана де Армас, Крис Эванс",
            description: "«Достать ножи» — увлекательный детектив с элементами комедии о загадочном убийстве писателя. Режиссёр Риан Джонсон создает интригующий сюжет с множеством поворотов, заставляя зрителей гадать о настоящем убийце. Фильм сочетает юмор и напряжение, предлагая свежий взгляд на классический жанр.",
            reviews: []
        },
        { 
            id: 20, 
            title: "Дюна", 
            year: 2021, 
            genre: "Фантастика, Приключения",
            director: "Дени Вильнёв",
            actors: "Тимоти Шаламе, Ребекка Фергюсон, Оскар Айзек",
            description: "«Дюна» — эпическая адаптация классического романа Фрэнка Герберта о борьбе за контроль над самой ценной субстанцией во вселенной. Режиссёр Дени Вильнёв создает визуально впечатляющее произведение, исследующее темы власти и судьбы. Фильм погружает зрителей в сложный мир политических интриг и экзотических планет.",
            reviews: []
        },
        { 
            id: 21, 
            title: "Аватар", 
            year: 2009, 
            genre: "Фантастика, Приключения",
            director: "Джеймс Кэмерон",
            actors: "Сэм Уортингтон, Зои Салдана, Сигурни Уивер",
            description: "«Аватар» — революционный фильм, который погружает зрителей в мир Пандоры, населенный удивительными существами. Режиссёр Джеймс Кэмерон использует передовые технологии для создания потрясающих визуальных эффектов и исследует темы колониализма и экологии. Фильм стал настоящим культурным феноменом и завоевал множество наград.",
            reviews: []
        },
        { 
            id: 22, 
            title: "Джокер", 
            year: 2019, 
            genre: "Триллер, Драма",
            director: "Тодд Филлипс",
            actors: "Хоакин Феникс, Роберт Де Ниро, Зази Битц",
            description: "«Джокер» — психологический триллер, рассказывающий о превращении Артура Флека в культового злодея. Режиссёр Тодд Филлипс создает мрачную и реалистичную историю о борьбе с психическими заболеваниями и социальным неравенством. Фильм впечатляет глубиной исполнения Хоакина Феникса и оставляет зрителей в размышлениях о природе зла.",
            reviews: []
        },
        { 
            id: 23, 
            title: "Паразиты", 
            year: 2019, 
            genre: "Триллер, Драма",
            director: "Пон Джун Хо",
            actors: "Кан Хун, Чо Ё Джонг, Ли Сон Гюн",
            description: "«Паразиты» — остроумная и напряженная драма о классовом неравенстве в Южной Корее. Режиссёр Пон Джун Хо мастерски сочетает черный юмор и социальную критику, рассказывая историю о семье, которая внедряется в жизнь богатых. Фильм стал культовым и завоевал множество наград, включая Оскар за лучший фильм.",
            reviews: []
        },
        { 
            id: 24, 
            title: "1917", 
            year: 2019, 
            genre: "Военный, Драма",
            director: "Сэм Мендес",
            actors: "Деклан Уэсли, Джордж МакКей, Бенедикт Камбербэтч",
            description: "«1917» — военная драма, снятая в формате одного кадра, рассказывающая о двух солдатах, которые должны доставить важное сообщение во время Первой мировой войны. Режиссёр Сэм Мендес создает напряженное и эмоциональное путешествие, погружая зрителей в ужас войны и важность человеческой жизни.",
            reviews: []
        },
        { 
            id: 25, 
            title: "Человек-паук: Нет пути домой", 
            year: 2021, 
            genre: "Фантастика, Боевик",
            director: "Джон Уоттс",
            actors: "Том Холланд, Бенедикт Камбербэтч, Зендая",
            description: "«Человек-паук: Нет пути домой» — захватывающее продолжение, в котором Питер Паркер сталкивается с последствиями раскрытия своей личности. Режиссёр Джон Уоттс объединяет множество вселенных, создавая невероятное зрелище для поклонников супергеройских фильмов. Фильм исследует темы ответственности, дружбы и самопожертвования.",
            reviews: []
        },
        { 
            id: 26, 
            title: "Оппенгеймер", 
            year: 2023, 
            genre: "Драма, Биография",
            director: "Кристофер Нолан",
            actors: "Киллиан Мерфи, Эмили Блант, Мэтт Деймон",
            description: "«Оппенгеймер» — биографическая драма о жизни Роберта Оппенгеймера, отца атомной бомбы. Режиссёр Кристофер Нолан исследует моральные последствия создания оружия массового уничтожения, погружая зрителей в личные и исторические конфликты. Фильм предлагает глубокую психологическую проработку и впечатляющие визуальные решения.",
            reviews: []
        },
        { 
            id: 27, 
            title: "Барби", 
            year: 2023, 
            genre: "Комедия, Приключения",
            director: "Грета Гервиг",
            actors: "Марго Робби, Райан Гослинг, Симю Лью",
            description: "«Барби» — яркая комедия, в которой кукла Барби отправляется в путешествие по миру, полному приключений и самооткрытий. Режиссёр Грета Гервиг создает веселую и остроумную историю, исследуя темы идентичности и женской силы. Фильм предлагает свежий взгляд на знакомый образ и становится настоящим хитом.",
            reviews: []
        },
        { 
            id: 28, 
            title: "Топ Ган: Мэверик", 
            year: 2022, 
            genre: "Боевик, Драма",
            director: "Джозеф Косински",
            actors: "Том Круз, Майлз Теллер, Дженнифер Коннелли",
            description: "«Топ Ган: Мэверик» — продолжение классического фильма, в котором Пит Мэверик снова садится в кабину и учит новое поколение летчиков. Режиссёр Джозеф Косински создает зрелищную драма о дружбе, преданности и искуплении, которая сочетает захватывающие авиасцены и эмоциональные моменты.",
            reviews: []
        }
       
    ];

    // Загрузка данных из localStorage или инициализация
    let filmsData = loadFilmsData();

    function loadFilmsData() {
        const savedData = JSON.parse(localStorage.getItem(FILMS_DATA_KEY));
        
        if (!savedData) {
            localStorage.setItem(FILMS_DATA_KEY, JSON.stringify(initialFilmsData));
            return initialFilmsData;
        }
        
        initialFilmsData.forEach(newFilm => {
            if (!savedData.some(f => f.id === newFilm.id)) {
                savedData.push(newFilm);
            }
        });
        
        localStorage.setItem(FILMS_DATA_KEY, JSON.stringify(savedData));
        return savedData;
    }

    // Сохранение данных фильмов
    function saveFilmsData() {
        localStorage.setItem(FILMS_DATA_KEY, JSON.stringify(filmsData));
    }

    // DOM элементы
    const filmsGrid = document.getElementById('filmsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const filmModal = document.getElementById('filmModal');
    const authModal = document.getElementById('authModal');

    // Отображение фильмов в сетке
    function displayFilms(films) {
        filmsGrid.innerHTML = '';
        
        films.forEach(film => {
            const filmCard = document.createElement('div');
            filmCard.className = 'film-card';
            filmCard.dataset.id = film.id;
            filmCard.innerHTML = `
                <img src="images/film${film.id}.png" alt="${film.title}" class="film-poster">
                <div class="film-info">
                    <h3 class="film-title">${film.title}</h3>
                    <p class="film-year">${film.year}</p>
                    <p class="film-genre">${film.genre}</p>
                </div>
            `;
            filmsGrid.appendChild(filmCard);
        });
        
        document.querySelectorAll('.film-card').forEach(card => {
            card.addEventListener('click', function() {
                const filmId = parseInt(this.dataset.id);
                openFilmModal(filmId);
            });
        });
    }

    // Поиск фильмов
    function searchFilms() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFilms = filmsData.filter(film => 
            film.title.toLowerCase().includes(searchTerm) ||
            film.genre.toLowerCase().includes(searchTerm) ||
            film.year.toString().includes(searchTerm) ||
            film.director.toLowerCase().includes(searchTerm) ||
            film.actors.toLowerCase().includes(searchTerm)
        );
        
        displayFilms(filteredFilms);
    }

    // Открытие модального окна фильма
    function openFilmModal(filmId) {
        const film = filmsData.find(f => f.id === filmId);
        if (!film) return;
        
        // Заполняем данные фильма
        document.getElementById('modalFilmTitle').textContent = film.title;
        document.getElementById('modalFilmYear').textContent = film.year;
        document.getElementById('modalFilmGenre').textContent = film.genre;
        document.getElementById('modalFilmDirector').textContent = film.director;
        document.getElementById('modalFilmActors').textContent = film.actors;
        document.getElementById('modalFilmDescription').textContent = film.description;
        document.getElementById('modalFilmPoster').src = `images/film${film.id}.png`;
        document.getElementById('modalFilmPoster').alt = film.title;
        
        // Заполняем отзывы
        updateReviewsList(film);
        
        // Сбрасываем состояние формы отзыва
        document.getElementById('reviewForm').classList.add('hidden');
        document.getElementById('reviewText').value = '';
        document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
        
        // Обновляем UI в зависимости от авторизации
        updateAuthUI();
        
        // Показываем модальное окно
        filmModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Обновление UI в зависимости от авторизации
    function updateAuthUI() {
        const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
        const authMessage = document.getElementById('authMessage');
        const addReviewBtn = document.getElementById('addReviewBtn');
        
        if (currentUser) {
            authMessage.classList.add('hidden');
            addReviewBtn.classList.remove('hidden');
        } else {
            authMessage.classList.remove('hidden');
            addReviewBtn.classList.add('hidden');
        }
    }

    // Обновление списка отзывов
    function updateReviewsList(film) {
        const reviewsList = document.getElementById('reviewsList');
        reviewsList.innerHTML = '';
        
        if (film.reviews && film.reviews.length > 0) {
            film.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.innerHTML = `
                    <div class="review-user">${review.user}</div>
                    <div class="review-date">${review.date}</div>
                    <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    <div class="review-text">${review.text}</div>
                `;
                reviewsList.appendChild(reviewElement);
            });
        } else {
            reviewsList.innerHTML = '<p class="no-reviews">Пока нет отзывов. Будьте первым!</p>';
        }
    }

    // Закрытие модального окна
    function closeFilmModal() {
        filmModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Переключение видимости отзывов
    function toggleReviews() {
        const reviewsContainer = document.getElementById('reviewsContainer');
        const toggleBtn = document.getElementById('toggleReviews');
        
        reviewsContainer.classList.toggle('hidden');
        toggleBtn.textContent = reviewsContainer.classList.contains('hidden') 
            ? 'Показать отзывы' 
            : 'Скрыть отзывы';
    }

    // Настройка звезд рейтинга
    function setupRatingStars() {
        const stars = document.querySelectorAll('.star');
        let currentRating = 0;
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                currentRating = parseInt(star.dataset.value);
                stars.forEach((s, index) => {
                    s.classList.toggle('active', index < currentRating);
                });
            });
            
            star.addEventListener('mouseover', () => {
                const hoverValue = parseInt(star.dataset.value);
                stars.forEach((s, index) => {
                    s.classList.toggle('hover', index < hoverValue);
                });
            });
            
            star.addEventListener('mouseout', () => {
                stars.forEach(s => s.classList.remove('hover'));
            });
        });
        
        return () => currentRating;
    }

    // Инициализация системы отзывов
    function initReviewSystem() {
        const addReviewBtn = document.getElementById('addReviewBtn');
        const reviewForm = document.getElementById('reviewForm');
        const submitReviewBtn = document.getElementById('submitReview');
        const getCurrentRating = setupRatingStars();
        
        addReviewBtn.addEventListener('click', function() {
            reviewForm.classList.remove('hidden');
            this.classList.add('hidden');
        });
        
        submitReviewBtn.addEventListener('click', function() {
            const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
            if (!currentUser) return;
            
            const filmId = parseInt(document.getElementById('modalFilmPoster').src.split('film')[1].split('.')[0]);
            const film = filmsData.find(f => f.id === filmId);
            if (!film) return;
            
            const rating = getCurrentRating();
            const reviewText = document.getElementById('reviewText').value.trim();
            
            if (rating === 0 || !reviewText) {
                alert('Пожалуйста, поставьте оценку и напишите отзыв!');
                return;
            }
            
            const newReview = {
                user: currentUser.name,
                rating: rating,
                text: reviewText,
                date: new Date().toLocaleDateString('ru-RU')
            };
            
            if (!film.reviews) film.reviews = [];
            film.reviews.unshift(newReview);
            saveFilmsData();
            
            updateReviewsList(film);
            
            document.getElementById('reviewText').value = '';
            document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
            reviewForm.classList.add('hidden');
            addReviewBtn.classList.remove('hidden');
        });
    }

    // Инициализация системы тем
    function initThemeSystem() {
        const themeBtn = document.getElementById('themeBtn');
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

    // Инициализация модальных окон
    function initModals() {
        document.querySelector('.film-modal .close').addEventListener('click', closeFilmModal);
        document.getElementById('toggleReviews').addEventListener('click', toggleReviews);
        
        window.addEventListener('click', function(event) {
            if (event.target === filmModal) {
                closeFilmModal();
            }
            if (event.target === authModal) {
                authModal.classList.add('hidden');
                filmModal.style.display = 'block';
            }
        });
    }

    // Инициализация авторизации
    function initAuthSystem() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
                    authModal.classList.add('hidden');
                    filmModal.style.display = 'block';
                    updateAuthUI();
                } else {
                    alert('Неверный email или пароль!');
                }
            });
        }
        
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('regName').value;
                const email = document.getElementById('regEmail').value;
                const password = document.getElementById('regPassword').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                
                if (users.some(u => u.email === email)) {
                    alert('Пользователь с таким email уже существует!');
                    return;
                }
                
                users.push({ name, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name, email }));
                
                alert('Регистрация успешна! Теперь вы можете оставлять отзывы.');
                registerForm.classList.add('hidden');
                document.querySelector('.modal__content').classList.remove('hidden');
                updateAuthUI();
            });
        }
        
        if (showRegister && showLogin) {
            showRegister.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.modal__content').classList.add('hidden');
                registerForm.classList.remove('hidden');
            });
            
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                registerForm.classList.add('hidden');
                document.querySelector('.modal__content').classList.remove('hidden');
            });
        }
    }

    // Основная функция инициализации
    function init() {
        displayFilms(filmsData);
        initThemeSystem();
        initReviewSystem();
        initModals();
        initAuthSystem();
        
        searchBtn.addEventListener('click', searchFilms);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') searchFilms();
        });
    }

    // Запускаем приложение
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
