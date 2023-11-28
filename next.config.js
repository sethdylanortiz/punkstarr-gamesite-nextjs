/** @type {import('next').NextConfig} */

module.exports = {
    env:{
        ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
        REGION: process.env.REGION,
        TABLE_NAME: process.env.TABLE_NAME,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['d3ith6uwkonxsg.cloudfront.net', 'y0pqvwydld.execute-api.us-west-1.amazonaws.com/StoreBugReportDynamoDB']
    }
}