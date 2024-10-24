function hello(name){
    console.log("hello" + name);
}
hello("john");

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))