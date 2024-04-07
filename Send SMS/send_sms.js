const { exec } = require('child_process');

function callPythonScript(message) {
    return new Promise((resolve, reject) => {
        exec(`python send_sms_script.py "${message}"`, (error, stdout, stderr) => {
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


const message = 'DATCH msg from server';

callPythonScript(message)
    .then(handleApiResponse)
    .catch(error => console.error('Error calling Python script:', error));
