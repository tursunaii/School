import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Subject {
  id: string
  name: string
  nameKg: string
  icon: string
  color: string
  description: string
  grade: number
  lessonsCount: number
  isCompleted: boolean
}

interface SubjectsState {
  subjects: Subject[]
  selectedGrade: number | null
  searchQuery: string
  isLoading: boolean
}

const initialState: SubjectsState = {
  subjects: [
    {
      id: '1',
      name: 'Математика',
      nameKg: 'Математика',
      icon: '🧮',
      color: 'bg-blue-100 text-blue-600',
      description: 'Изучение чисел, алгебры и геометрии',
      grade: 5,
      lessonsCount: 24,
      isCompleted: false,
    },
    {
      id: '2',
      name: 'Кыргыз тили',
      nameKg: 'Кыргыз тили',
      icon: '📚',
      color: 'bg-green-100 text-green-600',
      description: 'Изучение кыргызского языка и литературы',
      grade: 5,
      lessonsCount: 20,
      isCompleted: false,
    },
    {
      id: '3',
      name: 'История',
      nameKg: 'Тарых',
      icon: '🏛️',
      color: 'bg-purple-100 text-purple-600',
      description: 'История Кыргызстана и мира',
      grade: 5,
      lessonsCount: 18,
      isCompleted: false,
    },
    {
      id: '4',
      name: 'Информатика',
      nameKg: 'Информатика',
      icon: '💻',
      color: 'bg-orange-100 text-orange-600',
      description: 'Основы программирования и компьютерных технологий',
      grade: 5,
      lessonsCount: 16,
      isCompleted: false,
    },
  ],
  selectedGrade: null,
  searchQuery: '',
  isLoading: false,
}

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    setSelectedGrade: (state, action: PayloadAction<number | null>) => {
      state.selectedGrade = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    markSubjectCompleted: (state, action: PayloadAction<string>) => {
      const subject = state.subjects.find(s => s.id === action.payload)
      if (subject) {
        subject.isCompleted = true
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setSelectedGrade, setSearchQuery, markSubjectCompleted, setLoading } = subjectsSlice.actions
export default subjectsSlice.reducer
