# Kurulum ve Kullanım Kılavuzu

## 🎉 Tebrikler!

Laravel projeniz başarıyla saf HTML/CSS sitesine dönüştürüldü!

## 📁 Dosya Yapısı

Artık siteniz sadece `public` klasöründeki dosyalardan oluşuyor:

```
public/
├── index.html      # Anasayfa
├── resume.html     # Özgeçmiş sayfası
├── style.css       # Tüm stiller
├── me.jpg          # Profil fotoğrafı
├── favicon.ico     # Site ikonu
├── .htaccess       # Apache yapılandırması
└── robots.txt      # SEO için
```

## 🚀 Yerel Sunucuda Test

### Python ile (Önerilen)
```bash
cd public
python -m http.server 8000
```

Tarayıcınızda: http://localhost:8000

### PHP ile (Eğer yüklüyse)
```bash
php -S localhost:8000 -t public
```

### Node.js ile
```bash
npx http-server public -p 8000
```

## 🌐 Canlı Sunucuya Yükleme

### Seçenek 1: Sadece public klasörünü yükleyin
`public` klasöründeki tüm dosyaları sunucunuzun root dizinine yükleyin.

### Seçenek 2: Tüm projeyi yükleyin
Eğer tüm projeyi yüklerseniz, web sunucunuzun document root'unu `public` klasörüne yönlendirin.

## ✏️ İçerik Güncelleme

### Kişisel Bilgileri Değiştirme

1. **Anasayfa**: `public/index.html` dosyasını düzenleyin
2. **Özgeçmiş**: `public/resume.html` dosyasını düzenleyin
3. **Profil Fotoğrafı**: `public/me.jpg` dosyasını değiştirin

### Renkleri Özelleştirme

`public/style.css` dosyasının başındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --accent-primary: #035dd7;    /* Ana vurgu rengi */
    --accent-secondary: #0087d2;  /* İkincil vurgu rengi */
    --bg-primary: #01071d;        /* Arka plan rengi */
    /* ... diğer renkler */
}
```

### Sosyal Medya Bağlantıları

Her iki HTML dosyasında da sosyal medya bağlantılarını kendi profillerinizle güncelleyin.

## 🎨 Tasarım Özellikleri

- ✨ Modern ve minimalist tasarım
- 📱 Tam responsive (mobil uyumlu)
- 🌙 Koyu tema
- 🎯 Hızlı yükleme
- ♿ Erişilebilir
- 🔍 SEO dostu

## 🗑️ Temizlik (Opsiyonel)

Artık Laravel dosyalarına ihtiyacınız yok. İsterseniz şunları silebilirsiniz:

- `app/` klasörü
- `bootstrap/` klasörü
- `config/` klasörü
- `database/` klasörü
- `resources/` klasörü
- `routes/` klasörü
- `storage/` klasörü
- `tests/` klasörü
- `vendor/` klasörü
- `composer.json`
- `composer.lock`
- `package.json`
- `package-lock.json`
- `artisan`
- `phpunit.xml`
- `vite.config.js`

**Sadece `public` klasörünü tutun!**

## 📝 Notlar

- Site artık herhangi bir backend gerektirmiyor
- Veritabanı bağlantısı yok
- PHP, Composer veya Node.js gerektirmiyor
- Herhangi bir statik hosting servisinde çalışır (GitHub Pages, Netlify, Vercel, vb.)

## 🆘 Destek

Herhangi bir sorunla karşılaşırsanız:
1. Tarayıcı konsolunu kontrol edin (F12)
2. Dosya yollarının doğru olduğundan emin olun
3. `.htaccess` dosyasının sunucunuzda desteklendiğinden emin olun

## 🎯 Sonraki Adımlar

1. İçeriği kişiselleştirin
2. Profil fotoğrafınızı güncelleyin
3. Sosyal medya bağlantılarını düzenleyin
4. Renkleri beğeninize göre ayarlayın
5. Canlı sunucuya yükleyin

Başarılar! 🚀
