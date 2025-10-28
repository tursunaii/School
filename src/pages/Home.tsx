import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Play, 
  Users, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Clock,
  Video
} from 'lucide-react'

export function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: BookOpen,
      title: 'Онлайн-уроки',
      description: 'Интерактивные уроки с видео и презентациями',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Award,
      title: 'Электронный дневник',
      description: 'Отслеживание оценок и прогресса обучения',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Тесты',
      description: 'Проверка знаний с мгновенными результатами',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const stats = [
    { icon: Users, label: 'Ученики', value: '10,000+' },
    { icon: BookOpen, label: 'Уроки', value: '5,000+' },
    { icon: Award, label: 'Школы', value: '500+' },
  ]

  const news = [
    {
      id: 1,
      title: 'Новый учебный год начинается!',
      excerpt: 'Добро пожаловать в SmartSchool.KG - вашу цифровую школу',
      date: '1 сентября 2024',
      image: 'https://nazarnews.org/media/news_images/2022/09/01/News_131721986498880138447087291649070187005.png'
    },
    {
      id: 2,
      title: 'Добавлены новые предметы',
      excerpt: 'Расширили список доступных предметов для изучения',
      date: '15 августа 2024',
      image: 'https://prodod.moscow/wp-content/uploads/Screenshot_1-8.jpg'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Добро пожаловать в{' '}
                  <span className="text-primary-600">SmartSchool.KG</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  Современная цифровая образовательная платформа для школ Кыргызстана. 
                  Онлайн-уроки, тесты, расписание и многое другое в одном месте.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="btn-primary flex items-center justify-center space-x-2 px-6 py-3 text-sm sm:text-base"
                >
                  <span>Начать обучение</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/subjects"
                  className="btn-secondary flex items-center justify-center space-x-2 px-6 py-3 text-sm sm:text-base"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Смотреть уроки</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video Lesson Preview */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <Link 
                      to="/lesson/1"
                      className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-105"
                    >
                      <Play className="h-12 w-12 text-primary-600 ml-1" />
                    </Link>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">Введение в алгебру</h3>
                    <p className="text-white text-sm opacity-90">Основы математики для 7 класса</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Популярный урок
                    </h3>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Новое
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Изучите основы алгебры с нашим интерактивным уроком. Подходит для начинающих учеников 7 класса.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Video className="h-4 w-4 mr-1" />
                    <span>12 минут</span>
                    <span className="mx-2">•</span>
                    <span>2,450 просмотров</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Преимущества платформы
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Все необходимые инструменты для современного образования в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Последние новости
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Следите за обновлениями и новостями платформы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100" style={{backgroundImage:`url(${item.image})`}}></div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    to="/news"
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm sm:text-base"
                  >
                    Читать далее →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/news"
              className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base px-6 py-3"
            >
              <span>Все новости</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы начать обучение?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам учеников и учителей, которые уже используют SmartSchool.KG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Зарегистрироваться
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-sm sm:text-base"
              >
                Войти в систему
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}