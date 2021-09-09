console.log("Sanity!"); //sanity

// ### Exercise 1




// Remember, this is the basic model of a javascript file with a class
// ```javascript.


class Movie{
    // Create a Movie class with the following attributes: movieName, rating, and yearReleased.
  constructor(movieName, rating, yearRelased)
  {
      this.movieName = movieName;
      this.rating = rating;
      this.yearRelased = yearRelased;
  }
  //  Create a method printAllAttributes that will alert the user of the value of each attribute.
  print() {
      console.log(`${this.movieName} has a rating of ${this.rating}, and was relased in ${this.yearRelased}`);
  }


}

function main(){

// In your main function create two Movie objects, assign a value to each attribute, and print them to the console.
let movie1 = new Movie("The Fantastic 4", "10", "2001");
movie1.print();
let movie2 = new Movie("Tarzan", "10", "1999");
movie2.print();
}

// main(); // calling the main func.


// ### Exercise 2
// Create a class Product that represents a product sold online.
//  A product has a price, quantity and name. 
//  Create a method printAllAttributes that will alert the user of the value of each attribute.

// In your main function create two Product objects,
//  assign a value to each attribute, and print them to the console.

class Product {
    constructor(name, price, quantity)
    {   this.name = name;
        this.price = price;
        this.quantity = quantity;
       

    }

    print(){
        console.log(`${this.name} has been sold for $${this.price} of ${this.quantity}`);
    }

   
}

mainexercise2 = () =>{
      let product1 = new Product("Moniter", "184.00", "1" );
      product1.print();
      let product2 = new Product("Keyboard", "34.99", "1");
      product2.print();  
}
// mainexercise2();


// ### Exercise 3: Inheritance
// Create a Person class that has the properties Name and Occupation.
//  Set the Name from the constructor method while Occupation should default to 'Unemployed'.
//   Add a greet() method that when called will print 'Hello, my name is NAME'.

// Create a Student class who sets the Occupation property to 'Student'. Override the base greet() method so when called it will call greet() on the parent class and then print it's own additional greeting of 'My occupation is OCCUPATION'.

// Create a people array.
// Create 2 instances of Person and add to people array.
// Create 2 instances of Student and add to people array.

// Use forEach to iterate the array and for each object print their name and greeting (by calling creeting method).


class Person{
    constructor(name)
    {
        this.name = name;
        this.occupation =  "Unemployed";
       
    }
    greet() {
        console.log(`Hello! my name is ${this.name} and I am ${this.occupation}`);
    }
}



let people = []; 

let person1 = new Person("Janice",);
let person2 = new Person("Mallory",);
// person1.greet();




// iterate throught our array of Person objects!




class Student extends Person {
    occupation = "Student"; //referencing the occupation from person!
    greet(){
        super.greet(); // call the parent version
        // console.log(`Hello! my name is ${this.name}, and I am a ${this.occupation}`);
    }
    
}

// person2.greet();
let student1 = new Student("Collen");

let student2 = new Student("Will");


people = [person1, person2, student1, student2]; // 2 people in the array!

people.forEach(element => {
    console.log(element.name); // name
    element.greet(); //calling the greet method!
});




// people.push(person1, person2, student1, student2);
// console.log(people);
// people.forEach(
//     (element) =>{
//        console.log(element);
//     }
   
// );
// console.log(allPeople);

// student1.greet();

// class Student extends Person{
//     constructor(occupation){
//     this.occupation = "Student";

// }
// greet(){
//     super.greet();
//     console.log(`Hello! my name is ${this.name}, and I am a ${this.occupation}`);
// }
// }












// exercise3 = () =>{

//     let Person1 = new Person("Jess", " " )
//     Person1.greet(); // debugger
//     let student1 = new Student("Jess", " ");
//     student1.greet();
// }
// exercise3();
