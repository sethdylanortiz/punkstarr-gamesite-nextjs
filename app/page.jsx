import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';

/*
to-do:
- test against mobile device
- add typescript?
- run eslint code quality inspection
- run e2e testing performance
- look into making other things be components (------ section headings -----, etc (pass props title))
- add client side "report bug" feature/functionality

completed:
- add video
- add css via modules.css and globals.css
- created aws s3 bucket to hold videos/images media
- created and connected cloudfront to s3 bucket
- updated next.config.js for cloudfront integration
*/

export default function Home() 
{
    return (
        <div className = {styles.container}>
            
            {/* container holding wallpaper */}
            <div className = {styles.wallpaper}>

                {/* container holding content */}
                <div className = {styles.contentContainer}>
                
                    {/* section - video player + message */}
                    <div className = {styles.videoContainer}>

                        <div className = {styles.videoDesc}>
                            <h1 className = {styles.nameTitle}>punkstarr</h1>
                            <p className = {styles.text}>We're an independent</p>
                            <p className = {styles.text}>Roblox game development</p>
                            <p className = {styles.text}>studio.</p>
                        </div>

                        <video className = {styles.video} autoPlay loop muted src = "https://d3ith6uwkonxsg.cloudfront.net/videos/SG-Trailer-[BETA].mp4"/>

                    </div>
                    {/* END - video player */}

                    {/* section - how to play imgs + msgs */}
                    <div className = {styles.gameDescriptionContainer}>

                    <div className = {styles.sectionHeading}>
                            <hr className = {styles.lineSeperator}/>
                            <h3 className = "redText">SURVIVAL GAMES</h3>
                            <hr className = {styles.lineSeperator}/>
                        </div>

                        <p className = {styles.welcomeMsg}>How to <span className = "redText">PLAY</span> our new BATTLE ROYALE!</p>

                        <div className = {styles.sectionContainer}>
                            <Image
                                className = {styles.imageContainer}
                                alt = "gameplay image 1"
                                src = "https://d3ith6uwkonxsg.cloudfront.net/images/home-gameplay1.jpg"
                                width = {1200}
                                height = {500}
                                style = {{
                                    maxWidth: '50%',
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
                                    maxWidth: '50%',
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
                                    maxWidth: '50%',
                                    height: 'auto',
                                }}
                            />

                            <div className = {styles.leftDesc}>
                                <h1 className = {styles.descTitle}>SURVIVE!</h1>
                                <p className = {styles.descText}>Search the various maps for chests for weapons, armor, food, and more!</p>
                                <p className = {styles.descText}>Gain XP throughout the match to enchant your items</p>
                            </div>
                        </div>

                        <Button text = "Play HERE" url = "https://www.roblox.com/games/10805907537/SURVIVAL-GAMES-BATTLEPASS"/>

                    </div> 
                    {/* END - how to play */}

                    {/* section - about punkstarr */}
                    <div className=  {styles.aboutUsContainer}>

                        <div className = {styles.sectionHeading}>
                            <hr className = {styles.lineSeperator}/>
                            <h3 className = "redText">COMMUNITY</h3>
                            <hr className = {styles.lineSeperator}/>
                        </div>

                        <p className = {styles.welcomeMsg}>We're creating a <span className = "redText">thriving</span> gaming community on Roblox </p>

                        <div className = {styles.playSessionsCard}>
                            <div className = {styles.cardText}>
                                        <h2 className = "redTextTitle">100,000+</h2>
                                        <p>Play Sessions</p>
                            </div>
                        </div>


                        <div className = {styles.twoCardContainer}>

                            <div className = {styles.twitterFollowersCard}>
                                <div className = {styles.cardText}>
                                    <h2 className = "redTextTitle">500+</h2>
                                    <p>Twitter Followers</p>
                                </div>
                            </div>

                            <div className = {styles.discordMembersCard}>
                                <div className = {styles.cardText}>
                                    <h2 className = "redTextTitle">800+</h2>
                                    <p>Discord Members</p>
                                </div>
                            </div>

                        </div>

                    </div> 
                    {/* END - about us */}

                    {/* section - bug report */}
                    <div className = {styles.bugReport}>
                        <div className = {styles.sectionHeading}>
                            <hr className = {styles.lineSeperator}/>
                            <h3 className = "redText">REPORT A BUG</h3>
                            <hr className = {styles.lineSeperator}/>
                        </div>

                        <p className = {styles.welcomeMsg}> Found a bug in our game? </p>
                        <p className = {styles.welcomeMsg}> Please let us know by filling out the form below describing it and how it happened.</p>
                    
                        <form className = {styles.form}>
                            <input type = "text" placeholder = "roblox username" className = {styles.input}/>
                            <input type = "text" placeholder = "email" className = {styles.input}/>
                            <textarea className = {styles.textArea} placeholder = "message" cols = "30" rows = "10"></textarea>
                        </form>
                    
                        {/* move to call/write to aws */}
                        <Button text = "Submit" url = "#"/>
                    </div>



                    {/* END - bug report */}

                </div>
                {/* END - content container */}
            
            </div>
            {/* END - wallpaper wrapper */}

        </div>
        // END - container

    );
}