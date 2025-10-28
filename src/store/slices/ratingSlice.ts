import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RatingItem {
  id: string
  name: string
  grade: number
  score: number
  rank: number
  avatar?: string
  school: string
}

interface RatingState {
  rating: RatingItem[]
  selectedGrade: number | null
  isLoading: boolean
}

const initialState: RatingState = {
  rating: [],
  selectedGrade: null,
  isLoading: false,
}

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<RatingItem[]>) => {
      state.rating = action.payload
    },
    setSelectedGrade: (state, action: PayloadAction<number | null>) => {
      state.selectedGrade = action.payload
    },
    updateScore: (state, action: PayloadAction<{ id: string; score: number }>) => {
      const item = state.rating.find(r => r.id === action.payload.id)
      if (item) {
        item.score = action.payload.score
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setRating, setSelectedGrade, updateScore, setLoading } = ratingSlice.actions
export default ratingSlice.reducer
