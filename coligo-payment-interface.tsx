import React, { useState } from 'react';
import { 
  CreditCard, CheckCircle, Lock, ChevronRight, ArrowLeft, 
  AlertCircle, Copy, Shield, Check, Trash, Edit, Plus,
  Clock, Calendar
} from 'lucide-react';

const PaymentInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
  const [showSavedPaymentMethods, setShowSavedPaymentMethods] = useState(false);
  
  // Données fictives pour le colis à payer
  const packageData = {
    id: "COL-1234",
    from: "Paris",
    to: "Dakar", 
    carrier: "Thomas Dubois",
    departureDate: "12 avril 2025",
    price: 45,
    weight: "2.3kg",
    serviceFee: 4.50,
    total: 49.50
  };
  
  // Méthodes de paiement sauvegardées
  const savedPaymentMethods = [
    { id: 1, type: 'creditCard', brand: 'Visa', last4: '4242', expiry: '03/26', isDefault: true },
    { id: 2, type: 'paypal', email: 'utilisateur@exemple.com', isDefault: false }
  ];
  
  const handleNext = () => {
    setCurrentStep(step => Math.min(step + 1, 3));
  };
  
  const handlePrevious = () => {
    setCurrentStep(step => Math.max(step - 1, 1));
  };
  
  const getStepTitle = (step) => {
    switch (step) {
      case 1: return "Choisir le mode de paiement";
      case 2: return "Détails du paiement";
      case 3: return "Confirmation";
      default: return "";
    }
  };
  
  const renderPaymentMethodIcon = (type) => {
    switch (type) {
      case 'creditCard':
        return <CreditCard className="text-indigo-600" size={24} />;
      case 'paypal':
        return <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">P</div>;
      case 'orangeMoney':
        return <div className="w-6 h-6 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-xs">O</div>;
      default:
        return <CreditCard className="text-indigo-600" size={24} />;
    }
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button 
          onClick={handlePrevious}
          className={`flex items-center mb-6 text-sm ${currentStep === 1 ? 'invisible' : ''}`}
        >
          <ArrowLeft size={16} className="mr-1" />
          Retour
        </button>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Paiement sécurisé</h1>
          <p className="opacity-70">Étape {currentStep} - {getStepTitle(currentStep)}</p>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step 
                    ? 'bg-indigo-600 text-white' 
                    : darkMode ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > step ? <Check size={16} /> : step}
                </div>
                {step < 3 && (
                  <div className={`h-1 w-24 md:w-36 lg:w-48 ${
                    currentStep > step ? 'bg-indigo-600' : darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Step 1: Choose Payment Method */}
        {currentStep === 1 && (
          <div>
            <div className={`p-6 rounded-xl mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="border-b pb-4 mb-4" style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}>
                <h2 className="text-lg font-semibold mb-1">Récapitulatif de la commande</h2>
                <p className="text-sm opacity-70">Vérifiez les détails avant de procéder au paiement</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm opacity-70 mb-1">Colis</div>
                  <div className="font-medium">{packageData.id}</div>
                </div>
                <div>
                  <div className="text-sm opacity-70 mb-1">Trajet</div>
                  <div className="font-medium">{packageData.from} → {packageData.to}</div>
                </div>
                <div>
                  <div className="text-sm opacity-70 mb-1">Transporteur</div>
                  <div className="font-medium">{packageData.carrier}</div>
                </div>
                <div>
                  <div className="text-sm opacity-70 mb-1">Date de départ</div>
                  <div className="font-medium">{packageData.departureDate}</div>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-4" style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}>
                <div className="flex justify-between mb-2">
                  <span>Prix du transport</span>
                  <span>{packageData.price.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Frais de service</span>
                  <span>{packageData.serviceFee.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-indigo-600">{packageData.total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <h2 className="text-lg font-semibold mb-4">Choisir votre mode de paiement</h2>
              
              {savedPaymentMethods.length > 0 && !showSavedPaymentMethods && (
                <button
                  className="w-full mb-4 p-4 border rounded-lg flex justify-between items-center"
                  style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}
                  onClick={() => setShowSavedPaymentMethods(true)}
                >
                  <div className="flex items-center">
                    {renderPaymentMethodIcon(savedPaymentMethods[0].type)}
                    <span className="ml-3">
                      {savedPaymentMethods[0].type === 'creditCard' 
                        ? `${savedPaymentMethods[0].brand} ****${savedPaymentMethods[0].last4}`
                        : savedPaymentMethods[0].email}
                    </span>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      Par défaut
                    </span>
                  </div>
                  <ChevronRight size={20} />
                </button>
              )}
              
              {showSavedPaymentMethods && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Méthodes de paiement sauvegardées</h3>
                    <button 
                      className="text-sm text-indigo-600"
                      onClick={() => setShowSavedPaymentMethods(false)}
                    >
                      Fermer
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {savedPaymentMethods.map(method => (
                      <div
                        key={method.id}
                        className={`p-3 border rounded-lg flex justify-between items-center cursor-pointer ${
                          selectedPaymentMethod === method.type && method.isDefault ? 'border-indigo-600' : ''
                        }`}
                        style={{borderColor: method.isDefault && selectedPaymentMethod === method.type ? '#4F46E5' : darkMode ? '#374151' : '#E5E7EB'}}
                        onClick={() => setSelectedPaymentMethod(method.type)}
                      >
                        <div className="flex items-center">
                          <div className="mr-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedPaymentMethod === method.type && method.isDefault
                                ? 'border-indigo-600' 
                                : darkMode ? 'border-gray-400' : 'border-gray-500'
                            }`}>
                              {selectedPaymentMethod === method.type && method.isDefault && (
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {renderPaymentMethodIcon(method.type)}
                            <div className="ml-3">
                              {method.type === 'creditCard' ? (
                                <>
                                  <div className="font-medium">{method.brand} ****{method.last4}</div>
                                  <div className="text-xs opacity-70">Expire {method.expiry}</div>
                                </>
                              ) : (
                                <div className="font-medium">{method.email}</div>
                              )}
                            </div>
                            {method.isDefault && (
                              <span className="ml-3 text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                Par défaut
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-500 hover:text-indigo-600">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-red-600">
                            <Trash size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full p-3 border border-dashed rounded-lg flex items-center justify-center" style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}>
                      <Plus size={18} className="mr-2" />
                      <span>Ajouter une méthode de paiement</span>
                    </button>
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <div
                  className={`p-4 border rounded-lg flex items-center cursor-pointer ${
                    selectedPaymentMethod === 'creditCard' && !showSavedPaymentMethods ? 'border-indigo-600' : ''
                  }`}
                  style={{borderColor: selectedPaymentMethod === 'creditCard' && !showSavedPaymentMethods ? '#4F46E5' : darkMode ? '#374151' : '#E5E7EB'}}
                  onClick={() => {
                    setSelectedPaymentMethod('creditCard');
                    setShowSavedPaymentMethods(false);
                  }}
                >
                  <div className="mr-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === 'creditCard' && !showSavedPaymentMethods
                        ? 'border-indigo-600' 
                        : darkMode ? 'border-gray-400' : 'border-gray-500'
                    }`}>
                      {selectedPaymentMethod === 'creditCard' && !showSavedPaymentMethods && (
                        <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                      )}
                    </div>
                  </div>
                  
                  <CreditCard size={24} className="mr-3 text-indigo-600" />
                  <div>
                    <div className="font-medium">Carte bancaire</div>
                    <div className="text-xs opacity-70">Visa, Mastercard, etc.</div>
                  </div>
                </div>
                
                <div
                  className={`p-4 border rounded-lg flex items-center cursor-pointer ${
                    selectedPaymentMethod === 'paypal' && !showSavedPaymentMethods ? 'border-indigo-600' : ''
                  }`}
                  style={{borderColor: selectedPaymentMethod === 'paypal' && !showSavedPaymentMethods ? '#4F46E5' : darkMode ? '#374151' : '#E5E7EB'}}
                  onClick={() => {
                    setSelectedPaymentMethod('paypal');
                    setShowSavedPaymentMethods(false);
                  }}
                >
                  <div className="mr-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === 'paypal' && !showSavedPaymentMethods
                        ? 'border-indigo-600' 
                        : darkMode ? 'border-gray-400' : 'border-gray-500'
                    }`}>
                      {selectedPaymentMethod === 'paypal' && !showSavedPaymentMethods && (
                        <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs mr-3">P</div>
                  <div>
                    <div className="font-medium">PayPal</div>
                    <div className="text-xs opacity-70">Paiement rapide et sécurisé</div>
                  </div>
                </div>
                
                <div
                  className={`p-4 border rounded-lg flex items-center cursor-pointer ${
                    selectedPaymentMethod === 'orangeMoney' ? 'border-indigo-600' : ''
                  }`}
                  style={{borderColor: selectedPaymentMethod === 'orangeMoney' ? '#4F46E5' : darkMode ? '#374151' : '#E5E7EB'}}
                  onClick={() => {
                    setSelectedPaymentMethod('orangeMoney');
                    setShowSavedPaymentMethods(false);
                  }}
                >
                  <div className="mr-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === 'orangeMoney'
                        ? 'border-indigo-600' 
                        : darkMode ? 'border-gray-400' : 'border-gray-500'
                    }`}>
                      {selectedPaymentMethod === 'orangeMoney' && (
                        <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-6 h-6 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-xs mr-3">O</div>
                  <div>
                    <div className="font-medium">Orange Money</div>
                    <div className="text-xs opacity-70">Paiement mobile</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-sm opacity-70">
                  <Lock size={16} className="mr-2" />
                  <span>Paiement sécurisé et crypté</span>
                </div>
                
                <button 
                  className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium" 
                  onClick={handleNext}
                >
                  Continuer
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Payment Details */}
        {currentStep === 2 && (
          <div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <h2 className="text-lg font-semibold mb-4">
                {selectedPaymentMethod === 'creditCard' && "Détails de carte bancaire"}
                {selectedPaymentMethod === 'paypal' && "Se connecter à PayPal"}
                {selectedPaymentMethod === 'orangeMoney' && "Paiement via Orange Money"}
              </h2>
              
              {selectedPaymentMethod === 'creditCard' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Numéro de carte</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                        placeholder="1234 5678 9012 3456" 
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <CreditCard size={20} className="opacity-60" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Date d'expiration</label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                        placeholder="MM/AA" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Code de sécurité (CVC)</label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                        placeholder="123" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom sur la carte</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="Jean Dupont" 
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="saveCard" className="mr-2" />
                    <label htmlFor="saveCard" className="text-sm">Sauvegarder cette carte pour les prochains paiements</label>
                  </div>
                </div>
              )}
              
              {selectedPaymentMethod === 'paypal' && (
                <div className="flex flex-col items-center p-4">
                  <div className="w-16 h-16 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-2xl mb-4">P</div>
                  <p className="text-center mb-4">Vous allez être redirigé vers PayPal pour finaliser le paiement de <strong>{packageData.total.toFixed(2)}€</strong></p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium w-full md:w-64 mb-3">
                    Continuer vers PayPal
                  </button>
                  <p className="text-xs text-center opacity-70">Ne fermez pas cette fenêtre pendant la transaction</p>
                </div>
              )}
              
              {selectedPaymentMethod === 'orangeMoney' && (
                <div className="flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-2xl">O</div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Numéro de téléphone</label>
                    <input 
                      type="tel" 
                      className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="+221 XX XXX XX XX" 
                    />
                    <p className="mt-1 text-xs opacity-70">Entrez le numéro associé à votre compte Orange Money</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4 flex items-start">
                    <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Comment ça marche</p>
                      <p className="text-sm">1. Entrez votre numéro de téléphone</p>
                      <p className="text-sm">2. Vous recevrez un code par SMS</p>
                      <p className="text-sm">3. Entrez ce code pour confirmer le paiement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="saveOrangeMoney" className="mr-2" />
                    <label htmlFor="saveOrangeMoney" className="text-sm">Sauvegarder ce numéro pour les prochains paiements</label>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-sm opacity-70">
                  <Shield size={16} className="mr-2" />
                  <span>Vos données de paiement sont sécurisées</span>
                </div>
                
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
                  <button 
                    className="px-6 py-3 border rounded-lg font-medium order-2 md:order-1"
                    style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}
                    onClick={handlePrevious}
                  >
                    Retour
                  </button>
                  <button 
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium order-1 md:order-2" 
                    onClick={handleNext}
                  >
                    {selectedPaymentMethod === 'creditCard' ? 'Payer' : 'Continuer'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm flex flex-col items-center text-center`}>
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200 flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            
            <h2 className="text-xl font-bold mb-2">Paiement confirmé !</h2>
            <p className="mb-6 opacity-80">Votre paiement de {packageData.total.toFixed(2)}€ a été traité avec succès.</p>
            
            <div className={`w-full p-4 rounded-lg border mb-6 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm opacity-70">Numéro de transaction</span>
                <div className="flex items-center">
                  <span className="font-mono mr-2">TRX-2025041245</span>
                  <button className="p-1 hover:text-indigo-600">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm opacity-70">Méthode de paiement</span>
                <div className="flex items-center">
                  {selectedPaymentMethod === 'creditCard' && "Visa ****4242"}
                  {selectedPaymentMethod === 'paypal' && "PayPal"}
                  {selectedPaymentMethod === 'orangeMoney' && "Orange Money"}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-70">Date</span>
                <span>12 avril 2025, 14:23</span>
              </div>
            </div>
            
            <p className="mb-2 text-sm">Un reçu a été envoyé à votre adresse email</p>
            <p className="mb-8 text-sm opacity-70">Vous pourrez retrouver ce paiement dans votre historique de transactions.</p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <button className="px-6 py-3 border rounded-lg font-medium" style={{borderColor: darkMode ? '#374151' : '#E5E7EB'}}>
                Voir les détails
              </button>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium">
                Retourner à l'accueil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentInterface;