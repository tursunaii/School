import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { 
  MessageCircle, 
  Send, 
  Search, 
  Filter,
  MoreVertical,
  Phone,
  Video,
  Info,
  Paperclip,
  Smile,
  Image,
  File,
  Download,
  Trash2,
  Archive,
  Star,
  Clock,
  Check,
  CheckCheck,
  User,
  Users,
  Settings
} from 'lucide-react'
import { RootState } from '../store/store'
import { 
  sendMessage, 
  subscribeToMessages, 
  Message as MessageType,
  initializeAuth
} from '../services/firebase'
import { Timestamp } from 'firebase/firestore'

// Define chat types
interface Chat {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  isOnline: boolean
  role: string
  isPinned: boolean
}

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user } = useSelector((state: RootState) => state.auth)
  const previousMessagesCount = useRef(0)

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Айнура Кыдырбаева',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Спасибо за выполненное задание!',
      time: '10:30',
      unread: 2,
      isOnline: true,
      role: 'Учитель математики',
      isPinned: true
    },
    {
      id: 2,
      name: 'Эркин Абдыкадыров',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Не забудьте подготовиться к контрольной',
      time: '09:15',
      unread: 0,
      isOnline: false,
      role: 'Учитель физики',
      isPinned: false
    },
    {
      id: 3,
      name: 'Группа 11А',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Айбек: Готово домашнее задание',
      time: '08:45',
      unread: 5,
      isOnline: true,
      role: 'Классная группа',
      isPinned: true
    },
    {
      id: 4,
      name: 'Гульнара Асанова',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Отличная работа на уроке!',
      time: 'Вчера',
      unread: 0,
      isOnline: false,
      role: 'Учитель кыргызского языка',
      isPinned: false
    },
    {
      id: 5,
      name: 'Администрация школы',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Напоминание о родительском собрании',
      time: '2 дня назад',
      unread: 1,
      isOnline: false,
      role: 'Администрация',
      isPinned: false
    }
  ]

  const selectedChatData = chats.find(chat => chat.id === selectedChat)

  // Initialize Firebase auth
  useEffect(() => {
    initializeAuth()
  }, [])

  // Subscribe to messages in real-time
  useEffect(() => {
    if (selectedChat) {
      const unsubscribe = subscribeToMessages(selectedChat.toString(), (newMessages) => {
        // Show notification for new messages
        if (newMessages.length > previousMessagesCount.current && newMessages.length > 0) {
          const lastMessage = newMessages[newMessages.length - 1]
          // Only show notification for messages from other users
          if (user && lastMessage.senderId !== user.id) {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <MessageCircle className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Новое сообщение
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        <span className="font-medium">{lastMessage.senderName}</span>: {lastMessage.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            ), {
              duration: 5000,
              position: 'bottom-right'
            })
          }
        }
        
        previousMessagesCount.current = newMessages.length
        setMessages(newMessages)
      })
      
      return () => unsubscribe()
    }
  }, [selectedChat, user])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const formatTime = (timestamp: Timestamp) => {
    const date = timestamp.toDate()
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!messageText.trim() || !user) return
    
    setIsSending(true)
    
    try {
      await sendMessage(selectedChat.toString(), {
        text: messageText.trim(),
        senderId: user.id,
        senderName: user.name,
        senderAvatar: user.avatar,
        isRead: false
      })
      
      setMessageText('')
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Не удалось отправить сообщение')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Сообщения</h1>
          <p className="text-gray-600">Общайтесь с учителями и одноклассниками</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Chat List */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Chat List Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Чаты</h2>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск чатов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Chat List */}
            <div className="overflow-y-auto">
              {chats.map((chat) => (
                <motion.div
                  key={chat.id}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedChat === chat.id ? 'bg-primary-50 border-primary-200' : ''
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {chat.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {chat.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {chat.isPinned && <Star className="h-3 w-3 text-yellow-500 fill-current" />}
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{chat.role}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        {chat.unread > 0 && (
                          <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedChatData?.avatar}
                      alt={selectedChatData?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {selectedChatData?.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedChatData?.name}</h3>
                    <p className="text-sm text-gray-600">{selectedChatData?.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Info className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => {
                const isOwn = user && message.senderId === user.id
                return (
                  <motion.div
                    key={message.id}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className={`flex space-x-2 max-w-xs lg:max-w-md ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <img
                        src={message.senderAvatar || '/api/placeholder/32/32'}
                        alt={message.senderName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className={`px-4 py-2 rounded-2xl ${
                        isOwn 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <div className={`flex items-center justify-end mt-1 space-x-1 ${
                          isOwn ? 'text-primary-100' : 'text-gray-500'
                        }`}>
                          <span className="text-xs">{message.timestamp ? formatTime(message.timestamp) : ''}</span>
                          {isOwn && (
                            message.isRead ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : (
                              <Check className="h-3 w-3" />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip className="h-5 w-5" />
                </button>
                <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Image className="h-5 w-5" />
                </button>
                <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <File className="h-5 w-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Напишите сообщение..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12"
                    disabled={isSending}
                  />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Smile className="h-5 w-5" />
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!messageText.trim() || isSending}
                  className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}