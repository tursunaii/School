import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess } from '../store/slices/authSlice'
import { RootState } from '../store/store'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Smartphone,
  Shield
} from 'lucide-react'

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  // Load saved user data from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail')
    const savedPassword = localStorage.getItem('userPassword')
    const savedRememberMe = localStorage.getItem('rememberMe')
    
    if (savedEmail) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail
      }))
    }
    
    if (savedPassword) {
      setFormData(prev => ({
        ...prev,
        password: savedPassword
      }))
    }
    
    if (savedRememberMe) {
      setRememberMe(savedRememberMe === 'true')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Dispatch login start action
    dispatch(loginStart())
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      
      // Create user object (simulating admin user)
      const user = {
        id: '1',
        name: 'Турсунай',
        email: formData.email,
        role: 'admin' as const,
        avatar: ''
      }
      
      // Dispatch login success action
      dispatch(loginSuccess(user))
      
      // Save user data to localStorage if "remember me" is checked
      if (rememberMe) {
        localStorage.setItem('userEmail', formData.email)
        localStorage.setItem('userPassword', formData.password)
        localStorage.setItem('rememberMe', 'true')
      } else {
        // If remember me is unchecked, remove saved data
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userPassword')
        localStorage.setItem('rememberMe', 'false')
      }
      
      // Navigate to home page after login
      navigate('/')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать
          </h1>
          <p className="text-gray-600">
            Войдите в свой аккаунт SmartSchool.KG
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="form-label">
                <Mail className="inline h-4 w-4 mr-2" />
                Email адрес
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="form-label">
                <Lock className="inline h-4 w-4 mr-2" />
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input pr-12"
                  placeholder="Введите пароль"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Запомнить меня</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Забыли пароль?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  <span>Вход...</span>
                </>
              ) : (
                <>
                  <span>Войти</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">или</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center space-x-3 bg-gray-50 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Smartphone className="h-5 w-5" />
              <span>Войти через SMS</span>
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Нет аккаунта?{' '}
              <Link 
                to="/register" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <User className="h-6 w-6 text-primary-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Безопасный вход</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Защита данных</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <Smartphone className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Мобильный доступ</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}