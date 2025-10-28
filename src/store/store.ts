import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import subjectsReducer from './slices/subjectsSlice'
import testsReducer from './slices/testsSlice'
import lessonsReducer from './slices/lessonsSlice'
import scheduleReducer from './slices/scheduleSlice'
import newsReducer from './slices/newsSlice'
import ratingReducer from './slices/ratingSlice'
import messagesReducer from './slices/messagesSlice'
import certificatesReducer from './slices/certificatesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subjects: subjectsReducer,
    tests: testsReducer,
    lessons: lessonsReducer,
    schedule: scheduleReducer,
    news: newsReducer,
    rating: ratingReducer,
    messages: messagesReducer,
    certificates: certificatesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
