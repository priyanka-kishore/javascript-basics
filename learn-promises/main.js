const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialAboutPromises() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'ERROR!! User left us',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'ERROR!! User watches cats instead',
                message: 'ngl cats >>>'
            })
        } else {
            resolve('okay we be learning')
        }
    });
}

watchTutorialAboutPromises().then((message) => { 
    console.log('Watching tutorial: SUCCESS! ' + message,);
}).catch((error) => {
    console.log(error.name + ": " + error.message);
});