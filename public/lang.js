// Language translations
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Anasayfa',
        'nav.resume': 'Özgeçmiş',
        
        // Home page
        'home.whois.title': 'Kimim?',
        'home.whois.content': 'PHP/Laravel ve MySQL ile ilgilenen, biraz da Linux bilen (LPI 201\'den fazla) bir Bilgisayar Mühendisiyim. Uluslararası bir okul şirketinde IT ve Helpdesk becerileri kazandım. İleri teknoloji hizmetleri şirketinde TCP/IP protokolleri ve ağ mimarileri üzerine derinlemesine çalıştım.',
        'home.links.title': 'Online Bağlantılar',
        
        // Resume page
        'resume.skills.title': 'Yetenekler',
        'resume.skills.network': 'Network',
        'resume.skills.network.content': 'Network tasarımı (Firewall, Router, Load Balancer vb.)\nMPLS ve VPN devreleri, IPSec ve Proxy cihazları\nTCP/IP protokol uygulamaları',
        'resume.skills.development': 'Yazılım Geliştirme',
        'resume.skills.development.content': 'Nesne Yönelimli Analiz ve Tasarım\nPHP - Laravel\nMySQL\nJenkins\nSelenium',
        'resume.skills.sysadmin': 'Sistem Yönetimi',
        'resume.skills.sysadmin.content': 'GNU Linux\nVMWARE & ESXi\nProxmox\nBash scripting',
        
        'resume.experience.title': 'İş Deneyimi',
        'resume.experience.job1.title': 'TEKNİK DESTEK VE EĞİTİM UZMANI',
        'resume.experience.job1.company': 'TAYFTECH - TAYF İLERİ TEKNOLOJİ HİZMETLERİ A.Ş.',
        'resume.experience.job1.period': '03/2022 – 03/2024 (2 yıl)',
        'resume.experience.job1.content': 'Ürünün yurt içi ve yurt dışı paydaşlara teknik sunumu\nDemo ve uygulama senaryoları üzerine paydaş eğitimleri\nPaydaşlar için sistem analizi\nÜrünün paydaşların kullandığı diğer teknolojilerle uyumluluğunun değerlendirilmesi\nTest süreçlerinin ve sonuçlarının raporlanması ve takibi\nGeleneksel WAN Hızlandırıcıları, kullanım metodolojileri ile yapılandırma\nÜrün iyileştirme/geliştirme önerileri ve takibi\nÜrünlerin test senaryoları için test durumlarının belirlenmesi\nFarklı ağ topolojileri ve kullanım senaryoları için ürün dağıtımı',
        
        'resume.experience.job2.title': 'BT UZMANI',
        'resume.experience.job2.company': 'HARVEST ULUSLARARASI OKULLARI',
        'resume.experience.job2.period': '11/10/2019 – 30/04/2022 (2 yıl 7 ay)',
        'resume.experience.job2.content': 'Ağ yönetimi (sorun giderme - yapılandırma - bakım)\nDonanım bakımı (Masaüstü - Dizüstü vb.)\nBT satın alma işlemleri (Yazılım çözümleri - Yeni cihazlar, bilgisayarlar vb.)\nHelpdesk (LMS Yazılımları - İşletim Sistemleri - Cihazlar - Windows Server 2012)',
        
        'resume.experience.job3.title': 'YAZILIM TEST MÜHENDİSİ',
        'resume.experience.job3.company': 'MENTORNITY BİLİŞİM A.Ş.',
        'resume.experience.job3.period': '08/2018 – 10/2018 (Staj 3 ay)',
        'resume.experience.job3.content': 'Kullanıcı hikayelerinin tanımlanması\nKullanıcı hikayeleri için kabul kriterleri\nManuel test\nOtomatik testler için test oluşturma\nSelenium, Cucumber ve Katalon Studio ile Web UI/UX testi\nSlack, Confluence ve Trello araçları ile çalışma',
        
        'resume.experience.job4.title': 'İŞ ANALİSTİ',
        'resume.experience.job4.company': 'İSTANBUL BEYLİKDÜZÜ BELEDİYESİ',
        'resume.experience.job4.period': '08/2017 – 09/2017 (Staj 2 ay)',
        'resume.experience.job4.content': 'Sistem/iş analisti olarak çalışma\nPaydaşların ihtiyaçlarının belirlenmesi\nKabul için yazılım testi',
        
        'resume.education.title': 'Eğitim ve Sertifikalar',
        'resume.education.cert1.title': 'CompTIA Network+ (N10-008)',
        'resume.education.cert1.org': 'Dion Training - Jason Dion',
        'resume.education.cert1.desc': 'Full Course & Practice Exam',
        
        'resume.education.cert2.title': 'TCP/IP Expert Mechanics',
        'resume.education.cert2.org': 'CSEPracticals - Abhishek',
        'resume.education.cert2.desc': 'Master Class',
        
        'resume.education.degree.title': 'Bilgisayar Mühendisliği - Lisans',
        'resume.education.degree.school': 'Çanakkale Onsekiz Mart Üniversitesi',
        'resume.education.degree.period': '09/2013 – 02/2019',
        'resume.education.degree.courses': 'Nesne Yönelimli Programlama, Nesne Yönelimli Analiz ve Tasarım, Web Sayfası Tasarımı ve Programlama, Veritabanı Yönetim Sistemleri, Çevik Yazılım Geliştirme, Linux ile Sistem Yönetimi',
        
        'resume.projects.title': 'Projeler',
        'resume.projects.project1.title': 'Trafik İşareti Tanıma (Bitirme Tezi)',
        'resume.projects.project1.period': '2018',
        'resume.projects.project1.tech': 'Teknolojiler: Python, OpenCV, XML, Computer Vision',
        
        'resume.projects.project2.title': 'Restoran Sipariş Yönetim Sistemi',
        'resume.projects.project2.period': '2017',
        'resume.projects.project2.role': 'Rol: Proje Yöneticisi & Geliştirici',
        'resume.projects.project2.tech': 'Teknolojiler: Java, MySQL',
        
        'resume.projects.project3.title': 'Araç Kiralama Yönetim Sistemi',
        'resume.projects.project3.period': '2015',
        'resume.projects.project3.role': 'Rol: Geliştirici',
        'resume.projects.project3.tech': 'Teknolojiler: Java, MySQL, TDD (JUNIT)',
        
        'resume.contact.title': 'İletişim',
        
        // Footer
        'footer.copyright': '© 2024 Hakan Bişgin. Tüm hakları saklıdır.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.resume': 'Resume',
        
        // Home page
        'home.whois.title': 'Who am I?',
        'home.whois.content': 'Interested in PHP/Laravel and MySQL, and a little bit of Linux (More than LPI 201). Graduated from Computer Engineering with software development skills, had IT and Helpdesk skills at an international schools corporation. Deep dive into TCP/IP stack protocols and network architectures at an ADVANCED TECHNOLOGY SERVICES INC.',
        'home.links.title': 'Online Links',
        
        // Resume page
        'resume.skills.title': 'Skills',
        'resume.skills.network': 'Network',
        'resume.skills.network.content': 'Network design (Firewall, Router, Load Balancer etc.)\nMPLS and VPN circuits, IPSec and Proxy devices\nTCP/IP protocols applications',
        'resume.skills.development': 'Development',
        'resume.skills.development.content': 'Object Oriented Analysis And Design\nPHP - Laravel\nMySQL\nJenkins\nSelenium',
        'resume.skills.sysadmin': 'System Administration',
        'resume.skills.sysadmin.content': 'GNU Linux\nVMWARE & ESXi\nProxmox\nBash scripting',
        
        'resume.experience.title': 'Work Experience',
        'resume.experience.job1.title': 'TECHNICAL SUPPORT AND TRAINING SPECIALIST',
        'resume.experience.job1.company': 'TAYFTECH - TAYF ADVANCED TECHNOLOGY SERVICES INC.',
        'resume.experience.job1.period': '03/2022 – 03/2024 (2 years)',
        'resume.experience.job1.content': 'Technical presentation of the product to domestic and foreign stakeholders (End user / resellers / technical supports)\nStakeholder training on demos and application scenarios\nSystem analysis for stakeholders\nEvaluation of the product\'s compatibility with other technologies used by its stakeholders\nReporting and monitoring of test processes and results\nConventional WAN Accelerators, configuring with usage methodologies\nProduct improvement/development recommendations and tracking\nDetermination of test cases for test scenarios of products\nDeployment products for different network topologies and usage scenarios',
        
        'resume.experience.job2.title': 'IT SPECIALIST',
        'resume.experience.job2.company': 'HARVEST INTERNATIONAL SCHOOLS',
        'resume.experience.job2.period': '11/10/2019 – 30/04/2022 (2 years 7 months)',
        'resume.experience.job2.content': 'Networking (troubleshooting - Configuring - Maintaining)\nHardware maintenance (Desktops - Laptops etc.)\nIT Buying operations (Software solutions - New Appliances, Computers etc.)\nHelpdesk (LMS Softwares - OS - Devices - Windows Server 2012)',
        
        'resume.experience.job3.title': 'SOFTWARE TESTING ENGINEER',
        'resume.experience.job3.company': 'MENTORNITY INFORMATION TECHNOLOGIES INC.',
        'resume.experience.job3.period': '08/2018 – 10/2018 (Internship 3 months)',
        'resume.experience.job3.content': 'Defining user stories\nAcceptance criteria for user stories\nManual testing\nCreating tests for automated tests\nWeb UI/UX test with Selenium, Cucumber and Katalon Studio\nWorked with Slack, Confluence and Trello tools',
        
        'resume.experience.job4.title': 'BUSINESS ANALYST',
        'resume.experience.job4.company': 'ISTANBUL BEYLIKDUZU MUNICIPALITY',
        'resume.experience.job4.period': '08/2017 – 09/2017 (Internship 2 months)',
        'resume.experience.job4.content': 'Worked as a system/business analyst\nIdentifying needs of stakeholders\nTesting software for acceptance',
        
        'resume.education.title': 'Education and Training',
        'resume.education.cert1.title': 'CompTIA Network+ (N10-008)',
        'resume.education.cert1.org': 'Dion Training - Jason Dion',
        'resume.education.cert1.desc': 'Full Course & Practice Exam',
        
        'resume.education.cert2.title': 'TCP/IP Expert Mechanics',
        'resume.education.cert2.org': 'CSEPracticals - Abhishek',
        'resume.education.cert2.desc': 'Master Class',
        
        'resume.education.degree.title': 'Computer Engineering - Bachelor\'s degree',
        'resume.education.degree.school': 'Canakkale Onsekiz Mart University',
        'resume.education.degree.period': '09/2013 – 02/2019',
        'resume.education.degree.courses': 'Object Oriented Programming, Object Oriented Analysis And Design, Web Page Design and Programming, Database Management Systems, Agile Software Development, System Administration With Linux',
        
        'resume.projects.title': 'Projects',
        'resume.projects.project1.title': 'Traffic Sign Recognition (Thesis)',
        'resume.projects.project1.period': '2018',
        'resume.projects.project1.tech': 'Technologies: Python, OpenCV, XML, Computer Vision',
        
        'resume.projects.project2.title': 'Restaurant Order Management System',
        'resume.projects.project2.period': '2017',
        'resume.projects.project2.role': 'Role: Project Manager & Developer',
        'resume.projects.project2.tech': 'Technologies: Java, MySQL',
        
        'resume.projects.project3.title': 'Car Rental Management System',
        'resume.projects.project3.period': '2015',
        'resume.projects.project3.role': 'Role: Developer',
        'resume.projects.project3.tech': 'Technologies: Java, MySQL, TDD (JUNIT)',
        
        'resume.contact.title': 'Contact',
        
        // Footer
        'footer.copyright': '© 2024 Hakan Bişgin. All rights reserved.'
    }
};

// Get current language from localStorage or default to Turkish
let currentLang = localStorage.getItem('language') || 'tr';

// Function to translate text
function translate(key) {
    return translations[currentLang][key] || key;
}

// Function to update all translatable elements
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        // Handle multiline content (preserve line breaks)
        if (translation.includes('\n')) {
            element.innerHTML = translation.split('\n').join('<br>');
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
        langToggle.setAttribute('title', currentLang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç');
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('language', currentLang);
    updatePageLanguage();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    
    // Add click event to language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});
