// YENİ GÜNCELLEME: React'tan sadece useState'i değil, useEffect'i de içeri aktarıyoruz
import { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard'; // YENİ EKLENEN ADIM: Oluşturduğumuz bileşeni içeri aktarıyoruz
import './App.css'; // CSS dosyamızı içeri aktarıyoruz

// 1. API'den gelecek verinin tipini tanımlıyoruz (TypeScript)
// YENİ EKLENEN ADIM: 'export' kelimesini ekledik ki ProfileCard.tsx dosyası da bu tipi kullanarabilsin
export interface GitHubUser {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
}

function App() {
  // 1. State Tanımlama
  // 'username' değişkenimiz, 'setUsername' ise bu değişkeni güncellemeye yarayan fonksiyon.
  // <string> yazarak TypeScript'e bu verinin metin olacağını söylüyoruz.
  // YENİ GÜNCELLEME: Başlangıç değeri olarak boş bırakmak yerine varsayılan bir isim ('octocat') verdik.
  const [username, setUsername] = useState<string>('octocat');
  
  // 2. Yeni state'lerimiz: Gelen veriyi ve olası hataları tutmak için
  // userData ya bir GitHubUser objesi olacak ya da başlangıçtaki gibi 'null' olacak.
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string>('');

  // YENİ EKLENEN ADIM: Yükleniyor durumunu tutacak state (boolean: true/false)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 3. API İstek Fonksiyonu (async/await ile)
  const handleSearch = async () => {
    if (!username) return; // Kutu boşsa işlem yapma

    // Yeni aramaya başlarken eski hataları ve verileri temizleyelim
    setError('');
    setUserData(null);

    // YENİ EKLENEN ADIM: İstek başlamadan hemen önce yükleniyor durumunu aktif et
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      // Eğer kullanıcı bulunamazsa (404 hatası)
      if (!response.ok) {
        throw new Error('Kullanıcı bulunamadı!');
      }

      const data = await response.json();
      setUserData(data); // Gelen datayı state'e kaydet
    } catch (err: any) {
      setError(err.message); // Hatayı state'e kaydet
    } finally {
      // YENİ EKLENEN ADIM: İstek başarılı da olsa hatalı da olsa bittiğinde yükleniyor durumunu kapat
      // finally bloğu try-catch yapısında her halükarda en son çalışan kısımdır.
      setIsLoading(false);
    }
  };

  // YENİ EKLENEN ADIM (useEffect): Sayfa ilk yüklendiğinde otomatik çalışacak blok
  // useEffect iki şey alır: 1) Çalışacak bir fonksiyon, 2) Bağımlılık dizisi (Dependency Array)
  // Bağımlılık dizisini boş bir array '[]' olarak verirsek, bu kod YALNIZCA bileşen ekrana ilk geldiğinde (Mount) 1 kez çalışır.
  useEffect(() => {
    handleSearch(); // Bileşen ekrana geldiği an arama fonksiyonunu tetikliyoruz
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- İşte bu boş dizi [] sayesinde sonsuz döngüye girmesini engelliyoruz.

  return (
    <div className="container">
      <h1>GitHub Profil Bulucu</h1>
      
      {/* 3. Arama Formu */}
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Kullanıcı adı girin..." 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        {/* YENİ EKLENEN ADIM: Yüklenirken butonu devre dışı (disabled) bırakıyoruz ki üst üste tıklanmasın */}
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Aranıyor...' : 'Ara'}
        </button>
      </div>

      {/* YENİ EKLENEN ADIM: Yükleniyor (Loading) Durumu */}
      {/* Eğer isLoading true ise ekrana Yükleniyor mesajı bas */}
      {isLoading && <p className="loading-message">Veriler getiriliyor, lütfen bekleyin...</p>}

      {/* 4. Hata Durumu (Error Rendering) */}
      {/* Eğer error değişkeni doluysa (true), kırmızı renkte hatayı ekrana bas */}
      {/* YENİ GÜNCELLEME: Sadece yükleme bitmişse hatayı gösterelim ki çakışma olmasın */}
      {!isLoading && error && <p className="error-message">{error}</p>}

      {/* 5. Veri Başarıyla Geldiyse Ekrana Basma (Conditional Rendering) */}
      {/* Sadece userData doluysa aşağıdaki HTML bloğunu (kartı) render et */}
      {/* YENİ GÜNCELLEME: Uzun HTML kodunu sildik, yerine oluşturduğumuz ProfileCard bileşenini çağırdık */}
      {/* State'imizde tuttuğumuz userData'yı, 'user' adında bir prop (parametre) olarak ProfileCard'a gönderdik */}
      {!isLoading && userData && <ProfileCard user={userData} />}
      
    </div>
  );
}

export default App;