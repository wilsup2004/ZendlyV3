import React, { useState } from 'react';
import { 
  Package, MapPin, ChevronDown, Search, Calendar, BadgeCheck, Star
} from 'lucide-react';

// Interface de recherche et liste des trajets disponibles
const SearchTripsInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('tous');
  
  // Mock data
  const trips = [
    { id: 1, from: "Paris", to: "Dakar", date: "12 avril", price: "45€", user: "Thomas D.", rating: 4.8, verifiedUser: true, avatar: "/api/placeholder/40/40", capacity: "3kg" },
    { id: 2, from: "Lyon", to: "Abidjan", date: "18 avril", price: "50€", user: "Sophie M.", rating: 4.5, verifiedUser: true, avatar: "/api/placeholder/40/40", capacity: "5kg" },
    { id: 3, from: "Marseille", to: "Tunis", date: "22 avril", price: "35€", user: "Karim B.", rating: 4.8, verifiedUser: true, avatar: "/api/placeholder/40/40", capacity: "2kg" },
    { id: 4, from: "Bruxelles", to: "Casablanca", date: "15 avril", price: "40€", user: "Julie L.", rating: 4.7, verifiedUser: false, avatar: "/api/placeholder/40/40", capacity: "4kg" },
    { id: 5, from: "Nantes", to: "Douala", date: "19 avril", price: "55€", user: "Paul M.", rating: 4.9, verifiedUser: true, avatar: "/api/placeholder/40/40", capacity: "3kg" },
    { id: 6, from: "Paris", to: "Alger", date: "25 avril", price: "38€", user: "Sarah K.", rating: 4.6, verifiedUser: true, avatar: "/api/placeholder/40/40", capacity: "2kg" }
  ];
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Search bar */}
        <div className={`rounded-xl shadow-lg p-6 mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-bold mb-4">Rechercher des voyageurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Départ</label>
              <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                <MapPin size={20} className="mr-2 opacity-60" />
                <input 
                  type="text" 
                  placeholder="Ville de départ" 
                  className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                  defaultValue="Paris"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Destination</label>
              <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                <MapPin size={20} className="mr-2 opacity-60" />
                <input 
                  type="text" 
                  placeholder="Ville d'arrivée" 
                  className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`} 
                  defaultValue="Dakar"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Date</label>
              <div className={`flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300'}`}>
                <Calendar size={20} className="mr-2 opacity-60" />
                <input 
                  type="text" 
                  placeholder="Date de voyage" 
                  className={`w-full outline-none ${darkMode ? 'bg-gray-700' : 'bg-white'}`} 
                  defaultValue="12 - 20 avril"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center">
              <Search size={18} className="mr-2" />
              Rechercher
            </button>
            
            <button className={`px-4 py-2 rounded-lg border flex items-center ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              Filtres avancés
              <ChevronDown size={18} className="ml-1" />
            </button>
          </div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex overflow-x-auto space-x-2 mb-6">
          {['tous', 'recommandés', 'vérifiés', 'prix bas', 'capacité élevée'].map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg ${activeFilter === filter ? 'bg-indigo-600 text-white' : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {trips.map(trip => (
            <div key={trip.id} className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-4 border-b" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-lg">{trip.from} → {trip.to}</div>
                    <div className="text-sm opacity-70 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {trip.date}
                    </div>
                  </div>
                  <div className="font-bold text-lg text-indigo-600">{trip.price}</div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img src={trip.avatar} alt={trip.user} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-medium flex items-center">
                        {trip.user}
                        {trip.verifiedUser && (
                          <BadgeCheck size={16} className="ml-1 text-indigo-600" />
                        )}
                      </div>
                      <div className="text-sm opacity-70 flex items-center">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {trip.rating}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {trip.capacity}
                  </div>
                </div>
                
                <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium">
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-6 py-2 border rounded-lg font-medium flex items-center" style={{ borderColor: darkMode ? '#333333' : '#E5E7EB' }}>
            Voir plus de résultats
            <ChevronDown size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTripsInterface;