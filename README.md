# Hakan Bişgin - Portfolio Website

Modern ve minimalist bir kişisel portfolio sitesi. Saf HTML/CSS ile yazılmıştır.

## 🎯 Özellikler

- ✨ Modern ve temiz tasarım
- 📱 Tam responsive (mobil, tablet, desktop uyumlu)
- � ÖKoyu tema
- 🎨 Özel renk paleti
- � Hızlı vfe hafif (bağımlılık yok)
- ⚡ Statik site (backend gerektirmez)
- 📄 İki sayfa: Anasayfa ve Özgeçmiş
- 🔗 Sosyal medya entegrasyonu

## 📁 Dosya Yapısı

```
hakanbisgin.com/
├── public/
│   ├── index.html      # Anasayfa
│   ├── resume.html     # Özgeçmiş sayfası
│   ├── style.css       # Tüm stiller
│   ├── me.jpg          # Profil fotoğrafı
│   ├── favicon.ico     # Site ikonu
│   ├── .htaccess       # Apache yapılandırması
│   └── robots.txt      # SEO için
├── .gitignore
├── .gitattributes
├── README.md
└── KURULUM.md          # Detaylı kurulum kılavuzu
```

## 🚀 Hızlı Başlangıç

### Yerel Sunucuda Çalıştırma

**Python ile (Önerilen):**
```bash
cd public
python -m http.server 8000
```

**PHP ile:**
```bash
php -S localhost:8000 -t public
```

**Node.js ile:**
```bash
npx http-server public -p 8000
```

Tarayıcınızda `http://localhost:8000` adresini açın.

## 🌐 Canlı Sunucuya Yükleme

### Basit Yöntem
`public` klasöründeki tüm dosyaları web sunucunuzun root dizinine yükleyin.

### Hosting Önerileri
- **GitHub Pages**: Ücretsiz, kolay kurulum
- **Netlify**: Otomatik deployment, ücretsiz SSL
- **Vercel**: Hızlı, modern hosting
- **Cloudflare Pages**: Hızlı CDN ile
- **Herhangi bir web hosting**: Sadece dosyaları yükleyin

## ✏️ Özelleştirme

### İçerik Güncelleme
- **Anasayfa**: `public/index.html`
- **Özgeçmiş**: `public/resume.html`
- **Profil Fotoğrafı**: `public/me.jpg` dosyasını değiştirin

### Renk Paleti
`public/style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --accent-primary: #035dd7;    /* Ana vurgu rengi */
    --accent-secondary: #0087d2;  /* İkincil vurgu rengi */
    --bg-primary: #01071d;        /* Arka plan rengi */
    --text-primary: #f6f6f6;      /* Ana metin rengi */
    --text-secondary: #a9a9a9;    /* İkincil metin rengi */
}
```

### Sosyal Medya Bağlantıları
HTML dosyalarındaki sosyal medya linklerini kendi profillerinizle güncelleyin.

## 🎨 Renk Paleti

Site şu renk paletini kullanır:
- 🔵 Mavi tonları (Ana vurgu)
- ⚫ Koyu arka plan
- ⚪ Açık metin
- 🌈 Gradient efektler

## 📱 Responsive Tasarım

Site tüm cihazlarda mükemmel görünür:
- 📱 Mobil (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Geniş ekran (1200px+)

## 🔍 SEO

- Semantic HTML5
- Meta tags
- robots.txt
- Hızlı yükleme
- Mobil uyumlu

## 📄 Lisans

© 2024 Hakan Bişgin. Tüm hakları saklıdır.

## 📞 İletişim

- 📧 Email: wire@hakanbisgin.online
- 💼 LinkedIn: [Hakan Bişgin](https://www.linkedin.com/in/hakan-bi%C5%9Fgin-184368138/)
- 🐙 GitHub: [hakanbisgin](https://github.com/hakanbisgin)
- 🐦 Twitter: [@HakanBSGN1](https://twitter.com/HakanBSGN1)

## 🆘 Destek

Detaylı kurulum ve kullanım bilgisi için `KURULUM.md` dosyasına bakın.

---

**Not**: Bu proje Laravel'den saf HTML/CSS'e dönüştürülmüştür. Herhangi bir backend, veritabanı veya bağımlılık gerektirmez.
