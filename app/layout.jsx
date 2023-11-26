import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import styles from "./layout.module.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'punkstarr',
  description: 'punkstarr Roblox game development studio - creators of SURVIVAL GAMES Battle Royale',
  icons:{
    icon: '../public/favicon(1).ico',
  },
}

export default function RootLayout({ children , params}) {


  return (
    <html lang="en">

        <body className= {inter.className}>

            <div className = {styles.app}>
                <Navbar/>

                <div className = {styles.container}>
                    {children}
                </div>

                <Footer/>
            </div>

        </body>

    </html>
  )
}
