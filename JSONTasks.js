var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
}

console.log(cat);

//Problem 0 : Part A (15 mins):
//1. Add height and weight to Fluffy
cat.height = 12;
cat.weight = 5;

//2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy'

//3. List all the activities of Fluffyy’s catFriends.
for(let i in cat.catFriends){
    //console.log("i : " + i);
    for(var j = 0; j < cat.catFriends.length; j++){
        //console.log("j : " + j);
        console.log(cat.catFriends[i].activities[j]);
    }
}

//4. Print the catFriends names.
for(let i in cat.catFriends){
    console.log(cat.catFriends[i].name);
}

//5. Print the total weight of catFriends
let values = [];
for(let i in cat.catFriends){
    values.push(cat.catFriends[i].weight);
}
let sumOfWeights = values.reduce((t,n) => {return t+n});
console.log(sumOfWeights);

//6. Print the total activities of all cats (op:6)
let totalActivities = [];
for(let i in cat.catFriends){
    for(let j in cat.catFriends[i].activities){
        totalActivities.push(cat.catFriends[i].activities[j]);
    }
}
console.log(totalActivities);

//7. Add 2 more activities to bar & foo cats
let elts = ['sleep','napp'];
for(let i in cat.catFriends){
        cat.catFriends[i].activities = cat.catFriends[i].activities.concat(elts);
        console.log(cat.catFriends[i].activities);
}


//8. Update the fur color of bar
//if we want to change the value of property of array of objects
let result = changeFurColor('bar', 'brown');

function changeFurColor(value, color){
    for(let i in cat.catFriends){
        if(cat.catFriends[i].name === value){
            cat.catFriends[i].furcolor = color;
            break;
        }
    }
}
console.log(cat);

//-------------------------------------------------------------------------------//

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
        date: '3/15/2019',
        damage_points: '5000',
        atFaultForAccident: true
    },
    {
        date: '7/4/2022',
        damage_points: '2200',
        atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
    }
    
    console.log(myCar);
    
    
    //1. Loop over the accidents array. Change atFaultForAccident from true to false.
    for(let i in myCar.accidents){
        if(myCar.accidents[i].atFaultForAccident === true){
            myCar.accidents[i].atFaultForAccident = false;
        }
    }
    console.log(myCar);
    
    //2. Print the dates of my accidents
    let result = [];
    for(let i in myCar.accidents){
        result.push(myCar.accidents[i].date);
    }
    console.log(result.join(' '));
    
//-----------------------------------------------------------------------------------//

var obj = {
    name : 'RajiniKanth', 
    age : 33,
    hasPets : false
};

//Problem 1 (5 mins):
//Parsing an JSON object’s Values:
//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var values = printAllValues(obj);
function printAllValues(object) {
    // your code here
    console.log(Object.values(object));
}


//Problem 2(5 mins) :
//Parsing an JSON object’s Keys:
//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
let result = printAllKeys(obj);
function printAllKeys(object){
    console.log(Object.keys(object));
}

//------------------------------------------------------------------------------------//

/*Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]*/
var object = {name: 'ISRO', age: 35, role: 'Scientist'};
let result = convertObjectToList(object);
function convertObjectToList(obj){
    return Object.keys(obj).map(k => [k, obj[k]]);
}
console.log(result);

//----------------------------------------------------------------------------------//

/*Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}
*/
var array = ['GUVI', 'I', 'am', 'Geek'];

let result = transformFirstAndLast(array);
console.log(result);

function transformFirstAndLast(arr) {
 let newObject = {};
 newObject[arr[0]] = arr[arr.length - 1];
 return newObject;
}

//-----------------------------------------------------------------------------//

/*Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and
returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

let result = convertArrayToObject(array);
console.log(result);

function convertArrayToObject(arr) {
    let obj = {};
    for(let i in arr){
        const[key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}

//-------------------------------------------------------------------------//

/*Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]*/

var array = [
    [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
    [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
  ];

let result = formatData(array);
console.log(result);

function formatData(arra){
    let transformedArray = [];
    for(let i in arra){
        //console.log('arra[' + i + ']' + arra[i]);
        //console.log(typeof(arra[i]))
        let result = convertArrayToObject(arra[i]);
        transformedArray.push(result);
        //console.log(transformedArray);
    }
    return transformedArray;
}

function convertArrayToObject(arr){
    let obj = {};
    for(let i in arr){
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return(obj);
}

//------------------------------------------------------------------------------------//

/*Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:
Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. 
In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}
*/
var expected = {foo: 6, bar: 6};
var actual = {foo: 5, bar: 5};

let result = isEqual(expected, actual);
console.log(result);

if(result === true){
    console.log('Passed');
}else{
    console.log('failed: Expected ' + expected + ', but got ' + actual);
}
function assertObjectsEqual(actual, expected, testName){
 // your code here
}

function isEqual(obj1, obj2){
    let prop1 = Object.getOwnPropertyNames(obj1);
    console.log(prop1);
    let prop2 = Object.getOwnPropertyNames(obj2);
    console.log(prop2);

    if(prop1.length !== prop2.length){
        return false;
    }

    for(let i in prop1){
        let prop = prop1[i];
        console.log(prop);
        console.log(obj1[prop] , obj2[prop]);
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }

    return true;
}

//-------------------------------------------------------------------------//

/*Problem 8(10 mins):
Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. You function should 
take the object and a pair of strings and should return if the quest is present 
and if its valid answer*/

var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
]

function chksecurityQuestions(securityQsObject, ques, ans) {
    for(let i in securityQsObject){
        if(securityQsObject[i].question === ques && securityQsObject[i].expectedAnswer === ans){
            return true;
        }
    }
    
    return false; 
}
   //Test case1:
var Q = 'What was your first pet’s name?';
var A  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, Q, A);
console.log(status); // true

//Test case2:
var Q = 'What was your first pet’s name?';
var A  =  'FferNutter';
var status = chksecurityQuestions(securityQuestions, Q, A);
console.log(status); // false

//---------------------------------------------------------------------//

/*Problem 9(20 mins):
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age*/

var students = [
    {name: 'Siddharth Abhimanyu', age: 21}, 
    {name: 'Malar', age: 25},
    {name: 'Maari',age: 18},
    {name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},
    {name: 'AAK chandran',age: 23},   
    {name:'Gabbar Singh',age: 33},
    {name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},
    {name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},
    {name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
];
   
function returnMinors(arrOfObjects){
    let minorStudents = [];
    for(let i in arrOfObjects){
        if(arrOfObjects[i].age < 20){
            minorStudents.push(arrOfObjects[i]);
        }
    }
    return (minorStudents);
}
   
let result = returnMinors(students);
result.forEach((elt) => {console.log(elt)});

//----------------------------------------------------------------------//



    
