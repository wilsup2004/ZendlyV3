import React, { useState } from 'react';
import { 
  CreditCard, Search, Filter, Download, FileText, TrendingUp,
  DollarSign, ArrowDown, ArrowUp, Calendar, BarChart2,
  MoreHorizontal, Package, ChevronDown, Eye
} from 'lucide-react';

const PaymentsManagementContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('month');
  
  // Données paiements fictives
  const payments = [
    { id: 'TRX-5678', user: 'Thomas Dubois', amount: '45€', date: '12/04/2025', method: 'Carte bancaire', status: 'Réussi', packageId: 'COL-1246' },
    { id: 'TRX-5677', user: 'Sophie Martin', amount: '50€', date: '08/04/2025', method: 'PayPal', status: 'Réussi', packageId: 'COL-1245' },
    { id: 'TRX-5676', user: 'Karim Benali', amount: '35€', date: '07/04/2025', method: 'Orange Money', status: 'En attente', packageId: 'COL-1244' },
    { id: 'TRX-5675', user: 'Julie Lefèvre', amount: '40€', date: '05/04/2025', method: 'Carte bancaire', status: 'Remboursé', packageId: 'COL-1243' },
    { id: 'TRX-5674', user: 'Paul Morin', amount: '55€', date: '02/04/2025', method: 'Carte bancaire', status: 'Réussi', packageId: 'COL-1242' },
    { id: 'TRX-5673', user: 'Marie Dupont', amount: '42€', date: '28/03/2025', method: 'PayPal', status: 'Réussi', packageId: 'COL-1241' },
    { id: 'TRX-5672', user: 'Philippe Martin', amount: '48€', date: '02/04/2025', method: 'Orange Money', status: 'Réussi', packageId: 'COL-1240' },
    { id: 'TRX-5671', user: 'Antoine Lefebvre', amount: '39€', date: '30/03/2025', method: 'Carte bancaire', status: 'Échoué', packageId: 'COL-1239' }
  ];
  
  // Fonction pour obtenir la couleur en fonction du statut
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'réussi':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'remboursé':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'échoué':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };
  
  // Filtrer les paiements par statut
  const getFilteredPayments = () => {
    if (statusFilter === 'all') return payments;
    return payments.filter(payment => {
      return payment.status.toLowerCase() === statusFilter.toLowerCase();
    });
  };
  
  const filteredPayments = getFilteredPayments();
  
  // Données pour les graphiques
  const paymentMethods = [
    { method: 'Carte bancaire', percentage: 65, color: '#4F46E5' },
    { method: 'PayPal', percentage: 20, color: '#0284C7' },
    { method: 'Orange Money', percentage: 15, color: '#F97316' }
  ];
  
  const revenueData = [
    { month: 'Jan', revenue: 42500 },
    { month: 'Fév', revenue: 38700 },
    { month: 'Mar', revenue: 45200 },
    { month: 'Avr', revenue: 39800 },
    { month: 'Mai', revenue: 49100 },
    { month: 'Juin', revenue: 52400 }
  ];
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Gestion des paiements</h1>
        
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <Calendar size={20} />
          </div>
          <select 
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border`}
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value)}
          >
            <option value="week">7 derniers jours</option>
            <option value="month">30 derniers jours</option>
            <option value="quarter">3 derniers mois</option>
            <option value="year">12 derniers mois</option>
          </select>
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <Download size={20} />
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Générer un rapport
          </button>
        </div>
      </div>
      
      {/* Statistiques des paiements */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Revenus totaux</h3>
            <DollarSign size={20} className="text-green-600" />
          </div>
          <div className="text-2xl font-bold">546,284.50€</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUp size={16} className="text-green-500 mr-1" />
            <span>+15.2% vs mois dernier</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Transactions</h3>
            <CreditCard size={20} className="text-indigo-600" />
          </div>
          <div className="text-2xl font-bold">28,654</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUp size={16} className="text-green-500 mr-1" />
            <span>+8.7% vs mois dernier</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Revenus moyens</h3>
            <TrendingUp size={20} className="text-blue-600" />
          </div>
          <div className="text-2xl font-bold">45.20€</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUp size={16} className="text-green-500 mr-1" />
            <span>+3.5% vs mois dernier</span>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Taux de conversion</h3>
            <BarChart2 size={20} className="text-purple-600" />
          </div>
          <div className="text-2xl font-bold">94.8%</div>
          <div className="mt-1 text-sm flex items-center opacity-70">
            <ArrowUp size={16} className="text-green-500 mr-1" />
            <span>+1.2% vs mois dernier</span>
          </div>
        </div>
      </div>
      
      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Revenus par mois</h3>
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="h-64 flex items-end space-x-4">
            {revenueData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-indigo-600 rounded-t"
                  style={{ 
                    height: `${(data.revenue / Math.max(...revenueData.map(d => d.revenue))) * 100}%`,
                    opacity: 0.7 + (index * 0.05)
                  }}
                ></div>
                <div className="text-xs mt-2 opacity-70">{data.month}</div>
                <div className="text-xs font-medium">{(data.revenue / 1000).toFixed(1)}k€</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Méthodes de paiement</h3>
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-64">
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                {/* Donut chart */}
                {paymentMethods.map((method, index) => {
                  const offset = paymentMethods.slice(0, index).reduce((sum, m) => sum + m.percentage, 0);
                  
                  return (
                    <div 
                      key={index}
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        background: `conic-gradient(transparent ${offset * 3.6}deg, ${method.color} ${offset * 3.6}deg, ${method.color} ${(offset + method.percentage) * 3.6}deg, transparent ${(offset + method.percentage) * 3.6}deg)`,
                        clipPath: 'circle(50% at center)'
                      }}
                    ></div>
                  );
                })}
                <div 
                  className={`absolute inset-4 rounded-full flex items-center justify-center font-bold ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  100%
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: method.color }}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>{method.method}</span>
                      <span className="font-medium">{method.percentage}%</span>
                    </div>
                    <div className="mt-1 h-1 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div 
                        className="h-1 rounded-full" 
                        style={{ 
                          width: `${method.percentage}%`,
                          backgroundColor: method.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          onClick={() => setStatusFilter('réussi')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'réussi' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Réussis
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
          onClick={() => setStatusFilter('remboursé')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'remboursé' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Remboursés
        </button>
        <button 
          onClick={() => setStatusFilter('échoué')}
          className={`px-3 py-1.5 rounded-lg text-sm ${
            statusFilter === 'échoué' 
              ? 'bg-indigo-600 text-white' 
              : darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-300'
          }`}
        >
          Échoués
        </button>
      </div>
      
      {/* Barre de recherche */}
      <div className="flex items-center mb-6">
        <div className={`flex-1 relative flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
          <Search size={20} className="ml-1 mr-2 opacity-60" />
          <input 
            type="text" 
            placeholder="Rechercher une transaction par ID, utilisateur, montant..." 
            className={`w-full outline-none ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          />
        </div>
      </div>
      
      {/* Tableau des paiements */}
      <div className="overflow-x-auto">
        <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <table className="w-full">
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <th className="text-left p-4 font-medium">ID Transaction</th>
                <th className="text-left p-4 font-medium">Utilisateur</th>
                <th className="text-left p-4 font-medium">Montant</th>
                <th className="text-left p-4 font-medium">Date</th>
                <th className="text-left p-4 font-medium">Méthode</th>
                <th className="text-left p-4 font-medium">ID Colis</th>
                <th className="text-left p-4 font-medium">Statut</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="p-4 font-medium">
                    {payment.id}
                  </td>
                  <td className="p-4">
                    {payment.user}
                  </td>
                  <td className="p-4 font-medium">
                    {payment.amount}
                  </td>
                  <td className="p-4">
                    {payment.date}
                  </td>
                  <td className="p-4">
                    {payment.method}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Package size={16} className="mr-1 text-indigo-500" />
                      <span>{payment.packageId}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:text-indigo-600" title="Voir les détails">
                        <Eye size={18} />
                      </button>
                      <button className="p-1 hover:text-indigo-600" title="Télécharger le reçu">
                        <FileText size={18} />
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
          Affichage de 1-8 sur 28 654 transactions
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
            3582
          </button>
          <button className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsManagementContent;