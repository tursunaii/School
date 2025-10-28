import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { MessageCircle } from 'lucide-react'

interface NotificationProps {
  message: string
  sender: string
}

export function Notification({ message, sender }: NotificationProps) {
  useEffect(() => {
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
                <span className="font-medium">{sender}</span>: {message}
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
  }, [message, sender])

  return null
}