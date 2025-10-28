import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Newspaper, 
  Calendar, 
  User, 
  Eye, 
  Heart,
  Share2,
  Bookmark,
  Filter,
  Search,
  Grid,
  List,
  Clock,
  Tag,
  ArrowRight,
  TrendingUp,
  Star
} from 'lucide-react'

export function News() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const categories = [
    { id: 'all', label: 'Все новости', count: 24 },
    { id: 'announcements', label: 'Объявления', count: 8 },
    { id: 'achievements', label: 'Достижения', count: 6 },
    { id: 'events', label: 'События', count: 5 },
    { id: 'updates', label: 'Обновления', count: 5 }
  ]

  const sortOptions = [
    { id: 'latest', label: 'Сначала новые' },
    { id: 'popular', label: 'Популярные' },
    { id: 'trending', label: 'Трендовые' }
  ]

  const news = [
    {
      id: 1,
      title: 'Новый учебный год начинается!',
      excerpt: 'Добро пожаловать в SmartSchool.KG - вашу цифровую школу. В этом году мы подготовили много интересных нововведений.',
      content: 'Полный текст новости...',
      author: 'Администрация SmartSchool',
      date: '1 сентября 2025',
      category: 'announcements',
      image: 'https://nazarnews.org/media/news_images/2022/09/01/News_131721986498880138447087291649070187005.png',
      views: 1247,
      likes: 89,
      isLiked: false,
      isBookmarked: false,
      tags: ['учеба', 'новый год', 'школа'],
      featured: true
    },
    {
      id: 2,
      title: 'Добавлены новые предметы',
      excerpt: 'Расширен список доступных предметов для изучения. Теперь доступны курсы по робототехнике и программированию.',
      content: 'Полный текст новости...',
      author: 'Команда разработки',
      date: '15 августа 2025',
      category: 'updates',
      image: 'https://gb.ru/blog/wp-content/uploads/2022/01/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F1.jpg',
      views: 892,
      likes: 67,
      isLiked: true,
      isBookmarked: true,
      tags: ['предметы', 'новые курсы', 'технологии'],
      featured: false
    },
    {
      id: 3,
      title: 'Ученик года - Айбек Токтогулов',
      excerpt: 'Поздравляем Айбека с выдающимися результатами в учебе! Он показал отличные результаты по всем предметам.',
      content: 'Полный текст новости...',
      author: 'Дирекция школы',
      date: '20 августа 2025',
      category: 'achievements',
      image: 'https://zastavki.gas-kvas.com/uploads/posts/2024-05/zastavki-gas-kvas-com-br9e-p-zastavki-uchenik-goda-6.jpg',
      views: 1563,
      likes: 124,
      isLiked: false,
      isBookmarked: false,
      tags: ['достижения', 'ученик года', 'награды'],
      featured: true
    },
    {
      id: 4,
      title: 'Онлайн-олимпиада по математике',
      excerpt: 'Приглашаем всех учеников принять участие в онлайн-олимпиаде по математике. Победители получат ценные призы.',
      content: 'Полный текст новости...',
      author: 'Организаторы олимпиады',
      date: '25 августа 2025',
      category: 'events',
      image: 'https://dist-fastdev.ngcdn.ru/directus/fbbe6b0c-0512-421a-be42-89b1d5539358.png',
      views: 743,
      likes: 45,
      isLiked: true,
      isBookmarked: true,
      tags: ['олимпиада', 'математика', 'соревнования'],
      featured: false
    },
    {
      id: 5,
      title: 'Обновление платформы v2.1',
      excerpt: 'Вышло новое обновление платформы с улучшенным интерфейсом и новыми функциями.',
      content: 'Полный текст новости...',
      author: 'Техническая команда',
      date: '30 августа 2025',
      category: 'updates',
      image: 'https://buhexpert8.ru/wp-content/uploads/2018/11/image013-35.png',
      views: 1123,
      likes: 78,
      isLiked: false,
      isBookmarked: false,
      tags: ['обновление', 'платформа', 'технологии'],
      featured: false
    },
    {
      id: 6,
      title: 'День знаний в SmartSchool',
      excerpt: 'Торжественное открытие нового учебного года с участием всех учеников и учителей.',
      content: 'Полный текст новости...',
      author: 'Организационный комитет',
      date: '1 сентября 2026',
      category: 'events',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS218UOMYVa6YijIZ0yqctjUTZyijkbbr4Stg&s',
      views: 2156,
      likes: 156,
      isLiked: true,
      isBookmarked: true,
      tags: ['день знаний', 'праздник', 'школа'],
      featured: true
    }
  ]

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = news.filter(article => article.featured)
  const regularNews = news.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Новости</h1>
          <p className="text-gray-600">Следите за последними новостями и обновлениями</p>
        </motion.div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Рекомендуемые новости
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredNews.slice(0, 2).map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative" style={{backgroundImage:`url(${article.image})`}}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="h-16 w-16 text-primary-600" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Рекомендуем
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className={`h-4 w-4 ${article.isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                      </button>
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Bookmark className={`h-4 w-4 ${article.isBookmarked ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                        <span>Читать далее</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

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
                placeholder="Поиск новостей..."
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

        {/* News Grid/List */}
        <motion.div 
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredNews.map((article, index) => (
            <motion.article
              key={article.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-video'} bg-gradient-to-br from-primary-100 to-secondary-100 relative`}  style={{backgroundImage:`url(${article.image})`}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Newspaper className="h-12 w-12 text-primary-600" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {categories.find(cat => cat.id === article.category)?.label}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className={`h-4 w-4 ${article.isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Bookmark className={`h-4 w-4 ${article.isBookmarked ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>

            
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                      <span>Читать</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

  
        {filteredNews.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Новости не найдены</h3>
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

      
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="btn-primary">
            Загрузить еще
          </button>
        </motion.div>
      </div>
    </div>
  )
}