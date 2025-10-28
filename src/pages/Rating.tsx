import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Target,
  Filter,
  Search,
  ChevronUp,
  ChevronDown,
  Crown,
  Zap
} from 'lucide-react'

export function Rating() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('points')

  const periods = [
    { id: 'week', label: 'Неделя' },
    { id: 'month', label: 'Месяц' },
    { id: 'year', label: 'Год' },
    { id: 'all', label: 'Все время' }
  ]

  const categories = [
    { id: 'all', label: 'Общий рейтинг' },
    { id: 'math', label: 'Математика' },
    { id: 'science', label: 'Естественные науки' },
    { id: 'language', label: 'Языки' },
    { id: 'social', label: 'Общественные науки' }
  ]

  const students = [
    {
      id: 1,
      name: 'Айбек Токтогулов',
      avatar: '/api/placeholder/40/40',
      points: 2847,
      rank: 1,
      change: 3,
      subjects: {
        math: 95,
        science: 88,
        language: 92,
        social: 90
      },
      achievements: ['Отличник', 'Математический гений'],
      school: 'Школа №1 им. Ч. Айтматова',
      grade: '11 класс',
      streak: 15
    },
    {
      id: 2,
      name: 'Айнура Кыдырбаева',
      avatar: '/api/placeholder/40/40',
      points: 2756,
      rank: 2,
      change: -1,
      subjects: {
        math: 92,
        science: 95,
        language: 89,
        social: 87
      },
      achievements: ['Ученый', 'Исследователь'],
      school: 'Школа №2',
      grade: '11 класс',
      streak: 12
    },
    {
      id: 3,
      name: 'Эркин Абдыкадыров',
      avatar: '/api/placeholder/40/40',
      points: 2634,
      rank: 3,
      change: 2,
      subjects: {
        math: 88,
        science: 93,
        language: 85,
        social: 91
      },
      achievements: ['Физик', 'Логик'],
      school: 'Лицей №3',
      grade: '10 класс',
      streak: 8
    },
    {
      id: 4,
      name: 'Гульнара Асанова',
      avatar: '/api/placeholder/40/40',
      points: 2512,
      rank: 4,
      change: 0,
      subjects: {
        math: 85,
        science: 87,
        language: 96,
        social: 88
      },
      achievements: ['Лингвист', 'Писатель'],
      school: 'Школа №1 им. Ч. Айтматова',
      grade: '11 класс',
      streak: 6
    },
    {
      id: 5,
      name: 'Токтогул Абдыкадыров',
      avatar: '/api/placeholder/40/40',
      points: 2438,
      rank: 5,
      change: -2,
      subjects: {
        math: 82,
        science: 85,
        language: 88,
        social: 94
      },
      achievements: ['Историк', 'Аналитик'],
      school: 'Школа №4',
      grade: '10 класс',
      streak: 4
    },
    {
      id: 6,
      name: 'Айгуль Мамытова',
      avatar: '/api/placeholder/40/40',
      points: 2356,
      rank: 6,
      change: 1,
      subjects: {
        math: 90,
        science: 92,
        language: 83,
        social: 86
      },
      achievements: ['Химик', 'Экспериментатор'],
      school: 'Гимназия №5',
      grade: '11 класс',
      streak: 9
    }
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />
      case 2: return <Medal className="h-6 w-6 text-gray-400" />
      case 3: return <Award className="h-6 w-6 text-orange-500" />
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>
    }
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />
    return <span className="text-gray-400">—</span>
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-500'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Рейтинг</h1>
          <p className="text-gray-600">Соревнуйтесь с другими учениками и поднимайтесь в рейтинге</p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 2nd Place */}
            {students[1] && (
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative mb-4">
                  <img
                    src={students[1].avatar}
                    alt={students[1].name}
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-gray-100 p-2 rounded-full">
                    <Medal className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{students[1].name}</h3>
                <p className="text-sm text-gray-600 mb-2">{students[1].school}</p>
                <div className="text-2xl font-bold text-gray-400 mb-2">{students[1].points}</div>
                <div className="text-sm text-gray-500">2 место</div>
              </motion.div>
            )}

            {/* 1st Place */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-xl p-6 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-4">
                <img
                  src={students[0].avatar}
                  alt={students[0].name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-white"
                />
                <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full">
                  <Crown className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{students[0].name}</h3>
              <p className="text-sm text-yellow-100 mb-2">{students[0].school}</p>
              <div className="text-3xl font-bold mb-2">{students[0].points}</div>
              <div className="text-sm text-yellow-100">1 место</div>
            </motion.div>

            {/* 3rd Place */}
            {students[2] && (
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative mb-4">
                  <img
                    src={students[2].avatar}
                    alt={students[2].name}
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{students[2].name}</h3>
                <p className="text-sm text-gray-600 mb-2">{students[2].school}</p>
                <div className="text-2xl font-bold text-orange-500 mb-2">{students[2].points}</div>
                <div className="text-sm text-gray-500">3 место</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Period Filter */}
            <div className="flex flex-wrap gap-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedPeriod === period.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
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
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="points">По баллам</option>
                <option value="rank">По месту</option>
                <option value="change">По изменению</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Rating Table */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-1">Место</div>
              <div className="col-span-4">Ученик</div>
              <div className="col-span-2">Баллы</div>
              <div className="col-span-2">Изменение</div>
              <div className="col-span-2">Школа</div>
              <div className="col-span-1">Детали</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1 flex items-center justify-center">
                    {getRankIcon(student.rank)}
                  </div>

                  {/* Student Info */}
                  <div className="col-span-4 flex items-center space-x-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.grade}</div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="col-span-2">
                    <div className="text-lg font-semibold text-gray-900">{student.points}</div>
                    <div className="text-sm text-gray-500">баллов</div>
                  </div>

                  {/* Change */}
                  <div className="col-span-2 flex items-center space-x-1">
                    {getChangeIcon(student.change)}
                    <span className={`text-sm font-medium ${getChangeColor(student.change)}`}>
                      {student.change > 0 ? `+${student.change}` : student.change}
                    </span>
                  </div>

                  {/* School */}
                  <div className="col-span-2">
                    <div className="text-sm text-gray-900">{student.school}</div>
                    <div className="text-xs text-gray-500">Стрик: {student.streak} дней</div>
                  </div>

                  {/* Details Button */}
                  <div className="col-span-1">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {index < 3 && (
                  <motion.div 
                    className="mt-4 pt-4 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Subject Scores */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Оценки по предметам</h4>
                        <div className="space-y-2">
                          {Object.entries(student.subjects).map(([subject, score]) => (
                            <div key={subject} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 capitalize">{subject}</span>
                              <span className="text-sm font-medium text-gray-900">{score}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Достижения</h4>
                        <div className="space-y-2">
                          {student.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Trophy className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Статистика</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Стрик</span>
                            <span className="text-sm font-medium text-gray-900">{student.streak} дней</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Средний балл</span>
                            <span className="text-sm font-medium text-gray-900">
                              {Math.round(Object.values(student.subjects).reduce((a, b) => a + b, 0) / Object.values(student.subjects).length)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Position */}
        <motion.div 
          className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ваше место в рейтинге</h3>
              <p className="text-white/90">Продолжайте учиться и поднимайтесь выше!</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">#15</div>
              <div className="text-sm text-white/80">из 1,247 учеников</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}