import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Certificate {
  id: string
  title: string
  subject: string
  score: number
  maxScore: number
  issuedAt: string
  studentName: string
  teacherName: string
  schoolName: string
  pdfUrl?: string
}

interface CertificatesState {
  certificates: Certificate[]
  isLoading: boolean
}

const initialState: CertificatesState = {
  certificates: [],
  isLoading: false,
}

export const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
    setCertificates: (state, action: PayloadAction<Certificate[]>) => {
      state.certificates = action.payload
    },
    addCertificate: (state, action: PayloadAction<Certificate>) => {
      state.certificates.push(action.payload)
    },
    removeCertificate: (state, action: PayloadAction<string>) => {
      state.certificates = state.certificates.filter(c => c.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setCertificates, addCertificate, removeCertificate, setLoading } = certificatesSlice.actions
export default certificatesSlice.reducer
