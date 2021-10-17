# `map` and `forEach` Functions
**GOAL**: Open the `script.js` file and complete the questions found in the comments. Make sure to use the introduction code shown below above if you are stuck!

## `map` Function
for loops are awesome, but you may have noticed that it often takes a little too much work to save the outputs of our iteration through an array? 

Let's keep using our array of objects called people we used last class and see what it takes to SAVE (instead of console.log) the results of creating these quick nickname bios ("____'s nickname is ____").

```javascript
// Create a variable to save the results in. It will start empty:
let bios = []
// Iterate over the people, pushing each person's bio to to the bios array
for(let i = 0; i<people.length; i++){
  bios.push(people[i]["name"] +  "'s nickname is " + people[i]["nickname"])
}
// Log the results to see if it saved our info as expected.  
console.log(bios)
```

The `array.map()` method basically creates a parallel new array to the one you start with. It doesn't distort the original, and the new parallel array always comes out the same length as the original.

Let's once again try to refactor our code to console.log "____'s nickname is ____" using the map method instead.

```javascript
let bios = people.map(person => {
  return(person["Name"] +  "'s nickname is " + person["Nickname"])
})
console.log(bios)

```

In the example above: 
- A new array called `bios` was crated. 
- The `map` function iterated through each item in the people array and updated bios with the statement that we wanted to return.
- The `bios` array contains the new statement and the `people` array remains unchanged.

## `forEach` Function
The last form of array iteration we will talk about is perhaps the simplest and most readable, but it's also the least versatile. The `.forEach()` method works exactly the same as `.map()`, except instead of returning a copy of the original array, it returns nothing.

The best use cases for a `.forEach()` loop are when you're sure you want to DO something for every single item in an array (there's no stopping early, so it's not often the most efficient), and you also really don't care about saving the results.

```javascript
people.forEach(person => {
  console.log(person["Name"] +  "'s nickname is " + person["Nickname"])
})
```

In this example, the syntax is identical to the map syntax. You have an array (people), an iterator (person), and since you only want to console log the results, you don't need to save them anywhere.

We will talk more about `.forEach()` loops when we get to DOM manipulation later in this unit. 