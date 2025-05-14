document.addEventListener('DOMContentLoaded', function() {
    // Анимация элементов при загрузке
    const heroElements = document.querySelectorAll('.hero__title, .hero__subtitle, .hero__button');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease-out ${0.3 + index * 0.2}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Переключение темы
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

    // Модальное окно авторизации
    const authBtn = document.getElementById('authBtn');
    const modal = document.getElementById('authModal');
    const closeBtn = document.querySelectorAll('.modal__close');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginContent = document.querySelector('.modal__content:not(.hidden)');
    const registerContent = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');

    authBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        loginContent.style.display = 'block';
        registerContent.style.display = 'none';
    });

    closeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        // Плавное переключение между формами
        loginContent.style.opacity = '0';
        loginContent.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            loginContent.style.display = 'none';
            registerContent.style.display = 'block';
            registerContent.style.opacity = '0';
            registerContent.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                registerContent.style.opacity = '1';
                registerContent.style.transform = 'translateX(0)';
            }, 10);
        }, 300);
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        // Плавное переключение обратно
        registerContent.style.opacity = '0';
        registerContent.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            registerContent.style.display = 'none';
            loginContent.style.display = 'block';
            loginContent.style.opacity = '0';
            loginContent.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                loginContent.style.opacity = '1';
                loginContent.style.transform = 'translateX(0)';
            }, 10);
        }, 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Авторизация
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert(`Добро пожаловать, ${user.name}!`);
            localStorage.setItem('currentUser', JSON.stringify(user));
            modal.style.display = 'none';
            loginError.textContent = '';
        } else {
            loginError.textContent = 'Неверный email или пароль!';
        }
    });

    // Регистрация
   // В обработчике формы регистрации
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Проверка совпадения паролей
    if (password !== passwordConfirm) {
        registerError.textContent = 'Пароли не совпадают!';
        return;
    }

    if (users.some(u => u.email === email)) {
        registerError.textContent = 'Пользователь с таким email уже существует!';
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Регистрация успешна! Теперь войдите в аккаунт.');
    
    // Автоматически переключение на форму входа
    registerContent.style.opacity = '0';
    registerContent.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        registerContent.style.display = 'none';
        loginContent.style.display = 'block';
        loginContent.style.opacity = '0';
        loginContent.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            loginContent.style.opacity = '1';
            loginContent.style.transform = 'translateX(0)';
        }, 10);
    }, 300);
    
    registerError.textContent = '';
    
});
});
// Анимация при прокрутке
function animateOnScroll() {
    const featuresSection = document.querySelector('.features');
    const sectionPosition = featuresSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        featuresSection.classList.add('animated');
        window.removeEventListener('scroll', animateOnScroll);
    }
}

// Запуск проверку при загрузке и при скролле
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
// Анимация счетчиков с эффектом накрутки
function animateCounters() {
    const counters = document.querySelectorAll('.stat__number');
    const duration = 2000; 
    let started = false;
    
    function animateCounter(counter) {
        const target = +counter.dataset.target;
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            
            counter.textContent = value.toLocaleString(); 
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Запуск при появлении блока
    const statsSection = document.querySelector('.stats');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition && !started) {
        started = true;
        statsSection.classList.add('animated');
        counters.forEach(counter => {
            animateCounter(counter);
        });
        window.removeEventListener('scroll', animateStats);
    }
}

// Отслеживание скролла
function animateStats() {
    animateCounters();
}

// Инициализация
window.addEventListener('load', animateStats);
window.addEventListener('scroll', animateStats);

document.addEventListener('DOMContentLoaded', function() {
  
    const movies = [
        { id: 1, title: "Мастер", genre: "Боевик" },
        { id: 2, title: "Minecraft в кино", genre: "Фэнтези, Боевик" },
        { id: 3, title: "Батя 2. Дед", genre: "Комедия" },
        { id: 4, title: "Опустошение", genre: "Детектив" },
        { id: 5, title: "Новичок", genre: "Триллер, Боевик" },
        { id: 6, title: "Мир юрского периода: Возрождение ", genre: "Триллер, Приключения" },
        { id: 7, title: "Злой город", genre: "История, Боевик" },
        { id: 8, title: "В потерянных землях", genre: "фэнтези, боевик" }
    ];

    const track = document.querySelector('.carousel__track');
    const slides = [];
    let currentIndex = 0;
    const visibleSlides = 4;

    // Слайды
    function createSlides() {
        track.innerHTML = '';
        
        movies.forEach((movie, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel__slide';
            slide.dataset.index = index;
            slide.innerHTML = `
                <img src="images/new${movie.id}.png" alt="${movie.title}" class="carousel__image">
                <div class="carousel__info">
                    <h3 class="carousel__title">${movie.title}</h3>
                    <p class="carousel__genre">${movie.genre}</p>
                </div>
            `;
            track.appendChild(slide);
            slides.push(slide);
        });
    }

   
    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = 25;
        const offset = -currentIndex * (slideWidth + gap);
        
        track.style.transform = `translateX(${offset}px)`;
        updateIndicators();
    }

    function createIndicators() {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel__indicators';
        
        for (let i = 0; i <= movies.length - visibleSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `carousel__indicator ${i === 0 ? 'active' : ''}`;
            indicator.dataset.index = i;
            indicator.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            indicatorsContainer.appendChild(indicator);
        }
        
        document.querySelector('.new-releases .container').appendChild(indicatorsContainer);
    }

    
    function updateIndicators() {
        document.querySelectorAll('.carousel__indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    
    function initCarousel() {
        createSlides();
        createIndicators();
        updateCarousel();
        
        // Кнопка "Вправо"
        document.querySelector('.carousel__button--right').addEventListener('click', () => {
            if (currentIndex < movies.length - visibleSlides) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Кнопка "Влево"
        document.querySelector('.carousel__button--left').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        
        window.addEventListener('resize', () => {
            updateCarousel();
        });
    }

    initCarousel();
});
// Анимация появления блока новинок
function animateNewReleases() {
    const section = document.querySelector('.new-releases');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('animated');
        window.removeEventListener('scroll', animateNewReleases);
    }
}



window.addEventListener('load', animateNewReleases);
window.addEventListener('scroll', animateNewReleases);

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления подвала
    function animateFooter() {
        const footer = document.querySelector('.footer');
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (footerPosition < screenPosition) {
            footer.classList.add('animated');
            window.removeEventListener('scroll', animateFooter);
            
           
            const footerSections = document.querySelectorAll('.footer__section');
            const footerBottom = document.querySelector('.footer__bottom');
            
            footerSections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 200 + (index * 100));
            });
            
            setTimeout(() => {
                footerBottom.style.opacity = '1';
                footerBottom.style.transform = 'translateY(0)';
            }, 600);
        }
    }

  
    function initFooterAnimations() {
        const footerSections = document.querySelectorAll('.footer__section');
        const footerBottom = document.querySelector('.footer__bottom');
        
      
        footerSections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease-out';
        });
        
        footerBottom.style.opacity = '0';
        footerBottom.style.transform = 'translateY(20px)';
        footerBottom.style.transition = 'all 0.6s ease-out 0.3s';
        
   
        window.addEventListener('load', animateFooter);
        window.addEventListener('scroll', animateFooter);
    }

    initFooterAnimations();
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
