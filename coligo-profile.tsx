import React, { useState } from 'react';
import { 
  Package, MapPin, Bell, Settings, LogOut, User, Mail, Phone,
  CreditCard, Shield, Star, Edit, Menu, X, ChevronRight, Calendar,
  Camera, Sun, Moon, Globe
} from 'lucide-react';

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('informations');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  // Style variables
  const primaryColor = '#4F46E5'; // Indigo
  const accentColor = '#10B981'; // Emerald
  
  // Mock data
  const user = {
    name: "Thomas Dubois",
    email: "thomas.dubois@example.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    memberSince: "Avril 2023",
    verifications: ["Email", "Téléphone", "Pièce d'identité"],
    rating: 4.8,
    reviews: 24,
    paymentMethods: [
      { type: "Visa", last4: "4242", default: true },
      { type: "PayPal", email: "t.dubois@mail.com", default: false }
    ],
    recentTransactions: [
      { id: 1, type: "Envoi", route: "Paris → Dakar", date: "12 Mars 2025", amount: "45€", status: "Livré" },
      { id: 2, type: "Transport", route: "Bruxelles → Paris", date: "28 Fév 2025", amount: "+32€", status: "Terminé" },
      { id: 3, type: "Envoi", route: "Paris → Abidjan", date: "15 Jan 2025", amount: "38€", status: "Livré" }
    ]
  };
  
  // Composant d'en-tête
  const Header = () => (
    <header className={`w-full py-4 px-4 md:px-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} style={{ backgroundColor: darkMode ? '#121212' : '#ffffff' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Package className="text-indigo-600 mr-2" size={28} style={{ color: primaryColor }} />
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ColiGo</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Mes Colis</a>
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Mes Trajets</a>
          <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium`}>Messages</a>
          
          <div className="flex items-center space-x-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Globe size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
              TD
            </div>
          </div>
        </div>
        
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className={`md:hidden p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex flex-col space-y-3">
            <a href="#" className="flex items-center py-2">
              <span>Mes Colis</span>
            </a>
            <a href="#" className="flex items-center py-2">
              <span>Mes Trajets</span>
            </a>
            <a href="#" className="flex items-center py-2">
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center py-2">
              <span>Mon Profil</span>
            </a>
            <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} my-2`} />
            <div className="flex justify-between items-center">
              <button onClick={toggleDarkMode} className="flex items-center">
                {darkMode ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                {darkMode ? 'Mode clair' : 'Mode sombre'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Mon profil</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Gérez vos informations personnelles et vos paramètres
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Left column */}
          <div className="lg:col-span-1">
            <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6 text-center border-b" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl font-bold">
                    TD
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryColor }}>
                    <Camera size={16} />
                  </button>
                </div>
                
                <h2 className="font-bold text-lg mb-1">{user.name}</h2>
                <div className="flex items-center justify-center mb-3">
                  <MapPin size={16} className="mr-1 opacity-70" />
                  <span className="text-sm opacity-70">{user.location}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <Star size={16} style={{ color: '#F59E0B' }} className="mr-1" />
                  <span className="font-medium">{user.rating}</span>
                  <span className="text-sm opacity-70 ml-1">({user.reviews} avis)</span>
                </div>
              </div>
              
              <div className="p-4">
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveTab('informations')}
                        className={`w-full flex items-center p-3 rounded-lg ${activeTab === 'informations' ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      >
                        <User size={20} className="mr-3" />
                        <span>Informations personnelles</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('payment')}
                        className={`w-full flex items-center p-3 rounded-lg ${activeTab === 'payment' ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      >
                        <CreditCard size={20} className="mr-3" />
                        <span>Moyens de paiement</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('security')}
                        className={`w-full flex items-center p-3 rounded-lg ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      >
                        <Shield size={20} className="mr-3" />
                        <span>Sécurité</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center p-3 rounded-lg ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      >
                        <Settings size={20} className="mr-3" />
                        <span>Paramètres</span>
                      </button>
                    </li>
                  </ul>
                </nav>
                
                <div className="mt-6 pt-6 border-t" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <button className="w-full flex items-center p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
                    <LogOut size={20} className="mr-3" />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content - Right column */}
          <div className="lg:col-span-3">
            {activeTab === 'informations' && (
              <div className={`rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="px-6 py-4 border-b flex justify-between items-center" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <h2 className="font-bold text-lg">Informations personnelles</h2>
                  <button className="flex items-center text-sm font-medium p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" style={{ color: primaryColor }}>
                    <Edit size={16} className="mr-1" />
                    Modifier
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Nom complet</label>
                      <div className="font-medium">{user.name}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Adresse email</label>
                      <div className="font-medium flex items-center">
                        {user.email}
                        <Shield size={16} className="ml-2" style={{ color: accentColor }} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Numéro de téléphone</label>
                      <div className="font-medium flex items-center">
                        {user.phone}
                        <Shield size={16} className="ml-2" style={{ color: accentColor }} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Localisation</label>
                      <div className="font-medium">{user.location}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Membre depuis</label>
                      <div className="font-medium">{user.memberSince}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm opacity-70 mb-1">Vérifications</label>
                      <div className="flex flex-wrap gap-2">
                        {user.verifications.map((verification, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            <Shield size={12} className="mr-1" />
                            {verification}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className={`rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="px-6 py-4 border-b flex justify-between items-center" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <h2 className="font-bold text-lg">Moyens de paiement</h2>
                  <button className="flex items-center text-sm font-medium p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" style={{ color: primaryColor }}>
                    <CreditCard size={16} className="mr-1" />
                    Ajouter
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-8">
                    {user.paymentMethods.map((method, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border ${method.default ? 'border-indigo-500 dark:border-indigo-400' : darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            {method.type === 'Visa' && (
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold mr-3">
                                V
                              </div>
                            )}
                            {method.type === 'PayPal' && (
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold mr-3">
                                P
                              </div>
                            )}
                            <div>
                              <div className="font-medium">
                                {method.type} {method.last4 && `****${method.last4}`}
                              </div>
                              <div className="text-sm opacity-70">
                                {method.email || "Se termine le 01/27"}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {method.default && (
                              <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mr-3">Par défaut</span>
                            )}
                            <button className="text-sm opacity-70 hover:opacity-100">Modifier</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Transactions récentes</h3>
                  <div className="rounded-lg overflow-hidden border" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                    <table className="min-w-full divide-y" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                      <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Transaction</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Montant</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Statut</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                        {user.recentTransactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium">{transaction.type}</div>
                              <div className="text-sm opacity-70">{transaction.route}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: transaction.amount.includes('+') ? accentColor : '' }}>
                              {transaction.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className={`rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="px-6 py-4 border-b" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <h2 className="font-bold text-lg">Sécurité et vérifications</h2>
                </div>
                
                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Documents vérifiés</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center">
                          <Shield size={20} className="mr-3" style={{ color: accentColor }} />
                          <div>
                            <div className="font-medium">Pièce d'identité</div>
                            <div className="text-sm opacity-70">Vérifié le 02/04/2023</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center">
                          <Shield size={20} className="mr-3" style={{ color: accentColor }} />
                          <div>
                            <div className="font-medium">Email</div>
                            <div className="text-sm opacity-70">Vérifié le 01/04/2023</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="flex items-center">
                          <Shield size={20} className="mr-3" style={{ color: accentColor }} />
                          <div>
                            <div className="font-medium">Téléphone</div>
                            <div className="text-sm opacity-70">Vérifié le 01/04/2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Mot de passe et authentification</h3>
                    <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Mot de passe</div>
                          <div className="text-sm opacity-70">Dernière modification il y a 3 mois</div>
                        </div>
                        <button className="text-sm font-medium p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" style={{ color: primaryColor }}>
                          Modifier
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Préférences de confidentialité</h3>
                    <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Notifications par email</div>
                            <div className="text-sm opacity-70">Recevoir des mises à jour sur vos colis</div>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Notifications par SMS</div>
                            <div className="text-sm opacity-70">Recevoir des alertes sur votre téléphone</div>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className={`rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="px-6 py-4 border-b" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <h2 className="font-bold text-lg">Paramètres</h2>
                </div>
                
                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Préférences d'affichage</h3>
                    <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Thème sombre</div>
                            <div className="text-sm opacity-70">Activer le mode nuit</div>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer" 
                              checked={darkMode}
                              onChange={toggleDarkMode}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Langue</div>
                            <div className="text-sm opacity-70">Français</div>
                          </div>
                          <button className="text-sm font-medium p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" style={{ color: primaryColor }}>
                            Modifier
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Options du compte</h3>
                    <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="space-y-4">
                        <div>
                          <button className="text-sm font-medium">
                            Exporter mes données
                          </button>
                        </div>
                        <div>
                          <button className="text-sm text-red-600">
                            Désactiver mon compte
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;