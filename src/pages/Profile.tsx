import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit3,
  Save,
  Camera,
  Award,
  BookOpen,
  TrendingUp,
  Settings,
  Bell,
  Shield,
  Download
} from 'lucide-react'

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  const user = {
    name: 'Айбек Токтогулов',
    email: 'aibek@smartschool.kg',
    phone: '+996 555 123 456',
    school: 'Школа №1 им. Ч. Айтматова',
    grade: '11 класс',
    avatar: '/api/placeholder/150/150',
    joinDate: '1 сентября 2023',
    location: 'Бишкек, Кыргызстан'
  }

  const stats = [
    { label: 'Пройденные уроки', value: '156', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Средняя оценка', value: '4.8', icon: Award, color: 'text-green-600' },
    { label: 'Рейтинг', value: '#12', icon: TrendingUp, color: 'text-purple-600' }
  ]

  const recentActivity = [
    { action: 'Завершил урок по математике', time: '2 часа назад', type: 'lesson' },
    { action: 'Получил сертификат по физике', time: '1 день назад', type: 'certificate' },
    { action: 'Обновил профиль', time: '3 дня назад', type: 'profile' }
  ]

  const tabs = [
    { id: 'profile', label: 'Профиль', icon: User },
    { id: 'activity', label: 'Активность', icon: TrendingUp },
    { id: 'settings', label: 'Настройки', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Мой профиль</h1>
          <p className="text-gray-600">Управляйте своим аккаунтом и настройками</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.grade}</p>
                <p className="text-sm text-gray-500">{user.school}</p>
              </div>

              {/* User Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{user.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{user.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">Участник с {user.joinDate}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-gray-600">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Edit3 className="h-4 w-4" />
                  <span>Редактировать профиль</span>
                </button>
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Экспорт данных</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-xl mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Имя</label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="form-label">Телефон</label>
                        <input
                          type="tel"
                          defaultValue={user.phone}
                          className="form-input"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="form-label">Школа</label>
                        <input
                          type="text"
                          defaultValue={user.school}
                          className="form-input"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    </div>
                )}

                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Последняя активность</h3>
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-primary-100 p-2 rounded-lg">
                          <BookOpen className="h-4 w-4 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Настройки уведомлений</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Bell className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-700">Email уведомления</span>
                          </div>
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-700">SMS уведомления</span>
                          </div>
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Shield className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-700">Безопасность</span>
                          </div>
                          <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Безопасность</h3>
                      <div className="space-y-4">
                        <button className="w-full btn-secondary text-left flex items-center justify-between">
                          <span>Изменить пароль</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <button className="w-full btn-secondary text-left flex items-center justify-between">
                          <span>Двухфакторная аутентификация</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end space-x-4">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary"
                      >
                        Отмена
                      </button>
                      <button className="btn-primary flex items-center space-x-2">
                        <Save className="h-4 w-4" />
                        <span>Сохранить</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Редактировать</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}