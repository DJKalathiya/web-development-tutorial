console.log('welcome to promise tutorial');

// pretend that this response is coming from server
const students = [
    { name: "Darshan", subject: "JavaScript" },
    { name: "Ankit", subject: "Machine Learning" }
]

function enrollStudent(student) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
        }, 1000);
    })
    
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Jay", subject: "banking" };
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("some error occured");
});

// function inside then is run as = resolve()
// function inside catch is run as = reject()