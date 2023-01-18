console.log('welcome to callback tutorial');

// pretend that this response is coming from server
const students = [
    { name: "Darshan", subject: "JavaScript" },
    { name: "Ankit", subject: "Machine Learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 3000);
}

let newStudent = { name: "Jay", subject: "banking" };
enrollStudent(newStudent, getStudents);
