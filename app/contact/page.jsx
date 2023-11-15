"use client";

import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// function used to POST/store bug reports, compare to contact page
async function writeBugReports({username, msg}) 
{
    


}

const ContactUs = () => {
    // error handling
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // get values
        const input_username = e.target[0].value;
        const input_email = e.target[1].value;
        const input_bug_report = e.target[2].value;

        try {
            
            const response = await fetch("https://y0pqvwydld.execute-api.us-west-1.amazonaws.com/StoreBugReportDynamoDB", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': origin || '*',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: input_username,
                    email: input_email,
                    reportmsg: input_bug_report
                })
            });

            // redirect to success page
            response.status == 201 && router.push("/")
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className = {styles.Container}>

            {/* container holding wallpaper */}
            <div className = "wallpaper">

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
                    
                        <form className = {styles.form} onSubmit = {handleSubmit}>
                            <input type = "text" placeholder = "roblox username" className = {styles.input} required/>
                            <input type = "text" placeholder = "email" className = {styles.input} required/>
                            <textarea className = {styles.textArea} placeholder = "message" cols = "30" rows = "10" required></textarea>

                            <button className = {styles.submitReport}>Submit report</button>
                        </form>
                    
                        {/* move to call/write to aws */}
                        <Button text = "Submit" url = "#"/>
                    </div>

                </div>
                {/* END - styles.contentContainer  */}

            </div>
            {/* END - styles.wallpaper */}
    
        </div>
        // END - styles.Container

    );
}

/* 
const AWS = require('aws-sdk');
const BugReportsTable = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = async(event, context, callback) => 
{
    var dataObj = JSON.parse(event.body);

    return await storeBugReportDB(dataObj).then(() => {
    callback(null, {
        statusCode: 200,
        body: "Success storing " + dataObj.username + "'s bug report!",
        headers: {
        'Access-Control-Allows-Origin': '*',
        'Content-Type': 'text/plain',
        }
    });
    }).catch((error => {
        console.log(error);
    }));
};

async function storeBugReportDB(dataObj)
{
    const cur_utc = new Date();
    const params = {
    TableName: 'Bug-Reports',
    Item: {
        'timestamp': cur_utc.toISOString(),
        'email': dataObj.email,
        'username': dataObj.username,
        'reportmsg': dataObj.reportmsg
        }
    };

    return BugReportsTable.put(params).promise();
}
*/

export default ContactUs