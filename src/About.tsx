// src/About.tsx
function About() {
  return (
    <div className="profile-card" style={{ marginTop: '30px', textAlign: 'center' }}>
      <h2>Hakkında</h2>
      <p>Bu uygulama, React ve TypeScript temellerini öğrenmek amacıyla geliştirilmiştir.</p>
      <p>Kullanılan Teknolojiler:</p>
      <ul style={{ listStyleType: 'none', padding: 0, fontWeight: 'bold', color: '#0366d6' }}>
        <li>React (Hooks)</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>GitHub API</li>
      </ul>
    </div>
  );
}

export default About;