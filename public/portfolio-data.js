// Featured projects with detailed information
const portfolioProjects = {
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
        demo: 'https://hakanbisgin.com',
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
