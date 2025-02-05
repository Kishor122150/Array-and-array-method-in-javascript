   
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
   */
   
   //10) filter() => create a new array with element that pass a test provided by function

