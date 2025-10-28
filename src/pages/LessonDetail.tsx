import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  BookOpen, 
  User, 
  Clock, 
  Star,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import { subjectsData } from './Subjects';

export function LessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(300); // 5 minutes in seconds

  // Find the subject based on ID
  const subject = subjectsData.find(sub => sub.id === parseInt(id || '1'));

  // Simulate video progress
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          setCurrentTime(Math.floor((newProgress / 100) * duration));
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Reset video
  const resetVideo = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Урок не найден</h2>
          <Link 
            to="/subjects" 
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Вернуться к предметам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Назад
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Video container */}
                <div className="relative aspect-video bg-black">
                  {subject.video ? (
                    <iframe
                      className="w-full h-full"
                      src={subject.video.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                      title={subject.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-600">
                      <div className="text-center text-white">
                        <BookOpen className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Видеоурок по {subject.name}</h3>
                        <p className="text-lg opacity-90">Интерактивный урок с объяснением материала</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Video controls overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                        >
                          {isPlaying ? (
                            <Pause className="h-6 w-6 text-white" />
                          ) : (
                            <Play className="h-6 w-6 text-white ml-1" />
                          )}
                        </button>
                        <button 
                          onClick={resetVideo}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                        >
                          <RotateCcw className="h-6 w-6 text-white" />
                        </button>
                        <button 
                          onClick={() => setIsMuted(!isMuted)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                        >
                          {isMuted ? (
                            <VolumeX className="h-6 w-6 text-white" />
                          ) : (
                            <Volume2 className="h-6 w-6 text-white" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <span className="text-sm">{formatTime(currentTime)}</span>
                        <div className="w-32 sm:w-64 h-1.5 bg-white bg-opacity-30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white rounded-full" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video info */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h1 className="text-2xl font-bold text-gray-900">{subject.name}</h1>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-500 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary-600 rounded-lg hover:bg-primary-50">
                        <Maximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{subject.teacher}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{subject.duration} минут</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{subject.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Детальное объяснение темы "{subject.name}" от преподавателя {subject.teacher}. 
                    В этом уроке вы изучите ключевые концепции и сможете проверить свои знания с помощью интерактивных заданий.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {subject.level === 'beginner' ? 'Начальный' : subject.level === 'intermediate' ? 'Средний' : 'Продвинутый'}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {subject.totalLessons} уроков
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Lesson content */}
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Содержание урока</h2>
                <div className="prose max-w-none">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                      <span>Введение в тему</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                      <span>Основные понятия и определения</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                      <span>Практические примеры</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                      <span>Интерактивные задания</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">5</span>
                      <span>Тест для самопроверки</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Related lessons */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Похожие уроки</h2>
                <div className="space-y-4">
                  {subjectsData
                    .filter(sub => sub.id !== subject.id)
                    .slice(0, 3)
                    .map((relatedSubject) => (
                      <Link 
                        key={relatedSubject.id}
                        to={`/lesson/${relatedSubject.id}`}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-3">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{relatedSubject.name}</h3>
                          <p className="text-sm text-gray-600">{relatedSubject.teacher}</p>
                        </div>
                      </Link>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Прогресс по курсу</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-600 h-2 rounded-full" 
                      style={{ width: `${(subject.completedLessons / subject.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {subject.completedLessons} из {subject.totalLessons} уроков завершено
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}