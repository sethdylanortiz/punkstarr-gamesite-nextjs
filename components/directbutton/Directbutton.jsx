"use client";

import React from 'react';
import Link from 'next/link';
import styles from './directbutton.module.css';
import Image from 'next/image';

const Directbutton = ({directory, text, url}) => {
    return (
        <Link href = {url} className = {styles.button}>

            <div className = {styles.imageContainer}>
                <Image 
                    src = {directory}
                    alt = "alt_logo"
                    width = "0"
                    height = "0"
                    style = {{ 
                        width: '50%', 
                        height: 'auto', 
                        borderRadius: '20px'
                    }}
                />
            </div>

            <div className = {styles.textContainer}>
                {text}
            </div>
        </Link>

    )
}

export default Directbutton