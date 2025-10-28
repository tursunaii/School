import { 
  Monitor, 
  Users, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Clock
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Monitor,
      title: 'Гибридное обучение',
      description: 'Сочетание онлайн и офлайн форматов для максимальной эффективности обучения',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Управление классами',
      description: 'Создавайте виртуальные классы, управляйте учениками и отслеживайте прогресс',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Интерактивные уроки',
      description: 'Создавайте увлекательные уроки с мультимедиа контентом и интерактивными заданиями',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Calendar,
      title: 'Планирование занятий',
      description: 'Удобное расписание, автоматические напоминания и календарь событий',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: MessageSquare,
      title: 'Коммуникация',
      description: 'Встроенная система сообщений, форумы и групповые чаты для общения',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Аналитика и отчеты',
      description: 'Детальная статистика успеваемости, прогресса и вовлеченности учеников',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защита данных, контроль доступа и соответствие образовательным стандартам',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Smartphone,
      title: 'Мобильное приложение',
      description: 'Доступ к платформе с любого устройства - смартфона, планшета или компьютера',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Globe,
      title: 'Многоязычность',
      description: 'Поддержка кыргызского, русского и английского языков',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Clock,
      title: '24/7 Доступность',
      description: 'Круглосуточный доступ к материалам и возможность обучения в любое время',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Возможности платформы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все необходимые инструменты для современного образования в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Готовы начать цифровую трансформацию вашей школы?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Присоединяйтесь к сотням школ, которые уже используют нашу платформу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Запросить демо
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
