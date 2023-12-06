import React, { Fragment } from 'react';
import styles from './page.module.css';
import Directbutton from '@/components/directbutton/Directbutton';

// link logos
import logo_github from '../../../../public/icon_github.png';
import logo_linkedin from '../../../../public/icon_linkedin.png';
import logo_punkstarr from '../../../../public/punkstarr_logo.png';
import logo_youtube from '../../../../public/icon_youtube.png';
import logo_twitter from '../../../../public/icon_twitter.png';
import logo_googledocs from '../../../../public/icon_googledocs.png';

// to-do: write e2e tests
const Links = ({params}) => {

    let resumeType = params.resumeId == "resume-embedded-software" ? params.resumeId : "resume-non-embedded-software";

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
            { (resumeType === "resume-non-embedded-software") ? <h1>[For Non-Embedded Software Opportunities] - using Next.js dynamic routes</h1> : <h1>[For Embedded Software Opportunities]</h1>}
            { (resumeType === "resume-non-embedded-software") ? 
                <Fragment>
                    <Directbutton 
                        directory = {logo_googledocs} 
                        text = "Non-Embedded Software Engineering resume" 
                        url = "https://docs.google.com/document/d/1iJekOndaEBsN5qirCMshedbQbqc2LBE3eld7jCExbuI/edit?usp=sharing"
                    />
                    <Directbutton
                        directory = {logo_github} 
                        text = "Next.js punkstarr-gamesite | github repository [in progress]" 
                        url = "https://github.com/sethdylanortiz/punkstarr-gamesite-nextjs"
                    />
                    <Directbutton 
                        directory = {logo_github}
                        text = "Developer site [next.js] | [in progress]" 
                        url = "https://github.com/sethdylanortiz/developer_site-nextjs"
                    />
                    <Directbutton 
                        directory = {logo_github}
                        text = "Issue tracker [next.js] | [in progress]" 
                        url = "https://github.com/sethdylanortiz/nextjs-issue-tracker"
                    />
                    <Directbutton 
                        directory = {logo_github} 
                        text = "Advanced-Data-Structues | [NEXT.JS DYNAMIC ROUTE TESTING]" 
                        url = "https://github.com/sethdylanortiz/punkstarr-gamesite-nextjs"
                    />
                </Fragment>
               : 
               <Fragment>
                    <Directbutton 
                        directory = {logo_googledocs} 
                        text = "Embedded Software Engineering resume" 
                        url = "https://docs.google.com/document/d/1iJekOndaEBsN5qirCMshedbQbqc2LBE3eld7jCExbuI/edit?usp=sharing"
                    />
                    <Directbutton 
                        directory = {logo_github} 
                        text = "Other Projects ... BLAH" 
                        url = "https://github.com/sethdylanortiz/Advanced-Data-Structures"
                    /> 
                </Fragment>
               }
        </div>
    ); 
}

export default Links;