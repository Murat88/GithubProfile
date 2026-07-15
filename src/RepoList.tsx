// RepoList.tsx

// 1. Repo nesnesinin yapısını (Tipini) belirliyoruz
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

// 2. Bu bileşenin dışarıdan alacağı Props'u tanımlıyoruz
// Repolar bir dizi (Array) olacağı için sonuna [] ekledik.
interface RepoListProps {
  repos: Repo[];
}

function RepoList({ repos }: RepoListProps) {
  // Eğer hiç repo yoksa boşuna HTML oluşturmasın
  if (repos.length === 0) {
    return <p>Bu kullanıcının henüz açık bir projesi yok.</p>;
  }

  return (
    <div className="repo-container">
      <h3>Son Güncellenen Projeler</h3>
      <ul className="repo-list">
        {/* React'ta döngüler map() ile yapılır */}
        {repos.map((repo) => (
          // ÖNEMLİ: React her liste elemanının benzersiz bir 'key' prop'una sahip olmasını şart koşar!
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            {/* Eğer açıklama varsa göster (&& mantığı) */}
            {repo.description && <p>{repo.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;