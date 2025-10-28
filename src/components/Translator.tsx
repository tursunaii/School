import { useState } from 'react';
import { motion } from 'framer-motion';
import { Languages, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export function Translator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Here you would typically implement the actual translation logic
    // For now, we'll just log the selection
    console.log(`Selected language: ${language.name}`);
  };

  return (
    <div className="relative">
      <motion.button
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Languages className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {selectedLanguage.flag} {selectedLanguage.name}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                selectedLanguage.code === language.code ? 'bg-primary-50' : ''
              }`}
              onClick={() => handleLanguageSelect(language)}
            >
              <div className="flex items-center space-x-2">
                <span>{language.flag}</span>
                <span className="font-medium text-gray-700">{language.name}</span>
              </div>
              {selectedLanguage.code === language.code && (
                <Check className="h-4 w-4 text-primary-600" />
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}