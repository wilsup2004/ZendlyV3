import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Search, Package, Send, 
  MoreVertical, User, MapPin, Calendar, 
  Image, Paperclip, Check, CheckCheck, Clock
} from 'lucide-react';

const MinimalistMessagingInterface = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeChat, setActiveChat] = useState('user1');
  const [messageText, setMessageText] = useState('');
  
  // Données fictives pour les conversations
  const conversations = [
    {
      id: 'user1',
      name: 'Thomas Dubois',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'Je pars demain. Je peux prendre votre colis.',
      lastMessageTime: '14:23',
      online: true,
      packageId: 'COL-1234',
      unread: 2
    },
    {
      id: 'user2',
      name: 'Sophie Martin',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'À quelle heure souhaitez-vous vous rencontrer?',
      lastMessageTime: 'Hier',
      online: false,
      packageId: 'COL-1235',
      unread: 0
    },
    {
      id: 'user3',
      name: 'Karim Benali',
      avatar: '/api/placeholder/48/48',
      lastMessage: 'Merci pour la remise du colis !',
      lastMessageTime: '23 mars',
      online: true,
      packageId: 'COL-1230',
      unread: 0
    }
  ];
  
  // Données fictives pour les messages
  const messages = {
    user1: [
      { id: 1, sender: 'user', text: 'Bonjour Thomas, j\'ai un colis à envoyer à Dakar. Seriez-vous disponible pour le prendre ?', time: '13:45', status: 'read' },
      { id: 2, sender: 'other', text: 'Bonjour ! Oui, je pars pour Dakar demain. Je peux prendre votre colis sans problème.', time: '14:02', status: 'read' },
      { id: 3, sender: 'user', text: 'Parfait ! Il s\'agit d\'un petit paquet de vêtements. Il fait environ 2kg.', time: '14:15', status: 'read' },
      { id: 4, sender: 'other', text: 'Ça me va. Avez-vous des exigences particulières pour la livraison ?', time: '14:20', status: 'read' },
      { id: 5, sender: 'other', text: 'Je pars demain. Je peux prendre votre colis.', time: '14:23', status: 'delivered' }
    ],
    user2: [
      { id: 1, sender: 'user', text: 'Bonjour Sophie, je voulais confirmer que vous êtes toujours disponible pour transporter mon colis ?', time: '10:30', status: 'read' },
      { id: 2, sender: 'other', text: 'Bonjour ! Oui, tout est prévu comme convenu. Souhaitez-vous que l\'on se retrouve à la gare ?', time: '10:45', status: 'read' },
      { id: 3, sender: 'user', text: 'Oui, la gare serait parfait. À quelle heure êtes-vous disponible ?', time: '11:00', status: 'read' },
      { id: 4, sender: 'other', text: 'À quelle heure souhaitez-vous vous rencontrer?', time: 'Hier', status: 'read' }
    ],
    user3: [
      { id: 1, sender: 'user', text: 'Bonjour Karim, avez-vous bien reçu mon colis ?', time: '22 mars, 14:30', status: 'read' },
      { id: 2, sender: 'other', text: 'Bonjour ! Oui, je l\'ai bien reçu et je le livrerai aujourd\'hui comme prévu.', time: '22 mars, 15:00', status: 'read' },
      { id: 3, sender: 'other', text: 'Je viens de livrer votre colis. Tout s\'est bien passé.', time: '22 mars, 18:45', status: 'read' },
      { id: 4, sender: 'user', text: 'Merci pour la remise du colis !', time: '23 mars, 10:15', status: 'read' }
    ]
  };
  
  const getCurrentPackageInfo = () => {
    const currentConversation = conversations.find(c => c.id === activeChat);
    if (currentConversation.packageId === 'COL-1234') {
      return {
        from: 'Paris',
        to: 'Dakar',
        date: '12 avril 2025',
        status: 'En attente'
      };
    } else if (currentConversation.packageId === 'COL-1235') {
      return {
        from: 'Lyon',
        to: 'Abidjan',
        date: '18 avril 2025',
        status: 'Confirmé'
      };
    } else {
      return {
        from: 'Marseille',
        to: 'Tunis',
        date: '22 mars 2025',
        status: 'Livré'
      };
    }
  };
  
  const handleSendMessage = () => {
    if (messageText.trim() === '') return;
    // Ici, vous ajouteriez la logique pour envoyer un message
    setMessageText('');
  };
  
  const renderMessageStatus = (status) => {
    switch(status) {
      case 'sending':
        return <Clock size={12} className="text-gray-400" />;
      case 'sent':
        return <Check size={12} className="text-gray-400" />;
      case 'delivered':
        return <CheckCheck size={12} className="text-gray-400" />;
      case 'read':
        return <CheckCheck size={12} className="text-indigo-500" />;
      default:
        return null;
    }
  };
  
  const currentPackageInfo = getCurrentPackageInfo();
  const currentConversation = conversations.find(c => c.id === activeChat);
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto h-screen flex flex-col">
        {/* En-tête */}
        <header className={`px-4 py-3 border-b flex items-center ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-center">
            <MessageCircle className="text-indigo-600 mr-2" size={24} />
            <h1 className="text-xl font-bold">Messages</h1>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Phone size={20} />
            </button>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                TD
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </header>
        
        {/* Corps principal */}
        <div className="flex-1 flex overflow-hidden">
          {/* Liste des conversations */}
          <div className={`w-80 border-r flex-shrink-0 flex flex-col ${darkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <div className="p-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className={`w-full pl-9 pr-3 py-2 rounded-full ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  } focus:outline-none`}
                />
              </div>
            </div>
            
            <div className="overflow-y-auto flex-1">
              {conversations.map(conversation => (
                <div
                  key={conversation.id}
                  className={`px-3 py-2 cursor-pointer flex items-center ${
                    activeChat === conversation.id
                      ? darkMode
                        ? 'bg-gray-700'
                        : 'bg-indigo-50'
                      : darkMode
                      ? 'hover:bg-gray-700'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveChat(conversation.id)}
                >
                  <div className="relative mr-3 flex-shrink-0">
                    <img src={conversation.avatar} alt={conversation.name} className="w-12 h-12 rounded-full" />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                        {conversation.lastMessageTime}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-sm truncate text-gray-500 dark:text-gray-400 max-w-[150px]">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Conversation active */}
          <div className="flex-1 flex flex-col">
            {/* Infos sur le colis */}
            <div className={`p-3 border-b flex items-center ${darkMode ? 'border-gray-800 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <Package size={16} className="mr-2 text-indigo-500" />
              <div className="text-sm">
                <span className="opacity-70 mr-2">{currentConversation.packageId}:</span>
                <span className="font-medium">{currentPackageInfo.from} → {currentPackageInfo.to}</span>
                <span className="ml-2 text-xs opacity-70">({currentPackageInfo.date})</span>
              </div>
              <div className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                currentPackageInfo.status === 'Livré' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : currentPackageInfo.status === 'Confirmé'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {currentPackageInfo.status}
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-indigo-50 dark:bg-gray-900">
              <div className="space-y-3">
                {messages[activeChat]?.map(message => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'other' && (
                      <img src={currentConversation.avatar} alt={currentConversation.name} className="w-8 h-8 rounded-full mr-2 self-end" />
                    )}
                    
                    <div className={`relative max-w-xs md:max-w-sm lg:max-w-md rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-none' 
                        : darkMode ? 'bg-gray-800 rounded-bl-none' : 'bg-white rounded-bl-none'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <div className={`text-xs mt-1 flex items-center justify-end ${
                        message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        <span>{message.time}</span>
                        {message.sender === 'user' && (
                          <span className="ml-1">{renderMessageStatus(message.status)}</span>
                        )}
                      </div>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 ml-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Barre de saisie de message */}
            <div className={`p-3 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Paperclip size={20} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Image size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Écrivez un message..."
                  className={`flex-1 py-2 px-3 rounded-full ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  } focus:outline-none`}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <button 
                  className={`p-2 rounded-full ${
                    messageText.trim()
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistMessagingInterface;