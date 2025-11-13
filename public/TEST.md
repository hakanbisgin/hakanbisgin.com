# Test Checklist

Sitenizi yüklemeden önce bu kontrolleri yapın:

## ✅ Görsel Kontroller

### Anasayfa (index.html)
- [ ] Profil fotoğrafı görünüyor mu?
- [ ] Başlık ve açıklama doğru mu?
- [ ] Sosyal medya ikonları görünüyor mu?
- [ ] Tüm linkler çalışıyor mu?
- [ ] Hover efektleri çalışıyor mu?

### Özgeçmiş (resume.html)
- [ ] Profil fotoğrafı görünüyor mu?
- [ ] İş deneyimleri doğru mu?
- [ ] Eğitim bilgileri güncel mi?
- [ ] Yetenekler listesi tam mı?
- [ ] Projeler doğru mu?
- [ ] İletişim linkleri çalışıyor mu?

## 📱 Responsive Test

### Mobil (320px - 767px)
- [ ] Menü düzgün görünüyor mu?
- [ ] Kartlar tek sütunda mı?
- [ ] Yazılar okunabilir mi?
- [ ] Sosyal medya ikonları düzgün mü?
- [ ] Scroll sorunsuz mu?

### Tablet (768px - 1023px)
- [ ] Layout düzgün mü?
- [ ] Kartlar iki sütunda mı?
- [ ] Resimler orantılı mı?
- [ ] Menü çalışıyor mu?

### Desktop (1024px+)
- [ ] Tam genişlik kullanılıyor mu?
- [ ] Kartlar grid'de düzgün mü?
- [ ] Hover efektleri çalışıyor mu?
- [ ] Animasyonlar akıcı mı?

## 🔗 Link Kontrolleri

### Sosyal Medya
- [ ] LinkedIn linki doğru mu?
- [ ] GitHub linki doğru mu?
- [ ] Twitter linki doğru mu?
- [ ] Facebook linki doğru mu?
- [ ] Instagram linki doğru mu?
- [ ] YouTube linki doğru mu?
- [ ] Email linki çalışıyor mu?

### Navigasyon
- [ ] Anasayfa linki çalışıyor mu?
- [ ] Özgeçmiş linki çalışıyor mu?
- [ ] Active state doğru mu?

## 🎨 Stil Kontrolleri

- [ ] Renkler doğru mu?
- [ ] Font'lar yükleniyor mu?
- [ ] Spacing'ler düzgün mü?
- [ ] Border'lar görünüyor mu?
- [ ] Shadow'lar çalışıyor mu?
- [ ] Gradient'ler doğru mu?

## ⚡ Performans

- [ ] Sayfa hızlı yükleniyor mu? (< 2 saniye)
- [ ] Resimler optimize mi?
- [ ] CSS minify edilmiş mi? (opsiyonel)
- [ ] Gereksiz kod var mı?

## 🔍 SEO

- [ ] Title tag'leri var mı?
- [ ] Meta description var mı?
- [ ] Alt text'ler var mı?
- [ ] robots.txt var mı?
- [ ] favicon.ico var mı?

## 🌐 Tarayıcı Uyumluluğu

Test edilmesi gerekenler:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobil Chrome
- [ ] Mobil Safari

## 📝 İçerik Kontrolleri

- [ ] Yazım hataları var mı?
- [ ] Tarihler güncel mi?
- [ ] İletişim bilgileri doğru mu?
- [ ] Kişisel bilgiler güncel mi?

## 🔒 Güvenlik

- [ ] Hassas bilgi var mı?
- [ ] Email adresi spam'e açık mı?
- [ ] Telefon numarası paylaşılmış mı?
- [ ] Adres bilgisi var mı?

## 📊 Analytics (Opsiyonel)

- [ ] Google Analytics kodu eklendi mi?
- [ ] Tracking ID doğru mu?
- [ ] Test edildi mi?

## 🚀 Deployment Öncesi

- [ ] Tüm dosyalar commit edildi mi?
- [ ] .gitignore güncel mi?
- [ ] README güncel mi?
- [ ] Dokümantasyon tam mı?

---

## Test Komutları

### Yerel Sunucu
```bash
cd public
python -m http.server 8000
```

### HTML Validation
https://validator.w3.org/

### CSS Validation
https://jigsaw.w3.org/css-validator/

### Responsive Test
https://responsivedesignchecker.com/

### PageSpeed Test
https://pagespeed.web.dev/

---

Tüm kontroller tamamlandıktan sonra deployment yapabilirsiniz! ✅
