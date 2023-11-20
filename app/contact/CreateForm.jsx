// client component - to not hydrate entire page
"use client";

import React from 'react';
import styles from './page.module.css';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

const CreateForm = () => {

    // create instance of router - used to redirect user
    const router = useRouter();

    // set states
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // function to handle form submission
    const handleSubmit = async(event) => {
        // prevents the default action of a page which is to reload
        event.preventDefault;

        // set isLoading to true after submission
        setIsLoading(true);

        // create post params object, item title is from db
        const bugReport = {
            username: username,
            email: email,
            reportmsg: message
        }

        // send post request
        const response = await fetch('https://y0pqvwydld.execute-api.us-west-1.amazonaws.com/StoreBugReportDynamoDB', {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bugReport)
            }
        )
        console.log("sent post request!");

        // check status and redirect - to home [testing]
        if(response.status == 200){
            // router.refresh(); // this is if we need a refresh in data [to-add]: section displaying all bug reports
            router.push('/');
        }
    }

    return(
        <form className = {styles.form} onSubmit = {handleSubmit}>

            {/* input submission for username */}
            <input type = "text" 
            placeholder = "roblox username" 
            className = {styles.input} 
            required
            onChange = {(event) => setUsername(event.target.value)}
            value = {username}
            />

            {/* input submission for email */}
            <input type = "text" 
            placeholder = "email" 
            className = {styles.input} 
            required
            onChange = {(event) => setEmail(event.target.value)}
            value = {email}
            />

            {/* input submission for message/bug */}
            <textarea className = {styles.textArea} 
            placeholder = "message" 
            cols = "30" 
            rows = "10" 
            required
            onChange = {(event) => setMessage(event.target.value)}
            value = {message}
            />

            {/* add button */}
            <button className = {styles.submitReport} disabled = {isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Submit</span>}
            </button>

        </form>
    );
}

export default CreateForm;