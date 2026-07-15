# 🐙 GitHub Profil Bulucu

Bu proje, React ve TypeScript temellerini (State, Effect, Props, Routing) öğrenmek ve pekiştirmek amacıyla geliştirilmiş modern bir web uygulamasıdır. Kullanıcıların GitHub profillerini ve en son güncelledikleri projeleri anlık olarak listeleyebilmenizi sağlar.

## ✨ Özellikler

* **Kullanıcı Arama:** Herhangi bir GitHub kullanıcı adını aratarak profil bilgilerine hızlıca ulaşma.
* **Profil Detayları:** Kullanıcının profil fotoğrafı, biyografisi, takipçi ve açık depo (repository) sayılarının gösterimi.
* **Son Projeler:** Kullanıcının en son güncellediği 5 deponun (repository) dinamik olarak listelenmesi.
* **Durum Yönetimi:** İstek atılırken "Yükleniyor" (Loading) durumu ve hatalı aramalarda "Hata" (Error) mesajı gösterimi.
* **Sayfa Yönlendirmesi:** `react-router-dom` kullanılarak sayfa yenilenmeden (SPA) "Ana Sayfa" ve "Hakkında" sayfaları arası akıcı geçiş.

## 🛠️ Kullanılan Teknolojiler

* **[React](https://react.dev/):** Kullanıcı arayüzü kütüphanesi (Fonksiyonel Bileşenler & Hook'lar).
* **[TypeScript](https://www.typescriptlang.org/):** Tip güvenliği ve daha sağlam kod mimarisi için.
* **[Vite](https://vitejs.dev/):** Yeni nesil, ultra hızlı frontend inşa aracı (Build tool).
* **[React Router](https://reactrouter.com/):** İstemci tarafı sayfa yönlendirmeleri (Routing) için.
* **[GitHub REST API](https://docs.github.com/en/rest):** Gerçek kullanıcı verilerini çekmek için.

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda yerel olarak çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi bilgisayarınıza indirin:**
   Terminali açın ve projeyi klonlayın (veya ZIP olarak indirip klasöre çıkartın).
   ```bash
   git clone <repo-url>
   cd GithubProfile



1 - Gerekli bağımlılıkları yükleyin:

   npm install

2 - Geliştirme sunucusunu başlatın:

   npm run dev

3 - Tarayıcınızda http://localhost:5173 adresine giderek projeyi görüntüleyin.

📂 Proje Yapısı
src/
├── About.tsx           # "Hakkında" sayfası bileşeni
├── App.css             # Uygulamanın genel ve bileşen tasarımları
├── App.tsx             # Ana uygulama bileşeni (Arama mantığı ve Yönlendirmeler)
├── ProfileCard.tsx     # Profil detaylarını gösteren alt bileşen (Child Component)
├── RepoList.tsx        # Kullanıcının projelerini listeleyen alt bileşen
└── main.tsx            # React uygulamasının başlatıldığı ana giriş dosyası

📚 Öğrenilen ve Uygulanan Kavramlar
Bu proje geliştirilirken aşağıdaki React ve modern web geliştirme kavramları pratik edilmiştir:

useState ile durum (state) yönetimi.

useEffect ile yan etkiler (Side effects) ve bileşen yüklendiğinde otomatik API isteği atma.

Parent bileşenden Child bileşene Props ile veri aktarımı.

TypeScript interface yapıları ile API'den gelen karmaşık verilerin filtrelenip tiplendirilmesi.

JavaScript map() fonksiyonu ile dizilerin (Array) React içinde listelenmesi.

Koşullu render (Conditional Rendering) işlemleri (&& ve ternary operatörleri).
