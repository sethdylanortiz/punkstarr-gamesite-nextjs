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
                    quality = {75}
                    alt = "alt_logo"
                    style = {{ 
                        borderRadius: '8px',

                        width: '55px',
                        height: 'auto', 
                        maxHeight: "70px",
                    }}
                />
            </div>

            <div className = {styles.textContainer}>
                {text}
            </div>
        </Link>
    )
};

export default Directbutton