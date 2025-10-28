import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Lesson {
  id: string
  title: string
  subject: string
  grade: number
  duration: number
  isCompleted: boolean
  videoUrl?: string
  description: string
}

interface LessonsState {
  lessons: Lesson[]
  currentLesson: Lesson | null
  isLoading: boolean
}

const initialState: LessonsState = {
  lessons: [],
  currentLesson: null,
  isLoading: false,
}

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setLessons: (state, action: PayloadAction<Lesson[]>) => {
      state.lessons = action.payload
    },
    setCurrentLesson: (state, action: PayloadAction<Lesson | null>) => {
      state.currentLesson = action.payload
    },
    completeLesson: (state, action: PayloadAction<string>) => {
      const lesson = state.lessons.find(l => l.id === action.payload)
      if (lesson) {
        lesson.isCompleted = true
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setLessons, setCurrentLesson, completeLesson, setLoading } = lessonsSlice.actions
export default lessonsSlice.reducer
