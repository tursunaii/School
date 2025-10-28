import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bell, User, LogOut, BookOpen, Search, Settings, Shield } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { logout } from '../store/slices/authSlice'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [visibleCount, setVisibleCount] = useState(6);
  const [showHidden, setShowHidden] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная', badge: null },
    { path: '/subjects', label: 'Предметы', badge: null },
    { path: '/tests', label: 'Тесты', badge: '3' },
    { path: '/schedule', label: 'Расписание', badge: null },
    { path: '/news', label: 'Новости', badge: '5' },
    { path: '/rating', label: 'Рейтинг', badge: null },
    { path: '/messages', label: 'Сообщения', badge: '12' },
    { path: '/certificates', label: 'Сертификаты', badge: null },
    { path: '/monetization', label: 'Монетизация', badge: null },
  ];

  const handleLogout = () => {
    dispatch(logout())
    // Remove user data from localStorage but keep email for auto-fill
    localStorage.setItem('isLoggedIn', 'false')
    navigate('/')
    window.location.reload()
    setIsProfileOpen(false)
  }

  // Изменяем количество видимых пунктов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 910) setVisibleCount(2);
      else if (window.innerWidth < 1068) setVisibleCount(3);
      else if (window.innerWidth < 1424) setVisibleCount(5);
      else setVisibleCount(navItems.length);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = navItems.slice(0, visibleCount);
  const hiddenItems = navItems.slice(visibleCount);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 max-[495px]:flex-wrap max-[495px]:h-auto py-2  max-[495px]:gap-2">
          {/* Logo and Menu Button */}
          <div className="flex items-center">
            <motion.button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 ml-2 lg:ml-0 group">
                <motion.div
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  SmartSchool.KG
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Navigation - Desktop */}
          <motion.nav
            className="hidden lg:flex space-x-2 items-center relative "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {hiddenItems.length > 0 && (
              <div
                className="relative"
                onMouseEnter={() => setShowHidden(true)}
                onMouseLeave={() => setShowHidden(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 text-gray-600 cursor-pointer select-none hover:text-primary-600 text-xl"
                >
                  •••
                </motion.div>

                {showHidden && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-100 z-50"
                  >
                    {hiddenItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 text-sm rounded-lg transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            )}
          </motion.nav>

          {/* Right side actions */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isAuthenticated ? (
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-all duration-300 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Выйти
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/profile"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <User className="h-4 w-4 mr-1" />
                    {user?.name || 'Турсунай'}
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Войти
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Регистрация
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  )
}