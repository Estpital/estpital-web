import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center font-sans">
    {/* Hero Bölümü */}
    <header className="w-full bg-blue-600 text-white py-8">
      <h1 className="text-4xl font-bold text-center">Estpital ile Güzelliğinizi Yeniden Keşfedin</h1>
      <p className="text-lg text-center mt-2">Saç Ekimi, Burun Estetiği ve Daha Fazlası için İstanbul’un Lider Kliniği</p>
      <div className="flex justify-center mt-4">
        <Link to="/randevu">
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Hemen Randevu Al
          </button>
        </Link>
      </div>
    </header>

    {/* Hizmetler Bölümü */}
    <main className="flex flex-col items-center mt-8 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Hizmetlerimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Saç Ekimi</h3>
          <p className="text-gray-700">
            Doğal ve kalıcı sonuçlar için en son teknolojiyle saç ekimi.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Burun Estetiği</h3>
          <p className="text-gray-700">
            Estetik ve fonksiyonel iyileşme için profesyonel rinoplasti.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Meme Estetiği</h3>
          <p className="text-gray-700">
            Doğal görünüm için kişiselleştirilmiş meme estetiği çözümleri.
          </p>
        </div>
      </div>

      {/* Hasta Yorumları */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Hastalarımız Ne Diyor?</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic text-center">
            “Estpital’da saç ekimi yaptırdım, sonuç harika! Doktorlar çok profesyonel ve ilgiliydi.” – Ayşe K.
          </p>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="w-full bg-blue-600 text-white py-6 mt-12">
      <div className="flex flex-col items-center">
        <p className="text-center">© 2025 Estpital International Agency</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://instagram.com" className="text-yellow-400 hover:text-yellow-500">Instagram</a>
          <a href="https://twitter.com" className="text-yellow-400 hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
);

const Operasyonlar = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center font-sans">
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
    <footer className="w-full bg-blue-600 text-white py-6 mt-12">
      <div className="flex flex-col items-center">
        <p className="text-center">© 2025 Estpital International Agency</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://instagram.com" className="text-yellow-400 hover:text-yellow-500">Instagram</a>
          <a href="https://twitter.com" className="text-yellow-400 hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
);

const Randevu = () => (
  <div className="min-h-screen bg-blue-50 flex flex-col items-center font-sans">
    <header className="w-full bg-blue-600 text-white py-4">
      <h1 className="text-3xl font-bold text-center">Randevu Al</h1>
    </header>
    <main className="flex flex-col items-center mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hızlı Randevu Formu</h2>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Adınız Soyadınız</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Adınızı girin" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">E-posta Adresiniz</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="E-posta adresinizi girin" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="service">Hangi Hizmet?</label>
          <select id="service" className="w-full p-2 border rounded">
            <option value="sac-ekimi">Saç Ekimi</option>
            <option value="burun-estetigi">Burun Estetiği</option>
            <option value="meme-estetigi">Meme Estetiği</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full">
          Gönder
        </button>
      </form>
    </main>
    <footer className="w-full bg-blue-600 text-white py-6 mt-12">
      <div className="flex flex-col items-center">
        <p className="text-center">© 2025 Estpital International Agency</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://instagram.com" className="text-yellow-400 hover:text-yellow-500">Instagram</a>
          <a href="https://twitter.com" className="text-yellow-400 hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operasyonlar" element={<Operasyonlar />} />
        <Route path="/randevu" element={<Randevu />} />
      </Routes>
    </Router>
  );
}

export default App;
