import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: string
  imageUrl?: string
  category: string
}

interface NewsState {
  news: NewsItem[]
  selectedCategory: string | null
  searchQuery: string
  isLoading: boolean
}

const initialState: NewsState = {
  news: [],
  selectedCategory: null,
  searchQuery: '',
  isLoading: false,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    addNewsItem: (state, action: PayloadAction<NewsItem>) => {
      state.news.unshift(action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setNews, setSelectedCategory, setSearchQuery, addNewsItem, setLoading } = newsSlice.actions
export default newsSlice.reducer
