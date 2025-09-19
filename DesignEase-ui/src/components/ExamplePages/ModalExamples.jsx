import React, { useState } from 'react';
import { ArrowLeft, Copy, X, Settings, Eye, Code, Check, AlertCircle, Info, Star, Heart, Mail, Bell, Download } from 'lucide-react';

const ModalExamples = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('examples');
  const [copiedCode, setCopiedCode] = useState(null);

  const modalExamples = [
    {
      id: 'confirmation',
      title: 'Confirmation Modal',
      description: 'Modal de confirmation avec actions',
      component: <ConfirmationModal />,
      code: `const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Confirmer l'action</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-8">
          Êtes-vous sûr de vouloir effectuer cette action ? Cette opération ne peut pas être annulée.
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'success',
      title: 'Success Modal',
      description: 'Modal de succès avec animation',
      component: <SuccessModal />,
      code: `const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600 animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Succès!</h2>
          
          <p className="text-gray-600 mb-8">
            Votre action a été effectuée avec succès. Vous pouvez continuer votre navigation.
          </p>
          
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'form',
      title: 'Form Modal',
      description: 'Modal avec formulaire intégré',
      component: <FormModal />,
      code: `const FormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Contactez-nous</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre message..."
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};`
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorphism Modal',
      description: 'Modal avec effet de verre moderne',
      component: <GlassmorphismModal />,
      code: `const GlassmorphismModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">Glassmorphism</h2>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-white/80 mb-8">
          Ce modal utilise l'effet glassmorphism pour un design moderne et élégant.
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            Fermer
          </button>
          <button
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-colors"
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'notification',
      title: 'Notification Modal',
      description: 'Modal de notification avec icône',
      component: <NotificationModal />,
      code: `const NotificationModal = ({ isOpen, onClose, type = 'info' }) => {
  if (!isOpen) return null;

  const config = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600'
    },
    success: {
      icon: Check,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    }
  };

  const Icon = config[type].icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="flex items-start space-x-4">
          <div className={\`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 \${config[type].bgColor}\`}>
            <Icon className={\`w-6 h-6 \${config[type].iconColor}\`} />
          </div>
          
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Notification
            </h2>
            <p className="text-gray-600 mb-6">
              Ceci est une notification importante que vous devez lire attentivement.
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Ignorer
              </button>
              <button
                onClick={onClose}
                className={\`px-6 py-2 text-white rounded-lg transition-colors \${config[type].buttonColor}\`}
              >
                Compris
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'image',
      title: 'Image Modal',
      description: 'Modal pour afficher des images',
      component: <ImageModal />,
      code: `const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={imageUrl || "https://via.placeholder.com/800x600"}
            alt={title}
            className="w-full h-auto max-h-[60vh] object-cover"
          />
          
          {title && (
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">
                Image affichée dans un modal élégant avec overlay sombre.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};`
    }
  ];

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Modal Examples</h1>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('examples')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'examples'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Exemples
              </button>
              <button
                onClick={() => setActiveTab('playground')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'playground'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Playground
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'examples' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modalExamples.map((example) => (
              <div key={example.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{example.title}</h3>
                  <button
                    onClick={() => copyCode(example.code, example.id)}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {copiedCode === example.id ? (
                      <span className="text-green-400 text-sm">Copié!</span>
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-400 mb-6">{example.description}</p>
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[120px]">
                  {example.component}
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 overflow-x-auto max-h-60 overflow-y-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ModalPlayground />
        )}
      </main>
    </div>
  );
};

// Composants des modals
const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
      >
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Confirmer l'action</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-8">
              Êtes-vous sûr de vouloir effectuer cette action ? Cette opération ne peut pas être annulée.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
      >
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600 animate-pulse" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Succès!</h2>
              
              <p className="text-gray-600 mb-8">
                Votre action a été effectuée avec succès. Vous pouvez continuer votre navigation.
              </p>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
      >
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl transform transition-all">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Contactez-nous</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre message..."
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const GlassmorphismModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-colors"
      >
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Glassmorphism</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-white/80 mb-8">
              Ce modal utilise l'effet glassmorphism pour un design moderne et élégant.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                Fermer
              </button>
              <button
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                Action
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NotificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors flex items-center"
      >
        <Bell className="w-4 h-4 mr-2" />
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  Notification
                </h2>
                <p className="text-gray-600 mb-6">
                  Ceci est une notification importante que vous devez lire attentivement.
                </p>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Ignorer
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Compris
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors flex items-center"
      >
        <Download className="w-4 h-4 mr-2" />
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Exemple d'image"
                className="w-full h-auto max-h-[60vh] object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Image d'exemple</h3>
                <p className="text-gray-600">
                  Image affichée dans un modal élégant avec overlay sombre.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ModalPlayground = () => {
  const [modalType, setModalType] = useState('basic');
  const [modalSize, setModalSize] = useState('md');
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [modalContent, setModalContent] = useState('Contenu du modal...');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Configuration */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Configuration</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Type de modal
            </label>
            <select
              value={modalType}
              onChange={(e) => setModalType(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="basic">Basique</option>
              <option value="confirmation">Confirmation</option>
              <option value="success">Succès</option>
              <option value="error">Erreur</option>
              <option value="info">Information</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Taille
            </label>
            <select
              value={modalSize}
              onChange={(e) => setModalSize(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sm">Petite</option>
              <option value="md">Moyenne</option>
              <option value="lg">Grande</option>
              <option value="xl">Très grande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Titre
            </label>
            <input
              type="text"
              value={modalTitle}
              onChange={(e) => setModalTitle(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Titre du modal..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contenu
            </label>
            <textarea
              value={modalContent}
              onChange={(e) => setModalContent(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contenu du modal..."
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Aperçu</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[200px]">
          <PlaygroundModal 
            type={modalType}
            size={modalSize}
            title={modalTitle}
            content={modalContent}
          />
        </div>
        
        <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-white rounded-2xl p-8 max-w-${modalSize} w-full mx-4 shadow-2xl">
    <h2 className="text-xl font-bold text-gray-900 mb-4">${modalTitle}</h2>
    <p className="text-gray-600 mb-6">${modalContent}</p>
    <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
      Action
    </button>
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const PlaygroundModal = ({ type, size, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      default: return 'max-w-md';
    }
  };

  const getTypeConfig = () => {
    switch (type) {
      case 'success':
        return { color: 'bg-green-500', icon: Check };
      case 'error':
        return { color: 'bg-red-500', icon: AlertCircle };
      case 'info':
        return { color: 'bg-blue-500', icon: Info };
      case 'confirmation':
        return { color: 'bg-yellow-500', icon: AlertCircle };
      default:
        return { color: 'bg-blue-500', icon: Info };
    }
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
      >
        Ouvrir Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className={`bg-white rounded-2xl p-8 ${getSizeClass()} w-full mx-4 shadow-2xl transform transition-all`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 ${config.color.replace('bg-', 'bg-').replace('-500', '-100')} rounded-full flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${config.color.replace('bg-', 'text-')}`} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            </div>
            
            <p className="text-gray-600 mb-6">{content}</p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 ${config.color} text-white rounded-xl hover:${config.color.replace('-500', '-600')} transition-colors`}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalExamples;
