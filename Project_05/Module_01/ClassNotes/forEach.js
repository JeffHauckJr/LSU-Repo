const myTodos = [
    {title: "second test todo", dueDate: "2/24/2021, 7:00:00 PM", description: "test", isComplete: false},
    {title: "my new todo", dueDate: "2/17/2021, 7:00:00 PM", description: "test", isComplete: false},
    {title: "Make a new Todo", dueDate: "2/17/2021, 7:21:28 PM"},
    {title: "Make an expired Todo", dueDate: "2/17/2021, 7:21:28 PM"},
    {title: "Clear completed or expired Todos", dueDate: "2/17/2021, 7:21:28 PM"},
  ]

//I want to loop through all of my todos and append a certain stricture of html with the todo to the page

for (let i = 0; index < myTodos.length; i++) {
    const myTodo = MyTodos[i]
    let todo = `
    <div> My todo </div>
    `
    $('.my-todo').html(todo)
}


//Array.forEach method lives on the array prototype
    //Array.forEach takes in a callback function that is invoked on each element of the array
myTodos.forEach(function (element, index) {
    console.log(element, index)
})
    //Click takes in a callback function that is invoked when click in the element that the click listener 
$('.my-todos').click(function () {

})