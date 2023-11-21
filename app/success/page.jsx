import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Footer from '@/components/footer/Footer';

const SuccessPage = () => {

    return (

        <div className = {styles.contentContainer}>

            <p className = "welcomeMsg"> thank you!</p>
            <p className = "welcomeMsg"> The punkstarr team will begin looking into your report </p>

            <div className = {styles.buttonTable}>
                <Button text = "Home" url = "./"/>
                <Button text = "Contact" url = "/contact"/>
            </div>

        </div>

    );
}

export default SuccessPage;