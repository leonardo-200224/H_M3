// User data input
let name_p = prompt("Enter name:"), age = Number(prompt("Enter age:"));

// Conditionals and messages
    if (isNaN(age) || age == 0 || age < 0  ) {
        console.error("Error: Please enter a valid age.");
    }else if (age < 18){
        alert(`Hello ${name_p}, you are a minor. Keep learning and enjoying the code!`);
        console.log(`Hello ${name_p}, you are a minor. Keep learning and enjoying the code!`);
    }else {
        alert(`Hello ${name_p}, you are an adult. Get ready for great opportunities in the world of programming!`);
        console.log(`Hello ${name_p}, you are an adult. Get ready for great opportunities in the world of programming!`);
    }