import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  CreditCard,
  Banknote,
  Target,
  Award,
  Star,
  Users,
  BookOpen,
  Clock,
  Download,
  Share2,
  Filter,
  Search,
  Plus,
  Minus,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info
} from 'lucide-react'

export function Monetization() {
  const [activeTab, setActiveTab] = useState('earnings')
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const tabs = [
    { id: 'earnings', label: 'Заработок', icon: DollarSign },
    { id: 'withdrawals', label: 'Выплаты', icon: CreditCard },
    { id: 'analytics', label: 'Аналитика', icon: TrendingUp },
    { id: 'settings', label: 'Настройки', icon: Target }
  ]

  const periods = [
    { id: 'week', label: 'Неделя' },
    { id: 'month', label: 'Месяц' },
    { id: 'quarter', label: 'Квартал' },
    { id: 'year', label: 'Год' }
  ]

  const earnings = [
    {
      id: 1,
      title: 'Завершение урока по математике',
      amount: 50,
      type: 'lesson',
      date: '15 сентября 2025',
      status: 'completed',
      description: 'Бонус за отличное выполнение задания'
    },
    {
      id: 2,
      title: 'Участие в олимпиаде',
      amount: 200,
      type: 'achievement',
      date: '10 сентября 2025',
      status: 'completed',
      description: 'Приз за 1 место в олимпиаде по физике'
    },
    {
      id: 3,
      title: 'Помощь одноклассникам',
      amount: 25,
      type: 'help',
      date: '8 сентября 2025',
      status: 'completed',
      description: 'Бонус за помощь в решении задач'
    },
    {
      id: 4,
      title: 'Еженедельный бонус',
      amount: 100,
      type: 'bonus',
      date: '1 сентября 2025',
      status: 'completed',
      description: 'Бонус за активность в течение недели'
    },
    {
      id: 5,
      title: 'Создание контента',
      amount: 75,
      type: 'content',
      date: '28 августа 2025',
      status: 'pending',
      description: 'Создание учебного материала по химии'
    }
  ]

  const withdrawals = [
    {
      id: 1,
      amount: 500,
      date: '10 сентября 2025',
      status: 'completed',
      method: 'Банковская карта',
      account: '**** 1234'
    },
    {
      id: 2,
      amount: 300,
      date: '1 сентября 2025',
      status: 'pending',
      method: 'Электронный кошелек',
      account: 'wallet@example.com'
    },
    {
      id: 3,
      amount: 750,
      date: '25 августа 2025',
      status: 'completed',
      method: 'Банковская карта',
      account: '**** 5678'
    }
  ]

  const analytics = {
    totalEarnings: 1250,
    monthlyEarnings: 375,
    weeklyEarnings: 95,
    averagePerDay: 12.5,
    topSource: 'Уроки',
    growthRate: 15.3,
    completedTasks: 24,
    pendingTasks: 3
  }

  const getEarningIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="h-5 w-5 text-blue-600" />
      case 'achievement': return <Award className="h-5 w-5 text-yellow-600" />
      case 'help': return <Users className="h-5 w-5 text-green-600" />
      case 'bonus': return <Star className="h-5 w-5 text-purple-600" />
      case 'content': return <BookOpen className="h-5 w-5 text-indigo-600" />
      default: return <DollarSign className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />
      case 'failed': return <XCircle className="h-4 w-4 text-red-500" />
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'failed': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Монетизация</h1>
          <p className="text-gray-600">Управляйте своим заработком и выплатами</p>
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
                <p className="text-sm text-gray-600">Общий заработок</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.totalEarnings} сом</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">За месяц</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.monthlyEarnings} сом</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">За неделю</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.weeklyEarnings} сом</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Рост</p>
                <p className="text-2xl font-bold text-green-600">+{analytics.growthRate}%</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">История заработка</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Период:</span>
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {periods.map((period) => (
                        <option key={period.id} value={period.id}>{period.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {earnings.map((earning, index) => (
                    <motion.div
                      key={earning.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-lg">
                          {getEarningIcon(earning.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{earning.title}</h4>
                          <p className="text-sm text-gray-600">{earning.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{earning.date}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(earning.status)}`}>
                              {earning.status === 'completed' ? 'Завершено' : 'В ожидании'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">+{earning.amount} сом</div>
                        {getStatusIcon(earning.status)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Withdrawals Tab */}
            {activeTab === 'withdrawals' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">История выплат</h3>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Запросить выплату</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {withdrawals.map((withdrawal, index) => (
                    <motion.div
                      key={withdrawal.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-lg">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{withdrawal.method}</h4>
                          <p className="text-sm text-gray-600">{withdrawal.account}</p>
                          <span className="text-xs text-gray-500">{withdrawal.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{withdrawal.amount} сом</div>
                        {getStatusIcon(withdrawal.status)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Аналитика</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-4">Общая статистика</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Средний заработок в день</span>
                        <span className="font-semibold">{analytics.averagePerDay} сом</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Завершенных задач</span>
                        <span className="font-semibold">{analytics.completedTasks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>В ожидании</span>
                        <span className="font-semibold">{analytics.pendingTasks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Топ источники</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Уроки</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Достижения</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Помощь</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Настройки выплат</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Способы выплат</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <span>Банковская карта</span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Настроить
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Wallet className="h-5 w-5 text-green-600" />
                          <span>Электронный кошелек</span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Настроить
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Уведомления</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Уведомления о заработке</span>
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Уведомления о выплатах</span>
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Еженедельные отчеты</span>
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}