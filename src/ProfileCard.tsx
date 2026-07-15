// ProfileCard.tsx

// App.tsx'ten dışa aktardığımız veri tipini (interface) içeri alıyoruz
import type { GitHubUser } from './App.tsx';

// YENİ EKLENEN ADIM: Bu bileşenin dışarıdan alacağı verilerin (Props) tipini tanımlıyoruz
interface ProfileCardProps {
  user: GitHubUser;
}

// YENİ EKLENEN ADIM: Bileşenimiz 'user' adında bir prop alıyor
function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img 
        src={user.avatar_url} 
        alt="Profil Resmi" 
        className="profile-image"
      />
      <h2>{user.name || 'İsimsiz Kullanıcı'}</h2>
      <p className="bio">{user.bio}</p>
      
      {/* 6. İstatistikleri yan yana göstermek için yeni div */}
      <div className="stats">
        <p><strong>Takipçi:</strong> {user.followers}</p>
        <p><strong>Repolar:</strong> {user.public_repos}</p>
      </div>
    </div>
  );
}

export default ProfileCard;