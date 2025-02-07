   
   /*//array and array method
   //array
   let fruits=["apple","banana","orange"];
  // console.log(fruits);// output:all with array index print
   //console.log(fruits[1]); //banana
 //using loop to print all name without array index
 for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
 } 

   
    // array method in js
 //1) push() => add element to end of array
  
 let fruits =["apple","banana",];
 fruits.push("orange");
 console.log(fruits);  //res: apple banana orange
   

 //2) pop() =>deleted or removed elements from end and return it
 let fruits=["apple","orange","mango",];
 let lastfruits=fruits.pop();
 console.log("the removed fruit is :"+lastfruits); //mango
 console.log(fruits);  //ans:apple banana
  

 //3) shift() => remove fist elements from the array and return it
 let players =["ronaldo","messi","neymar"];
 let firstreturn=players.shift();
 console.log("the removed player is:"+firstreturn)   //ronaldo
 console.log(players)    //ans:messi ,neymar
    

 //4) unshift()  =>add elements to first or begining  in array
 let players=["neymar","ronaldo"];
 players.unshift("messi");
 console.log(players)     // ans:messi neymar ronaldo
    

  //5)splice() => adds or removes elements from array at a special index
  let fruits=["apple","ball","cat"];
//   fruits.splice(1,1,"dog") //remove element at index 1 and add dog there in place of ball
fruits.splice(1,1,"volleyball")
  console.log(fruits) //ans:apple,dog,cat


   //6)slice() =>return a shallow copy of a portion of sn array
   let names=['kishor',"kripa","kiran","goma","keshab"];
   let slicename=names.slice(1,3)
   console.log("slice name is:"+slicename);   //res:kripa, kiran  =>index 1 dikhi 3-1=2 shama ko cut and return   
   console.log(names)   //res:kripa ,kiran


   //7) concat() =>combine two or more array
   let fruits=["apple","banana"]
  let morefood=["orange","puppaya"];
  let allfruits=fruits.concat(morefood);
  console.log(allfruits)        //res:apple","banana" orange","puppaya"


   //8)forEach() => Executes a provided function once for Each array element
 let fruits=["apple","banana","mango"] ;
 fruits.forEach((fruits)=>{
    console.log(fruits);  //resylt://apple
                         // banana
                        // mango
 })
  
   //9)map() =>create a new array by applying a function to each element of orginal array
   let numbers=[1,2,3];
//    let doubled=numbers.map((num)=>num*2);  //its works like: 1*2=2,2*2=4,3*3=6;
console.log(doubled)    //result:2,4,6
let doubled=numbers.map((num)=>num+2);  //1+2=3,2+2=4,3+2=5
   console.log(doubled)    //result:3,4,5

   
   //10) filter() => create a new array with element that pass a test provided by function
  //for evens number
   let numbers=[1,2,3,4,5,];
  let evens=numbers.filter((num)=> num%2===0);
  console.log(evens)  //result : 2,4  

//for odd numbers
let numbers=[1,2,3,4,5];
let odds=numbers.filter((num)=>num%2===1);
console.log(odds);

 
    // 11) Reduce()  =>REDUCE a array to a single value by applying  a function to each elements
    let numbers=[1,2,3,4,];
    let sum=numbers.reduce((acc,num)=>acc+num,0);
    console.log(sum);          //output=10

    
// 12)find()  =>return the first elements in the array that specifies a provided testing function

let numbers=[1,2,3,4,5];
let found=numbers.find((num)=>num>3);
console.log(found)   //output:4

 
// 13)includes() =>checks if an array includes a certain value
  let fruits=["apple","banana","orange"];
  console.log(fruits.includes("banana"));   //output:true   ke banana xa ke nai array ma
  console.log(fruits.includes("potato"))     //output:false


//  14)index of() =>return a first index at which a given elements can found or -1 if it is not present
  let fruits=["apple","banana","orange"];
  console.log(fruits.indexOf("banana")) //1
  console.log(fruits.indexOf("orange")) //2
  console.log(fruits.indexOf("mango")) //-1
 
//   15)sort() =>sort the element of array in place   (order ma milauca)
let fruits=["c","a","b"];
fruits.sort()
console.log(fruits)    //output:a,b,c  

let fruits=[67,20,27];
fruits.sort()
console.log(fruits)    //output:20,27,67  

  //16) reverse() =>reverse order of element in array
   let fruits=["apple","mango","banana"]
   fruits.reverse()
   console.log(fruits)  //output:banana ,mango,apple;


    //spread operator in js
    //1) add new things
    let numbers=[1,2,3];
    numbers=[...numbers,4];
    console.log(numbers)

let names=['kishor','kiran','kripa'];
    names=[...names, 'goma'];
    console.log(names)   //result:kishor','kiran','kripa','goma'

  // 2)joining 2 array
  let number1=[1,2];
  let number2=[3,4];
  let numbers=[...number1,...number2];
  console.log(numbers);     //res:1,2,3,4


 //join 2 array and used loop to dispay all name at times without index
  let name1=['kishor','kiran','kripa'];
  let name2=['goma','keshab'];
  let finalnames=[...name1,...name2];
  for(i=0;i<finalnames.length;i++){

    console.log(finalnames[i])   //result:kishor','kiran','kripa','goma'
  }
     //array
     var students=["a","b","c","d"];
    //  console.log(students)   //all
    console.log(students[3])  //d
    console.log("length of students is:"+students.length)

    // for loop
    var students=["a","b","c","d"];
    for(i=0;i<students.length;i++){
      console.log(students[i]);     //print all without array index
    }
              
               
     //loop
     var students=["a","b","c","d"];
     for(let i in students){
      // console.log(students[i]);
      console.log(i);    // in gives index value
     }

     var students=["a","b","c","d"];
    for( let i of students){
      // console.log(students[i])
      console.log(i);       //of gives value
    }
                */

        // forEach loop  =>index and value
          //syntax
          // students.forEach(parameter,function)
          var students=["a","b","c","d"];
          students.forEach(function(value,index){
            console.log(value,index);     //give value plus index
          })

          let std=[1,2,3];
          console.log(std);





