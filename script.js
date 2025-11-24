// --- script.js ---

// DOM Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Yıl Ayarı
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Kayıtlı Tema ve Dil Kontrolü
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang = localStorage.getItem('lang') || 'tr';
    
    applyTheme(savedTheme);
    applyLang(savedLang);
});

// --- TEMA YÖNETİMİ ---
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    const newTheme = isLight ? 'light' : 'dark';
    
    // İkonu değiştir
    themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    
    // Kaydet
    localStorage.setItem('theme', newTheme);
});

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.className = 'fas fa-moon';
    }
}

// --- DİL YÖNETİMİ ---
const langBtn = document.getElementById('lang-btn');
let currentLang = 'tr';

const translations = {
    tr: {
        home: "Ana Sayfa",
        about: "Hakkında",
        contact: "İletişim",
        name_placeholder: "Adınız Soyadınız",
        email_placeholder: "E-posta Adresiniz",
        msg_placeholder: "Mesajınızı buraya yazın...",
        send_btn: "Gönder",
        projects: "Projelerim",
        blog: "Blogum"
        // Buraya sayfadaki diğer metinler eklenebilir
    },
    en: {
        home: "Home",
        about: "About",
        contact: "Contact",
        name_placeholder: "Your Name",
        email_placeholder: "Your Email",
        msg_placeholder: "Type your message here...",
        send_btn: "Send Message",
        projects: "My Projects",
        blog: "My Blog"
    }
};

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    applyLang(currentLang);
    localStorage.setItem('lang', currentLang);
});

function applyLang(lang) {
    currentLang = lang;
    langBtn.textContent = lang === 'tr' ? 'TR' : 'EN';
    
    // Metinleri Güncelle (data-lang özniteliği olanları)
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Placeholderları Güncelle (Inputlar için)
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('message');

    if(nameInput) nameInput.placeholder = translations[lang].name_placeholder;
    if(emailInput) emailInput.placeholder = translations[lang].email_placeholder;
    if(msgInput) msgInput.placeholder = translations[lang].msg_placeholder;
}

// --- MOBİL MENÜ ---
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('
active');
}
