import React, { useState, useMemo } from 'react';
import { BookOpen, Grid, List, Search, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Subject {
  id: number;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  teacher: string;
  duration: number; // in minutes
  totalLessons: number;
  completedLessons: number;
  rating: number; // out of 5
  video?:string
}
export const subjectsData: Subject[] = [
  {
    id: 1,
    name: 'Алгебра',
    level: 'intermediate',
    teacher: 'Абдумуталипов Исройил',
    duration: 120,
    totalLessons: 24,
    completedLessons: 12,
    rating: 4.7,
    video:'https://youtu.be/_-SrZhXdJnc'
  },
  {
    id: 2,
    name: 'Биология',
    level: 'beginner',
    teacher: 'Жетимишова Зарина',
    duration: 90,
    totalLessons: 18,
    completedLessons: 5,
    rating: 4.5,
    video: "https://youtu.be/4ESd6VqIkCE"
    
  },
  {
    id: 3,
    name: 'Английский язык',
    level: 'advanced',
    teacher: 'Абдимиталипова Сезимай',
    duration: 150,
    totalLessons: 30,
    completedLessons: 20,
    rating: 4.9,
    video: "https://youtu.be/dQw4w9WgXcQ" // Added video URL
  },
  {
    id: 4,
    name: 'История',
    level: 'intermediate',
    teacher: 'Каныбеков Бектен',
    duration: 100,
    totalLessons: 20,
    completedLessons: 8,
    rating: 4.3,
    video: "https://youtu.be/jNQXAC9IVRw" // Added video URL
  },
  {
    id: 5,
    name: 'Физика',
    level: 'advanced',
    teacher: 'Талинова Тамина',
    duration: 140,
    totalLessons: 28,
    completedLessons: 15,
    rating: 4.8,
    video: "https://youtu.be/D5VlZ5zH6w4" // Added video URL
  },
  {
    id: 6,
    name: 'География',
    level: 'beginner',
    teacher: 'Кылычбекова Мирай',
    duration: 80,
    totalLessons: 16,
    completedLessons: 4,
    rating: 4.2,
    video: "https://youtu.be/s3V-gD1J3U8" // Added video URL
  }
];

export const Subjects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const navigate = useNavigate();
  // Example data

  const categories = [
    { id: 'all', name: 'Все предметы' },
    { id: 'math', name: 'Математика' },
    { id: 'science', name: 'Естественные науки' },
    { id: 'languages', name: 'Языки' },
    { id: 'social', name: 'Общественные науки' }
  ];

  const filteredSubjects = useMemo(() => {
    return subjectsData.filter(subject => {
      const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || 
        (activeCategory === 'math' && ['Алгебра', 'Геометрия', 'Физика', 'Математика'].some(m => subject.name.includes(m))) ||
        (activeCategory === 'science' && ['Биология', 'Химия', 'Физика', 'География'].some(s => subject.name.includes(s))) ||
        (activeCategory === 'languages' && ['Английский', 'Русский', 'Кыргызский', 'Немецкий', 'Французский'].some(l => subject.name.includes(l))) ||
        (activeCategory === 'social' && ['История', 'Обществознание', 'Право', 'Экономика'].some(s => subject.name.includes(s)));
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return 'Начальный';
      case 'intermediate': return 'Средний';
      case 'advanced': return 'Продвинутый';
      default: return level;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Предметы</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Исследуйте наши курсы и найдите подходящий предмет для изучения
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Поиск по названию..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid/List */}
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Предметы не найдены</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredSubjects.map((subject) => {
              const progress = Math.round(
                (subject.completedLessons / subject.totalLessons) * 100
              );

              return (
                <motion.div
                  key={subject.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    viewMode === 'list' ? 'flex items-center p-4' : ''
                  }`}
                  onClick={() => navigate(`/lesson/${subject.id}`)}
                >
                  <div
                    className={`${
                      viewMode === 'list' ? 'w-24 h-24 flex-shrink-0 mr-4' : 'h-48'
                    } bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center`}
                  >
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>

                  <div className={`p-5 ${viewMode === 'list' ? 'flex-grow' : ''}`}>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {getLevelText(subject.level)}
                      </span>
                    </div>

                    <p className="text-gray-600 mt-1">Преподаватель: {subject.teacher}</p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>⏱️ {subject.duration} мин</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>📚 {subject.totalLessons} уроков</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>✅ {subject.completedLessons} пройдено</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>⭐ {subject.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Прогресс обучения</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-indigo-600 h-2 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};