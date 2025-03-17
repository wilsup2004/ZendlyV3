import React, { useState } from 'react';
import { 
  CreditCard, Download, Search, Filter, ChevronDown, 
  Calendar, ArrowDownRight, ArrowUpRight, Clock,
  Package, FileText, Eye, MoreHorizontal
} from 'lucide-react';

const PaymentHistoryInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  
  // Données fictives pour les transactions
  const transactions = [
    { 
      id: "TRX-2025041245", 
      date: "12 avril 2025", 
      time: "14:23", 
      amount: 49.50, 
      type: "payment", 
      status: "completed", 
      method: "creditCard", 
      methodDetail: "Visa ****4242",
      packageId: "COL-1234",
      route: "Paris → Dakar",
      description: "Paiement pour l'envoi de colis"
    },
    { 
      id: "TRX-2025040823", 
      date: "8 avril 2025", 
      time: "10:15", 
      amount: 32.50, 
      type: "refund", 
      status: "completed", 
      method: "creditCard", 
      methodDetail: "Visa ****4242",
      packageId: "COL-1230",
      route: "Lyon → Abidjan",
      description: "Remboursement suite à l'annulation"
    },
    { 
      id: "TRX-2025032517", 
      date: "25 mars 2025", 
      time: "16:42", 
      amount: 38.00, 
      type: "payment", 
      status: "completed", 
      method: "paypal", 
      methodDetail: "PayPal",
      packageId: "COL-1225",
      route: "Paris → Alger",
      description: "Paiement pour l'envoi de colis"
    },
    { 
      id: "TRX-2025031205", 
      date: "12 mars 2025", 
      time: "09:30", 
      amount: 55.00, 
      type: "payment", 
      status: "completed", 
      method: "orangeMoney", 
      methodDetail: "Orange Money",
      packageId: "COL-1220",
      route: "Nantes → Douala",
      description: "Paiement pour l'envoi de colis"
    },
    { 
      id: "TRX-2025022218", 
      date: "22 février 2025", 
      time: "18:05", 
      amount: 44.75, 
      type: "payment", 
      status: "completed", 
      method: "creditCard", 
      methodDetail: "Mastercard ****1234",
      packageId: "COL-1215",
      route: "Marseille → Tunis",
      description: "Paiement pour l'envoi de colis"
    }
  ];
  
  // Fonction pour filtrer les transactions
  const getFilteredTransactions = () => {
    let filtered = [...transactions];
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(t => t.type === selectedType);
    }
    
    if (selectedPeriod !== 'all') {
      const today = new Date();
      let compareDate = new Date();
      
      switch (selectedPeriod) {
        case 'week':
          compareDate.setDate(today.getDate() - 7);
          break;
        case 'month':
          compareDate.setMonth(today.getMonth() - 1);
          break;
        case 'threemonths':
          compareDate.setMonth(today.getMonth() - 3);
          break;
        default:
          break;
      }
      
      // Note: This is a simplified filter, as transactions have date in string format
      // In a real app, you'd parse the date strings properly
      filtered = filtered.slice(0, 3);
    }
    
    return filtered;
  };
  
  const filteredTransactions = getFilteredTransactions();
  
  // Fonctions pour calculer les statistiques
  const getPaymentsTotal = () => {
    return transactions
      .filter(t => t.type === 'payment')
      .reduce((total, t) => total + t.amount, 0);
  };
  
  const getRefundsTotal = () => {
    return transactions
      .filter(t => t.type === 'refund')
      .reduce((total, t) => total + t.amount, 0);
  };
  
  // Fonction pour rendre l'icône de la méthode de paiement
  const renderPaymentMethodIcon = (method) => {
    switch (method) {
      case 'creditCard':
        return <CreditCard size={20} className="text-indigo-600" />;
      case 'paypal':
        return <div className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">P</div>;
      case 'orangeMoney':
        return <div className="w-5 h-5 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-xs">O</div>;
      default:
        return <CreditCard size={20} className="text-indigo-600" />;
    }
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Historique des paiements</h1>
          <p className="opacity-70">Consultez et gérez vos transactions passées</p>
        </div>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Total des paiements</h3>
              <ArrowUpRight size={20} className="text-red-500" />
            </div>
            <div className="text-2xl font-bold">{getPaymentsTotal().toFixed(2)}€</div>
            <div className="mt-1 text-sm opacity-70">Pour tous les colis envoyés</div>
          </div>
          
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Total des remboursements</h3>
              <ArrowDownRight size={20} className="text-green-500" />
            </div>
            <div className="text-2xl font-bold">{getRefundsTotal().toFixed(2)}€</div>
            <div className="mt-1 text-sm opacity-70">Pour les colis annulés</div>
          </div>
          
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Transactions</h3>
              <Clock size={20} className="text-indigo-500" />
            </div>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <div className="mt-1 text-sm opacity-70">Depuis votre inscription</div>
          </div>
        </div>
        
        {/* Recherche et filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className={`flex-1 relative flex items-center border rounded-lg p-2 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
            <Search size={20} className="ml-1 mr-2 opacity-60" />
            <input 
              type="text" 
              placeholder="Rechercher par ID, montant, destination..." 
              className={`w-full outline-none ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            />
          </div>
          
          <button 
            className={`flex items-center justify-center p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={20} className="mr-2" />
            Filtres
            <ChevronDown size={18} className="ml-1" />
          </button>
          
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <Download size={20} />
          </button>
        </div>
        
        {filterOpen && (
          <div className={`mb-6 p-4 border rounded-lg ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Période</label>
                <select 
                  className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                  <option value="all">Toutes les périodes</option>
                  <option value="week">Les 7 derniers jours</option>
                  <option value="month">Les 30 derniers jours</option>
                  <option value="threemonths">Les 3 derniers mois</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select 
                  className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">Tous les types</option>
                  <option value="payment">Paiements</option>
                  <option value="refund">Remboursements</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Méthode de paiement</label>
                <select className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                  <option>Toutes les méthodes</option>
                  <option>Carte bancaire</option>
                  <option>PayPal</option>
                  <option>Orange Money</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 space-x-3">
              <button 
                className={`px-4 py-2 border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                onClick={() => {
                  setSelectedPeriod('all');
                  setSelectedType('all');
                }}
              >
                Réinitialiser
              </button>
              <button 
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                onClick={() => setFilterOpen(false)}
              >
                Appliquer
              </button>
            </div>
          </div>
        )}
        
        {/* Tableau des transactions */}
        <div className="overflow-x-auto">
          <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm min-w-[768px]`}>
            <table className="w-full">
              <thead>
                <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <th className="text-left p-4 font-medium">Transaction</th>
                  <th className="text-left p-4 font-medium">Date & Heure</th>
                  <th className="text-left p-4 font-medium">Montant</th>
                  <th className="text-left p-4 font-medium">Méthode</th>
                  <th className="text-left p-4 font-medium">Statut</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Package size={16} className="mr-2 text-indigo-500" />
                          <span className="font-medium">{transaction.packageId}</span>
                        </div>
                        <div className="text-sm opacity-70 mt-1">{transaction.route}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{transaction.date}</div>
                      <div className="text-sm opacity-70">{transaction.time}</div>
                    </td>
                    <td className="p-4">
                      <div className={`font-medium flex items-center ${transaction.type === 'refund' ? 'text-green-500' : ''}`}>
                        {transaction.type === 'refund' ? '+ ' : ''}{transaction.amount.toFixed(2)}€
                      </div>
                      <div className="text-sm opacity-70">{transaction.type === 'payment' ? 'Paiement' : 'Remboursement'}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        {renderPaymentMethodIcon(transaction.method)}
                        <span className="ml-2">{transaction.methodDetail}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {transaction.status === 'completed' ? 'Terminé' : transaction.status}
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
                        <button className="p-1 hover:text-indigo-600" title="Plus d'options">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredTransactions.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-8 text-center">
                      <div className="flex flex-col items-center">
                        <Calendar size={48} className="mb-4 opacity-40" />
                        <p className="text-lg font-medium mb-1">Aucune transaction trouvée</p>
                        <p className="opacity-70">Essayez de modifier vos filtres ou effectuez votre première transaction</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryInterface;