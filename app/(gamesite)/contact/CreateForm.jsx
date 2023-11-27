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
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async(event) => {

        setIsLoading(true);
        event.preventDefault();

        const inputData = {
            username: event.target.input_username.value,
            email: event.target.input_email.value,
            reportmsg: event.target.input_message.value 
        }

        // api call to app router POST dynamodb
        const response = await fetch("/api/bugreport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData),
        });

        // await and print resposne from write request
        const {responseMsg, success} = await response.json();
        console.log();

        // redirect user to new page upon response
        if(success === true){
            console.log("CreateForm.jsx - success writing to db!" + "responseMsg: " + responseMsg);

            // router.refresh();
            router.push("/success");

        }else{
            // redirect to 404 error page
            console.log("CreateForm.jsx - error writing to db!");
            ;
        }

        setIsLoading(false);
    }

    return(
        <form className = {styles.form} onSubmit = {handleSubmit}>

            {/* input submission for username */}
            <input type = "text" 
            placeholder = "roblox username" 
            className = {styles.input} 
            id = "input_username"
            required
            />

            {/* input submission for email */}
            <input type = "text" 
            placeholder = "email" 
            className = {styles.input} 
            id = "input_email"
            required
            />

            {/* input submission for message/bug */}
            <textarea className = {styles.textArea} 
            placeholder = "message" 
            cols = "30" 
            rows = "10" 
            id = "input_message"
            required
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