console.log('welcome to promise tutorial');

// resolve,reject,pending
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: your promise has been resolve');
                resolve();
            } else {
                console.log('Function: Your promise has not been resolved');
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}
func1().then(function () {
    console.log("DJ: Thanks for resolving");
}).catch(function (error) {
    console.log("DJ: vary bad bro. Reason: " + error);
})