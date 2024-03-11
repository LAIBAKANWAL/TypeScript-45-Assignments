// Personal Message:

// let fullName: string = 'Laiba Kanwal';
// console.log(`Hello ${fullName}, would you like to learn some Python today?`);

// Name Cases:

// let myName :string = 'Laiba kanwal';

// function toTitleCase(name: string): string {
//     return name.replace(/\w\S*/g, function (txt: string): string {
//         return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
//     });
// }
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(toTitleCase(myName));

// Famous Quote:

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// Famous Quote 2:

// let famous_person = 'William Faulkner';
// let message = "It may be bad, but it's the only way you can do anything really good.";
// console.log(`${famous_person}, "${message}"`);


// Stripping Names:

// let student = '\t\n           maira         \t\n';
// console.log(`Name with whitespace: ${student}`);
// console.log(`Stripped Names: ${student.trim()}`);

// Number Eight:

// let addition = 5+3;
// console.log(addition);

// let subtraction = 10-2;
// console.log(subtraction);

// let multiplication = 2*4;
// console.log(multiplication);

// let division = 16/2;
// console.log(division);


// lines

// console.log((<any>"-").repeat(80));
// console.log(5+3)
// console.log((<any>"-").repeat(80));
// console.log(5+3)
// console.log((<any>"-").repeat(80));
// console.log(5+3)
// console.log((<any>"-").repeat(80));
// console.log(5+3);

// Favorite Number:

// let favoriteNumber: number = 5; 

// let message: string = `My favorite number is ${favoriteNumber}.`;

// console.log(message);

// Adding Comments:

// this is commenting code


// Names:

// let names = ['maira','kainat','hina','hiba'];
// for(let i=0; i < names.length; i++){
//     console.log(names[i]);
// }

// Greetings:

// let names = ['maira','kainat','hina','hiba'];
// for(let i=0; i < names.length; i++){
//     console.log(`"Hello ${names[i]} welcome back"`);
// }

// Your Own Array:

// let transportation = ['Honda','Yamaha','super power','united'];
// for(let i=0; i < transportation.length; i++){
//     console.log(`“I would like to own a ${transportation[i]} motorcycle.”`);
// }

// Guest List:

// let guest_list = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela']

// for(let i=0; i < guest_list.length; i++){
//         console.log(`"Dear ${guest_list[i]},\n hope this message finds you well. It is with great pleasure that I extend an invitation to you for an intimate dinner. Your presence would be an honor, and I am eager to engage in inspiring conversations with you."`);
//     }

// Changing Guest List:

// Original guest list
// const originalGuestList: string[] = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela'];

// Guest who can't make it
// const unavailableGuest: string = 'Albert Einstein';

// New guest to invite
// const newGuest: string = 'Marie Curie';

// Remove the unavailable guest and add the new guest
// const updatedGuestList: string[] = originalGuestList.filter(guest => guest !== unavailableGuest);
// updatedGuestList.push(newGuest);

// Updated invitation message
// const invitationMessage: string = `Dear {guest},\n\nI hope this message finds you well. Due to unforeseen circumstances, our original dinner plans have changed. I would like to extend a new invitation to you for an intimate dinner. Your presence would be an honor, and I am eager to engage in inspiring conversations with you.`;

// Send invitations to the updated guest list
// for (const guest of updatedGuestList) {
//     console.log(invitationMessage.replace('{guest}', guest));
// }


// More Guests:

// // Original guest list
// const originalGuestList: string[] = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela'];

// // Guest who can't make it
// const unavailableGuest: string = 'Albert Einstein';

// // New guest to invite
// const newGuest: string = 'Marie Curie';

// // Remove the unavailable guest and add the new guest
// const updatedGuestList: string[] = originalGuestList.filter(guest => guest !== unavailableGuest);
// updatedGuestList.push(newGuest);

// const indexToInsert: number = Math.floor(updatedGuestList.length / 2); // Insert at the middle

// updatedGuestList.unshift('Laiba')
// // Using splice to add to the middle
// updatedGuestList.splice(indexToInsert, 0, 'Maira');


// updatedGuestList.push('samra')

// // Updated invitation message
// const invitationMessage: string = `Dear {guest},\n\nI hope this message finds you well. Due to unforeseen circumstances, our original dinner plans have changed. I would like to extend a new invitation to you for an intimate dinner. Your presence would be an honor, and I am eager to engage in inspiring conversations with you.`;

// // Send invitations to the updated guest list
// for (const guest of updatedGuestList) {
//     console.log(invitationMessage.replace('{guest}', guest));
// }


// Shrinking Guest List:

// // Original guest list
// let originalGuestList: string[] = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela'];

// // Guest who can't make it
// let unavailableGuest: string = 'Albert Einstein';

// // New guest to invite
// let newGuest: string = 'Marie Curie';

// // Remove the unavailable guest and add the new guest
// let updatedGuestList: string[] = originalGuestList.filter(guest => guest !== unavailableGuest);
// updatedGuestList.push(newGuest);

// let indexToInsert: number = Math.floor(updatedGuestList.length / 2); // Insert at the middle

// updatedGuestList.unshift('Laiba')
// // Using splice to add to the middle
// updatedGuestList.splice(indexToInsert, 0, 'Maira');


// updatedGuestList.push('samra')

// // Remove guests one at a time until only two names remain
// while (updatedGuestList.length > 2) {
//     const removedGuest = updatedGuestList.pop();
//     console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
// }

// // Print messages to the remaining two people
// updatedGuestList.forEach(guest => console.log(`Dear ${guest}, you're still invited to dinner.`));

// // Remove the last two names from the list
// updatedGuestList = [];

// // Print the empty list
// console.log("\nGuest list after all invitations: ", updatedGuestList);


// Seeing the World: 

// // Places to visit array
// let placesToVisit: string[] = ['Tokyo', 'Paris', 'New York', 'Machu Picchu', 'Sydney'];

// // Print the array in its original order
// console.log("Original Order:", placesToVisit);

// // Print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical Order:", [...placesToVisit].sort());

// // Show that the array is still in its original order
// console.log("Original Order (unchanged):", placesToVisit);

// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// // Show that the array is still in its original order
// console.log("Original Order (unchanged):", placesToVisit);

// // Reverse the order of the list
// placesToVisit.reverse();

// // Print the array to show that its order has changed
// console.log("Reversed Order:", placesToVisit);

// // Reverse the order of the list again
// placesToVisit.reverse();

// // Print the array to show it’s back to its original order
// console.log("Original Order (after double reverse):", placesToVisit);

// // Sort the array in alphabetical order
// placesToVisit.sort();

// // Print the array to show that its order has been changed
// console.log("Sorted in Alphabetical Order:", placesToVisit);

// // Sort to change the array in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));

// // Print the array to show that its order has changed
// console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);


// Dinner Guests:

// // Original guest list
// const originalGuestList: string[] = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela'];

// // Guest who can't make it
// const unavailableGuest: string = 'Albert Einstein';

// // New guest to invite
// const newGuest: string = 'Marie Curie';

// // Remove the unavailable guest and add the new guest
// const updatedGuestList: string[] = originalGuestList.filter(guest => guest !== unavailableGuest);
// updatedGuestList.push(newGuest);

// console.log(`There are ${updatedGuestList.length} guest are invited`);



// Think of something you could store in a array. 

// // List of countries array
// const countries: string[] = ['United States', 'Canada', 'United Kingdom', 'Germany', 'Japan', 'Australia', 'Brazil', 'South Africa', 'India'];

// // Print the list of countries
// console.log("List of Countries:");
// countries.forEach(country => console.log(country));


// 21
// Country objects
// const countriesInfo: { name: string; capital: string; population: number; language: string }[] = [
//     { name: 'United States', capital: 'Washington, D.C.', population: 331002651, language: 'English' },
//     { name: 'Canada', capital: 'Ottawa', population: 37742154, language: 'English, French' },
//     { name: 'United Kingdom', capital: 'London', population: 67886011, language: 'English' },
//     { name: 'Germany', capital: 'Berlin', population: 83783942, language: 'German' },
//     { name: 'Japan', capital: 'Tokyo', population: 126476461, language: 'Japanese' },
//     { name: 'Australia', capital: 'Canberra', population: 25499884, language: 'English' },
//     { name: 'Brazil', capital: 'Brasília', population: 212559417, language: 'Portuguese' },
//     { name: 'South Africa', capital: 'Pretoria', population: 59308690, language: 'Afrikaans, English, isiNdebele, isiXhosa, isiZulu, Sesotho, Setswana, siSwati, Tshivenda, Xitsonga' },
//     { name: 'India', capital: 'New Delhi', population: 1380004385, language: 'Hindi, English' }
// ];

// // Print country information
// console.log("Country Information:");
// countriesInfo.forEach(country => {
//     console.log(`
//         Country: ${country.name}
//         Capital: ${country.capital}
//         Population: ${country.population.toLocaleString()}
//         Language: ${country.language}
//     `);
// });


// Intentional Error:

// let names = ['maira','kainat','hina','hiba'];
// console.log(names[9])

// Conditional Tests:

// let x: number = 5;
// let y: number = 10;

// // Test 1: Is x equal to 5? Prediction: True.
// console.log("Is x == 5? I predict True.");
// console.log(x == 5);

// // Test 2: Is y equal to 10? Prediction: True.
// console.log("Is y == 10? I predict True.");
// console.log(y == 10);

// // Test 3: Is x not equal to y? Prediction: True.
// console.log("Is x != y? I predict True.");
// console.log(x != y);

// // Test 4: Is x less than y? Prediction: True.
// console.log("Is x < y? I predict True.");
// console.log(x < y);

// // Test 5: Is y greater than x? Prediction: True.
// console.log("Is y > x? I predict True.");
// console.log(y > x);

// // Test 6: Is x equal to 10? Prediction: False.
// console.log("Is x == 10? I predict False.");
// console.log(x == 10);

// // Test 7: Is y not equal to 5? Prediction: False.
// console.log("Is y != 5? I predict False.");
// console.log(y != 5);

// // Test 8: Is x greater than y? Prediction: False.
// console.log("Is x > y? I predict False.");
// console.log(x > y);

// // Test 9: Is y less than x? Prediction: False.
// console.log("Is y < x? I predict False.");
// console.log(y < x);

// // Test 10: Is x equal to '5'? Prediction: False.
// console.log("Is x == '5'? I predict False.");
// console.log(x == 400);



// More Conditional Tests:

// Tests for equality and inequality with strings
// let fruit: string = 'apple';
// let color1: string = 'red';
// let color2: string = 'green';

// console.log("Is fruit == 'apple'? I predict True.");
// console.log(fruit == 'apple');

// console.log("Is color1 != color2? I predict True.");
// console.log(color1 != color2);

// // Tests using the lower case function
// let text1: string = 'Hello';
// let text2: string = 'hello';

// console.log("Is text1.toLowerCase() == text2? I predict True.");
// console.log(text1.toLowerCase() == text2);

// // Numerical tests
// let number1: number = 42;
// let number2: number = 21;

// console.log("Is number1 === 42? I predict True.");
// console.log(number1 === 42);

// console.log("Is number1 > number2? I predict True.");
// console.log(number1 > number2);

// console.log("Is number1 <= number2? I predict False.");
// console.log(number1 <= number2);

// // Tests using "and" and "or" operators
// let sunny: boolean = true;
// let warm: boolean = false;

// console.log("Is it sunny and warm? I predict False.");
// console.log(sunny && warm);

// console.log("Is it sunny or warm? I predict True.");
// console.log(sunny || warm);

// // Test whether an item is in an array
// let fruits: string[] = ['apple', 'banana', 'orange'];

// console.log("Is 'banana' in the array? I predict True.");
// console.log(fruits.indexOf('banana') !== -1);

// // Test whether an item is not in an array
// console.log("Is 'grape' not in the array? I predict True.");
// console.log(fruits.indexOf('grape') !== -1);


// // Alien Colors #1:

// Alien Colors #1 - Passes the if test
// let alienColor: string = 'green';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }


// Alien Colors #1 - Fails the if test
// let alienColor: string = 'red';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }



// Alien Colors #2:

// Alien Colors #2 - Runs the if block
// let alienColor: string = 'green';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }


// Alien Colors #2 - Runs the else block
// let alienColor: string = 'red';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }


// Alien Colors #3:

// Alien Colors #3 - Green Alien (5 points)
// let alienColor: string = 'green';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }


// Alien Colors #3 - Yellow Alien (10 points)
// let alienColor: string = 'yellow';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }


// // Alien Colors #3 - Red Alien (15 points)
// let alienColor: string = 'red';

// if (alienColor === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alienColor === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alienColor === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }


// Stages of Life
// let age: number = 25;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }


// Favorite Fruit:

// Favorite Fruits
// let favoriteFruits: string[] = ['banana', 'apple', 'mango'];

// // Check for specific fruits
// if (favoriteFruits.indexOf('banana')!== -1) {
//     console.log("You really like bananas!");
// }

// if (favoriteFruits.indexOf('apple')!== -1) {
//     console.log("You really like apples!");
// }

// if (favoriteFruits.indexOf('mango')!== -1) {
//     console.log("You really like mangoes!");
// }

// if (favoriteFruits.indexOf('strawberry')!== -1) {
//     console.log("You really like strawberries!");
// } else {
//     console.log("Strawberries are not in your list of favorite fruits.");
// }

// if (favoriteFruits.indexOf('kiwi')!== -1) {
//     console.log("You really like kiwis!");
// } else {
//     console.log("Kiwis are not in your list of favorite fruits.");
// }


// Hello Admin:

// Usernames array
// let usernames: string[] = ['admin', 'Alice', 'Bob', 'Charlie', 'David'];

// // Loop through the array and print greetings
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }

// No Users:

// Usernames array
// let usernames: string[] = ['admin', 'Alice', 'Bob', 'Charlie', 'David'];

// // Check if the list is not empty
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     // Loop through the array and print greetings
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }

// // Remove all usernames from the array
// usernames = [];

// // Check if the list is empty after removal
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// }


// Checking Usernames:

// Usernames lists
// let current_users: string[] = ['john', 'alice', 'bob', 'charlie', 'david'];
// let new_users: string[] = ['Alice', 'Bob', 'Eve', 'frank', 'George'];

// // Convert current_users to lowercase for case-insensitive comparison
// let currentUsersLowercase: string[] = current_users.map(username => username.toLowerCase());

// // Loop through new_users and check for uniqueness
// for (let newUser of new_users) {
//     let newUserLowercase: string = newUser.toLowerCase();

//     if (currentUsersLowercase.indexOf(newUserLowercase) !== -1) {
//         console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Great! The username '${newUser}' is available.`);
//     }
// }


// Ordinal Numbers:

// Numbers array
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let number of numbers) {
//     // Determine the ordinal ending
//     let ordinalEnding: string;
//     if (number === 1) {
//         ordinalEnding = 'st';
//     } else if (number === 2) {
//         ordinalEnding = 'nd';
//     } else if (number === 3) {
//         ordinalEnding = 'rd';
//     } else {
//         ordinalEnding = 'th';
//     }

//     // Print the result
//     console.log(`${number}${ordinalEnding}`);
// }


// Pizzas:

// Favorite pizza names array
// let favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'Vegetarian'];

// // Print the name of each pizza using a for loop
// console.log("Pizza Names:");
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }

// // Modify the for loop to print a sentence for each pizza
// console.log("\nPizza Preferences:");
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Add a line outside the for loop expressing love for pizza
// console.log("\nI really love pizza!");


// Animals:

// // Animals with a common characteristic
// let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// // Print the name of each animal using a for loop
// console.log("Animal Names:");
// for (let animal of animals) {
//     console.log(animal);
// }

// // Modify the for loop to print a statement about each animal
// console.log("\nAnimal Statements:");
// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// // Add a line at the end stating what these animals have in common
// console.log("\nAny of these animals would make a great pet!");


// T-Shirt: 

// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size} and it has the message: "${message}".`);
// }

// // Call the function
// make_shirt('Large', 'Hello, World!');

// Large Shirts:

// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//     console.log(`Shirt size: ${size}, Message: "${message}".`);
// }

// // Create a large shirt with the default message
// make_shirt();

// // Create a medium shirt with the default message
// make_shirt('Medium');

// // Create a custom-sized shirt with a different message
// make_shirt('Small', 'JavaScript is fun!');



// Cities:

// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Call the function for three different cities
// describe_city('Karachi', 'Pakistan');
// describe_city('Paris'); // Defaults to 'Unknown' for the country
// describe_city('New York', 'USA');


// City Names:

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Call the function with three city-country pairs
// let location1: string = city_country('Lahore', 'Pakistan');
// let location2: string = city_country('Tokyo', 'Japan');
// let location3: string = city_country('Sydney', 'Australia');

// // Print the returned values
// console.log(location1);
// console.log(location2);
// console.log(location3);


// // Album:

// // Function to create an album object
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = { artist, title };

//     // Add tracks to the album object if provided
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

// // Create three album objects using make_album()
// let album1 = make_album('Artist1', 'Album1');
// let album2 = make_album('Artist2', 'Album2', 12);
// let album3 = make_album('Artist3', 'Album3', 8);

// // Print each album object
// console.log(album1);
// console.log(album2);
// console.log(album3);


// Magicians:

// // Function to show magicians
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Array of magician's names
// let magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// // Call the function to show magicians
// show_magicians(magicianNames);


// Great Magicians: 

// // Function to show magicians
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great
// function make_great(magicians: string[]): void {
//     for (let i in magicians) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }

// // Array of magician's names
// let magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// // Call make_great() to modify the array
// make_great(magicianNames);

// // Call show_magicians to verify the modification
// show_magicians(magicianNames);


// Unchanged Magicians:


// // Function to show magicians
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to make magicians great without modifying the original array
// function make_great(magicians: string[]): string[] {
//     let modifiedMagicians: string[] = [];

//     for (let i in magicians) {
//         modifiedMagicians[i] = `the Great ${magicians[i]}`;
//     }

//     return modifiedMagicians;
// }

// // Array of magician's names
// let magicianNames: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// // Call make_great() with a copy of the array and store the modified array
// let modifiedMagiciansArray: string[] = make_great(magicianNames.slice());

// // Call show_magicians to display the original array
// show_magicians(magicianNames);

// // Call show_magicians to display the modified array
// show_magicians(modifiedMagiciansArray);


// Sandwiches: 

// // Function to order a sandwich
// function order_sandwich(...items: string[]): void {
//     console.log("Sandwich Order:");
//     if (items.length === 0) {
//         console.log("No items selected. Please choose some items for your sandwich.");
//     } else {
//         console.log(`You ordered a sandwich with: ${items.join(', ')}.`);
//     }
//     console.log(); // Add a newline for better readability
// }

// // Call the function three times with a different number of arguments
// order_sandwich('Turkey', 'Cheese', 'Lettuce');
// order_sandwich('Ham', 'Tomato');
// order_sandwich(); // No items selected



// Cars:

// Function to store car information
function store_car_info(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
    let carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer,
        modelName,
    };

    // Add other options to the carInfo object
    for (let option of options) {
        // Object.assign(carInfo, option);
        carInfo = { ...carInfo, ...option };
    }

    return carInfo;
}

// Call the function with required information and additional options
let carDetails = store_car_info('Toyota', 'Camry', { color: 'Blue', features: ['Navigation', 'Sunroof'] });

// Print the returned object
console.log(carDetails);

