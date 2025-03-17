import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, Clock, Shield, BadgeCheck, Star, MessageCircle
} from 'lucide-react';

// Interface de détail d'un trajet
const TripDetailInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Mock data
  const trip = {
    id: 1,
    from: "Paris",
    to: "Dakar",
    departureDate: "12 avril 2025",
    arrivalDate: "12 avril 2025",
    price: "45€",
    capacity: "3kg max",
    description: "Je voyage avec un bagage cabine uniquement. Je peux prendre des petits colis non fragiles dans la limite de 3kg.",
    user: {
      name: "Thomas Dubois",
      avatar: "/api/placeholder/70/70",
      rating: 4.8,
      reviews: 24,
      verifiedUser: true,
      memberSince: "Avril 2023",
      responseRate: "98%",
      responseTime: "< 1 heure"
    }
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <button className="flex items-center mb-4 text-sm font-medium">
            <ArrowRight size={18} className="mr-1 transform rotate-180" />
            Retour aux résultats
          </button>
          
          <h1 className="text-2xl font-bold mb-2">{trip.from} → {trip.to}</h1>
          <p className="text-sm opacity-70 flex items-center">
            <Calendar size={16} className="mr-1" />
            Départ le {trip.departureDate}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl shadow-lg overflow-hidden mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Détails du trajet</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm opacity-70 mb-1">Départ</div>
                    <div className="font-medium">{trip.from}</div>
                    <div className="text-sm opacity-70 mt-1">{trip.departureDate}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm opacity-70 mb-1">Arrivée</div>
                    <div className="font-medium">{trip.to}</div>
                    <div className="text-sm opacity-70 mt-1">{trip.arrivalDate}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm opacity-70 mb-1">Capacité</div>
                  <div className="font-medium">{trip.capacity}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm opacity-70 mb-1">Description</div>
                  <div>{trip.description}</div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Transaction sécurisée</div>
                    <div className="text-sm opacity-70">Paiement sécurisé via notre plateforme</div>
                  </div>
                </div>
                
                <div className="border-t pt-6" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <div className="text-sm opacity-70 mb-1">Prix pour votre colis</div>
                      <div className="text-2xl font-bold text-indigo-600">{trip.price}</div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="px-4 py-2 rounded-lg border" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                        Contacter
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">
                        Réserver ce trajet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:col-span-1">
            <div className={`rounded-xl shadow-lg overflow-hidden mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={trip.user.avatar} alt={trip.user.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <div className="font-bold text-lg flex items-center">
                      {trip.user.name}
                      {trip.user.verifiedUser && (
                        <BadgeCheck size={18} className="ml-1 text-indigo-600" />
                      )}
                    </div>
                    <div className="flex items-center text-sm">
                      <Star size={14} className="mr-1 text-yellow-500" />
                      <span className="font-medium">{trip.user.rating}</span>
                      <span className="opacity-70 ml-1">({trip.user.reviews} avis)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Calendar size={18} className="mr-2 opacity-70 mt-0.5" />
                    <div>
                      <div className="font-medium">Membre depuis</div>
                      <div className="text-sm opacity-70">{trip.user.memberSince}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle size={18} className="mr-2 opacity-70 mt-0.5" />
                    <div>
                      <div className="font-medium">Taux de réponse</div>
                      <div className="text-sm opacity-70">{trip.user.responseRate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={18} className="mr-2 opacity-70 mt-0.5" />
                    <div>
                      <div className="font-medium">Temps de réponse</div>
                      <div className="text-sm opacity-70">{trip.user.responseTime}</div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 border rounded-lg font-medium" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                  Voir le profil complet
                </button>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-6">
                <h3 className="font-bold mb-4">Questions fréquentes</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium mb-1">Comment contacter le voyageur ?</div>
                    <div className="text-sm opacity-70">Cliquez sur "Contacter" pour échanger via notre messagerie sécurisée.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">Comment fonctionne le paiement ?</div>
                    <div className="text-sm opacity-70">Le paiement est sécurisé via notre plateforme et n'est versé qu'à la livraison.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">Que se passe-t-il en cas d'annulation ?</div>
                    <div className="text-sm opacity-70">Annulation gratuite jusqu'à 48h avant le départ. Consultez nos conditions.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailInterface;