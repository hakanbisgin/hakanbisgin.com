// Featured projects with detailed information
const portfolioProjects = {
    'live-feeds-monitoring': {
        title: 'Live Feeds Monitoring Dashboard',
        titleTr: 'Canlı Yayın İzleme Paneli',
        description: 'Real-time broadcast monitoring dashboard for tracking multiple live feeds simultaneously. Features include stream health monitoring, alert system, and comprehensive logging capabilities.',
        descriptionTr: 'Birden fazla canlı yayını eşzamanlı izlemek için gerçek zamanlı yayın izleme paneli. Akış sağlığı izleme, uyarı sistemi ve kapsamlı kayıt özellikleri içerir.',
        image: 'https://via.placeholder.com/800x450/1a1a2e/035dd7?text=Live+Feeds+Dashboard',
        tags: ['JavaScript', 'WebSocket', 'Real-time', 'Monitoring'],
        tagsTr: ['JavaScript', 'WebSocket', 'Gerçek Zamanlı', 'İzleme'],
        features: [
            'Real-time stream monitoring',
            'Multi-feed support',
            'Alert notifications',
            'Health status tracking',
            'Comprehensive logging'
        ],
        featuresTr: [
            'Gerçek zamanlı akış izleme',
            'Çoklu yayın desteği',
            'Uyarı bildirimleri',
            'Sağlık durumu takibi',
            'Kapsamlı kayıt tutma'
        ],
        technologies: ['JavaScript', 'WebSocket', 'Node.js', 'Real-time APIs']
    },
    
    'automated-trading-bot': {
        title: 'Automated Trading Bot',
        titleTr: 'Otomatik Trading Botu',
        description: 'Sophisticated cryptocurrency trading bot with multiple strategies, risk management, and real-time market analysis. Implements frequency-based pool investment algorithms for optimized trading decisions.',
        descriptionTr: 'Çoklu strateji, risk yönetimi ve gerçek zamanlı piyasa analizi içeren gelişmiş kripto para trading botu. Optimize edilmiş trading kararları için frekans tabanlı havuz yatırım algoritmaları uygular.',
        image: 'https://via.placeholder.com/800x450/1a1a2e/0eb24e?text=Trading+Bot',
        tags: ['Python', 'Trading', 'Algorithms', 'Cryptocurrency'],
        tagsTr: ['Python', 'Trading', 'Algoritmalar', 'Kripto Para'],
        features: [
            'Multiple trading strategies',
            'Risk management system',
            'Real-time market analysis',
            'Automated execution',
            'Performance tracking'
        ],
        featuresTr: [
            'Çoklu trading stratejileri',
            'Risk yönetim sistemi',
            'Gerçek zamanlı piyasa analizi',
            'Otomatik işlem gerçekleştirme',
            'Performans takibi'
        ],
        technologies: ['Python', 'Trading APIs', 'Data Analysis', 'Algorithms']
    },
    
    'fast-logo-detection': {
        title: 'Fast Logo Detection System',
        titleTr: 'Hızlı Logo Tespit Sistemi',
        description: 'Real-time logo detection and recognition system for broadcast monitoring. Detects and tracks logos in video streams with high accuracy and minimal latency using computer vision techniques.',
        descriptionTr: 'Yayın izleme için gerçek zamanlı logo tespit ve tanıma sistemi. Bilgisayarlı görü teknikleri kullanarak video akışlarında logoları yüksek doğruluk ve minimum gecikme ile tespit eder ve takip eder.',
        image: 'https://via.placeholder.com/800x450/1a1a2e/6561ac?text=Logo+Detection',
        tags: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
        tagsTr: ['Python', 'OpenCV', 'Derin Öğrenme', 'Bilgisayarlı Görü'],
        features: [
            'Real-time logo detection',
            'High accuracy recognition',
            'Low latency processing',
            'Multiple logo tracking',
            'Video stream integration'
        ],
        featuresTr: [
            'Gerçek zamanlı logo tespiti',
            'Yüksek doğruluk tanıma',
            'Düşük gecikmeli işleme',
            'Çoklu logo takibi',
            'Video akış entegrasyonu'
        ],
        technologies: ['Python', 'OpenCV', 'Deep Learning', 'CUDA']
    },
    
    'template-matching-cuda': {
        title: 'Template Matching on Video (CUDA)',
        titleTr: 'Video Üzerinde Template Matching (CUDA)',
        description: 'High-performance video template matching system utilizing CUDA for GPU acceleration. Capable of real-time pattern detection in video streams with optimized performance.',
        descriptionTr: 'GPU hızlandırma için CUDA kullanan yüksek performanslı video template matching sistemi. Optimize edilmiş performansla video akışlarında gerçek zamanlı desen tespiti yapabilir.',
        image: 'https://via.placeholder.com/800x450/1a1a2e/cd004b?text=CUDA+Template+Matching',
        tags: ['Python', 'CUDA', 'GPU', 'Video Processing'],
        tagsTr: ['Python', 'CUDA', 'GPU', 'Video İşleme'],
        features: [
            'GPU-accelerated processing',
            'Real-time template matching',
            'High-performance video analysis',
            'CUDA optimization',
            'Parallel processing'
        ],
        featuresTr: [
            'GPU hızlandırmalı işleme',
            'Gerçek zamanlı şablon eşleştirme',
            'Yüksek performanslı video analizi',
            'CUDA optimizasyonu',
            'Paralel işleme'
        ],
        technologies: ['Python', 'CUDA', 'OpenCV', 'GPU Computing']
    },
    
    'system-helper-automation': {
        title: 'System Helper & Automation Suite',
        titleTr: 'Sistem Yardımcısı ve Otomasyon Paketi',
        description: 'Collection of system administration and automation tools. Includes file management, system monitoring, backup automation, and various utility scripts for daily operations.',
        descriptionTr: 'Sistem yönetimi ve otomasyon araçları koleksiyonu. Dosya yönetimi, sistem izleme, yedekleme otomasyonu ve günlük operasyonlar için çeşitli yardımcı scriptler içerir.',
        image: 'https://via.placeholder.com/800x450/1a1a2e/f37023?text=System+Automation',
        tags: ['Python', 'PowerShell', 'Automation', 'System Admin'],
        tagsTr: ['Python', 'PowerShell', 'Otomasyon', 'Sistem Yönetimi'],
        features: [
            'File management automation',
            'System monitoring tools',
            'Backup automation',
            'Task scheduling',
            'Utility scripts collection'
        ],
        featuresTr: [
            'Dosya yönetimi otomasyonu',
            'Sistem izleme araçları',
            'Yedekleme otomasyonu',
            'Görev zamanlama',
            'Yardımcı script koleksiyonu'
        ],
        technologies: ['Python', 'PowerShell', 'Bash', 'System APIs']
    },
    
    'hakanbisgin.com': {
        title: 'Personal Portfolio Website',
        titleTr: 'Kişisel Portfolio Web Sitesi',
        description: 'Modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. Features include multi-language support (TR/EN), dynamic GitHub projects integration, and dark theme design.',
        descriptionTr: 'Saf HTML, CSS ve JavaScript ile oluşturulmuş modern, responsive kişisel portfolio web sitesi. Çoklu dil desteği (TR/EN), dinamik GitHub proje entegrasyonu ve koyu tema tasarımı içerir.',
        image: 'https://raw.githubusercontent.com/hakanbisgin/hakanbisgin.com/main/screenshot.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio', 'Responsive'],
        tagsTr: ['HTML', 'CSS', 'JavaScript', 'Portfolio', 'Responsive'],
        features: [
            'Multi-language support (Turkish/English)',
            'Dynamic GitHub API integration',
            'Fully responsive design',
            'Dark theme',
            'SEO optimized'
        ],
        featuresTr: [
            'Çoklu dil desteği (Türkçe/İngilizce)',
            'Dinamik GitHub API entegrasyonu',
            'Tam responsive tasarım',
            'Koyu tema',
            'SEO optimize'
        ],
        demo: 'https://hakanbisgin.online',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API']
    },
    
    // Add more featured projects here
    // You can add screenshots by:
    // 1. Taking screenshots of your projects
    // 2. Uploading them to your GitHub repo
    // 3. Using the raw GitHub URL here
    
    // Example template for other projects:
    /*
    'project-name': {
        title: 'Project Title',
        titleTr: 'Proje Başlığı',
        description: 'English description',
        descriptionTr: 'Türkçe açıklama',
        image: 'https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Project+Screenshot',
        tags: ['Tag1', 'Tag2'],
        tagsTr: ['Etiket1', 'Etiket2'],
        features: ['Feature 1', 'Feature 2'],
        featuresTr: ['Özellik 1', 'Özellik 2'],
        demo: 'https://demo-url.com',
        technologies: ['Tech1', 'Tech2']
    }
    */
};

// Project categories
const projectCategories = {
    en: {
        'web': 'Web Development',
        'mobile': 'Mobile Apps',
        'backend': 'Backend',
        'tools': 'Tools & Utilities',
        'learning': 'Learning Projects',
        'other': 'Other'
    },
    tr: {
        'web': 'Web Geliştirme',
        'mobile': 'Mobil Uygulamalar',
        'backend': 'Backend',
        'tools': 'Araçlar ve Yardımcılar',
        'learning': 'Öğrenme Projeleri',
        'other': 'Diğer'
    }
};

// Categorize projects based on language or name
function categorizeProject(repo) {
    const name = repo.name.toLowerCase();
    const lang = repo.language?.toLowerCase();
    
    // Web projects
    if (lang === 'html' || lang === 'css' || lang === 'javascript' || 
        lang === 'typescript' || lang === 'vue' || lang === 'react' ||
        name.includes('web') || name.includes('site') || name.includes('portfolio')) {
        return 'web';
    }
    
    // Backend projects
    if (lang === 'php' || lang === 'python' || lang === 'java' || 
        lang === 'go' || lang === 'rust' || name.includes('api') || 
        name.includes('backend') || name.includes('server')) {
        return 'backend';
    }
    
    // Mobile projects
    if (lang === 'swift' || lang === 'kotlin' || lang === 'dart' ||
        name.includes('mobile') || name.includes('app') || name.includes('android') || name.includes('ios')) {
        return 'mobile';
    }
    
    // Tools
    if (name.includes('tool') || name.includes('cli') || name.includes('script')) {
        return 'tools';
    }
    
    // Learning projects
    if (name.includes('learn') || name.includes('tutorial') || name.includes('practice') || name.includes('exercise')) {
        return 'learning';
    }
    
    return 'other';
}

// Get project details
function getProjectDetails(repoName) {
    return portfolioProjects[repoName] || null;
}

// Check if project is featured
function isFeaturedProject(repoName) {
    return portfolioProjects.hasOwnProperty(repoName);
}

// Get placeholder image based on language
function getPlaceholderImage(language) {
    const colors = {
        'JavaScript': '1a1a2e/f1e05a',
        'TypeScript': '1a1a2e/3178c6',
        'Python': '1a1a2e/3572A5',
        'Java': '1a1a2e/b07219',
        'PHP': '1a1a2e/4F5D95',
        'HTML': '1a1a2e/e34c26',
        'CSS': '1a1a2e/563d7c',
        'Vue': '1a1a2e/41b883',
        'React': '1a1a2e/61dafb',
        'default': '1a1a2e/035dd7'
    };
    
    const color = colors[language] || colors['default'];
    return `https://via.placeholder.com/800x450/${color}?text=${encodeURIComponent(language || 'Project')}`;
}
