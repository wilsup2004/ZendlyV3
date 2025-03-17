import React, { useState } from 'react';
import { 
  Package, MapPin, Search, Navigation, ArrowRight, User, Bell,
  Menu, X, TrendingUp, Shield, CreditCard, MessageCircle, Clock, Sun, Moon, Globe
} from 'lucide-react';

const ColiGoHomepage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const primaryColor = '#4F46E5'; // Indigo
  const accentColor = '#10B981'; // Emerald
  const buttonStyle = 'rounded-lg';
  const cardStyle = 'rounded-xl shadow-lg';
  
  // Composant d'en-tête
  const Header = () => (
    <header className={`w-full py-4 px-4 md:px-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} style={{ backgroundColor: darkMode ? '#121212' : '#ffffff' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Package className="text-indigo-600 mr-2" size={28} style={{ color: primaryColor }} />
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ColiGo</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Comment ça marche</a>
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Tarifs</a>
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Aide</a>
          
          <div className="flex items-center space-x-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Globe size={20} />
            </button>
            <button className={`${buttonStyle} px-4 py-2 font-medium text-white`} style={{ backgroundColor: primaryColor }}>
              Connexion
            </button>
          </div>
        </div>
        
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="p-4 flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center py-10 space-y-6">
            <a href="#" className="text-xl font-medium">Comment ça marche</a>
            <a href="#" className="text-xl font-medium">Tarifs</a>
            <a href="#" className="text-xl font-medium">Aide</a>
            <button onClick={toggleDarkMode} className="flex items-center space-x-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{darkMode ? 'Mode clair' : 'Mode sombre'}</span>
            </button>
            <button className={`${buttonStyle} px-6 py-2 w-48 text-center font-medium text-white`} style={{ backgroundColor: primaryColor }}>
              Connexion
            </button>
          </div>
        </div>
      )}
    </header>
  );
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Envoyez vos colis <span style={{ color: primaryColor }}>facilement</span> entre particuliers
            </h1>
            <p className="text-lg mb-8 opacity-80">
              Plateforme de livraison collaborative qui connecte les voyageurs aux expéditeurs. Économisez sur les frais d'envoi et contribuez à une livraison plus écologique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button className={`${buttonStyle} py-3 px-6 text-white flex items-center justify-center`} 
                      style={{ backgroundColor: primaryColor }}>
                <Package size={20} className="mr-2" />
                Envoyer un colis
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className={`${buttonStyle} py-3 px-6 flex items-center justify-center`} 
                      style={{ backgroundColor: 'transparent', border: `2px solid ${primaryColor}`, color: primaryColor }}>
                <Navigation size={20} className="mr-2" />
                Transporter des colis
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <Shield className="mr-2" size={20} style={{ color: accentColor }} />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-2" size={20} style={{ color: accentColor }} />
                <span>+20,000 livraisons</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-2" size={20} style={{ color: accentColor }} />
                <span>Support 7j/7</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last mb-8 lg:mb-0">
            <div className={`${cardStyle} overflow-hidden relative`}>
              <img src="/api/placeholder/600/400" alt="Service de livraison entre particuliers" className="w-full rounded-t-lg" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-bold text-lg">Paris → Dakar</div>
                    <div className="text-sm opacity-70">Disponible le 12 Avril</div>
                  </div>
                  <div className="font-bold" style={{ color: primaryColor }}>45€</div>
                </div>
                <div className="flex items-center">
                  <img src="/api/placeholder/40/40" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-medium">Thomas D.</div>
                    <div className="text-sm opacity-70">★★★★★ (24 avis)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${cardStyle} absolute top-1/4 -right-4 md:-right-8 w-3/4 hidden md:block`} style={{ backgroundColor: darkMode ? '#1F1F1F' : '#F9FAFB' }}>
              <div className="p-4">
                <div className="font-bold mb-2">Estimez rapidement vos frais</div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    <input 
                      type="text" 
                      placeholder="D'où ?" 
                      className={`w-full p-2 rounded bg-transparent border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} 
                    />
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    <input 
                      type="text" 
                      placeholder="Vers où ?" 
                      className={`w-full p-2 rounded bg-transparent border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} 
                    />
                  </div>
                  <button className={`${buttonStyle} p-2 text-white`} style={{ backgroundColor: primaryColor }}>
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`${cardStyle} p-6`} style={{ backgroundColor: darkMode ? '#1F1F1F' : '#F9FAFB' }}>
            <Package size={32} className="mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-xl mb-2">Envoyez partout</h3>
            <p className="opacity-80">Trouvez un voyageur qui se rend à votre destination et confiez-lui votre colis en toute sécurité.</p>
          </div>
          
          <div className={`${cardStyle} p-6`} style={{ backgroundColor: darkMode ? '#1F1F1F' : '#F9FAFB' }}>
            <CreditCard size={32} className="mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-xl mb-2">Paiement sécurisé</h3>
            <p className="opacity-80">Payez en toute confiance via nos méthodes sécurisées (PayPal, Orange Money, Stripe).</p>
          </div>
          
          <div className={`${cardStyle} p-6`} style={{ backgroundColor: darkMode ? '#1F1F1F' : '#F9FAFB' }}>
            <Clock size={32} className="mb-4" style={{ color: primaryColor }} />
            <h3 className="font-bold text-xl mb-2">Livraison rapide</h3>
            <p className="opacity-80">Profitez de délais d'expédition plus courts qu'avec les services traditionnels.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColiGoHomepage;