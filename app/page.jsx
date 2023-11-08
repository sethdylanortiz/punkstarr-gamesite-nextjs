import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css'

/*
to-do:
- add css via modules.css and globals.css
- test against mobile device
- finish homepage
- add typescript?
- run eslint

completed:
- add video
- created aws s3 bucket to hold videos/images media
- created and connected cloudfront to s3 bucket
- updated next.config.js for cloudfront integration
*/

export default function Home() 
{
    return (
        <div className = {styles.container}>
            <div className = {styles.videoContainer}>

                <div className = {styles.itemDesc}>
                    <p className = {styles.text}>punkstarr's </p>
                    <h1 className = {styles.gameTitle}>SURVIVAL GAMES</h1>
                    <p className = {styles.text}>battle royale is out now!</p>
                    <Link href = "https://www.roblox.com/games/10805907537/SURVIVAL-GAMES-BATTLEPASS" className = {styles.playNowButton}>Play HERE</Link>
                </div>

                <div className = {styles.itemVideo}>
                    <video className = {styles.video} autoPlay loop muted src = "https://d3ith6uwkonxsg.cloudfront.net/videos/SG-Trailer-[BETA].mp4" />
                </div>

            </div>

            <div className = {styles.gameDescriptionContainer}>

                <div className = {styles.sectionContainer}>
                    <Image
                        className = {styles.imageContainer}
                        alt = "gameplay image 1"
                        src = "https://d3ith6uwkonxsg.cloudfront.net/images/home-gameplay1.jpg"
                        width = {1200}
                        height = {500}
                        style = {{
                            maxWidth: '35%',
                            height: 'auto',
                        }}
                    />

                    <div className = {styles.leftDesc}>
                        <h1 className = {styles.descTitle}>LOOT!</h1>
                        <p className = {styles.descText}>Search the various maps for chests for weapons, armor, food, and more!</p>
                        <p className = {styles.descText}>Gain XP throughout the match to enchant your items</p>
                    </div>
                </div>

                <div className = {styles.sectionContainer}>

                    <div className = {styles.rightDesc}>
                        <h1 className = {styles.descTitle}>BATTLE!</h1>
                        <p className = {styles.descText}>Search the various maps for chests for weapons, armor, food, and more!</p>
                        <p className = {styles.descText}>Gain XP throughout the match to enchant your items</p>
                    </div>

                    <Image
                        className = {styles.imageContainer}
                        alt = "gameplay image 1"
                        src = "https://d3ith6uwkonxsg.cloudfront.net/images/home-gameplay2.jpg"
                        width = {1200}
                        height = {500}
                        style = {{
                            maxWidth: '35%',
                            height: 'auto',
                        }}
                    />
                </div>

                <div className = {styles.sectionContainer}>
                    <Image
                        className = {styles.imageContainer}
                        alt = "gameplay image 1"
                        src = "https://d3ith6uwkonxsg.cloudfront.net/images/home-gameplay4.jpg"
                        width = {1200}
                        height = {500}
                        style = {{
                            maxWidth: '35%',
                            height: 'auto',
                        }}
                    />

                    <div className = {styles.leftDesc}>
                        <h1 className = {styles.descTitle}>SURVIVE!</h1>
                        <p className = {styles.descText}>Search the various maps for chests for weapons, armor, food, and more!</p>
                        <p className = {styles.descText}>Gain XP throughout the match to enchant your items</p>
                    </div>
                </div>

            </div>
        </div>
    );
}