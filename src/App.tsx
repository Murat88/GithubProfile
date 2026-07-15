import { useState, useEffect } from 'react';
// YENİ EKLENEN ADIM: react-router-dom'dan Link, Routes ve Route araçlarını alıyoruz
import { Routes, Route, Link } from 'react-router-dom'; 

import ProfileCard from './ProfileCard'; 
import RepoList, { type Repo } from './RepoList';
// YENİ EKLENEN ADIM: Oluşturduğumuz Hakkında sayfasını içeri aktarıyoruz
import About from './About';
import './App.css'; 

export interface GitHubUser {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
}

function App() {
  const [username, setUsername] = useState<string>('octocat');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!username) return; 

    setError('');
    setUserData(null);
    setRepos([]); 
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Kullanıcı bulunamadı!');
      }

      const data = await response.json();
      setUserData(data); 

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
      const repoData = await repoResponse.json();
      setRepos(repoData); 

    } catch (err: any) {
      setError(err.message); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="container">
      
      {/* YENİ EKLENEN ADIM: Üst Navigasyon Menüsü */}
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#24292e', borderRadius: '8px' }}>
        {/* React'ta <a> etiketi yerine <Link> kullanırız ki sayfa yenilenmesin */}
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none', fontWeight: 'bold' }}>Ana Sayfa</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Hakkında</Link>
      </nav>

      <h1>GitHub Profil Bulucu</h1>

      {/* YENİ EKLENEN ADIM: Hangi URL'de hangi kodların çalışacağını belirliyoruz */}
      <Routes>
        
        {/* URL sadece '/' ise (Ana sayfa) buradaki kodları çalıştır */}
        <Route path="/" element={
          <>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Kullanıcı adı girin..." 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
              <button onClick={handleSearch} disabled={isLoading}>
                {isLoading ? 'Aranıyor...' : 'Ara'}
              </button>
            </div>

            {isLoading && <p className="loading-message">Veriler getiriliyor, lütfen bekleyin...</p>}
            {!isLoading && error && <p className="error-message">{error}</p>}
            
            {!isLoading && userData && (
              <>
                <ProfileCard user={userData} />
                <RepoList repos={repos} />
              </>
            )}
          </>
        } />

        {/* URL '/about' ise (Hakkında sayfası) sadece About bileşenini ekrana bas */}
        <Route path="/about" element={<About />} />
        
      </Routes>
      
    </div>
  );
}

export default App;