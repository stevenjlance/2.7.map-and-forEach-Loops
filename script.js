// ==================== DO NOW ==================
// a. Print out all odd numbers between 0 and 1000



// b. Print out each subway line with the sentence "I like to take the _____ train to school."
const subwayLines = ["A", "C", "B", "D", 1, 2, 3, 4, 5, 6]



// c. Turn the subway lines above into <h1> element. Store the new values in the subwayHTML variable.
const subwayHTML = []



// =================== map Function =====================
// 1. CODE-ALONG: Create a new variable called doubles that doubles each value in nums and stores the values in a new array.
let nums = [3, 10, 1, 25]


// 2. An array called bigNumbers has been created. Create an array called smallArrays that divides each big number by 2.
let bigNumbers = [100, 200, 300, 1000, 525600]


// 3. Triple the values in arr and store them in a new array.
let arr = [3, 4, 5, 6];


// 4. CODE-ALONG: Below are the survey arrays that we used last class period stored in a people array. Store "_____'s nickname is _____." in a new bio array.
const people = [
	{ name: 'Yadira', age: 22, nickname: 'Deary', 'Favorite Animal': 'Cat', 'Birth Place': 'Queens', superhero: "Black Panther" }, 
	{name: 'Kadiatou', age: 28,nickname: 'Kadi-B','Favorite Animal': 'Ferret','Birth Place': 'Bronx', superhero: "Wonder Woman"}, 
	{name: 'Isaiah', age: 27,nickname: 'Izzy','Favorite Animal': 'Dog','Birth Place': 'Manhattan', superhero: "Captain Marvel"},
	{name: 'Fancisco', age: 33,nickname: 'Paco','Favorite Animal': 'Sloth','Birth Place': 'Bronx', superhero: "Spider Man"},
	{name: 'Darius', age: 29,nickname: 'DRock','Favorite Animal': 'Zebra','Birth Place': 'Brooklyn', superhero: "Thor"}
	]



// 5.  Instead of just printing each string to the console like we did in #4, create a list of <h5> elements we could add to our site that contain the string from #4.



// 6. Using the people array, create an array with a greeting like "Hey! My name is ____ but my friends call me ____. I am ____ years old and my favorite animal is a _____" for each person.



// 7. Use another map to save these longer bios, but this time wrap them in h3 tags.



// 8. Stretch: Create a map of elements for each person with the following strings: "My name is ____ and I'm from ____." If they are from your borough, have it display something special. For example, one student from the Bronx had his program display that they are from "THE BEST BOROUGH."


// =============== forEach Loops =====================
//9. CODE-ALONG: Print out "______'s favorite superhero is ________" using a forEach Loop
people.forEach(person => {
	console.log(`${person.name}'s favorite superhero is ${person.superhero}`)
})


// 10. Print out to the console all the people over the age of 25 using a forEach function.



//11. Use a forEach function to store the sum of all the numbers in numbersToSum in the variable sum.
const numbersToSum = [65, 44, 12, 4, 22, 423, 1, 92, 21, 232, -5];
let sum = 0;


//12. You actually only want to sum all the even numbers in numbersToSum. Store the sum of all the even numbers in evenSum using a forEach loop.



//13. SUPER BONUS STRETCH: Uncomment the click buttons in index.html on lines 15 to 18. document.querySelectorAll is a method that finds all elements on the page that have a given class, HTML element, id, etc. In this case, it stores evey element that has the class of "clickMe". Iterate through each button and attach an event listener to each button. If you did this correctly, your console should say "You clicked a button" when you click on each button.
const allClickButtons = document.querySelectorAll(".clickMe")

