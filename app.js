function talk(){  
    var know = {  
     "Who are you" : "Hello, Nitsbot here 💙",
     "Your name" : "I'm Nitsbot",
     "Your age" : "Bots don't have any age. My creator Nitin created me on 21st April '22",
     "Where do you live" : "I live on internet",
     "How are you" : "Good :), How do you do btw?",
     "What can i do for you" : "Please Give us A Follow & Like.", 
     "ok" : "Thank You So Much ",  
     "Bye" : "Okay! Will meet soon.."  
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }