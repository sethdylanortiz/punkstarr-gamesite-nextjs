// AWS SDK V3 - NEXTJS DEPRECATE V2
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const dbClient = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey:process.env.SECRET_ACCESS_KEY,
    },
});

const docClient = DynamoDBDocumentClient.from(dbClient);

const writeBugDB = async(input_username, input_email, input_message) => {

    // get current time
    const cur_time_utc = new Date();

    // build report message
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
          'timestamp': cur_time_utc.toISOString(),
          'email': input_username,
          'username': input_email,
          'reportmsg': input_message
        }
      };

    // write bug report to db, NO - return promise
    return docClient.send(new PutCommand(params));
};

export default writeBugDB;

// AWS SDK V2
// const AWS = require("aws-sdk");
// const BugReportsTable = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

// const writeBugDB = async(input_username, input_email, input_message) => {

//     // get current time 
//     const cur_utc = new Date();

//     // build report message
//     const params = {
//         TableName: 'Bug-Reports',
//         Item: {
//           'timestamp': cur_utc.toISOString(),
//           'email': input_username,
//           'username': input_email,
//           'reportmsg': input_message
//         }
//       };

//     // write bug report to db, return promise
//     return BugReportsTable.put(params).promise();
// }

// export default writeBugDB;