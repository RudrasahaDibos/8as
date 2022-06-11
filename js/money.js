
//get function call
function getincomeandExpenses(Expensess){
const Expenses = document.getElementById(Expensess);
const Expensestext = Expenses.value;
 const Expensesnumber = parseFloat(Expensestext);
 return  Expensesnumber;
}
function setvalue (value,id){
document.getElementById(id).innerText = value;
}
//getExpenses
document.getElementById('calulate-button').addEventListener('click',function(){
 const totalincome =getincomeandExpenses('income-input');
 const foodExpenses =  getincomeandExpenses('food-Expenses');
 const rentExpenses =    getincomeandExpenses('rent-Expenses');
 const ClothesExpenses =   getincomeandExpenses('Clothes-Expenses');
 const totalcost=(foodExpenses+rentExpenses+ClothesExpenses);
 const Currentamount =totalincome -totalcost;
 
   if((totalincome<totalcost)){
     const error =  document.getElementById('error');
       alert("error!!");
       error.style.display='block';
      
   
       
   }
   else if(isNaN(totalincome)||isNaN(foodExpenses)||isNaN(rentExpenses)||isNaN(ClothesExpenses)){
      document.getElementById('error').style.display="block";
    alert("error!!");
    error.style.backgroundColor="red";
     
   }
   else if(totalincome<0||foodExpenses<0||rentExpenses<0||ClothesExpenses<0){
       document.getElementById('error').style.display="block";
       error.style.backgroundColor="red";
      
   }


   else{
    setvalue(Currentamount,'total-Balance');
    setvalue(totalcost,"total-Expenses");
   }


});
//savebutton 
document.getElementById('save-button').addEventListener('click',function(){

    const saveinput = document.getElementById('save-input').value;
  
    const saveinputnumber = parseFloat(saveinput);
    saveinput.value=saveinputnumber;
    const totalsave = document.getElementById('total-save').innerText;
    const totalsavenumber =parseFloat(totalsave)+saveinputnumber;
    console.log(totalsavenumber)
    totalsave.innerText=totalsavenumber;
    console.log(totalsave.value);
    


})

