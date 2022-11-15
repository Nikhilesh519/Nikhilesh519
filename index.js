// 12. Write program to call the getUsers then print users using callback, promise.

//callback
function userDb(fn){
  setTimeout(()=> {
      console.log("getting users data");
      var users= [{ id:501,
                 name:"nikhil",
                 age:21,
                 address:"hyderabad"

      },{
                 id:502,
                 name:"naresh",
                 age:22,
                 address:"hyderabad"
      }]
  
       
      fn(users);
      
      
  }, 5000);
}
function getUsers(users){
      //let users=userDb();
      console.log("Hello displaying the users=",users);
      displayUsersOnScreen();
    }
userDb(getUsers);

// promise
function userDb(){

  return new Promise(function(resolve,reject){
      setTimeout(function() {
          console.log("getting users");
          resolve([{ id:501,
                     name:"nikhil",
                     age:21,
                     address:"hyderabad"

          },{
                     id:502,
                     name:"naresh",
                     age:22,
                     address:"hyderabad"
          }])
          
      }, 5000);
  })

}

function getUsers(){
  userDb().then(function(res){

      console.log("Hello displaying the users=",res)
      displayUsersOnScreen();
  })
} 
function displayUsersOnScreen(){
          
      console.log("users displayed successfully");
}
getUsers();

// 18.Write a program to check number is palidrome or not.

function palindrome(){
  var num=555;
  var s=0;
  var n;
  while(num>0)
  {
      n=num%10;
      s=s*10+n;
      num=Math.floor(num/10);
  }

  if(s===555)

  {

      document.write("palindrome");
  }
  else
  {
      document.write("Not a palindrome");
  }

}

// Write a program to remove duplicate from array  [30,45,60,20,30,55]
 
     var array=[30,45,60,20,30,55];

     for(i=0;i<array.length;i++){

       for(j=i+1;j<array.length;j++){

        if(array[i]===array[j]){

            array.splice(j,1);
        }
    }
}
console.log(array);
