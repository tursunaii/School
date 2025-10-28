import { Target, Users, Lightbulb, Heart } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Наша миссия',
      description: 'Сделать качественное образование доступным для каждого ребенка в Кыргызстане, независимо от географического положения или социального статуса.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Наше видение',
      description: 'Создать единую образовательную экосистему, где технологии служат инструментом для развития человеческого потенциала и укрепления общества.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Наши принципы',
      description: 'Инновации, доступность, качество и уважение к местной культуре и языкам. Мы верим в силу образования как основы развития.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Heart,
      title: 'Наша цель',
      description: 'Поддержать учителей, учеников и родителей в создании эффективной образовательной среды, которая готовит детей к будущему.',
      color: 'bg-red-100 text-red-600'
    }
  ]

  const stats = [
    { number: '500+', label: 'Школ подключено' },
    { number: '10,000+', label: 'Активных учеников' },
    { number: '2,000+', label: 'Учителей используют платформу' },
    { number: '95%', label: 'Удовлетворенность пользователей' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            О платформе Tursunai Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем будущее образования в Кыргызстане, объединяя традиционные методы обучения с современными технологиями
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className={`inline-flex p-3 rounded-lg ${value.color} mb-4`}>
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наша история
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Tursunai Education родилась из понимания того, что образование в Кыргызстане нуждается в модернизации. 
                  Мы видели, как пандемия COVID-19 выявила проблемы с доступом к качественному образованию в отдаленных регионах.
                </p>
                <p>
                  Наша команда, состоящая из опытных педагогов, IT-специалистов и экспертов в области образования, 
                  объединила усилия для создания платформы, которая решает эти вызовы.
                </p>
                <p>
                  Сегодня мы гордимся тем, что помогаем школам по всему Кыргызстану переходить к цифровому образованию, 
                  сохраняя при этом лучшие традиции местной педагогики.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2024</div>
              <div className="text-lg text-gray-700 mb-4">Год основания</div>
              <div className="text-sm text-gray-600">
                Создано командой энтузиастов образования и технологий
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
