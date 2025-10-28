import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Subjects } from './pages/Subjects'
import { Tests } from './pages/Tests'

import { Schedule } from './pages/Schedule'
import { Profile } from './pages/Profile'
import { News } from './pages/News'
import { Rating } from './pages/Rating'
import { Messages } from './pages/Messages'
import { Certificates } from './pages/Certificates'
import { Monetization } from './pages/Monetization'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { LessonDetail } from './pages/LessonDetail'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Layout>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/lesson/:id" element={<LessonDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/monetization" element={<Monetization />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  )
}

export default App