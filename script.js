// ==================== GLOBAL STATE ====================
const app = {
    currentPage: 'home',
    currentUser: null,
    cart: [],
    products: [
        {
            id: 1,
            name: 'Смартфон Pro Max',
            category: 'electronics',
            price: 459999,
            image: '📱',
            rating: 4.8,
            reviews: 234
        },
        {
            id: 2,
            name: 'Ноутбук UltraBook',
            category: 'electronics',
            price: 859999,
            image: '💻',
            rating: 4.9,
            reviews: 156
        },
        {
            id: 3,
            name: 'Наушники Wireless',
            category: 'electronics',
            price: 29999,
            image: '🎧',
            rating: 4.7,
            reviews: 412
        },
        {
            id: 4,
            name: 'Смарт-часы',
            category: 'accessories',
            price: 89999,
            image: '⌚',
            rating: 4.6,
            reviews: 189
        },
        {
            id: 5,
            name: 'Портативное зарядное',
            category: 'accessories',
            price: 14999,
            image: '🔋',
            rating: 4.5,
            reviews: 301
        },
        {
            id: 6,
            name: 'Кабель Type-C',
            category: 'accessories',
            price: 1999,
            image: '🔌',
            rating: 4.4,
            reviews: 523
        },
        {
            id: 7,
            name: 'Джинсы Classic',
            category: 'fashion',
            price: 19999,
            image: '👖',
            rating: 4.3,
            reviews: 245
        },
        {
            id: 8,
            name: 'Футболка Cotton',
            category: 'fashion',
            price: 8999,
            image: '👕',
            rating: 4.2,
            reviews: 567
        }
    ]
};

// ==================== NAVIGATION ====================
function navigateTo(page) {
    app.currentPage = page;
    updateActiveLink(page);
    loadPage(page);
    window.scrollTo(0, 0);
}

function updateActiveLink(page) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`nav a[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    
    switch(page) {
        case 'home':
            mainContent.innerHTML = renderHome();
            break;
        case 'shop':
            mainContent.innerHTML = renderShop();
            initShopFilters();
            break;
        case 'payments':
            mainContent.innerHTML = renderPayments();
            initPaymentForm();
            break;
        case 'transfers':
            mainContent.innerHTML = renderTransfers();
            initTransferForm();
            break;
        case 'profile':
            mainContent.innerHTML = renderProfile();
            initProfileForm();
            break;
        default:
            mainContent.innerHTML = renderHome();
    }
}

// ==================== RENDER PAGES ====================

// HOME PAGE
function renderHome() {
    return `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-container">
                <h1>Ваш финансовый помощник</h1>
                <p>Переводы без комиссий, платежи, кредиты и покупки в одном месте</p>
                <div class="hero-buttons">
                    <button class="btn-hero-primary" onclick="navigateTo('shop')">Начать покупки</button>
                    <button class="btn-hero-secondary" onclick="navigateTo('profile')">Создать аккаунт</button>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="section">
            <div class="container">
                <h2 class="section-title">Наши сервисы</h2>
                <p class="section-subtitle">Все, что вам нужно для управления финансами</p>
                <div class="services-grid">
                    <div class="service-card" onclick="navigateTo('shop')">
                        <div class="service-icon">🛍️</div>
                        <h3 class="service-title">Магазин</h3>
                        <p class="service-desc">Покупайте товары электроники, одежду и аксессуары с доставкой на дом</p>
                    </div>
                    <div class="service-card" onclick="navigateTo('payments')">
                        <div class="service-icon">💳</div>
                        <h3 class="service-title">Платежи</h3>
                        <p class="service-desc">Оплачивайте коммунальные услуги, интернет и другие сервисы</p>
                    </div>
                    <div class="service-card" onclick="navigateTo('transfers')">
                        <div class="service-icon">💸</div>
                        <h3 class="service-title">Переводы</h3>
                        <p class="service-desc">Отправляйте деньги друзьям и семье без комиссий</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="section" style="background-color: var(--white);">
            <div class="container">
                <h2 class="section-title">Почему выбирают нас?</h2>
                <div class="features-list">
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>Безопасность</h4>
                            <p>Все ваши данные защищены максимальным уровнем шифрования</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>Без комиссий</h4>
                            <p>Переводы и основные операции выполняются без комиссии</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>24/7 Поддержка</h4>
                            <p>Наша команда всегда готова помочь вам в любое время</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>Быстрые переводы</h4>
                            <p>Деньги поступают получателю за считанные секунды</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>Кэшбэк</h4>
                            <p>Получайте кэшбэк на каждую покупку и платеж</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">✓</div>
                        <div class="feature-content">
                            <h4>Рассрочка 0%</h4>
                            <p>Покупайте товары в рассрочку без процентов</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero" style="margin-top: 3rem; margin-bottom: 0;">
            <div class="hero-container">
                <h2>Готовы начать?</h2>
                <p>Присоединяйтесь к миллионам пользователей уже сегодня</p>
                <button class="btn-hero-primary mt-2" onclick="navigateTo('profile')">Зарегистрироваться</button>
            </div>
        </section>
    `;
}

// SHOP PAGE
function renderShop() {
    const categories = ['all', 'electronics', 'accessories', 'fashion'];
    const categoryNames = {
        all: 'Все товары',
        electronics: 'Электроника',
        accessories: 'Аксессуары',
        fashion: 'Одежда'
    };

    let html = `
        <section class="section">
            <div class="container">
                <div class="flex-between mb-4">
                    <h1>Магазин</h1>
                </div>

                <!-- Filters -->
                <div class="mb-4" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: var(--shadow-sm);">
                    <h4 class="mb-2">Категории</h4>
                    <div class="flex" style="flex-wrap: wrap; gap: 0.5rem;">
    `;

    categories.forEach(cat => {
        html += `
            <button class="btn btn-small ${cat === 'all' ? 'btn-primary' : 'btn-outline'}" 
                    onclick="filterProducts('${cat}')" 
                    data-category="${cat}">
                ${categoryNames[cat]}
            </button>
        `;
    });

    html += `
                    </div>
                    <div class="mt-3">
                        <label for="price-filter">Максимальная цена:</label>
                        <input type="range" id="price-filter" min="0" max="1000000" step="10000" 
                               value="1000000" style="width: 100%; margin-top: 0.5rem;" 
                               oninput="filterProducts()">
                        <div class="text-muted mt-1">до <span id="price-value">1 000 000</span> ₸</div>
                    </div>
                </div>

                <!-- Products Grid -->
                <div id="products-container" class="grid grid-3">
    `;

    app.products.forEach(product => {
        html += `
            <div class="card" data-product-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
                <div class="card-image">${product.image}</div>
                <h5 class="card-title">${product.name}</h5>
                <p class="card-subtitle">${categoryNames[product.category]}</p>
                <div class="text-muted mb-2" style="font-size: 0.85rem;">
                    ⭐ ${product.rating} (${product.reviews} отзывов)
                </div>
                <div class="card-footer">
                    <div class="card-price">${formatPrice(product.price)} ₸</div>
                    <button class="btn btn-small btn-primary" onclick="addToCart(${product.id})">
                        Купить
                    </button>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </section>
    `;

    return html;
}

// PAYMENTS PAGE
function renderPayments() {
    return `
        <section class="section">
            <div class="container">
                <h1 class="mb-4">Платежи</h1>
                
                <div class="grid grid-2">
                    <!-- Payment Form -->
                    <div class="card">
                        <h3 class="mb-3">Оплатить услугу</h3>
                        <form id="payment-form">
                            <div class="form-group">
                                <label for="service-type">Тип услуги</label>
                                <select id="service-type" required>
                                    <option value="">Выберите услугу</option>
                                    <option value="electricity">Электричество</option>
                                    <option value="water">Вода</option>
                                    <option value="gas">Газ</option>
                                    <option value="internet">Интернет</option>
                                    <option value="phone">Мобильная сеть</option>
                                    <option value="tv">Телевидение</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="account-number">Номер счета</label>
                                <input type="text" id="account-number" placeholder="Введите номер счета" required>
                            </div>
                            <div class="form-group">
                                <label for="payment-amount">Сумма платежа (₸)</label>
                                <input type="number" id="payment-amount" placeholder="Введите сумму" min="100" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Оплатить</button>
                        </form>
                    </div>

                    <!-- Popular Services -->
                    <div>
                        <h3 class="mb-3">Популярные услуги</h3>
                        <div class="grid grid-2" style="gap: 1rem;">
                            <div class="card" style="cursor: pointer; text-align: center;" 
                                 onclick="selectService('electricity', 'Электричество')">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚡</div>
                                <h5>Электричество</h5>
                            </div>
                            <div class="card" style="cursor: pointer; text-align: center;" 
                                 onclick="selectService('water', 'Вода')">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💧</div>
                                <h5>Вода</h5>
                            </div>
                            <div class="card" style="cursor: pointer; text-align: center;" 
                                 onclick="selectService('internet', 'Интернет')">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📡</div>
                                <h5>Интернет</h5>
                            </div>
                            <div class="card" style="cursor: pointer; text-align: center;" 
                                 onclick="selectService('phone', 'Мобильная сеть')">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📞</div>
                                <h5>Мобильный</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// TRANSFERS PAGE
function renderTransfers() {
    return `
        <section class="section">
            <div class="container">
                <h1 class="mb-4">Переводы</h1>
                
                <div class="grid grid-2">
                    <!-- Transfer Form -->
                    <div class="card">
                        <h3 class="mb-3">Отправить деньги</h3>
                        <form id="transfer-form">
                            <div class="form-group">
                                <label for="recipient-phone">Номер телефона получателя</label>
                                <input type="tel" id="recipient-phone" placeholder="+7 (___) ___ __ __" required>
                            </div>
                            <div class="form-group">
                                <label for="recipient-name">Имя получателя</label>
                                <input type="text" id="recipient-name" placeholder="Например, Иван" required>
                            </div>
                            <div class="form-group">
                                <label for="transfer-amount">Сумма (₸)</label>
                                <input type="number" id="transfer-amount" placeholder="Сумма" min="100" required>
                                <div class="text-muted mt-1" style="font-size: 0.85rem;">
                                    Комиссия: <span id="commission">0</span> ₸
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="transfer-message">Сообщение (необязательно)</label>
                                <textarea id="transfer-message" placeholder="Добавить сообщение..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Отправить</button>
                        </form>
                    </div>

                    <!-- Recent Recipients -->
                    <div>
                        <h3 class="mb-3">Последние переводы</h3>
                        <div class="grid" style="gap: 1rem;">
                            <div class="card" style="padding: 1.25rem;">
                                <div class="flex-between">
                                    <div>
                                        <h5>Мария К.</h5>
                                        <p class="text-muted" style="font-size: 0.9rem;">+7 (701) 234-56-78</p>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 1.1rem; color: var(--primary-color); font-weight: 600;">5,000 ₸</div>
                                        <p class="text-muted" style="font-size: 0.85rem;">Вчера</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="padding: 1.25rem;">
                                <div class="flex-between">
                                    <div>
                                        <h5>Алексей П.</h5>
                                        <p class="text-muted" style="font-size: 0.9rem;">+7 (702) 345-67-89</p>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 1.1rem; color: var(--primary-color); font-weight: 600;">10,000 ₸</div>
                                        <p class="text-muted" style="font-size: 0.85rem;">2 дня назад</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="padding: 1.25rem;">
                                <div class="flex-between">
                                    <div>
                                        <h5>Екатерина С.</h5>
                                        <p class="text-muted" style="font-size: 0.9rem;">+7 (703) 456-78-90</p>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 1.1rem; color: var(--primary-color); font-weight: 600;">3,500 ₸</div>
                                        <p class="text-muted" style="font-size: 0.85rem;">Неделю назад</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// PROFILE PAGE
function renderProfile() {
    const authForm = !app.currentUser ? `
        <div class="grid grid-2">
            <!-- Login Form -->
            <div class="card">
                <h3 class="mb-3">Вход в аккаунт</h3>
                <form id="login-form">
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Пароль</label>
                        <input type="password" id="login-password" placeholder="Минимум 6 символов" required>
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me" style="margin: 0; font-weight: 400;">Запомнить меня</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Войти</button>
                    <p class="text-center text-muted mt-2" style="font-size: 0.9rem;">
                        Забыли пароль? <a href="#" onclick="alert('Функция восстановления доступна в полной версии')">Восстановить</a>
                    </p>
                </form>
            </div>

            <!-- Registration Form -->
            <div class="card">
                <h3 class="mb-3">Регистрация</h3>
                <form id="register-form">
                    <div class="form-group">
                        <label for="register-name">Полное имя</label>
                        <input type="text" id="register-name" placeholder="Ваше имя" required>
                    </div>
                    <div class="form-group">
                        <label for="register-email">Email</label>
                        <input type="email" id="register-email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="register-phone">Номер телефона</label>
                        <input type="tel" id="register-phone" placeholder="+7 (___) ___ __ __" required>
                    </div>
                    <div class="form-group">
                        <label for="register-password">Пароль</label>
                        <input type="password" id="register-password" placeholder="Минимум 6 символов" required>
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" id="agree-terms" required>
                        <label for="agree-terms" style="margin: 0; font-weight: 400;">
                            Я согласен с условиями использования
                        </label>
                    </div>
                    <button type="submit" class="btn btn-success btn-block">Создать аккаунт</button>
                </form>
            </div>
        </div>
    ` : `
        <section class="section" style="background: white;">
            <div class="container" style="max-width: 600px;">
                <div class="card">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <div style="font-size: 4rem; margin-bottom: 1rem;">👤</div>
                        <h2>${app.currentUser.name}</h2>
                        <p class="text-muted">${app.currentUser.email}</p>
                    </div>

                    <div style="background: var(--light-bg); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                        <h4 class="mb-2">Информация профиля</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <p class="text-muted" style="font-size: 0.85rem;">Телефон</p>
                                <p>${app.currentUser.phone}</p>
                            </div>
                            <div>
                                <p class="text-muted" style="font-size: 0.85rem;">Баланс</p>
                                <p style="font-weight: 600; font-size: 1.2rem;">50,000 ₸</p>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <h4 class="mb-2">Настройки</h4>
                        <div class="grid" style="gap: 0.5rem;">
                            <button class="btn btn-outline" style="width: 100%; text-align: left;">
                                ⚙️ Редактировать профиль
                            </button>
                            <button class="btn btn-outline" style="width: 100%; text-align: left;">
                                🔐 Изменить пароль
                            </button>
                            <button class="btn btn-outline" style="width: 100%; text-align: left;">
                                🔔 Уведомления
                            </button>
                        </div>
                    </div>

                    <button class="btn btn-danger btn-block" onclick="logout()">Выйти</button>
                </div>
            </div>
        </section>
    `;

    return authForm;
}

// ==================== UTILITY FUNCTIONS ====================

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

function addToCart(productId) {
    const product = app.products.find(p => p.id === productId);
    if (product) {
        app.cart.push(product);
        showNotification(`${product.name} добавлен в корзину!`, 'success');
    }
}

function showNotification(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '80px';
    alertDiv.style.right = '20px';
    alertDiv.style.zIndex = '2000';
    alertDiv.style.minWidth = '300px';
    alertDiv.style.maxWidth = '500px';
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// ==================== FORM HANDLERS ====================

function initShopFilters() {
    const priceInput = document.getElementById('price-filter');
    if (priceInput) {
        priceInput.addEventListener('input', function() {
            document.getElementById('price-value').textContent = formatPrice(this.value);
            filterProducts();
        });
    }
}

function filterProducts(category) {
    const cards = document.querySelectorAll('[data-product-id]');
    const maxPrice = parseInt(document.getElementById('price-filter').value);
    
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardPrice = parseInt(card.dataset.price);
        
        const categoryMatch = !category || category === 'all' || cardCategory === category;
        const priceMatch = cardPrice <= maxPrice;
        
        card.style.display = (categoryMatch && priceMatch) ? 'block' : 'none';
    });
    
    // Update active filter button
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
    });
    if (category) {
        document.querySelector(`[data-category="${category}"]`).classList.remove('btn-outline');
        document.querySelector(`[data-category="${category}"]`).classList.add('btn-primary');
    }
}

function initPaymentForm() {
    const form = document.getElementById('payment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const serviceType = document.getElementById('service-type').value;
            const amount = document.getElementById('payment-amount').value;
            showNotification(`Платеж на ${amount} ₸ успешно обработан!`, 'success');
            form.reset();
        });
    }
}

function selectService(service, label) {
    document.getElementById('service-type').value = service;
}

function initTransferForm() {
    const form = document.getElementById('transfer-form');
    const amountInput = document.getElementById('transfer-amount');
    
    if (amountInput) {
        amountInput.addEventListener('input', function() {
            const commission = Math.round(this.value * 0.01); // 1%
            document.getElementById('commission').textContent = formatPrice(commission);
        });
    }
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const recipientName = document.getElementById('recipient-name').value;
            const amount = document.getElementById('transfer-amount').value;
            showNotification(`${amount} ₸ отправлено ${recipientName}е!`, 'success');
            form.reset();
        });
    }
}

function initProfileForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            app.currentUser = {
                name: email.split('@')[0],
                email: email,
                phone: '+7 (700) 000-00-00'
            };
            showNotification('Вы успешно вошли!', 'success');
            loadPage('profile');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            
            app.currentUser = { name, email, phone };
            showNotification('Аккаунт успешно создан!', 'success');
            loadPage('profile');
        });
    }
}

function logout() {
    app.currentUser = null;
    showNotification('Вы вышли из аккаунта', 'info');
    navigateTo('profile');
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Set up nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateTo(page);
        });
    });
    
    // Load home page on startup
    loadPage('home');
});
