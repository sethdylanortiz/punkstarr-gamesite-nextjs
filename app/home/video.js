// 'use client'
import React from 'react';
import ReactPlayer from 'react-player';

const HomeVideo = () => 
{
    return (
        <div>
            {/* <ReactPlayer
                url = "https://d3ith6uwkonxsg.cloudfront.net/videos/SG-Trailer-[BETA].mp4"
                controls = {false}
            /> */}
            <video autoPlay loop muted src = "https://d3ith6uwkonxsg.cloudfront.net/videos/SG-Trailer-[BETA].mp4" />
        </div>
    )
}

export default HomeVideo