// import '../../globals.css';
import { Inter } from 'next/font/google';
import styles from "./layout.module.css";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seth - Resume Site',
  description: 'My Resume Site - Link Dir',
  icons:{
    icon: '../public/favicon(1).ico',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

        <body className= {inter.className}>
            {/* <div className = {styles.container}> */}
                {children}
            {/* </div> */}
        </body>

    </html>
  )
}
