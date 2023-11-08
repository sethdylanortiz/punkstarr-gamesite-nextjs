import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className = {styles.container}>
            <div>@2023 punkstarr games</div>
            <div className = {styles.imageContainer}>
                <Link href = "https://www.linkedin.com/in/seth-ortiz-711652225/"> 
                    <Image src = "/icon_linkedin.png" alt = "linkedin.png" width = {25} height = {25} className = {styles.icon}/> 
                </Link>
                <Link href = "https://twitter.com/SGonRoblox">
                    <Image src = "/icon_twitter.png" alt = "linkedin.png" width = {25} height = {25} className = {styles.icon}/>
                </Link>
                <Link href = "https://www.youtube.com/watch?v=WpgFsspQx4o&ab_channel=GoTeyoGo">
                    <Image src = "/icon_youtube.png" alt = "linkedin.png" width = {25} height = {25} className = {styles.icon}/>
                </Link>
            </div>
        </div>
    )
}

export default Footer