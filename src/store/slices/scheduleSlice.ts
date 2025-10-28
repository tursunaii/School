import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ScheduleItem {
  id: string
  subject: string
  teacher: string
  classroom: string
  startTime: string
  endTime: string
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'
  grade: number
}

interface ScheduleState {
  schedule: ScheduleItem[]
  selectedDay: string | null
  selectedGrade: number | null
  isLoading: boolean
}

const initialState: ScheduleState = {
  schedule: [],
  selectedDay: null,
  selectedGrade: null,
  isLoading: false,
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setSchedule: (state, action: PayloadAction<ScheduleItem[]>) => {
      state.schedule = action.payload
    },
    setSelectedDay: (state, action: PayloadAction<string | null>) => {
      state.selectedDay = action.payload
    },
    setSelectedGrade: (state, action: PayloadAction<number | null>) => {
      state.selectedGrade = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setSchedule, setSelectedDay, setSelectedGrade, setLoading } = scheduleSlice.actions
export default scheduleSlice.reducer
