//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names)
for (let i=0; i<dog_names.length; i++);{
    if (i in dog_string){
        return "Matched dog_name"
    } else {
        return "No Matches"
    }
}

console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]));



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

Given_arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr)

Given_arr.splice(0,1,"even index");
Given_arr.splice(2,1,"even index");
Given_arr.splice(4,1,"even index");
console.log(Given_arr);