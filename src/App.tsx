import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Packages } from './sections/Packages'

function App() {
  return (
    <div className={`
      w-screen min-h-screen flex flex-col items-center
      bg-[url(/bg.png)] bg-cover bg-position-[0rem_-10rem]
    `}>
      <main className="min-h-screen w-screen max-w-7xl flex flex-col gap-6">
        <Hero />

        <Packages />

        <Contact />

        <About />
      </main>
    </div>
  )
}

export default App
