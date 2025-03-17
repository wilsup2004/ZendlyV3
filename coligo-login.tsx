import React, { useState } from 'react';
import { 
  Package, Eye, EyeOff, Mail, Lock, User, ChevronLeft, 
  Facebook, Github, ArrowRight, Sun, Moon
} from 'lucide-react';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleAuthMode = () => setIsLogin(!isLogin);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  
  // Style variables
  const primaryColor = '#4F46E5'; // Indigo
  const accentColor = '#10B981'; // Emerald
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center">
        <button className="flex items-center text-sm font-medium">
          <ChevronLeft size={18} className="mr-1" />
          Retour à l'accueil
        </button>
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Package size={40} style={{ color: primaryColor }} />
            </div>
            <h1 className="text-2xl font-bold mb-2">Bienvenue sur ColiGo</h1>
            <p className="text-sm opacity-80">
              {isLogin 
                ? "Connectez-vous pour accéder à votre compte"
                : "Créez un compte pour commencer à utiliser ColiGo"}
            </p>
          </div>
          
          <div className={`rounded-xl shadow-lg p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nom complet</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="opacity-60" />
                  </div>
                  <input
                    type="text"
                    placeholder="Votre nom et prénom"
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none`}
                  />
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="opacity-60" />
                </div>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none`}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium">Mot de passe</label>
                {isLogin && (
                  <a href="#" className="text-xs" style={{ color: primaryColor }}>
                    Mot de passe oublié ?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="opacity-60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`block w-full pl-10 pr-10 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none`}
                />
                <button 
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff size={18} className="opacity-60" /> : <Eye size={18} className="opacity-60" />}
                </button>
              </div>
            </div>
            
            <button 
              className="w-full py-2 rounded-lg flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: primaryColor }}
            >
              {isLogin ? "Se connecter" : "Créer un compte"}
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          
          <div className="relative flex items-center justify-center mb-6">
            <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
            <span className="mx-3 text-sm opacity-60">ou</span>
            <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <button className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <img src="/api/placeholder/20/20" alt="Google" className="mr-2" />
              Continuer avec Google
            </button>
            <button className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <Facebook size={20} className="mr-2 text-blue-600" />
              Continuer avec Facebook
            </button>
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={toggleAuthMode} 
              className="text-sm font-medium"
              style={{ color: primaryColor }}
            >
              {isLogin 
                ? "Pas encore de compte ? S'inscrire" 
                : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </div>
      </main>
      
      <footer className={`py-4 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="text-center text-sm opacity-70">
          <p>© 2025 ColiGo. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Aide</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;