import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen,
  Filter,
  ChevronLeft,
  ChevronRight,
  Plus,
  Edit3,
  Trash2,
  Bell,
  Video,
  FileText,
  Award
} from 'lucide-react'

export function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week')
  const [selectedDay, setSelectedDay] = useState(new Date())

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  const lessons = [
    {
      id: 1,
      title: 'Алгебра',
      teacher: 'Айнура Кыдырбаева',
      time: '09:00',
      duration: 45,
      type: 'lesson',
      room: 'Кабинет 201',
      color: 'bg-blue-500',
      description: 'Квадратные уравнения',
      students: 25
    },
    {
      id: 2,
      title: 'Физика',
      teacher: 'Эркин Абдыкадыров',
      time: '10:00',
      duration: 45,
      type: 'lesson',
      room: 'Лаборатория 105',
      color: 'bg-green-500',
      description: 'Механика',
      students: 20
    },
    {
      id: 3,
      title: 'Кыргызский язык',
      teacher: 'Гульнара Асанова',
      time: '11:00',
      duration: 40,
      type: 'lesson',
      room: 'Кабинет 305',
      color: 'bg-purple-500',
      description: 'Грамматика',
      students: 28
    },
    {
      id: 4,
      title: 'История Кыргызстана',
      teacher: 'Токтогул Абдыкадыров',
      time: '12:00',
      duration: 45,
      type: 'lesson',
      room: 'Кабинет 102',
      color: 'bg-orange-500',
      description: 'Древняя история',
      students: 22
    },
    {
      id: 5,
      title: 'Тест по математике',
      teacher: 'Айнура Кыдырбаева',
      time: '14:00',
      duration: 60,
      type: 'test',
      room: 'Кабинет 201',
      color: 'bg-red-500',
      description: 'Контрольная работа',
      students: 25
    },
    {
      id: 6,
      title: 'Английский язык',
      teacher: 'Сара Джонсон',
      time: '15:00',
      duration: 45,
      type: 'lesson',
      room: 'Кабинет 401',
      color: 'bg-indigo-500',
      description: 'Грамматика',
      students: 18
    }
  ]

  const getWeekDates = (date: Date) => {
    const start = new Date(date)
    const day = start.getDay()
    const diff = start.getDate() - day + (day === 0 ? -6 : 1)
    start.setDate(diff)
    
    const week = []
    for (let i = 0; i < 7; i++) {
      const current = new Date(start)
      current.setDate(start.getDate() + i)
      week.push(current)
    }
    return week
  }

  const getLessonsForDay = (date: Date) => {
    // Симуляция получения уроков для конкретного дня
    return lessons.filter((_, index) => index < 3) // Показываем первые 3 урока
  }

  const getLessonsForWeek = () => {
    const weekDates = getWeekDates(currentDate)
    return weekDates.map(date => ({
      date,
      lessons: getLessonsForDay(date)
    }))
  }

  const formatTime = (time: string) => {
    return time
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="h-4 w-4" />
      case 'test': return <Award className="h-4 w-4" />
      case 'video': return <Video className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Расписание</h1>
              <p className="text-gray-600">Планируйте свое обучение и отслеживайте уроки</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Добавить урок</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Calendar Controls */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Date Navigation */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => {
                  const newDate = new Date(currentDate)
                  newDate.setDate(newDate.getDate() - 7)
                  setCurrentDate(newDate)
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button 
                onClick={() => {
                  const newDate = new Date(currentDate)
                  newDate.setDate(newDate.getDate() + 7)
                  setCurrentDate(newDate)
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('week')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'week' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Неделя
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'month' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Месяц
              </button>
            </div>
          </div>
        </motion.div>

        {/* Week View */}
        {viewMode === 'week' && (
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Week Header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {weekDays.map((day, index) => (
                <div key={index} className="p-4 text-center font-medium text-gray-700 bg-gray-50">
                  {day}
                </div>
              ))}
            </div>

            {/* Week Content */}
            <div className="grid grid-cols-7 min-h-96">
              {getWeekDates(currentDate).map((date, index) => (
                <div key={index} className="border-r border-gray-200 last:border-r-0 p-4 min-h-96">
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-gray-900">{date.getDate()}</div>
                    <div className="text-sm text-gray-500">
                      {months[date.getMonth()].slice(0, 3)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {getLessonsForDay(date).map((lesson) => (
                      <motion.div
                        key={lesson.id}
                        className={`${lesson.color} text-white p-3 rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {getLessonIcon(lesson.type)}
                          <span className="font-medium text-sm">{lesson.title}</span>
                        </div>
                        <div className="text-xs opacity-90">
                          <div className="flex items-center space-x-1 mb-1">
                            <Clock className="h-3 w-3" />
                            <span>{lesson.time} - {lesson.duration} мин</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{lesson.room}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Month View */}
        {viewMode === 'month' && (
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Месячный вид в разработке
              </h3>
              <p className="text-gray-600">
                Эта функция будет доступна в следующем обновлении
              </p>
            </div>
          </motion.div>
        )}

        {/* Today's Lessons */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Сегодняшние уроки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.slice(0, 6).map((lesson, index) => (
              <motion.div
                key={lesson.id}
                className="bg-white rounded-2xl shadow-xl p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${lesson.color} p-2 rounded-lg text-white`}>
                      {getLessonIcon(lesson.type)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">{lesson.teacher}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{lesson.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{lesson.room}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{lesson.students} учеников</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{lesson.duration} мин</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">{lesson.description}</p>

                  <div className="flex space-x-2 pt-2">
                    <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                      <Bell className="h-4 w-4" />
                      <span>Напомнить</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Edit3 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}