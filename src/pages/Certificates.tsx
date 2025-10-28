import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Award, 
  Download, 
  Share2, 
  Eye, 
  Filter,
  Search,
  Grid,
  List,
  Star,
  Calendar,
  User,
  BookOpen,
  Trophy,
  CheckCircle,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react'

export function Certificates() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const categories = [
    { id: 'all', label: 'Все сертификаты', count: 8 },
    { id: 'completed', label: 'Завершенные', count: 6 },
    { id: 'in-progress', label: 'В процессе', count: 2 },
    { id: 'achievements', label: 'Достижения', count: 3 }
  ]

  const sortOptions = [
    { id: 'date', label: 'По дате' },
    { id: 'name', label: 'По названию' },
    { id: 'progress', label: 'По прогрессу' }
  ]

  const certificates = [
    {
      id: 1,
      title: 'Алгебра: Основы',
      description: 'Сертификат о прохождении курса по основам алгебры',
      teacher: 'Айнура Кыдырбаева',
      subject: 'Математика',
      date: '15 сентября 2024',
      status: 'completed',
      progress: 100,
      grade: 'A+',
      image: 'https://media.istockphoto.com/id/1265965042/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B8%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-%D0%B0%D0%BB%D0%B3%D0%B5%D0%B1%D1%80%D0%B0-%D0%B8-%D0%B3%D0%B5%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F-%D0%BD%D0%B0%D1%83%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=K_9-1h_4hEpDsAEVAq5ELnX49joznkOGnYplo8lsB5I=',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Отличник', 'Математический гений'],
      duration: '45 часов',
      lessons: 12,
      completedLessons: 12
    },
    {
      id: 2,
      title: 'Физика: Механика',
      description: 'Сертификат о прохождении курса по механике',
      teacher: 'Эркин Абдыкадыров',
      subject: 'Физика',
      date: '10 сентября 2024',
      status: 'completed',
      progress: 100,
      grade: 'A',
      image: 'https://unikum.rudn.ru/editor/%D0%B1%D0%BB%D0%BE%D0%B3/unikumm1.png',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Ученый', 'Исследователь'],
      duration: '60 часов',
      lessons: 15,
      completedLessons: 15
    },
    {
      id: 3,
      title: 'Кыргызский язык: Грамматика',
      description: 'Сертификат о прохождении курса по грамматике кыргызского языка',
      teacher: 'Гульнара Асанова',
      subject: 'Кыргызский язык',
      date: '5 сентября 2024',
      status: 'completed',
      progress: 100,
      grade: 'A+',
      image: 'https://imgv2-2-f.scribdassets.com/img/document/68778186/original/0781f2bf66/1?v=1',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Лингвист', 'Писатель'],
      duration: '40 часов',
      lessons: 10,
      completedLessons: 10
    },
    {
      id: 4,
      title: 'История Кыргызстана',
      description: 'Сертификат о прохождении курса по истории Кыргызстана',
      teacher: 'Токтогул Абдыкадыров',
      subject: 'История',
      date: '1 сентября 2024',
      status: 'completed',
      progress: 100,
      grade: 'B+',
      image: 'https://biblioteka.kg/uploads/9967-400-70-16.jpg',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Историк', 'Аналитик'],
      duration: '50 часов',
      lessons: 20,
      completedLessons: 20
    },
    {
      id: 5,
      title: 'Химия: Органическая',
      description: 'Сертификат о прохождении курса по органической химии',
      teacher: 'Айгуль Мамытова',
      subject: 'Химия',
      date: 'В процессе',
      status: 'in-progress',
      progress: 75,
      grade: null,
      image: 'https://studref.com/htm/img/33/8962/772.png',
      downloadUrl: null,
      shareUrl: null,
      achievements: [],
      duration: '55 часов',
      lessons: 18,
      completedLessons: 13
    },
    {
      id: 6,
      title: 'Английский язык: Продвинутый',
      description: 'Сертификат о прохождении продвинутого курса английского языка',
      teacher: 'Сара Джонсон',
      subject: 'Английский язык',
      date: 'В процессе',
      status: 'in-progress',
      progress: 60,
      grade: null,
      image: 'https://tefl-tesol-certificate.com/images/blog/c1/advanced-level-c1.jpg',
      downloadUrl: null,
      shareUrl: null,
      achievements: [],
      duration: '80 часов',
      lessons: 25,
      completedLessons: 15
    },
    {
      id: 7,
      title: 'Олимпиада по математике',
      description: 'Сертификат участника олимпиады по математике',
      teacher: 'Организаторы олимпиады',
      subject: 'Математика',
      date: '20 августа 2024',
      status: 'achievement',
      progress: 100,
      grade: '1 место',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGeCzF8jyu3nH-p7QNQ7oNSDTikG73x-Iqw&s',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Победитель', 'Олимпийский чемпион'],
      duration: '3 часа',
      lessons: 1,
      completedLessons: 1
    },
    {
      id: 8,
      title: 'Научная конференция',
      description: 'Сертификат участника научной конференции',
      teacher: 'Организаторы конференции',
      subject: 'Наука',
      date: '15 августа 2024',
      status: 'achievement',
      progress: 100,
      grade: 'Участник',
      image: 'https://lang.hse.ru/data/2022/01/24/1756956791/1.jpg',
      downloadUrl: '#',
      shareUrl: '#',
      achievements: ['Исследователь', 'Ученый'],
      duration: '2 дня',
      lessons: 1,
      completedLessons: 1
    }
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || cert.status === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in-progress': return 'text-blue-600 bg-blue-100'
      case 'achievement': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Завершен'
      case 'in-progress': return 'В процессе'
      case 'achievement': return 'Достижение'
      default: return 'Неизвестно'
    }
  }

  const getGradeColor = (grade: string | null) => {
    if (!grade) return 'text-gray-500'
    if (grade.includes('A+') || grade.includes('1 место')) return 'text-green-600'
    if (grade.includes('A')) return 'text-blue-600'
    if (grade.includes('B')) return 'text-yellow-600'
    return 'text-gray-600'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Сертификаты</h1>
          <p className="text-gray-600">Ваши достижения и сертификаты об обучении</p>
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
                <p className="text-sm text-gray-600">Всего сертификатов</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Завершенные</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">В процессе</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Достижения</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-purple-600" />
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
                placeholder="Поиск сертификатов..."
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

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
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

        {/* Certificates Grid/List */}
        <motion.div 
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-video'} bg-gradient-to-br from-primary-100 to-secondary-100 relative`} style={{backgroundImage:`url(${certificate.image})`}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary-600" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(certificate.status)}`}>
                    {getStatusLabel(certificate.status)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                {certificate.status === 'in-progress' && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-700">Прогресс</span>
                        <span className="text-gray-900 font-medium">{certificate.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${certificate.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{certificate.title}</h3>
                    <p className="text-gray-600 text-sm">{certificate.description}</p>
                  </div>
                  {certificate.grade && (
                    <div className={`text-right ${getGradeColor(certificate.grade)}`}>
                      <div className="text-lg font-bold">{certificate.grade}</div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {/* Teacher and Subject */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{certificate.teacher}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{certificate.subject}</span>
                    </div>
                  </div>

                  {/* Date and Duration */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{certificate.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{certificate.duration}</span>
                    </div>
                  </div>

                  {/* Progress for in-progress */}
                  {certificate.status === 'in-progress' && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-blue-700">Прогресс обучения</span>
                        <span className="text-blue-900 font-medium">
                          {certificate.completedLessons}/{certificate.lessons} уроков
                        </span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${certificate.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {certificate.achievements.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {certificate.achievements.map((achievement, idx) => (
                        <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    {certificate.downloadUrl ? (
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Скачать</span>
                      </button>
                    ) : (
                      <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                        <Target className="h-4 w-4" />
                        <span>Продолжить</span>
                      </button>
                    )}
                    {certificate.shareUrl && (
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Сертификаты не найдены</h3>
            <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска</p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
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