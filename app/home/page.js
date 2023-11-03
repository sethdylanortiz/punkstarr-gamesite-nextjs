import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactPlayer from 'react-player';
import HomePageVideo from './video.js';

/*
to-do:
- add css via modules.css and globals.css
- add video
- test against mobile device
- finish homepage
- add typescript?
- run eslint

completed:
- created aws s3 bucket to hold videos/images media
- created and connected cloudfront to s3 bucket
- updated next.config.js for cloudfront integration
*/

export default function Home() 
{
    return (    
        <main>
            <h1>Hello World</h1>
            <Link href = "/bloximpact">Check out bloximpact</Link>

            <HomePageVideo/>

            <Image
                alt = "gameplay image 1"
                src = "https://d3ith6uwkonxsg.cloudfront.net/images/home-gameplay1.jpg"
                width = {1200}
                height = {550}
                style = {{
                    maxWidth: '100%',
                    height: 'auto'
                }}
            />
        </main>
    );
}