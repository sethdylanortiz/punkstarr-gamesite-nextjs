import React from 'react';
import styles from './page.module.css';
import Directbutton from '@/components/directbutton/Directbutton';

// link logos
import logo_github from '../../../../public/icon_github.png';
import logo_linkedin from '../../../../public/icon_linkedin.png';
import logo_punkstarr from '../../../../public/punkstarr_logo.png';
import logo_youtube from '../../../../public/icon_youtube.png';
import logo_twitter from '../../../../public/icon_twitter.png';
import logo_googledocs from '../../../../public/icon_googledocs.png';

// change to typescript
const Links = ({params}) => {

    let isResumeForEmbedded = params.resumeId == "resume-embedded-software" ? true : false;
    const game_links = [
        {logo: logo_linkedin, name: "Linkedin - Seth Ortiz | Software Engineer @ Mercury Systems", href: "https://www.linkedin.com/in/seth-ortiz-711652225/" },
        {logo: logo_punkstarr, name: "Video game's website - punkstarr", href: "/"},
        {logo: logo_twitter, name: "Video game's Twitter - punkstarr", href: "https://twitter.com/SGonRoblox"},
        {logo: logo_youtube, name: "Video game's trailer - punkstarr" , href: "https://www.youtube.com/watch?v=Aof59UrZo0w&ab_channel=GoTeyoGo"}
    ];
    const non_embedded_links = [
        {logo: logo_googledocs, name: "Check out my resume", href: "https://docs.google.com/document/d/1iJekOndaEBsN5qirCMshedbQbqc2LBE3eld7jCExbuI/edit?usp=sharing"},
        {logo: logo_github, name: "[Latest Project]: Roblox remote config gamesite - using Next.js", href: "https://github.com/sethdylanortiz/remote-globalupdates/tree/feature/mergepage-react-diff-viewer"},
        {logo: logo_github, name: "Issue tracker [next.js] | [in progress]", href: "https://github.com/sethdylanortiz/nextjs-issue-tracker"}
    ];
    const embedded_links = [
        {logo: logo_googledocs, name: "Check out my resume", href: "https://docs.google.com/document/d/1iJekOndaEBsN5qirCMshedbQbqc2LBE3eld7jCExbuI/edit?usp=sharing"},
        {logo: logo_github, name: "C/C++ Projects [personal/school]", href: "https://github.com/sethdylanortiz/Advanced-Data-Structures"}
    ];

    return (
        <div className = {styles.contentContainer}>

            <div className = {styles.welcomeMsg}>
                <h1>Seth Ortiz - Directory</h1>
            </div>

            {game_links.map((link) => 
                <Directbutton key = {link.name} directory = {link.logo} text = {link.name} url = {link.href} />
            )}
            
            { (!isResumeForEmbedded) ?
                <div className = {styles.dynamic_link_container}>
                    <h2>[For Non-Embedded Software Opportunities] - using Next.js dynamic routes</h2>
                    
                    {non_embedded_links.map((link) => 
                        <Directbutton key = {link.name} directory = {link.logo} text = {link.name} url = {link.href} />
                    )}
                </div>
               : 
               <div className = {styles.dynamic_link_container}>
                    <h2>[For Embedded Software Opportunities]</h2>

                    {embedded_links.map((link) => 
                        <Directbutton key = {link.name} directory = {link.logo} text = {link.name} url = {link.href} />
                    )}
                </div>
            }
            
        </div>
    )
};

export default Links;