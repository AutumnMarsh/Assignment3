/*
           
// step 1
var movies = ["Les Intouchables", "Cidade de Deus", "L'Auberge Espagnol", "Los Diarios de Motocicleta", "Dot the i"];
console.log(movies[1]);

// step 2
//Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
var movies = [];
movies[0] = "Les Intouchables";
movies[1] = "Cidade de Deus;
movies[2] = "L'Auberge Espagnol";
movies[3] = "Los Diarios de Motocicleta";
movies[4] = "Dot the i";
console.log(movies[0]);

// step 3
//Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
var movies = ["Les Intouchables", "Cidade de Deus", "Deux Secondes", L'Auberge Espagnol", "Los Diarios de Motocicleta", "Dot the i"];
console.log(movies.length);

// step 4
//Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

var movies = [];
movies[0] = "Les Intouchables";
movies[1] = "Cidade de Deus";
movies[2] = "Deux Secondes";
movies[3] = "L'Auberge Espagnol";
movies[4] = "Cidade de Deus";
//var lastMovie = (movies[movies.length-1]);
//movies.shift([0]); 
delete movies[0];
console.log(movies);


// step 5
var movies = [];
movies[0] = "Les Intouchables";
movies[1] = "Cidade de Deus";
movies[2] = "Deux Secondes";
movies[3] = "L'Auberge Espagnol";
movies[4] = "Cidade de Deus";
movies[5] = "Chocolate";
movies[6] = "Billy Elliot";

for (i=0; i<movies.length; i++) {
    console.log(movies[i]);
};


//steps 6
var movies = [];
movies[0] = "Les Intouchables";
movies[1] = "Cidade de Deus";
movies[2] = "Deux Secondes";
movies[3] = "L'Auberge Espagnol";
movies[4] = "Cidade de Deus";
movies[5] = "Chocolate";
movies[6] = "Billy Elliot";

for (var x in movies) {
    console.log(movies[x]);
};


// step 7 and 8
var movies = [];
movies[0] = "Les Intouchables";
movies[1] = "Cidade de Deus";
movies[2] = "Deux Secondes";
movies[3] = "L'Auberge Espagnol";
movies[4] = "Cidade de Deus";
movies[5] = "Chocolate";
movies[6] = "Billy Elliot";

var leastFav = [];
leastFav[0] = "Titanic";
leastFav[1] = "Generic Hollywood Crap";
leastFav[2] = "A Clockwork Orange";

// sort for step 7
//  for (var x in movies) {
//      movies.sort();
//      console.log(movies[x]);
//  };

//  console.log("Movies I Like:"  + '\n' + '\n');
//  for (var x in movies) {
//        console.log(movies[x]);
//  };
//  console.log('\n' + '\n' + "Movies I Regret Watching:"  + '\n' + '\n');
//  for (var y in leastFav) {
//      console.log(leastFav[y]);
//  };


// step 9
var movies1 = [];
movies1[0] = "Les Intouchables";
movies1[1] = "Cidade de Deus";
movies1[2] = "Deux Secondes";
movies1[3] = "L'Auberge Espagnol";
movies1[4] = "The Cutting Edge";
movies1[5] = "Chocolate";
movies1[6] = "Billy Elliot";

var leastFav = [];
leastFav[0] = "Titanic";
leastFav[1] = "Generic Hollywood Crap";
leastFav[2] = "A Clockwork Orange";

var movies = (movies1.concat(leastFav));
//movies = (movies.sort());
//    console.log(movies.reverse());

// step 10
//console.log(movies.pop());

// step 11
//console.log(movies.shift());

// step 12
// pull out leastFav. Get indices. then, using those indices, add movies you like.
for (i=0; i < movies.length; i++) {
    for (j=0; j < leastFav.length; j++) {
        if (movies[i] === leastFav[j]) {
            console.log(movies[i]);
        }
    }
}





// step 13
employee1 = [];
employee1["id"] = 2245;
employee1["name"] = "Jane Nerdette";
employee1["title"] = "Web Magician";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

employee2 = [];
employee2["id"] = 6115;
employee2["name"] = "Gaby Geek";
employee2["title"] = "Web Extraordinaire";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;
//console.log(employee1["name"]);
//var employees = employee1.concat(employee2);
//var employees = new Array();
//employees = employee1.concat(employee2);
//console.log(employees);

//works
//var employees = [employee1,employee2];
//console.log(employees[1]["name"]);



// step 14
//for (i = 0; i < employees; i++) {
//    console.log(employees[1]["name"]);
//};

// step 15
employee3 = [];
employee3["id"] = 6994;
employee3["name"] = "Drew Dork";
employee3["title"] = "Gamer Dude";
employee3["department"] = "Engineering";
employee3["isCurrent"] = false;

var employees = [employee1,employee2,employee3];

for (i=0; i < employees; i++) {
    if (["isCurrent"] !== false)
        console.log(employees[i]["isCurrent"]);
};




// step 16
Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:  movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]]; Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.


var movies = [["Deux Secondes", 2],
        ["L'Auberge espagnol", 3],
        ["Dot the i", 4],
        ["Les Intouchables", 1],
        ["Los Diarios de Motocicleta", 5]];
var movNames = movies.filter(function(item) {
    return typeof item == "array";
});
var realMovN = movNames.filter(function(item2) {
    return typeof item2 == "string";
});
var i;

for (i=0; i < 5; i++) {
    var realRealName = getMovie(i);
      console.log(realRealName); 
}

function getMovie(x){
    return movies[x][0];
}
//console.log(realMovN);
//console.log(getMovie);   
 




// --------------- PRACTICE WITH FUNCTIONS



// step 1
Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call. 

var displayMessage = function(x){
    var x = console.log("This is an anonymous fxn");
}
displayMessage();



// step 2
Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window. 

function calculate(x, y) {
    console.log(5%26);
}
calculate();



// step  3
Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window

var employees = ["John", "Jessica", "Mark", "Fred", "Sally"];

var showEmployee = function(x){
  for (i=0; i<x.length; i++) {
        //console.log(x[i]);
        return x[i];
  }
};

(showEmployee(employees));


toUpper = function(x) {
    console.log(x.toUpperCase());
};
employees.map(toUpper);

*/ 









