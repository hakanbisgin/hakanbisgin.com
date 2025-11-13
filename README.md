# Hakan Bişgin - Portfolio Website

Modern ve minimalist bir kişisel portfolio sitesi.

## Özellikler

- ✨ Modern ve temiz tasarım
- 📱 Responsive (mobil uyumlu)
- 🎨 Özel renk paleti
- 🚀 Hızlı ve hafif
- 📄 İki sayfa: Anasayfa ve Özgeçmiş

## Kurulum

Bu site saf HTML/CSS ile yazılmıştır. Herhangi bir bağımlılık gerektirmez.

### Yerel Sunucuda Çalıştırma

1. Projeyi klonlayın
2. `public` klasörüne gidin
3. Bir web sunucusu başlatın:

```bash
# Python ile
python -m http.server 8000

# PHP ile
php -S localhost:8000

# Node.js http-server ile
npx http-server
```

4. Tarayıcınızda `http://localhost:8000` adresini açın

## Dosya Yapısı

```
public/
├── index.html      # Anasayfa
├── resume.html     # Özgeçmiş sayfası
├── style.css       # Stil dosyası
├── me.jpg          # Profil fotoğrafı
└── favicon.ico     # Site ikonu
```

## Özelleştirme

### Renkleri Değiştirme

`style.css` dosyasındaki `:root` bölümünde CSS değişkenlerini düzenleyebilirsiniz:

```css
:root {
    --accent-primary: #035dd7;
    --accent-secondary: #0087d2;
    /* ... diğer renkler */
}
```

### İçerik Güncelleme

- `index.html` - Anasayfa içeriği
- `resume.html` - Özgeçmiş içeriği

## Lisans

© 2024 Hakan Bişgin. Tüm hakları saklıdır.
