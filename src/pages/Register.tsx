import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Smartphone,
  Shield,
  CheckCircle,
  XCircle
} from 'lucide-react'

export function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    agreeToTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const navigate = useNavigate()

  const passwordRequirements = [
    { text: 'Минимум 8 символов', met: formData.password.length >= 8 },
    { text: 'Содержит заглавную букву', met: /[A-Z]/.test(formData.password) },
    { text: 'Содержит цифру', met: /\d/.test(formData.password) },
    { text: 'Содержит специальный символ', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Save user data to localStorage
    if (rememberMe) {
      localStorage.setItem('userEmail', formData.email)
      localStorage.setItem('userPassword', formData.password)
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`)
      localStorage.setItem('rememberMe', 'true')
    }
    
    // Симуляция регистрации
    setTimeout(() => {
      setIsLoading(false)
      navigate('/login')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
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
            Создать аккаунт
          </h1>
          <p className="text-gray-600">
            Присоединяйтесь к SmartSchool.KG и начните обучение
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">
                    <User className="inline h-4 w-4 mr-2" />
                    Имя
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Имя"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">
                    <User className="inline h-4 w-4 mr-2" />
                    Фамилия
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Фамилия"
                    required
                  />
                </div>
              </div>

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

              {/* Phone Field */}
              <div>
                <label className="form-label">
                  <Smartphone className="inline h-4 w-4 mr-2" />
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+996 XXX XXX XXX"
                  required
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="form-label">Роль</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="student">Ученик</option>
                  <option value="teacher">Учитель</option>
                  <option value="parent">Родитель</option>
                  <option value="admin">Администратор</option>
                </select>
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
                    placeholder="Создайте пароль"
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

              {/* Password Requirements */}
              {formData.password && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">Требования к паролю:</p>
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {req.met ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm ${req.met ? 'text-green-600' : 'text-red-600'}`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Confirm Password Field */}
              <div>
                <label className="form-label">
                  <Lock className="inline h-4 w-4 mr-2" />
                  Подтвердите пароль
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input pr-12"
                    placeholder="Подтвердите пароль"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">Пароли не совпадают</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label className="text-sm text-gray-600">
                  Запомнить меня
                </label>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  required
                />
                <label className="text-sm text-gray-600">
                  Я согласен с{' '}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-700">
                    условиями использования
                  </Link>{' '}
                  и{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Создание аккаунта...</span>
                  </>
                ) : (
                  <>
                    <span>Создать аккаунт</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Уже есть аккаунт?{' '}
                <Link 
                  to="/login" 
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Войти
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Преимущества регистрации
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Безопасность</h4>
                    <p className="text-sm text-gray-600">Ваши данные защищены современными методами шифрования</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Персонализация</h4>
                    <p className="text-sm text-gray-600">Индивидуальный подход к обучению</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Мобильность</h4>
                    <p className="text-sm text-gray-600">Доступ с любого устройства</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Начните обучение прямо сейчас!
              </h3>
              <p className="text-white/90 mb-6">
                Присоединяйтесь к тысячам учеников и учителей, которые уже используют SmartSchool.KG
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm text-white/80">Учеников</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Школ</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}