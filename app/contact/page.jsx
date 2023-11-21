import React from 'react';
import styles from './page.module.css';
import CreateForm from './CreateForm';

const ContactUs = () => {

    return (
        <div className = {styles.container}>

            {/* container holding wallpaper
            <div className = "wallpaper"> */}

                {/* container holding content */}
                <div className = "contentContainer">

                        {/* section - bug report */}
                        <div className = {styles.bugReport}>
                            <div className = "sectionHeading">
                                <hr className = "lineSeperator"/>
                                <h3 className = "redText">REPORT A BUG</h3>
                                <hr className = "lineSeperator"/>
                            </div>

                            <p className = "welcomeMsg"> Found a bug in our game? </p>
                            <p className = "welcomeMsg"> Please let us know by filling out the form below describing it and how it happened.</p>
                        
                            <CreateForm/>
                        </div>

                </div>
                {/* END - styles.contentContainer  */}

            {/* </div>
            END - styles.wallpaper */}
    
        </div>
        // END - styles.Container

    );
}

export default ContactUs;