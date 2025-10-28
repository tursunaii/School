import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Test {
  id: string
  title: string
  subject: string
  grade: number
  questionsCount: number
  duration: number
  difficulty: 'easy' | 'medium' | 'hard'
  isCompleted: boolean
  score?: number
  maxScore: number
}

interface TestsState {
  tests: Test[]
  currentTest: Test | null
  isLoading: boolean
}

const initialState: TestsState = {
  tests: [],
  currentTest: null,
  isLoading: false,
}

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    setTests: (state, action: PayloadAction<Test[]>) => {
      state.tests = action.payload
    },
    setCurrentTest: (state, action: PayloadAction<Test | null>) => {
      state.currentTest = action.payload
    },
    completeTest: (state, action: PayloadAction<{ testId: string; score: number }>) => {
      const test = state.tests.find(t => t.id === action.payload.testId)
      if (test) {
        test.isCompleted = true
        test.score = action.payload.score
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setTests, setCurrentTest, completeTest, setLoading } = testsSlice.actions
export default testsSlice.reducer
