import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Clock, 
  Users, 
  Star, 
  Play,
  Filter,
  Search,
  Grid,
  List,
  Award,
  TrendingUp,
  CheckCircle,
  XCircle,
  Timer,
  Target
} from 'lucide-react'

export function Tests() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const categories = [
    { id: 'all', label: 'Все тесты', count: 24 },
    { id: 'math', label: 'Математика', count: 8 },
    { id: 'science', label: 'Естественные науки', count: 6 },
    { id: 'language', label: 'Языки', count: 5 },
    { id: 'social', label: 'Общественные науки', count: 5 }
  ]

  const difficulties = [
    { id: 'all', label: 'Все уровни' },
    { id: 'easy', label: 'Легкий' },
    { id: 'medium', label: 'Средний' },
    { id: 'hard', label: 'Сложный' }
  ]

  const tests = [
    {
      id: 1,
      title: 'Алгебра: Квадратные уравнения',
      description: 'Тест по решению квадратных уравнений и их применению',
      category: 'math',
      difficulty: 'medium',
      duration: 30,
      questions: 20,
      attempts: 156,
      rating: 4.7,
      score: 85,
      status: 'completed',
      image: 'https://thumbs.dreamstime.com/b/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%BE%D0%B2-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8-%D0%B0%D0%BB%D0%B3%D0%B5%D0%B1%D1%80%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-237396438.jpg',
      subject: 'Алгебра',
      teacher: 'Айнура Кыдырбаева',
      lastAttempt: '2 дня назад'
    },
    {
      id: 2,
      title: 'Физика: Механика',
      description: 'Основы механики, законы Ньютона и кинематика',
      category: 'science',
      difficulty: 'hard',
      duration: 45,
      questions: 25,
      attempts: 89,
      rating: 4.9,
      score: 92,
      status: 'completed',
      image: 'https://shefit-m.ru/wp-content/uploads/2020/02/s50858036.jpg',
      subject: 'Физика',
      teacher: 'Эркин Абдыкадыров',
      lastAttempt: '1 неделю назад'
    },
    {
      id: 3,
      title: 'Кыргызский язык: Грамматика',
      description: 'Тест по грамматике кыргызского языка',
      category: 'language',
      difficulty: 'easy',
      duration: 20,
      questions: 15,
      attempts: 234,
      rating: 4.6,
      score: null,
      status: 'available',
      image: 'https://new.bizdin.kg/media/book_img/Grammatika-kirgizskogo-iazyka.jpg',
      subject: 'Кыргызский язык',
      teacher: 'Гульнара Асанова',
      lastAttempt: null
    },
    {
      id: 4,
      title: 'История Кыргызстана: Древность',
      description: 'История Кыргызстана с древних времен до средних веков',
      category: 'social',
      difficulty: 'medium',
      duration: 35,
      questions: 22,
      attempts: 178,
      rating: 4.8,
      score: 78,
      status: 'completed',
      image: 'https://biblioteka.kg/uploads/ccd7147bd40098bdf6412807f3d2cae2.jpg',
      subject: 'История',
      teacher: 'Токтогул Абдыкадыров',
      lastAttempt: '3 дня назад'
    },
    {
      id: 5,
      title: 'Химия: Органические соединения',
      description: 'Тест по органической химии и реакциям',
      category: 'science',
      difficulty: 'hard',
      duration: 50,
      questions: 30,
      attempts: 67,
      rating: 4.9,
      score: null,
      status: 'locked',
      image: 'https://studme.org/htm/img/33/3122/14.png',
      subject: 'Химия',
      teacher: 'Айгуль Мамытова',
      lastAttempt: null
    },
    {
      id: 6,
      title: 'Английский язык: Грамматика',
      description: 'Тест по английской грамматике и временам',
      category: 'language',
      difficulty: 'medium',
      duration: 25,
      questions: 18,
      attempts: 312,
      rating: 4.8,
      score: 90,
      status: 'completed',
      image: 'https://igromaster.by/upload/iblock/ba8/ba8759fdd0b031a5b3b4adeaa6023788.jpg',
      subject: 'Английский язык',
      teacher: 'Сара Джонсон',
      lastAttempt: '1 день назад'
    }
  ]

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || test.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'available': return <Play className="h-5 w-5 text-primary-600" />
      case 'locked': return <XCircle className="h-5 w-5 text-gray-400" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Тесты</h1>
          <p className="text-gray-600">Проверьте свои знания и отслеживайте прогресс</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Пройдено тестов</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Средний балл</p>
                <p className="text-2xl font-bold text-gray-900">87%</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Время изучения</p>
                <p className="text-2xl font-bold text-gray-900">24ч</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Timer className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Рейтинг</p>
                <p className="text-2xl font-bold text-gray-900">#15</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск тестов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty.label}
                </button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tests Grid/List */}
        <motion.div 
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredTests.map((test, index) => (
            <motion.div
              key={test.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover ${
                viewMode === 'list' ? 'flex' : ''
              } ${test.status === 'locked' ? 'opacity-60' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-video'} bg-gradient-to-br from-primary-100 to-secondary-100 relative`} style={{backgroundImage:`url(${test.image})`}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-primary-600" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty === 'easy' ? 'Легкий' : test.difficulty === 'medium' ? 'Средний' : 'Сложный'}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  {test.status === 'locked' ? (
                    <div className="bg-gray-400 text-white p-2 rounded-full">
                      <XCircle className="h-4 w-4" />
                    </div>
                  ) : (
                    <button className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                      {getStatusIcon(test.status)}
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{test.title}</h3>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{test.rating}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Subject and Teacher */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{test.subject}</span>
                    <span>{test.teacher}</span>
                  </div>

                  {/* Test Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{test.duration} мин</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Brain className="h-4 w-4" />
                        <span>{test.questions} вопросов</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{test.attempts}</span>
                    </div>
                  </div>

                  {/* Score or Progress */}
                  {test.score !== null ? (
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-green-700 font-medium">Последний результат</span>
                        <span className="text-green-600 font-bold">{test.score}%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${test.score}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-green-600 mt-1">{test.lastAttempt}</p>
                    </div>
                  ) : test.status === 'locked' ? (
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-sm text-gray-500">Последний результат</p>
                    </div>
                  ) : (
                    <div className="bg-primary-50 rounded-lg p-3 text-center">
                      <p className="text-sm text-primary-600 font-medium">Повторить</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    {test.status === 'locked' ? (
                      <button 
                        
                        className="flex-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed">
                       <p>Повторить</p> 
                      </button>
                    ) : (
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        {test.status === 'completed' ? (
                          <>
                            <Award className="h-4 w-4" />
                            <span>Повторить</span>
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" />
                            <span>Начать тест</span>
                          </>
                        )}
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <TrendingUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTests.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Тесты не найдены</h3>
            <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска</p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedDifficulty('all')
              }}
              className="btn-primary"
            >
              Сбросить фильтры
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}