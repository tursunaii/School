import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  BookOpen,
  ClipboardList,
  Calendar,
  Newspaper,
  Trophy,
  MessageSquare,
  Award,
  DollarSign,
  X,
  User,
  Settings,
  LogOut,
  Bell,
  Star
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: Home, label: 'Главная', badge: null },
    { path: '/subjects', icon: BookOpen, label: 'Предметы', badge: null },
    { path: '/tests', icon: ClipboardList, label: 'Тесты', badge: '3' },
    { path: '/schedule', icon: Calendar, label: 'Расписание', badge: null },
    { path: '/news', icon: Newspaper, label: 'Новости', badge: '5' },
    { path: '/rating', icon: Trophy, label: 'Рейтинг', badge: null },
    { path: '/messages', icon: MessageSquare, label: 'Сообщения', badge: '12' },
    { path: '/certificates', icon: Award, label: 'Сертификаты', badge: null },
    { path: '/monetization', icon: DollarSign, label: 'Монетизация', badge: null },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`
           lg:hidden overflow-y-scroll pb-[20px] flex fixed top-16 left-0 h-full w-64 bg-black backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-50 h- full
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:shadow-none lg:bg-white
        `}
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close button for mobile */}
          <motion.button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-5 w-5" />
          </motion.button>

          {/* User Profile Section */}
          <motion.div
            className="mb-8 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Temirbekova Tursunai</h3>
                <p className="text-xs text-gray-600">9 класс</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500" />
                <span>4.8 рейтинг</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="h-3 w-3 text-green-500" />
                <span>#12 место</span>
              </div>
            </div>
          </motion.div>

          {/* Menu items */}
          <nav className=" space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const active = isActive(item.path)
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group
                      ${active
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`
                        px-2 py-1 rounded-full text-xs font-medium
                        ${active
                          ? 'bg-white/20 text-white'
                          : 'bg-primary-100 text-primary-600'
                        }
                      `}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <motion.div
            className="mt-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Quick Actions */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-xs font-semibold text-gray-700 mb-3">Быстрые действия</h4>
              <div className="space-y-2">
                <button className="flex items-center space-x-2 w-full text-left text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  <Bell className="h-4 w-4" />
                  <span>Уведомления</span>
                </button>
                <button className="flex items-center space-x-2 w-full text-left text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  <Settings className="h-4 w-4" />
                  <span>Настройки</span>
                </button>
              </div>
            </div>

            {/* App Info */}
            <div className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white">
              <h3 className="text-sm font-semibold mb-2">SmartSchool.KG</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Современная образовательная платформа для школ Кыргызстана
              </p>
              <div className="mt-3 flex items-center space-x-2 text-xs text-white/80">
                <Star className="h-3 w-3" />
                <span>Версия 2.1.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
