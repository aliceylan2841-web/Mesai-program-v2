# ⏱️ Mesai Takip

Mesai, izin ve maaş takip uygulaması. Türkiye'deki çalışanlar için tasarlanmıştır.

## 🚀 Özellikler

- 📆 Takvim üzerinden günlük mesai girişi (%50, %65, %75, %100, %200, Özel)
- 💰 Otomatik maaş ve mesai ücreti hesaplama
- 🏖️ İzin takibi (Yıllık, Ücretsiz, Ücretli, Doğum, Ölüm, Sağlık, Evlilik)
- 📊 Yıllık izin planı ve grafik analiz
- 🌙 Karanlık mod
- 📱 PWA — telefona uygulama olarak kurulabilir
- 💾 Tüm veriler cihazda saklanır (localStorage)

## 📁 Dosya Yapısı

```
├── index.html          # Ana uygulama
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (offline destek)
├── icons/              # Uygulama ikonları
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   └── icon-512x512-maskable.png
└── .github/
    └── workflows/
        └── deploy.yml  # Otomatik GitHub Pages deploy
```

## 🌐 GitHub Pages ile Yayınlama

1. Bu repoyu GitHub'a yükleyin
2. **Settings → Pages → Source: GitHub Actions** seçin
3. `main` branch'e push yapın
4. Birkaç dakika sonra `https://KULLANICI_ADINIZ.github.io/REPO_ADI` adresinde yayında!

## 📱 Telefona Kurma (PWA)

### Android (Chrome)
1. Siteyi Chrome ile açın
2. Sağ üstteki `⋮` menüsüne tıklayın
3. **"Ana ekrana ekle"** seçin

### iOS (Safari)
1. Siteyi Safari ile açın
2. Alt ortadaki **Paylaş** butonuna tıklayın
3. **"Ana Ekrana Ekle"** seçin

## 🏪 Google Play Store (TWA)

GitHub Pages'e deploy ettikten sonra [Bubblewrap CLI](https://github.com/GoogleChromeLabs/bubblewrap) ile AAB dosyası üretebilirsiniz.

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://KULLANICI_ADINIZ.github.io/REPO_ADI/manifest.json
bubblewrap build
```

## 👤 Geliştirici


**Acamay** — Tüm hakları saklıdır.
