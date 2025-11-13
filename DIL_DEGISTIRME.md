# 🌍 Çoklu Dil Desteği

Site artık Türkçe ve İngilizce dillerini destekliyor!

## 🎯 Özellikler

- ✅ Türkçe/İngilizce dil değiştirme
- ✅ Kullanıcı tercihini hatırlama (localStorage)
- ✅ Tüm sayfalarda çalışır
- ✅ Kolay genişletilebilir
- ✅ Sıfır bağımlılık (vanilla JavaScript)

## 🔧 Nasıl Çalışır?

### Dil Değiştirme Butonu

Sağ üst köşede bulunan **TR/EN** butonuna tıklayarak dil değiştirebilirsiniz.

### Otomatik Hatırlama

Seçtiğiniz dil tarayıcınızda saklanır ve bir sonraki ziyaretinizde otomatik olarak yüklenir.

## 📝 Çeviri Ekleme/Düzenleme

Çevirileri düzenlemek için `public/lang.js` dosyasını açın:

```javascript
const translations = {
    tr: {
        'nav.home': 'Anasayfa',
        'nav.resume': 'Özgeçmiş',
        // ... diğer çeviriler
    },
    en: {
        'nav.home': 'Home',
        'nav.resume': 'Resume',
        // ... diğer çeviriler
    }
};
```

### Yeni Çeviri Ekleme

1. **lang.js dosyasına ekleyin:**
```javascript
tr: {
    'yeni.anahtar': 'Türkçe metin'
},
en: {
    'yeni.anahtar': 'English text'
}
```

2. **HTML'de kullanın:**
```html
<p data-i18n="yeni.anahtar">Türkçe metin</p>
```

## 🌐 Yeni Dil Ekleme

### 1. Çevirileri Ekleyin

`lang.js` dosyasına yeni dil ekleyin:

```javascript
const translations = {
    tr: { /* ... */ },
    en: { /* ... */ },
    de: {  // Almanca örneği
        'nav.home': 'Startseite',
        'nav.resume': 'Lebenslauf',
        // ... tüm çeviriler
    }
};
```

### 2. Dil Seçici Güncelleyin

Daha fazla dil için dropdown menü ekleyebilirsiniz:

```html
<select id="lang-selector" class="lang-toggle">
    <option value="tr">TR</option>
    <option value="en">EN</option>
    <option value="de">DE</option>
</select>
```

```javascript
// lang.js içinde
document.getElementById('lang-selector').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('language', currentLang);
    updatePageLanguage();
});
```

## 🎨 Dil Butonunu Özelleştirme

### Stil Değiştirme

`style.css` dosyasında `.lang-toggle` sınıfını düzenleyin:

```css
.lang-toggle {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    /* Kendi stillerinizi ekleyin */
}
```

### Bayrak İkonları Ekleme

```html
<button id="lang-toggle" class="lang-toggle">
    <span class="flag">🇹🇷</span>
    <span class="lang-text">TR</span>
</button>
```

```javascript
// lang.js içinde
function updateLanguageButton() {
    const flags = { tr: '🇹🇷', en: '🇬🇧' };
    const button = document.getElementById('lang-toggle');
    const nextLang = currentLang === 'tr' ? 'en' : 'tr';
    button.innerHTML = `<span class="flag">${flags[nextLang]}</span> ${nextLang.toUpperCase()}`;
}
```

## 📋 Çeviri Anahtarları

### Mevcut Anahtarlar

#### Navigasyon
- `nav.home` - Anasayfa/Home
- `nav.resume` - Özgeçmiş/Resume

#### Anasayfa
- `home.whois.title` - Kimim?/Who am I?
- `home.whois.content` - Tanıtım metni
- `home.links.title` - Online Bağlantılar/Online Links

#### Özgeçmiş
- `resume.skills.title` - Yetenekler/Skills
- `resume.skills.network` - Network
- `resume.skills.development` - Yazılım Geliştirme/Development
- `resume.skills.sysadmin` - Sistem Yönetimi/System Administration
- `resume.experience.title` - İş Deneyimi/Work Experience
- `resume.education.title` - Eğitim ve Sertifikalar/Education and Training
- `resume.projects.title` - Projeler/Projects
- `resume.contact.title` - İletişim/Contact

#### Footer
- `footer.copyright` - Telif hakkı metni

## 🔍 Sorun Giderme

### Çeviriler Görünmüyor

1. **Tarayıcı konsolunu kontrol edin** (F12)
2. **lang.js dosyasının yüklendiğinden emin olun**
3. **data-i18n attribute'larının doğru olduğunu kontrol edin**

### Dil Değişmiyor

1. **localStorage'ı temizleyin:**
```javascript
localStorage.removeItem('language');
```

2. **Tarayıcı cache'ini temizleyin**

3. **JavaScript hatalarını kontrol edin** (F12 Console)

### Yeni Çeviriler Çalışmıyor

1. **Anahtar adının doğru olduğundan emin olun**
2. **Her iki dilde de çevirinin olduğunu kontrol edin**
3. **HTML'de data-i18n attribute'unun eklendiğinden emin olun**

## 💡 İpuçları

### Çok Satırlı Metinler

Çok satırlı metinler için `\n` kullanın:

```javascript
'key': 'Satır 1\nSatır 2\nSatır 3'
```

Script otomatik olarak `<br>` etiketlerine dönüştürür.

### HTML İçeriği

HTML içeriği için innerHTML kullanılır:

```javascript
'key': 'Metin <strong>kalın</strong> ve <em>italik</em>'
```

### Dinamik İçerik

Dinamik içerik için JavaScript'te çeviri yapın:

```javascript
const message = translate('welcome.message');
alert(message);
```

## 🚀 Gelişmiş Kullanım

### Parametreli Çeviriler

```javascript
function translate(key, params = {}) {
    let text = translations[currentLang][key] || key;
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    return text;
}

// Kullanım
translations.tr['welcome'] = 'Merhaba {name}!';
translate('welcome', { name: 'Hakan' }); // "Merhaba Hakan!"
```

### Tarih ve Sayı Formatları

```javascript
function formatDate(date) {
    const locale = currentLang === 'tr' ? 'tr-TR' : 'en-US';
    return new Date(date).toLocaleDateString(locale);
}

function formatNumber(number) {
    const locale = currentLang === 'tr' ? 'tr-TR' : 'en-US';
    return number.toLocaleString(locale);
}
```

### Dil Değişikliği Event'i

```javascript
// lang.js içinde
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('language', currentLang);
    updatePageLanguage();
    
    // Custom event dispatch
    window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: currentLang }
    }));
}

// Başka bir script'te dinleyin
window.addEventListener('languageChanged', (e) => {
    console.log('Dil değişti:', e.detail.language);
    // Özel işlemler yapın
});
```

## 📊 İstatistikler

- **Toplam Çeviri Anahtarı**: ~40
- **Desteklenen Diller**: 2 (TR, EN)
- **Dosya Boyutu**: ~8 KB
- **Yükleme Süresi**: < 50ms

## 🎓 Öğrenme Kaynakları

- [MDN - Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [W3C - Language Tags](https://www.w3.org/International/articles/language-tags/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

**Not**: Bu sistem basit ve hafif bir çözümdür. Daha karmaşık ihtiyaçlar için i18next gibi kütüphaneler kullanabilirsiniz.
