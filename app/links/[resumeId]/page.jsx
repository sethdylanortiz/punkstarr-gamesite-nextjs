import React from 'react';
import styles from './page.module.css';
import Directbutton from '@/components/directbutton/Directbutton';

// link logos
import logo_github from '../../../public/icon_github.png';
import logo_linkedin from '../../../public/icon_linkedin.png';
import logo_punkstarr from '../../../public/punkstarr_logo.png';
import logo_youtube from '../../../public/icon_youtube.png';
import logo_twitter from '../../../public/icon_twitter.png';

// to-do: write e2e tests
const Links = ({params}) => {

    let isResumeForEmbeddedCompany = params.resumeId === "for-embedded" ? true : false;

    return (
        <div className = {styles.contentContainer}>

            <div className = {styles.welcomeMsg}>
                <h1>Seth Ortiz - Directory</h1>
            </div>

            <Directbutton 
                directory = {logo_linkedin} 
                text = "Linkedin - Seth Ortiz | Software Engineer @ Mercury Systems" 
                url = "https://www.linkedin.com/in/seth-ortiz-711652225/"
            />
            <Directbutton 
                directory = {logo_punkstarr} 
                text = "Video game's website - punkstarr" 
                url = "/"
            />
            <Directbutton 
                directory = {logo_twitter} 
                text = "Video game's Twitter - punkstarr" 
                url = "https://twitter.com/SGonRoblox"
            />
            <Directbutton 
                directory = {logo_youtube} 
                text = "Video game's trailer - punkstarr" 
                url = "https://www.youtube.com/watch?v=Aof59UrZo0w&ab_channel=GoTeyoGo"
            />

            {/* testing */}
            { !isResumeForEmbeddedCompany ? <h1>[ For Non-Embedded Software Engineer Opportunities]</h1> : <h1>For Embedded Software Engineer Opportunities</h1>}
            { !isResumeForEmbeddedCompany ? 
                [
                    <Directbutton
                        directory = {logo_github} 
                        text = "Next.js punkstarr-gamesite | github repository [in progress]" 
                        url = "https://github.com/sethdylanortiz/punkstarr-gamesite-nextjs"
                    />,
                    <Directbutton 
                        directory = {logo_github} 
                        text = "Advanced-Data-Structues | [NEXT.JS DYNAMIC ROUTE TESTING]" 
                        url = "https://github.com/sethdylanortiz/punkstarr-gamesite-nextjs"
                    />
                ]
               : 
               [
                    <Directbutton 
                        directory = {logo_github} 
                        text = "Other Projects ... BLAH" 
                        url = "https://github.com/sethdylanortiz/Advanced-Data-Structures"
                    /> 
               ]}
        </div>
    ); 
}

export default Links;