forms.addEventListener('submit',message);
function message(){
   let nameAns = document.getElementById('name') ;
   let emailAns = document.getElementById('email') ;
   let messageAns = document.getElementById("message")
   if(nameAns.value =="" && emailAns.value =="" ){
     alert("Error please input both your name and email") ;
   } else if (nameAns.value == " " && emailsAns == " " && messageAns.value == " " ){
    alert(nameAns.value + "  we have received your message. Thank you for reaching out to us. ")
   }else {
    alert("Thank you for your providing us with your name and email"+ " " + nameAns.value)
   }

};
