import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
