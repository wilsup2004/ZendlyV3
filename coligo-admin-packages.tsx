import React, { useState } from 'react';
import { 
  Package, Search, Filter, Download, Eye, Edit, Trash,
  Check, AlertCircle, Clock, MapPin, User, ChevronDown, 
  ArrowUpRight, ArrowDownRight, MoreHorizontal
} from 'lucide-react';

const PackagesManagementContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Données colis fictives
  const packages = [
    { id: 'COL-1246', from: 'Paris', to: 'Dakar', status: 'En cours', sender: 'Thomas Dubois', carrier: 'Amadou Sow', departureDate: '12/04/2025', price: '45€' },
    { id: 'COL-1245', from: 'Lyon', to: 'Abidjan', status: 'En attente', sender: 'Sophie Martin', carrier: 'Koffi Yao', departureDate: '18/04/2025', price: '50€' },
    { id: 'COL-1244', from: 'Marseille', to: 'Tunis', status: 'En attente', sender: 'Karim Benali', carrier: 'Fatima Mansour', departureDate: '22/04/2025', price: '35€' },
    { id: 'COL-1243', from: 'Bruxelles', to: 'Casablanca', status: 'Annulé', sender: 'Julie Lefèvre', carrier: 'Rachid Alami', departureDate: '15/04/2025', price: '40€' },
    { id: 'COL-1242', from: 'Nantes', to: 'Douala', status: 'Livré', sender: 'Paul Morin', carrier: 'Jean Nkosi', departureDate: '05/04/2025', price: '55€' },
    { id: 'COL-1241', from: 'Paris', to: 'Alger', status: 'Livré', sender: 'Marie Dupont', carrier: 'Mohamed Hadj', departureDate: '28/03/2025', price: '42€' },
    { id: 'COL-1240', from: 'Bordeaux', to: 'Lomé', status: 'En cours', sender: 'Philippe Martin', carrier: 'Kodjo Anani', departureDate: '02/04/2025', price: '48€' },
    { id: 'COL-1239', from: 'Toulouse', to: 'Marrakech', status: 'Bloqué', sender: 'Antoine Lefebvre', carrier: 'Youssef El Mansouri', departureDate: '30/03/2025', price: '39€' }
  ];
  
  // Filtrer les colis par statut
  const getFilteredPackages = () => {
    if (statusFilter === 'all') return packages;
    return packages.filter(pkg => {
      return pkg.status.toLowerCase() === statusFilter.toLowerCase();
    });
  };
  
  const filteredPackages = getFilteredPackages();
  
  // Fonction pour obtenir la couleur en fonction du statut
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'en cours':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'livré':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'annulé':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'bloqué':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Gestion des colis</h1>
        
        <div className="flex items-center space-x-2">
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <Filter size={20} />
          </button>
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <Download size={20} />
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            + Ajouter un colis
          </button>
        </div>
      </div>
      
      {/* Statistiques des colis */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Total des colis</h3>
            <Package size={20} className="text-indigo-600" />
          </div>
          <div className="text-2xl font-bold">2,354</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span>+12% ce mois-ci</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">En cours</h3>
            <Clock size={20} className="text-blue-600" />
          </div>
          <div className="text-2xl font-bold">1,220</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span>+8% ce mois-ci</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Livrés</h3>
            <Check size={20} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold">3,820</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUpRight size={16} className="text-green-500 mr-1" />
            <span>+15% ce mois-ci</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Problèmes</h3>
            <AlertCircle size={20} className="text-red-600" />
          </div>
          <div className="text-2xl font-bold">275</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowDownRight size={16} className="text-red-500 mr-1" />
            <span>-2% ce mois-ci</span>
          </div>
        </div>
      </div>
      
      {/* Filtres par statut */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setStatusFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'all' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Tous
        </button>
        <button 
          onClick={() => setStatusFilter('en attente')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'en attente' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          En attente
        </button>
        <button 
          onClick={() => setStatusFilter('en cours')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'en cours' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          En cours
        </button>
        <button 
          onClick={() => setStatusFilter('livré')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'livré' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Livrés
        </button>
        <button 
          onClick={() => setStatusFilter('bloqué')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'bloqué' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Bloqués
        </button>
        <button 
          onClick={() => setStatusFilter('annulé')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'annulé' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Annulés
        </button>
      </div>
      
      {/* Barre de recherche */}
      <div className="flex items-center mb-6">
        <div className={`flex-1 relative flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
          <Search size={20} className="ml-1 mr-2 opacity-60" />
          <input 
            type="text" 
            placeholder="Rechercher un colis par ID, destination, expéditeur..." 
            className={`w-full outline-none ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          />
        </div>
      </div>
      
      {/* Tableau des colis */}
      <div className="overflow-x-auto">
        <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <table className="w-full">
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <th className="text-left p-4 font-medium">ID Colis</th>
                <th className="text-left p-4 font-medium">Trajet</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Expéditeur</th>
                <th className="text-left p-4 font-medium">Transporteur</th>
                <th className="text-left p-4 font-medium">Prix</th>
                <th className="text-left p-4 font-medium">Statut</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPackages.map((pkg) => (
                <tr key={pkg.id} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="p-4 font-medium">
                    {pkg.id}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1 text-indigo-500" />
                      <span>{pkg.from} → {pkg.to}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {pkg.departureDate}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1 opacity-70" />
                      <span>{pkg.sender}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1 opacity-70" />
                      <span>{pkg.carrier}</span>
                    </div>
                  </td>
                  <td className="p-4 font-medium">
                    {pkg.price}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(pkg.status)}`}>
                      {pkg.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:text-indigo-600" title="Voir les détails">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 hover:text-indigo-600" title="Modifier">
                        <Edit size={18} />
                      </button>
                      <button className="p-1 hover:text-red-600" title="Supprimer">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm opacity-70">
          Affichage de 1-8 sur 1 220 colis
        </div>
        
        <div className="flex items-center space-x-1">
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            Précédent
          </button>
          <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">
            1
          </button>
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            2
          </button>
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            3
          </button>
          <span className="px-3 py-1">...</span>
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            153
          </button>
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesManagementContent;