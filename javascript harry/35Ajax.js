console.log('welcome to Ajax tutorial');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked the fetchBtn');

    // Instantiate an xhr objext
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);


    // use THis for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // what to do on ProgressEvent(optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);

    // }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.staus === 200) {
            console.log(this.responseText);
        } else {
            console.log("some erroe occured");
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("we are done!");
}
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // INstantiate an xhr object
    const xzhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("we are done fetching employees!");
}