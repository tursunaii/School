'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Users, BookOpen, Award, ArrowRight } from 'lucide-react'

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    { icon: Users, label: 'Ученики', value: '10,000+' },
    { icon: BookOpen, label: 'Уроки', value: '5,000+' },
    { icon: Award, label: 'Школы', value: '500+' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Современное образование для{' '}
                <span className="text-primary-600">Кыргызстана</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Объединяем онлайн и офлайн обучение в одной платформе. 
                Помогаем школам перейти к цифровому образованию будущего.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Начать обучение</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Смотреть демо</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                {isVideoPlaying ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Загрузка демо...</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-primary-600 text-white p-6 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    <Play className="h-12 w-12" />
                  </button>
                )}
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Посмотрите, как это работает
                </h3>
                <p className="text-gray-600">
                  Краткий обзор возможностей платформы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
