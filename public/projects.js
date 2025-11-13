// GitHub username
const GITHUB_USERNAME = 'hakanbisgin';

// Language colors (GitHub style)
const languageColors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'PHP': '#4F5D95',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'React': '#61dafb',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Ruby': '#701516',
    'Swift': '#ffac45',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB',
    'Shell': '#89e051',
    'Dockerfile': '#384d54',
    'Blade': '#f7523f'
};

// Featured projects (will be shown first)
const featuredProjects = [
    'hakanbisgin.com',
    'laravel-project',
    'portfolio'
];

// Load projects on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

async function loadProjects() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const projectsGrid = document.getElementById('projects-grid');
    const githubStats = document.getElementById('github-stats');

    // Show loading
    loading.style.display = 'flex';
    error.style.display = 'none';
    projectsGrid.style.display = 'none';
    githubStats.style.display = 'none';

    try {
        // Fetch repositories
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error('GitHub API request failed');
        }

        const repos = await response.json();
        
        // Filter out forks and sort
        const myRepos = repos.filter(repo => !repo.fork);
        
        // Sort: featured first, then by stars, then by updated date
        myRepos.sort((a, b) => {
            const aFeatured = featuredProjects.includes(a.name);
            const bFeatured = featuredProjects.includes(b.name);
            
            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;
            if (a.stargazers_count !== b.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
        });

        // Calculate stats
        const stats = calculateStats(myRepos);
        displayStats(stats);

        // Display projects
        displayProjects(myRepos);

        // Hide loading, show content
        loading.style.display = 'none';
        projectsGrid.style.display = 'grid';
        githubStats.style.display = 'grid';

    } catch (err) {
        console.error('Error loading projects:', err);
        loading.style.display = 'none';
        error.style.display = 'flex';
    }
}

function calculateStats(repos) {
    const languages = new Set();
    let totalStars = 0;
    let totalForks = 0;

    repos.forEach(repo => {
        if (repo.language) languages.add(repo.language);
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;
    });

    return {
        totalRepos: repos.length,
        totalStars,
        totalForks,
        totalLanguages: languages.size
    };
}

function displayStats(stats) {
    document.getElementById('total-repos').textContent = stats.totalRepos;
    document.getElementById('total-stars').textContent = stats.totalStars;
    document.getElementById('total-forks').textContent = stats.totalForks;
    document.getElementById('total-languages').textContent = stats.totalLanguages;
}

function displayProjects(repos) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    repos.forEach(repo => {
        const projectCard = createProjectCard(repo);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Check if featured
    const isFeatured = featuredProjects.includes(repo.name);
    if (isFeatured) {
        card.classList.add('featured');
    }

    // Language color
    const langColor = languageColors[repo.language] || '#858585';

    card.innerHTML = `
        ${isFeatured ? '<div class="featured-badge">⭐ Featured</div>' : ''}
        
        <div class="project-header">
            <div class="project-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
            </div>
            <h3 class="project-name">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    ${repo.name}
                </a>
            </h3>
        </div>

        <p class="project-description">
            ${repo.description || '<em>No description available</em>'}
        </p>

        <div class="project-meta">
            ${repo.language ? `
                <div class="project-language">
                    <span class="language-dot" style="background-color: ${langColor}"></span>
                    ${repo.language}
                </div>
            ` : ''}
            
            ${repo.stargazers_count > 0 ? `
                <div class="project-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    ${repo.stargazers_count}
                </div>
            ` : ''}
            
            ${repo.forks_count > 0 ? `
                <div class="project-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                    </svg>
                    ${repo.forks_count}
                </div>
            ` : ''}
        </div>

        <div class="project-footer">
            <span class="project-updated">
                Updated ${formatDate(repo.updated_at)}
            </span>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
    `;

    return card;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}
