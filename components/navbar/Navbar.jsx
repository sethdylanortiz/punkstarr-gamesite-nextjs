import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.homeContainer}>
                <Image
                    src = "/punkstarr_logo.png"
                    alt = "logo.png"
                    width = {60}
                    height = {60}
                />
                <Link href = "" className = {styles.logo}>punkstarr</Link>
            </div>
            <div className = {styles.linksContainer}>
                <Link href = "/bloximpact">Check out our upcoming games!</Link>
                <Link href = "https://twitter.com/SGonRoblox" className = {styles.xButton}>Follow us on X!</Link>
            </div>
        </div>
    )
}

export default Navbar