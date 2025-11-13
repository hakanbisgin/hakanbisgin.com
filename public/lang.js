// Language translations
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Anasayfa',
        'nav.resume': 'Özgeçmiş',
        'nav.projects': 'Projeler',
        
        // Home page
        'home.whois.title': 'Kimim?',
        'home.whois.content': 'Kurumsal BT altyapısı, sistem yönetimi ve yazılım geliştirme alanında 5+ yıl deneyime sahip Sistem ve Network Mühendisiyim. Linux, VMware, Fortinet ve full-stack web teknolojilerinde uzmanım. Güvenli, ölçeklenebilir ve yüksek performanslı çözümler sunmak için sistem operasyonları ve yazılım geliştirmeyi birleştirme konusunda yetenekliyim.',
        'home.links.title': 'Online Bağlantılar',
        'home.projects.content': 'GitHub\'daki açık kaynak projelerimi ve katkılarımı keşfedin. Laravel, PHP, JavaScript ve daha fazlası...',
        'home.projects.viewall': 'Tüm Projeleri Görüntüle →',
        'home.skills.title': 'Teknik Yetenekler',
        'home.skills.system': 'Sistem & Altyapı',
        'home.skills.network': 'Network & Güvenlik',
        'home.skills.programming': 'Programlama',
        'home.skills.database': 'Veritabanları',
        'home.skills.devops': 'DevOps & Tools',
        'home.skills.ai': 'AI & Computer Vision',
        'home.skills.viewdetails': 'Detaylı Bilgi →',
        
        // Resume page
        'resume.skills.title': 'Yetenekler',
        'resume.skills.system': 'Sistem & Altyapı',
        'resume.skills.system.content': 'Linux (Ubuntu, Debian), Bash, Windows Server (AD)\nVMware ESXi 8.0, Proxmox 7.4\nSistem Yönetimi ve Otomasyon',
        'resume.skills.network': 'Network & Güvenlik',
        'resume.skills.network.content': 'Fortinet Firewall, VPN (IPSec), Proxy\nMPLS, TCP/IP, Network Design\nNetwork Monitoring & Troubleshooting',
        'resume.skills.development': 'Programlama & Framework\'ler',
        'resume.skills.development.content': 'Python 3.12 (OpenCV, CUDA, Deep Learning)\nJavaScript (Node.js, React.js), HTML5, CSS3\nPHP (Laravel), Nesne Yönelimli Programlama',
        'resume.skills.database': 'Veritabanları',
        'resume.skills.database.content': 'MySQL, PostgreSQL, SQLite\nVeritabanı Tasarımı ve Optimizasyon',
        'resume.skills.tools': 'Araçlar & DevOps',
        'resume.skills.tools.content': 'Git, GitLab, Jenkins, Docker\nSelenium, Jira, ServiceNow\nCI/CD, Test Otomasyonu',
        'resume.skills.documentation': 'Dokümantasyon & Office',
        'resume.skills.documentation.content': 'Microsoft Office (Word, Excel, PowerPoint)\nTeknik Raporlama & Dokümantasyon\nProje Yönetimi Dokümantasyonu',
        
        'resume.experience.title': 'İş Deneyimi',
        'resume.experience.job0.title': 'SİSTEM MÜHENDİSİ',
        'resume.experience.job0.company': 'CNBC-e (ILBAK TV)',
        'resume.experience.job0.period': '10/2024 – Günümüz',
        'resume.experience.job0.content': 'Active Directory (AD) operasyonları için destek sağlama\nFortinet Firewall için kural oluşturma ve sorun giderme\nHelpdesk hizmetleri kapsamında kullanıcı desteği sağlama\nVMware vSphere (ESXi 8.0) ortamlarında sanal makinelerin kurulumu, yönetimi ve sorun çözümü\nPython ve MySQL kullanarak uygulama geliştirme ve veritabanı yönetimi\nNode.js ve React.js teknolojileri ile modern web uygulamaları geliştirme ve dağıtma\nPython ve PowerShell scriptleri kullanarak yönetimsel görevleri otomatikleştirme\nYayın ve Haber Uygulamaları: VizRT cg sistemi, SmartPlay Playout Sistemi, CueScript, Isoft MAM, Octopus, Skype TX',
        
        'resume.experience.job1.title': 'TEKNİK DESTEK VE EĞİTİM UZMANI',
        'resume.experience.job1.company': 'TAYFTECH - TAYF İLERİ TEKNOLOJİ HİZMETLERİ A.Ş.',
        'resume.experience.job1.period': '03/2022 – 03/2024 (2 yıl)',
        'resume.experience.job1.content': 'Ürünün yurt içi ve yurt dışı paydaşlara (Son kullanıcılar/bayiler/teknik destek) teknik sunumu\nDemo ve uygulama senaryoları üzerine paydaş eğitimleri\nPaydaşlar için sistem analizi\nÜrünün paydaşların kullandığı diğer teknolojilerle uyumluluğunun değerlendirilmesi\nTest süreçlerinin ve sonuçlarının raporlanması ve takibi\nGeleneksel WAN Hızlandırıcıları kullanım metodolojileri ve yapılandırma\nÜrün iyileştirme/geliştirme önerileri ve takibi\nÜrünlerin test senaryoları için test durumlarının belirlenmesi\nTest senaryolarına uygun test scriptlerinin hazırlanması\nÜrün uygunluk testleri, piyasadaki ürünlerle uyumluluk testleri ve hedef pazar için doğrulama testleri gibi ürün ailesindeki ürünlerin testlerinin gerçekleştirilmesi\nÜrünlerin ağ topolojileri ve kullanım senaryolarında dağıtımı',
        
        'resume.experience.job2.title': 'BT UZMANI',
        'resume.experience.job2.company': 'HARVEST ULUSLARARASI OKULLARI',
        'resume.experience.job2.period': '10/2019 – 04/2022 (2 yıl 7 ay)',
        'resume.experience.job2.content': 'Ağ yönetimi (sorun giderme, yapılandırma, bakım)\nDonanım bakımı (Masaüstü - Dizüstü vb.)\nBT satın alma işlemleri (Yazılım çözümleri - Yeni cihazlar, bilgisayarlar vb.)\nHelpdesk (LMS Yazılımları - İşletim Sistemleri - Cihazlar - Windows Server 2012)',
        
        'resume.experience.job3.title': 'YAZILIM TEST MÜHENDİSİ',
        'resume.experience.job3.company': 'MENTORNITY BİLİŞİM A.Ş.',
        'resume.experience.job3.period': '08/2018 – 10/2018 (Staj 3 ay)',
        'resume.experience.job3.content': 'Kullanıcı hikayelerinin tanımlanması\nKullanıcı hikayeleri için kabul kriterleri\nManuel test\nOtomatik testler için test oluşturma\nSelenium, Cucumber ve Katalon Studio ile Web UI/UX testi\nSlack, Confluence ve Trello kullanarak işbirliği',
        
        'resume.experience.job4.title': 'İŞ ANALİSTİ',
        'resume.experience.job4.company': 'İSTANBUL BEYLİKDÜZÜ BELEDİYESİ',
        'resume.experience.job4.period': '08/2017 – 09/2017 (Staj 2 ay)',
        'resume.experience.job4.content': 'Teknik çözümleri paydaş gereksinimleriyle uyumlu hale getirmek için sistem ve iş analizinde yardımcı olma\nPaydaşların ihtiyaçlarının belirlenmesi\nKabul için yazılım testi',
        
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
        
        'resume.projects.project4.title': 'Kişisel Portfolio Web Sitesi',
        'resume.projects.project4.period': '2024',
        'resume.projects.project4.tech': 'Teknolojiler: HTML5, CSS3, JavaScript, Responsive Design',
        'resume.projects.project4.desc': 'Çoklu dil desteği ve modern tasarım ile responsive portfolio sitesi',
        
        'resume.projects.project5.title': 'Canlı Yayın İzleme Paneli',
        'resume.projects.project5.period': '2024',
        'resume.projects.project5.tech': 'Teknolojiler: JavaScript, WebSocket, Real-time Monitoring',
        'resume.projects.project5.desc': 'Gerçek zamanlı yayın izleme ve uyarı sistemi',
        
        'resume.projects.project6.title': 'Logo Tespit Sistemi',
        'resume.projects.project6.period': '2024',
        'resume.projects.project6.tech': 'Teknolojiler: Python, OpenCV, Deep Learning, CUDA',
        'resume.projects.project6.desc': 'Yayın izleme için gerçek zamanlı logo tespit ve tanıma sistemi',
        
        'resume.projects.project7.title': 'Otomatik Trading Botu',
        'resume.projects.project7.period': '2024',
        'resume.projects.project7.tech': 'Teknolojiler: Python, Trading Algorithms, API Integration',
        'resume.projects.project7.desc': 'Çoklu strateji ve risk yönetimi içeren kripto para trading botu',
        
        'resume.projects.project8.title': 'Video Analiz ve Timecode Aracı',
        'resume.projects.project8.period': '2024',
        'resume.projects.project8.tech': 'Teknolojiler: Python, FFmpeg, Video Processing',
        'resume.projects.project8.desc': 'Yayın operasyonları için kapsamlı video analiz aracı',
        
        'resume.projects.project9.title': 'CNBC-e Log İşleme Sistemi',
        'resume.projects.project9.period': '2024',
        'resume.projects.project9.tech': 'Teknolojiler: Python, Data Processing, Automation',
        'resume.projects.project9.desc': 'Yayın operasyonları için otomatik log işleme ve analiz sistemi',
        
        'resume.contact.title': 'İletişim',
        'resume.print.button': 'CV Yazdır',
        'resume.print.tooltip': 'Yazdır veya PDF olarak kaydet',
        
        // Projects page
        'projects.title': 'GitHub Projelerim',
        'projects.subtitle': 'Projelerim ve katkılarım',
        'projects.loading': 'Projeler yükleniyor...',
        'projects.error.title': 'Projeler yüklenemedi',
        'projects.error.message': 'GitHub API\'sine bağlanırken bir hata oluştu.',
        'projects.error.retry': 'Tekrar Dene',
        'projects.stats.repos': 'Toplam Repo',
        'projects.stats.stars': 'Toplam Yıldız',
        'projects.stats.forks': 'Toplam Fork',
        'projects.stats.languages': 'Dil Çeşidi',
        'projects.filter.all': 'Tümü',
        'projects.filter.featured': 'Öne Çıkanlar',
        'projects.filter.web': 'Web',
        'projects.filter.backend': 'Backend',
        'projects.filter.tools': 'Araçlar',
        'projects.viewDemo': 'Demo Görüntüle',
        'projects.viewCode': 'Kodu Görüntüle',
        'projects.features': 'Özellikler:',
        'projects.technologies': 'Teknolojiler:',
        'projects.noResults': 'Proje bulunamadı',
        
        // Static Projects
        'projects.traffic.title': 'Trafik İşareti Tanıma (Bitirme Projesi)',
        'projects.traffic.desc': 'OpenCV kullanarak trafik işaretlerini tespit eden ve tanıyan bir bilgisayarlı görü sistemi geliştirdim. Modeli eğitmek için XML formatında veri seti açıklamalarını yönettim.',
        'projects.restaurant.title': 'Restoran Sipariş Yönetim Sistemi',
        'projects.restaurant.desc': 'Restoran yönetimi için kapsamlı bir POS (Satış Noktası) sistemi tasarladım ve geliştirdim. Hem proje yöneticisi hem de baş geliştirici olarak ekip çalışmalarını koordine ettim ve temel özellikleri uyguladım.',
        'projects.rental.title': 'Araç Kiralama Yönetim Sistemi',
        'projects.rental.desc': 'Test Odaklı Geliştirme (TDD) yaklaşımını takip ederek kapsamlı bir kiralama yönetim uygulaması oluşturdum. Kod kalitesini ve güvenilirliğini sağlamak için JUnit kullanarak birim testleri uyguladım.',
        'projects.portfolio.title': 'Kişisel Portfolio Web Sitesi',
        'projects.portfolio.desc': 'Saf HTML, CSS ve JavaScript ile oluşturulmuş modern, responsive kişisel portfolio web sitesi. Çoklu dil desteği (Türkçe/İngilizce), dinamik içerik ve tüm cihazlar için optimize edilmiş koyu tema tasarımı içerir.',
        'projects.network.title': 'Ağ ve Sistem Yönetimi',
        'projects.network.desc': 'Ağ tasarımı, yapılandırma ve sorun giderme konusunda kapsamlı deneyim. Güvenlik duvarları, yönlendiriciler, yük dengeleyiciler ve VPN çözümleri dahil kurumsal düzeyde altyapı ile çalıştım. Linux sistem yönetimi ve otomasyonda yetkin.',
        'projects.web.title': 'Web Geliştirme Projeleri',
        'projects.web.desc': 'Modern framework\'ler ve teknolojiler kullanarak çeşitli web uygulamaları geliştirdim. MySQL veritabanları ile PHP/Laravel backend geliştirmede uzmanlaştım. Performans ve güvenliğe odaklanarak responsive, kullanıcı dostu arayüzler oluşturdum.',
        'projects.viewLive': 'Canlı Görüntüle',
        'projects.viewCode': 'Kodu Görüntüle',
        'projects.skills.title': 'Teknik Yetenekler',
        'projects.skills.languages': 'Programlama Dilleri',
        'projects.skills.frameworks': 'Framework\'ler ve Araçlar',
        'projects.skills.databases': 'Veritabanları',
        'projects.skills.systems': 'Sistemler ve DevOps',
        'projects.tab.all': 'Tümü',
        'projects.tab.featured': 'Öne Çıkanlar',
        'projects.tab.web': 'Web & Dashboard',
        'projects.tab.automation': 'Otomasyon & Bot',
        'projects.tab.ai': 'AI & Computer Vision',
        'projects.tab.tools': 'Araçlar',
        'projects.livefeeds.title': 'Canlı Yayın İzleme Paneli',
        'projects.livefeeds.desc': 'Birden fazla canlı yayını eşzamanlı izlemek için gerçek zamanlı yayın izleme paneli. Akış sağlığı izleme, uyarı sistemi ve kapsamlı kayıt özellikleri içerir.',
        'projects.tradingbot.title': 'Otomatik Trading Botu',
        'projects.tradingbot.desc': 'Çoklu strateji, risk yönetimi ve gerçek zamanlı piyasa analizi içeren gelişmiş kripto para trading botu. Optimize edilmiş trading kararları için frekans tabanlı havuz yatırım algoritmaları uygular.',
        'projects.cnbclog.title': 'CNBC-e Log İşleme Sistemi',
        'projects.cnbclog.desc': 'Yayın operasyonları için otomatik log işleme ve analiz sistemi. Büyük hacimli log verilerini işler, raporlar oluşturur ve operasyonel verimlilik için içgörüler sağlar.',
        'projects.template.title': 'Video Üzerinde Template Matching (CUDA)',
        'projects.template.desc': 'GPU hızlandırma için CUDA kullanan yüksek performanslı video template matching sistemi. Optimize edilmiş performansla video akışlarında gerçek zamanlı desen tespiti yapabilir.',
        'projects.logodetect.title': 'Hızlı Logo Tespit Sistemi',
        'projects.logodetect.desc': 'Yayın izleme için gerçek zamanlı logo tespit ve tanıma sistemi. Bilgisayarlı görü teknikleri kullanarak video akışlarında logoları yüksek doğruluk ve minimum gecikme ile tespit eder ve takip eder.',
        'projects.videoanalyzer.title': 'Video Analiz ve Timecode Aracı',
        'projects.videoanalyzer.desc': 'Yayın operasyonları için kapsamlı video analiz aracı. Timecode çıkarma, kare analizi, kalite değerlendirmesi ve otomatik raporlama özellikleri içerir.',
        'projects.quickpanel.title': 'Quick Panel - Kısayol ve Doküman Yöneticisi',
        'projects.quickpanel.desc': 'Kısayolları, dokümanları ve sık kullanılan kaynakları yönetmek için üretkenlik aracı. Özelleştirilebilir arayüz ile dosyalara, uygulamalara ve web kaynaklarına hızlı erişim sağlar.',
        'projects.cnbcdash.title': 'CNBC-e AsRun Paneli',
        'projects.cnbcdash.desc': 'AsRun logları için gerçek zamanlı yayın izleme paneli. Sezgisel arayüz ile yayın operasyonları için canlı güncellemeler, analitik ve raporlama sağlar.',
        'projects.systemhelper.title': 'Sistem Yardımcısı ve Otomasyon Paketi',
        'projects.systemhelper.desc': 'Sistem yönetimi ve otomasyon araçları koleksiyonu. Dosya yönetimi, sistem izleme, yedekleme otomasyonu ve günlük operasyonlar için çeşitli yardımcı scriptler içerir.',
        'projects.iptracker.title': 'IP Takip ve Ağ İzleyici',
        'projects.iptracker.desc': 'IP adreslerini takip etmek, ağ trafiğini analiz etmek ve bağlantı durumunu izlemek için ağ izleme aracı. Ağ aktiviteleri hakkında detaylı bilgi sağlar.',
        
        // Footer
        'footer.copyright': '© 2024 Hakan Bişgin. Tüm hakları saklıdır.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.resume': 'Resume',
        'nav.projects': 'Projects',
        
        // Home page
        'home.whois.title': 'Who am I?',
        'home.whois.content': 'System and Network Engineer with 5+ years of experience in enterprise IT infrastructure, system administration, and software development. Proficient in Linux, VMware, Fortinet, and full-stack web technologies. Adept at bridging system operations and software development to deliver secure, scalable, and high-performing solutions.',
        'home.links.title': 'Online Links',
        'home.projects.content': 'Explore my open source projects and contributions on GitHub. Laravel, PHP, JavaScript and more...',
        'home.projects.viewall': 'View All Projects →',
        'home.skills.title': 'Technical Skills',
        'home.skills.system': 'System & Infrastructure',
        'home.skills.network': 'Network & Security',
        'home.skills.programming': 'Programming',
        'home.skills.database': 'Databases',
        'home.skills.devops': 'DevOps & Tools',
        'home.skills.ai': 'AI & Computer Vision',
        'home.skills.viewdetails': 'View Details →',
        
        // Resume page
        'resume.skills.title': 'Skills',
        'resume.skills.system': 'System & Infrastructure',
        'resume.skills.system.content': 'Linux (Ubuntu, Debian), Bash, Windows Server (AD)\nVMware ESXi 8.0, Proxmox 7.4\nSystem Administration and Automation',
        'resume.skills.network': 'Network & Security',
        'resume.skills.network.content': 'Fortinet Firewall, VPN (IPSec), Proxy\nMPLS, TCP/IP, Network Design\nNetwork Monitoring & Troubleshooting',
        'resume.skills.development': 'Programming & Frameworks',
        'resume.skills.development.content': 'Python 3.12 (OpenCV, CUDA, Deep Learning)\nJavaScript (Node.js, React.js), HTML5, CSS3\nPHP (Laravel), Object Oriented Programming',
        'resume.skills.database': 'Databases',
        'resume.skills.database.content': 'MySQL, PostgreSQL, SQLite\nDatabase Design and Optimization',
        'resume.skills.tools': 'Tools & DevOps',
        'resume.skills.tools.content': 'Git, GitLab, Jenkins, Docker\nSelenium, Jira, ServiceNow\nCI/CD, Test Automation',
        'resume.skills.documentation': 'Documentation & Office',
        'resume.skills.documentation.content': 'Microsoft Office (Word, Excel, PowerPoint)\nTechnical Reporting & Documentation\nProject Management Documentation',
        
        'resume.experience.title': 'Work Experience',
        'resume.experience.job0.title': 'SYSTEM ENGINEER',
        'resume.experience.job0.company': 'CNBC-e (ILBAK TV)',
        'resume.experience.job0.period': 'Oct 2024 - Present',
        'resume.experience.job0.content': 'Provided support for Active Directory (AD) operations\nCreated and troubleshooted rules for Fortinet Firewall\nProvided user support as part of helpdesk services\nInstalled, managed, and resolved issues related to virtual machines in VMware vSphere (ESXi 8.0) environments\nDeveloped applications and managed databases using Python and MySQL\nDeveloped and deployed modern web applications with Node.js and React.js technologies\nAutomated administrative tasks using Python and PowerShell scripts\nBroadcasting and News Applications: VizRT cg system, SmartPlay Playout System, CueScript, Isoft MAM, Octopus, Skype TX',
        
        'resume.experience.job1.title': 'TECHNICAL SUPPORT AND TRAINING SPECIALIST',
        'resume.experience.job1.company': 'TAYFTECH - TAYF ADVANCED TECHNOLOGY SERVICES INC.',
        'resume.experience.job1.period': 'Mar 2022 - Mar 2024 (2 years)',
        'resume.experience.job1.content': 'Technical presentation of the product to domestic and foreign stakeholders (End users/resellers/technical support)\nStakeholder training on demos and application scenarios\nSystem analysis for stakeholders\nEvaluation of the product\'s compatibility with other technologies used by its stakeholders\nReporting and monitoring of test processes and results\nConventional WAN Accelerators usage methodologies and configuration\nProduct improvement/development recommendations and tracking\nDetermination of test cases for the test scenarios of products\nPreparation of test scripts suitable for test scenarios\nPerforming tests of products in the product family, such as product conformity tests, compatibility tests with products on the market, and validation tests for the target market\nDeployed products in network topologies and usage scenarios',
        
        'resume.experience.job2.title': 'IT SPECIALIST',
        'resume.experience.job2.company': 'HARVEST INTERNATIONAL SCHOOLS',
        'resume.experience.job2.period': 'Oct 2019 - Apr 2022 (2 years 7 months)',
        'resume.experience.job2.content': 'Networking (troubleshooting, configuring, maintaining)\nHardware maintenance (Desktops - Laptops, etc.)\nIT Buying operations (Software solutions - New Appliances, Computers, etc.)\nHelpdesk (LMS Software - OS - Devices - Windows Server 2012)',
        
        'resume.experience.job3.title': 'SOFTWARE TESTING ENGINEER',
        'resume.experience.job3.company': 'MENTORNITY BILIŞIM A.Ş.',
        'resume.experience.job3.period': 'Aug 2018 - Oct 2018 (Internship 3 months)',
        'resume.experience.job3.content': 'Defining user stories\nAcceptance criteria for user stories\nManual testing\nCreating tests for automated tests\nWeb UI/UX test with Selenium, Cucumber, and Katalon Studio\nCollaborated using Slack, Confluence, and Trello',
        
        'resume.experience.job4.title': 'BUSINESS ANALYST',
        'resume.experience.job4.company': 'ISTANBUL BEYLIKDUZU MUNICIPALITY',
        'resume.experience.job4.period': 'Aug 2017 - Sep 2017 (Internship 2 months)',
        'resume.experience.job4.content': 'Assisted in system and business analysis to align technical solutions with stakeholder requirements\nIdentifying the needs of stakeholders\nTesting software for acceptance',
        
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
        
        'resume.projects.project4.title': 'Personal Portfolio Website',
        'resume.projects.project4.period': '2024',
        'resume.projects.project4.tech': 'Technologies: HTML5, CSS3, JavaScript, Responsive Design',
        'resume.projects.project4.desc': 'Responsive portfolio website with multi-language support and modern design',
        
        'resume.projects.project5.title': 'Live Feeds Monitoring Dashboard',
        'resume.projects.project5.period': '2024',
        'resume.projects.project5.tech': 'Technologies: JavaScript, WebSocket, Real-time Monitoring',
        'resume.projects.project5.desc': 'Real-time broadcast monitoring and alert system',
        
        'resume.projects.project6.title': 'Logo Detection System',
        'resume.projects.project6.period': '2024',
        'resume.projects.project6.tech': 'Technologies: Python, OpenCV, Deep Learning, CUDA',
        'resume.projects.project6.desc': 'Real-time logo detection and recognition system for broadcast monitoring',
        
        'resume.projects.project7.title': 'Automated Trading Bot',
        'resume.projects.project7.period': '2024',
        'resume.projects.project7.tech': 'Technologies: Python, Trading Algorithms, API Integration',
        'resume.projects.project7.desc': 'Cryptocurrency trading bot with multiple strategies and risk management',
        
        'resume.projects.project8.title': 'Video Analyzer & Timecode Tool',
        'resume.projects.project8.period': '2024',
        'resume.projects.project8.tech': 'Technologies: Python, FFmpeg, Video Processing',
        'resume.projects.project8.desc': 'Comprehensive video analysis tool for broadcast operations',
        
        'resume.projects.project9.title': 'CNBC-e Log Processing System',
        'resume.projects.project9.period': '2024',
        'resume.projects.project9.tech': 'Technologies: Python, Data Processing, Automation',
        'resume.projects.project9.desc': 'Automated log processing and analysis system for broadcast operations',
        
        'resume.contact.title': 'Contact',
        'resume.print.button': 'Print CV',
        'resume.print.tooltip': 'Print or save as PDF',
        
        // Projects page
        'projects.title': 'My GitHub Projects',
        'projects.subtitle': 'Projects and contributions',
        'projects.loading': 'Loading projects...',
        'projects.error.title': 'Failed to load projects',
        'projects.error.message': 'An error occurred while connecting to GitHub API.',
        'projects.error.retry': 'Try Again',
        'projects.stats.repos': 'Total Repos',
        'projects.stats.stars': 'Total Stars',
        'projects.stats.forks': 'Total Forks',
        'projects.stats.languages': 'Languages',
        'projects.filter.all': 'All',
        'projects.filter.featured': 'Featured',
        'projects.filter.web': 'Web',
        'projects.filter.backend': 'Backend',
        'projects.filter.tools': 'Tools',
        'projects.viewDemo': 'View Demo',
        'projects.viewCode': 'View Code',
        'projects.features': 'Features:',
        'projects.technologies': 'Technologies:',
        'projects.noResults': 'No projects found',
        
        // Static Projects
        'projects.traffic.title': 'Traffic Sign Recognition (Thesis Project)',
        'projects.traffic.desc': 'Developed a computer vision system to detect and recognize traffic signs using OpenCV. Managed dataset annotations using XML format for training the model.',
        'projects.restaurant.title': 'Restaurant Order Management System',
        'projects.restaurant.desc': 'Designed and developed a comprehensive POS (Point of Sale) system for restaurant management. Acted as both project manager and lead developer, coordinating team efforts and implementing core features.',
        'projects.rental.title': 'Car Rental Management System',
        'projects.rental.desc': 'Built a comprehensive rental management application following Test-Driven Development (TDD) approach. Implemented unit tests using JUnit to ensure code quality and reliability.',
        'projects.portfolio.title': 'Personal Portfolio Website',
        'projects.portfolio.desc': 'Modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. Features multi-language support (Turkish/English), dynamic content, and dark theme design optimized for all devices.',
        'projects.network.title': 'Network & System Administration',
        'projects.network.desc': 'Extensive experience in network design, configuration, and troubleshooting. Worked with enterprise-level infrastructure including firewalls, routers, load balancers, and VPN solutions. Proficient in Linux system administration and automation.',
        'projects.web.title': 'Web Development Projects',
        'projects.web.desc': 'Developed various web applications using modern frameworks and technologies. Specialized in PHP/Laravel backend development with MySQL databases. Created responsive, user-friendly interfaces with focus on performance and security.',
        'projects.viewLive': 'View Live',
        'projects.viewCode': 'View Code',
        'projects.skills.title': 'Technical Skills',
        'projects.skills.languages': 'Languages',
        'projects.skills.frameworks': 'Frameworks & Tools',
        'projects.skills.databases': 'Databases',
        'projects.skills.systems': 'Systems & DevOps',
        'projects.tab.all': 'All',
        'projects.tab.featured': 'Featured',
        'projects.tab.web': 'Web & Dashboard',
        'projects.tab.automation': 'Automation & Bot',
        'projects.tab.ai': 'AI & Computer Vision',
        'projects.tab.tools': 'Tools',
        'projects.livefeeds.title': 'Live Feeds Monitoring Dashboard',
        'projects.livefeeds.desc': 'Real-time broadcast monitoring dashboard for tracking multiple live feeds simultaneously. Features include stream health monitoring, alert system, and comprehensive logging capabilities.',
        'projects.tradingbot.title': 'Automated Trading Bot',
        'projects.tradingbot.desc': 'Sophisticated cryptocurrency trading bot with multiple strategies, risk management, and real-time market analysis. Implements frequency-based pool investment algorithms for optimized trading decisions.',
        'projects.cnbclog.title': 'CNBC-e Log Processing System',
        'projects.cnbclog.desc': 'Automated log processing and analysis system for broadcast operations. Processes large volumes of log data, generates reports, and provides insights for operational efficiency.',
        'projects.template.title': 'Template Matching on Video (CUDA)',
        'projects.template.desc': 'High-performance video template matching system utilizing CUDA for GPU acceleration. Capable of real-time pattern detection in video streams with optimized performance.',
        'projects.logodetect.title': 'Fast Logo Detection System',
        'projects.logodetect.desc': 'Real-time logo detection and recognition system for broadcast monitoring. Detects and tracks logos in video streams with high accuracy and minimal latency using computer vision techniques.',
        'projects.videoanalyzer.title': 'Video Analyzer & Timecode Tool',
        'projects.videoanalyzer.desc': 'Comprehensive video analysis tool for broadcast operations. Features include timecode extraction, frame analysis, quality assessment, and automated reporting capabilities.',
        'projects.quickpanel.title': 'Quick Panel - Shortcut & Document Manager',
        'projects.quickpanel.desc': 'Productivity tool for managing shortcuts, documents, and frequently used resources. Provides quick access to files, applications, and web resources with customizable interface.',
        'projects.cnbcdash.title': 'CNBC-e AsRun Dashboard',
        'projects.cnbcdash.desc': 'Real-time broadcast monitoring dashboard for AsRun logs. Provides live updates, analytics, and reporting for broadcast operations with intuitive interface.',
        'projects.systemhelper.title': 'System Helper & Automation Suite',
        'projects.systemhelper.desc': 'Collection of system administration and automation tools. Includes file management, system monitoring, backup automation, and various utility scripts for daily operations.',
        'projects.iptracker.title': 'IP Tracker & Network Monitor',
        'projects.iptracker.desc': 'Network monitoring tool for tracking IP addresses, analyzing network traffic, and monitoring connection status. Provides detailed information about network activities.',
        
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
