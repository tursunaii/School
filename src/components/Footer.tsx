import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <span className="text-2xl font-bold">SmartSchool.KG</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Современная цифровая образовательная платформа для школ Кыргызстана. 
              Онлайн-уроки, тесты, расписание и многое другое в одном месте.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@smartschool.kg</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+996 557 11 83 33 </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
                <span>Бишкек, Кыргызстан</span>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {[
                { path: '/subjects', label: 'Предметы', icon: BookOpen },
                { path: '/tests', label: 'Тесты', icon: Award },
                { path: '/schedule', label: 'Расписание', icon: TrendingUp },
                { path: '/news', label: 'Новости', icon: Users }
              ].map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Мы в соцсетях</h3>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
                { icon: Youtube, href: '#', color: 'hover:text-red-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-300 ${social.color} transition-colors p-2 rounded-lg hover:bg-white/10`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Stats */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="h-4 w-4" />
                <span className="text-sm">10,000+ учеников</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Award className="h-4 w-4" />
                <span className="text-sm">500+ школ</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">95% успешность</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © 2025 SmartSchool.KG. Все права защищены.
              </p>
              <div className="hidden md:flex items-center space-x-2 text-gray-500">
                <Shield className="h-4 w-4" />
                <span className="text-xs">Безопасно и надежно</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Конфиденциальность
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Условия использования
              </Link>
              <Link 
                to="/support" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Поддержка
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
