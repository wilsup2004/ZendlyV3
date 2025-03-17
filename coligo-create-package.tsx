import React, { useState } from 'react';
import { 
  MapPin, Calendar, Camera, Info, X
} from 'lucide-react';

const CreatePackageInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const nextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 3));
  };
  
  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Créer une annonce de colis</h1>
          <p className="opacity-70">Décrivez votre colis et cherchez un voyageur pour le transporter</p>
        </div>
        
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Étape {currentStep} sur 3</span>
            <span className="text-sm">{Math.round((currentStep / 3) * 100)}% complété</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div 
              className="bg-indigo-600 h-2 rounded-full" 
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Étape 1: Détails du colis */}
          {currentStep === 1 && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Informations sur le colis</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ville de départ</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <MapPin size={18} className="mr-2 opacity-60" />
                      <input 
                        type="text" 
                        placeholder="Exemple: Paris" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Ville de destination</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <MapPin size={18} className="mr-2 opacity-60" />
                      <input 
                        type="text" 
                        placeholder="Exemple: Dakar" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date d'envoi souhaitée</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <Calendar size={18} className="mr-2 opacity-60" />
                      <input 
                        type="text" 
                        placeholder="Sélectionnez une date" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                    <p className="mt-1 text-xs opacity-70">Sélectionnez la date au plus tôt pour l'envoi</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Date limite d'arrivée</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <Calendar size={18} className="mr-2 opacity-60" />
                      <input 
                        type="text" 
                        placeholder="Sélectionnez une date" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                    <p className="mt-1 text-xs opacity-70">Date limite pour la livraison du colis</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Type de colis</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {['Documents', 'Vêtements', 'Nourriture', 'Électronique'].map(type => (
                      <div 
                        key={type}
                        className={`border rounded-lg p-3 cursor-pointer hover:border-indigo-500 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                      >
                        <div className="text-center">{type}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Poids (kg)</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <input 
                        type="number" 
                        placeholder="0.5" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Longueur (cm)</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <input 
                        type="number" 
                        placeholder="20" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Prix proposé (€)</label>
                    <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                      <input 
                        type="number" 
                        placeholder="40" 
                        className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    placeholder="Décrivez votre colis, sa nature, la raison de l'envoi..."
                    rows="4"
                    className={`w-full outline-none border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}
                  ></textarea>
                  <p className="mt-1 text-xs opacity-70">Minimum 50 caractères</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}
          
          {/* Étape 2: Upload de photos */}
          {currentStep === 2 && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Photos du colis</h2>
              
              <div className="space-y-6">
                <p className="text-sm opacity-70">Ajoutez des photos de votre colis pour aider les voyageurs à comprendre ce qu'ils vont transporter.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className={`border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-40 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <Camera size={32} className="mb-2 opacity-60" />
                    <div className="text-center">
                      <div className="font-medium text-indigo-600">Ajouter une photo</div>
                      <div className="text-xs opacity-70">JPG, PNG ou HEIC</div>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden h-40">
                    <img src="/api/placeholder/200/160" alt="Colis" className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white">
                      <X size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start dark:bg-blue-900 dark:text-blue-200">
                  <Info size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Conseils pour de bonnes photos</div>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Prenez des photos dans un endroit bien éclairé</li>
                      <li>Montrez clairement les dimensions du colis</li>
                      <li>Incluez une photo de l'emballage si disponible</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  onClick={prevStep}
                  className="px-6 py-2 border rounded-lg font-medium"
                  style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}
                >
                  Retour
                </button>
                <button 
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}
          
          {/* Étape 3: Récapitulatif et paiement */}
          {currentStep === 3 && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Récapitulatif et paiement</h2>
              
              <div className="space-y-6">
                <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className="font-medium mb-3">Résumé de votre annonce</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="opacity-70">Trajet</div>
                      <div className="font-medium">Paris → Dakar</div>
                    </div>
                    
                    <div>
                      <div className="opacity-70">Dates</div>
                      <div className="font-medium">Entre le 15 avril et le 25 avril 2025</div>
                    </div>
                    
                    <div>
                      <div className="opacity-70">Type de colis</div>
                      <div className="font-medium">Vêtements</div>
                    </div>
                    
                    <div>
                      <div className="opacity-70">Dimensions</div>
                      <div className="font-medium">0.5 kg, 20 cm</div>
                    </div>
                    
                    <div>
                      <div className="opacity-70">Prix proposé</div>
                      <div className="font-medium text-indigo-600">40€</div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className="font-medium mb-3">Frais de service</h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between">
                      <span>Prix proposé</span>
                      <span>40.00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frais de service (10%)</span>
                      <span>4.00€</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>44.00€</span>
                    </div>
                  </div>
                  
                  <p className="text-sm opacity-70">Les frais de service permettent de sécuriser votre transaction et de financer notre plateforme.</p>
                </div>
                
                <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className="font-medium mb-3">Méthode de paiement</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="paypal" name="payment" className="mr-2" defaultChecked />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="stripe" name="payment" className="mr-2" />
                      <label htmlFor="stripe">Carte bancaire (Stripe)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="orange" name="payment" className="mr-2" />
                      <label htmlFor="orange">Orange Money</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  onClick={prevStep}
                  className="px-6 py-2 border rounded-lg font-medium"
                  style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}
                >
                  Retour
                </button>
                <button 
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  Publier l'annonce
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePackageInterface;