import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// per app route
export const metadata = {
  title: 'punkstarr',
  description: 'punkstarr Roblox game development studio - creators of SURVIVAL GAMES Battle Royale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Navbar/>
        {children}
        <Footer/>
        
      </body>

    </html>
  )
}
