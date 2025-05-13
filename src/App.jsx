import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center">
    <header className="w-full bg-blue-600 text-white py-4">
      <h1 className="text-3xl font-bold text-center">Estpital International Agency</h1>
    </header>
    <main className="flex flex-col items-center mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Plastik Cerrahi Rehberiniz</h2>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        Estpital ile plastik cerrahi işlemlerini keşfedin. Saç ekimi, burun estetiği, meme estetiği ve daha fazlası hakkında detaylı bilgi alın.
      </p>
      <Link to="/operasyonlar">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Operasyonları Keşfet
        </button>
      </Link>
    </main>
    <footer className="w-full bg-blue-600 text-white py-4 mt-8">
      <p className="text-center">© 2025 Estpital International Agency</p>
    </footer>
  </div>
);

const Operasyonlar = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center">
    <header className="w-full bg-blue-600 text-white py-4">
      <h1 className="text-3xl font-bold text-center">Operasyonlar</h1>
    </header>
    <main className="flex flex-col items-center mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Plastik Cerrahi İşlemleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Saç Ekimi</h3>
          <p className="text-gray-700">
            <strong>Nedir?</strong> Saç köklerinin donör bölgeden alınıp seyrek alanlara ekilmesi.<br />
            <strong>Süre:</strong> 4-8 saat.<br />
            <strong>Komplikasyonlar:</strong> Enfeksiyon, geçici şişlik.<br />
            <strong>Neden Tercih Edilir?</strong> Kalıcı ve doğal sonuçlar.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Burun Estetiği</h3>
          <p className="text-gray-700">
            <strong>Nedir?</strong> Burun şeklinin düzeltilmesi.<br />
            <strong>Süre:</strong> 1-3 saat.<br />
            <strong>Komplikasyonlar:</strong> Şişlik, morarma.<br />
            <strong>Neden Tercih Edilir?</strong> Estetik ve fonksiyonel iyileşme.
          </p>
        </div>
      </div>
    </main>
    <footer className="w-full bg-blue-600 text-white py-4 mt-8">
      <p className="text-center">© 2025 Estpital International Agency</p>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operasyonlar" element={<Operasyonlar />} />
      </Routes>
    </Router>
  );
}

export default App;
