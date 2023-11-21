const AWS = require("aws-sdk");
const BugReportsTable = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

const writeBugDB = async(input_username, input_email, input_message) => {

    // get current time 
    const cur_utc = new Date();

    // build report message
    const params = {
        TableName: 'Bug-Reports',
        Item: {
          'timestamp': cur_utc.toISOString(),
          'email': input_username,
          'username': input_email,
          'reportmsg': input_message
        }
      };

    // write bug report to db, return promise
    return BugReportsTable.put(params).promise();
}

export default writeBugDB;