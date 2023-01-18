console.log('Welcome to fetch tutorial');

// button with id myBtn
let myBtn = document.getElementById('myBtn');

// Let with id content
let content = document.getElementById('content');

function getData(){
    console.log("Started getData");
    url = "DJ.txt";
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}
console.log("Before runing getData");
getData();
console.log("After running getData");