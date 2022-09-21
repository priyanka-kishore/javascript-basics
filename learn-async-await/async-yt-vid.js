// some promises:

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making a request to ${location}`);

        if (location === 'Google') {
            resolve('Google says Hello :)');
        } else {
            reject('Sorry, we can only talk to Google :(');
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject)  => {
        console.log('Processing response...');
        
        resolve(`Extra information for us + ${response}`);
    });
}

/*
// WITHOUT ASYNC / AWAIT: not too bad, but a lot of nesting:
makeRequest('Google').then(response => {
    console.log('Response received!')
    return processRequest(response); // return value used in next chained then()
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
})
// still executes one then() after the other
*/

// but we can do this asynchronously, with async/await:
// await needs an async function (named, arrow, anonymous, etc) to be inside of, can't be used globally
// here, we can just call our different methods
// await = wait until the Google makeRequest is finished before executing next line in this function
// without `await`, will just return that promise, instead of the resulting promise of that promise
// errors can be caught with try-catch blocks. in the try, is code that could potentially fail
async function doAsyncWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response received in async function');
    
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (err) {
        console.log(err);
    }
    
}
doAsyncWork();