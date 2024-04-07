const { exec } = require('child_process');

function callPythonScript(message, messageTo) {
    return new Promise((resolve, reject) => {
        exec(`python send_sms_script.py "${message}" "${messageTo}"`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
}

function handleApiResponse(response) {
    console.log("\nMessage Status\n========================\n\n")
    console.log(response);
    console.log("\n=======================\n")
}


const message = 'DATCH SMS from server';
const messageTo = '073XXXXXXX'

callPythonScript(message, messageTo)
    .then(handleApiResponse)
    .catch(error => console.error('Error calling Python script:', error));
