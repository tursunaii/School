import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: string
  isRead: boolean
}

export interface Chat {
  id: string
  participants: string[]
  lastMessage: Message | null
  unreadCount: number
}

interface MessagesState {
  chats: Chat[]
  currentChat: Chat | null
  messages: Message[]
  isLoading: boolean
}

const initialState: MessagesState = {
  chats: [],
  currentChat: null,
  messages: [],
  isLoading: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<Chat[]>) => {
      state.chats = action.payload
    },
    setCurrentChat: (state, action: PayloadAction<Chat | null>) => {
      state.currentChat = action.payload
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      const message = state.messages.find(m => m.id === action.payload)
      if (message) {
        message.isRead = true
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setChats, setCurrentChat, setMessages, addMessage, markAsRead, setLoading } = messagesSlice.actions
export default messagesSlice.reducer
