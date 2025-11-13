# 📦 GitHub Projeler Sayfası

Sitenize dinamik GitHub projeler sayfası eklendi!

## 🎯 Özellikler

### Otomatik Proje Yükleme
- ✅ GitHub API ile otomatik repo çekme
- ✅ Gerçek zamanlı veri
- ✅ Fork'ları filtreleme
- ✅ Yıldız sayısına göre sıralama

### Proje Kartları
- ✅ Proje adı ve açıklaması
- ✅ Programlama dili (renkli gösterge)
- ✅ Yıldız ve fork sayıları
- ✅ Son güncelleme tarihi
- ✅ GitHub'a direkt link
- ✅ Featured (öne çıkan) projeler

### İstatistikler
- 📦 Toplam repo sayısı
- ⭐ Toplam yıldız sayısı
- 🔱 Toplam fork sayısı
- 💻 Kullanılan dil çeşidi

### Tasarım
- 🎨 Modern kart tasarımı
- 📱 Tam responsive
- ⚡ Hızlı yükleme
- 🌙 Koyu tema uyumlu
- ✨ Hover animasyonları

## 📁 Yeni Dosyalar

```
public/
├── projects.html    # Projeler sayfası
└── projects.js      # GitHub API entegrasyonu
```

## 🔧 Yapılandırma

### GitHub Kullanıcı Adı

`public/projects.js` dosyasında:

```javascript
const GITHUB_USERNAME = 'hakanbisgin';
```

Kendi kullanıcı adınızı buraya yazın.

### Öne Çıkan Projeler

Bazı projeleri öne çıkarmak için:

```javascript
const featuredProjects = [
    'hakanbisgin.com',
    'laravel-project',
    'portfolio'
];
```

Bu projeler:
- En üstte gösterilir
- Özel badge alır
- Farklı arka plan rengi

### Dil Renkleri

Programlama dili renklerini özelleştirmek için:

```javascript
const languageColors = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'PHP': '#4F5D95',
    // ... daha fazla
};
```

## 🌐 GitHub API

### API Limitleri

GitHub API limitleri:
- **Kimlik doğrulamasız**: 60 istek/saat
- **Kimlik doğrulamalı**: 5000 istek/saat

### Kimlik Doğrulama (Opsiyonel)

Daha fazla istek için GitHub token kullanın:

```javascript
const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
    {
        headers: {
            'Authorization': 'token YOUR_GITHUB_TOKEN'
        }
    }
);
```

**Not**: Token'ı asla public repo'da paylaşmayın!

### Rate Limit Kontrolü

```javascript
async function checkRateLimit() {
    const response = await fetch('https://api.github.com/rate_limit');
    const data = await response.json();
    console.log('Remaining:', data.rate.remaining);
    console.log('Reset:', new Date(data.rate.reset * 1000));
}
```

## 🎨 Özelleştirme

### Kart Tasarımı

`style.css` dosyasında `.project-card` sınıfını düzenleyin:

```css
.project-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    padding: 1.5rem;
    /* Kendi stillerinizi ekleyin */
}
```

### Featured Badge

```css
.featured-badge {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    /* Özelleştirin */
}
```

### Grid Düzeni

```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    /* Sütun sayısını değiştirin */
}
```

## 📊 Veri Yapısı

### GitHub Repo Objesi

```javascript
{
    name: "repo-name",
    description: "Repo açıklaması",
    html_url: "https://github.com/user/repo",
    language: "JavaScript",
    stargazers_count: 10,
    forks_count: 5,
    updated_at: "2024-11-13T10:00:00Z",
    fork: false
}
```

### İstatistik Objesi

```javascript
{
    totalRepos: 25,
    totalStars: 150,
    totalForks: 45,
    totalLanguages: 8
}
```

## 🔍 Filtreleme ve Sıralama

### Fork'ları Gizleme

```javascript
const myRepos = repos.filter(repo => !repo.fork);
```

### Özel Sıralama

```javascript
myRepos.sort((a, b) => {
    // Featured projeler önce
    const aFeatured = featuredProjects.includes(a.name);
    const bFeatured = featuredProjects.includes(b.name);
    
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    
    // Sonra yıldız sayısı
    if (a.stargazers_count !== b.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
    }
    
    // Son olarak güncelleme tarihi
    return new Date(b.updated_at) - new Date(a.updated_at);
});
```

### Dil Filtreleme

Sadece belirli dillerdeki projeleri göstermek için:

```javascript
const filteredRepos = repos.filter(repo => 
    ['JavaScript', 'PHP', 'Python'].includes(repo.language)
);
```

## 🎭 Durum Yönetimi

### Loading (Yükleniyor)

```javascript
loading.style.display = 'flex';
projectsGrid.style.display = 'none';
```

### Error (Hata)

```javascript
loading.style.display = 'none';
error.style.display = 'flex';
```

### Success (Başarılı)

```javascript
loading.style.display = 'none';
projectsGrid.style.display = 'grid';
githubStats.style.display = 'grid';
```

## 🌍 Çoklu Dil Desteği

Projeler sayfası Türkçe/İngilizce dil desteğine sahip:

```javascript
// Türkçe
'projects.title': 'GitHub Projelerim'
'projects.subtitle': 'Projelerim ve katkılarım'

// İngilizce
'projects.title': 'My GitHub Projects'
'projects.subtitle': 'Projects and contributions'
```

## 📱 Responsive Tasarım

### Desktop (1024px+)
- 3 sütun grid
- Tam özellikler

### Tablet (768px - 1023px)
- 2 sütun grid
- Kompakt görünüm

### Mobil (< 768px)
- 1 sütun grid
- Stack layout

## 🚀 Performans

### Optimizasyonlar
- ✅ Tek API çağrısı
- ✅ Client-side rendering
- ✅ Minimal DOM manipülasyonu
- ✅ CSS animasyonları (GPU hızlandırmalı)

### Yükleme Süreleri
- API çağrısı: ~500ms
- Render: ~100ms
- Toplam: ~600ms

## 🐛 Hata Yönetimi

### API Hatası

```javascript
try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('GitHub API request failed');
    }
} catch (err) {
    console.error('Error:', err);
    // Hata mesajı göster
}
```

### Retry Mekanizması

```javascript
async function loadProjectsWithRetry(maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            await loadProjects();
            return;
        } catch (err) {
            if (i === maxRetries - 1) throw err;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
```

## 💡 İpuçları

### Cache Kullanımı

API çağrılarını cache'lemek için:

```javascript
const CACHE_KEY = 'github_repos';
const CACHE_DURATION = 5 * 60 * 1000; // 5 dakika

function getCachedRepos() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) return null;
    
    return data;
}

function setCachedRepos(data) {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
    }));
}
```

### Lazy Loading

Sayfa scroll edildiğinde daha fazla proje yüklemek için:

```javascript
let page = 1;
const perPage = 12;

async function loadMoreProjects() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${perPage}`
    );
    const repos = await response.json();
    displayProjects(repos);
    page++;
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMoreProjects();
    }
});
```

### Arama Özelliği

```javascript
function searchProjects(query) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const name = card.querySelector('.project-name').textContent.toLowerCase();
        const desc = card.querySelector('.project-description').textContent.toLowerCase();
        const matches = name.includes(query.toLowerCase()) || desc.includes(query.toLowerCase());
        card.style.display = matches ? 'flex' : 'none';
    });
}
```

## 🔮 Gelecek Geliştirmeler

### Planlanan Özellikler
- [ ] Proje arama
- [ ] Dil filtreleme
- [ ] Tarih aralığı filtreleme
- [ ] Sıralama seçenekleri
- [ ] Proje detay modal'ı
- [ ] README önizleme
- [ ] Commit geçmişi
- [ ] Katkıda bulunanlar listesi
- [ ] Proje istatistikleri grafiği

### İyileştirmeler
- [ ] Infinite scroll
- [ ] Skeleton loading
- [ ] Proje resimleri (social preview)
- [ ] Topic/tag filtreleme
- [ ] Yıldızlı projeler
- [ ] Pinned repositories

## 📚 Kaynaklar

- [GitHub REST API](https://docs.github.com/en/rest)
- [GitHub API Rate Limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)
- [GitHub Repo Object](https://docs.github.com/en/rest/repos/repos#get-a-repository)

## 🎉 Sonuç

Artık GitHub projeleriniz otomatik olarak sitenizde görüntüleniyor!

### Avantajlar
- ✅ Otomatik güncelleme
- ✅ Profesyonel görünüm
- ✅ Kolay bakım
- ✅ SEO dostu
- ✅ Responsive tasarım

### Test
http://localhost:8000/projects.html

---

**Not**: GitHub API rate limit'e dikkat edin. Çok fazla ziyaretçi varsa cache kullanın veya token ekleyin.
