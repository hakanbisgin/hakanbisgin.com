# Deployment Kılavuzu

Bu dosya, sitenizi farklı platformlara nasıl yükleyeceğinizi açıklar.

## 📦 Hazırlık

Siteniz tamamen statik olduğu için herhangi bir özel yapılandırma gerektirmez. Sadece `public` klasöründeki dosyaları yüklemeniz yeterli.

## 🚀 Deployment Seçenekleri

### 1. GitHub Pages (Ücretsiz)

**Adımlar:**
1. GitHub'da yeni bir repository oluşturun
2. Projeyi push edin:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git
git push -u origin main
```
3. Repository Settings > Pages
4. Source: Deploy from a branch
5. Branch: main > /public
6. Save

Site `https://KULLANICI_ADINIZ.github.io/REPO_ADI/` adresinde yayınlanacak.

**Özel Domain için:**
- Settings > Pages > Custom domain
- CNAME dosyası otomatik oluşturulacak

---

### 2. Netlify (Ücretsiz)

**Yöntem 1: Drag & Drop**
1. [netlify.com](https://netlify.com) hesabı oluşturun
2. "Add new site" > "Deploy manually"
3. `public` klasörünü sürükleyip bırakın
4. Otomatik deploy edilecek

**Yöntem 2: Git Integration**
1. GitHub'a push edin
2. Netlify'da "Add new site" > "Import from Git"
3. Repository'yi seçin
4. Build settings:
   - Base directory: `public`
   - Publish directory: `.` (boş bırakın)
5. Deploy

**Özel Domain:**
- Site settings > Domain management > Add custom domain

---

### 3. Vercel (Ücretsiz)

**Adımlar:**
1. [vercel.com](https://vercel.com) hesabı oluşturun
2. "Add New" > "Project"
3. GitHub repository'yi import edin
4. Build settings:
   - Framework Preset: Other
   - Root Directory: `public`
   - Output Directory: `.` (boş bırakın)
5. Deploy

**Özel Domain:**
- Project Settings > Domains > Add

---

### 4. Cloudflare Pages (Ücretsiz)

**Adımlar:**
1. [pages.cloudflare.com](https://pages.cloudflare.com) hesabı oluşturun
2. "Create a project"
3. GitHub repository'yi bağlayın
4. Build settings:
   - Build command: (boş bırakın)
   - Build output directory: `public`
5. Save and Deploy

**Avantajlar:**
- Çok hızlı CDN
- Ücretsiz SSL
- DDoS koruması

---

### 5. Geleneksel Web Hosting (cPanel, Plesk, vb.)

**FTP ile Yükleme:**
1. FTP istemcisi açın (FileZilla, WinSCP, vb.)
2. Hosting bilgilerinizle bağlanın
3. `public_html` veya `www` klasörüne gidin
4. `public` klasöründeki TÜM dosyaları yükleyin
5. Tarayıcıda domain'inizi açın

**Dosya Yöneticisi ile:**
1. cPanel/Plesk'e giriş yapın
2. File Manager'ı açın
3. `public_html` klasörüne gidin
4. `public` klasöründeki dosyaları yükleyin
5. Gerekirse dosya izinlerini kontrol edin (644 dosyalar, 755 klasörler)

**Önemli Notlar:**
- `.htaccess` dosyasının yüklendiğinden emin olun
- Apache mod_rewrite modülünün aktif olması gerekir
- PHP gerektirmez ama `.htaccess` için Apache gerekir

---

### 6. Firebase Hosting (Ücretsiz)

**Adımlar:**
1. Firebase CLI'yi yükleyin:
```bash
npm install -g firebase-tools
```

2. Firebase'e giriş yapın:
```bash
firebase login
```

3. Projeyi başlatın:
```bash
firebase init hosting
```

4. Ayarlar:
   - Public directory: `public`
   - Single-page app: No
   - GitHub deployment: İsteğe bağlı

5. Deploy edin:
```bash
firebase deploy
```

---

### 7. AWS S3 + CloudFront

**S3 Bucket Oluşturma:**
1. AWS Console > S3
2. "Create bucket"
3. Bucket name: sitenizin-adi
4. Region seçin
5. "Block all public access" seçeneğini KAPATIN
6. Create bucket

**Dosyaları Yükleme:**
1. Bucket'ı açın
2. Upload > `public` klasöründeki dosyaları seçin
3. Upload

**Static Website Hosting:**
1. Bucket > Properties > Static website hosting
2. Enable
3. Index document: `index.html`
4. Error document: `index.html`
5. Save

**Public Access:**
1. Permissions > Bucket Policy
2. Şu policy'yi ekleyin:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sitenizin-adi/*"
        }
    ]
}
```

**CloudFront (Opsiyonel - CDN için):**
1. CloudFront > Create Distribution
2. Origin domain: S3 bucket'ınız
3. Default root object: `index.html`
4. Create

---

## 🔒 SSL Sertifikası

Çoğu modern hosting platformu (Netlify, Vercel, Cloudflare, GitHub Pages) otomatik ücretsiz SSL sağlar.

Geleneksel hosting için:
- Let's Encrypt (Ücretsiz)
- cPanel'de "SSL/TLS" bölümünden aktifleştirin

---

## 🌍 Özel Domain Bağlama

### DNS Ayarları

**A Record (IP ile):**
```
Type: A
Name: @
Value: HOSTING_IP_ADRESI
TTL: 3600
```

**CNAME Record (Alt domain için):**
```
Type: CNAME
Name: www
Value: siteniz.com
TTL: 3600
```

**Netlify/Vercel için:**
```
Type: CNAME
Name: @
Value: platform-adresi.netlify.app
```

---

## ✅ Deployment Checklist

Yüklemeden önce kontrol edin:

- [ ] Tüm içerik güncel mi?
- [ ] Profil fotoğrafı doğru mu?
- [ ] Sosyal medya linkleri çalışıyor mu?
- [ ] Email adresi doğru mu?
- [ ] Yerel sunucuda test edildi mi?
- [ ] Mobil görünüm kontrol edildi mi?
- [ ] Tüm sayfalar açılıyor mu?
- [ ] `.htaccess` dosyası var mı?
- [ ] `robots.txt` dosyası var mı?
- [ ] `favicon.ico` dosyası var mı?

---

## 🔄 Güncelleme

Site güncellemek için:

1. Dosyaları düzenleyin
2. Yerel sunucuda test edin
3. Değişiklikleri yükleyin:
   - **Git-based**: `git push` yapın (otomatik deploy)
   - **FTP**: Değişen dosyaları yeniden yükleyin
   - **Drag & Drop**: Yeni dosyaları sürükleyin

---

## 📊 Analytics (Opsiyonel)

### Google Analytics Ekleme

`index.html` ve `resume.html` dosyalarının `<head>` bölümüne ekleyin:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 Sorun Giderme

**Site açılmıyor:**
- DNS ayarlarını kontrol edin (24 saat sürebilir)
- Dosyaların doğru dizine yüklendiğinden emin olun
- Tarayıcı cache'ini temizleyin

**Stiller yüklenmiyor:**
- Dosya yollarını kontrol edin
- `style.css` dosyasının yüklendiğinden emin olun
- Tarayıcı konsolunu kontrol edin (F12)

**404 Hatası:**
- `.htaccess` dosyasının yüklendiğinden emin olun
- Apache mod_rewrite aktif mi kontrol edin
- Dosya isimlerinin doğru olduğundan emin olun

---

## 💡 İpuçları

1. **CDN Kullanın**: Cloudflare gibi bir CDN sitenizi hızlandırır
2. **Resim Optimizasyonu**: Profil fotoğrafını optimize edin (TinyPNG, ImageOptim)
3. **Minify**: CSS'i minify ederek boyutunu küçültün
4. **Gzip**: Sunucuda gzip compression aktifleştirin
5. **Cache**: Browser caching ayarlarını optimize edin

---

Başarılar! 🚀
