//function to claculate the bmi
calculatebmi=()=>{
    //get ht and wt
    const height=document.getElementById("heightInput").value;
    const weight=document.getElementById("weightInput").value;
    //validate input
    if(height===""||weight==="")
    {
        alert("Please enter both height and weight")
        return
    }
    //claculate
    let bmi=weight/(height/100)**2;
    let result="Your BMI is:"+bmi.toFixed(2);
    let category="";
    //determine category
    if(bmi<18.5)
    {
        category="Underweight";
    }
    else if(bmi>=18.5 && bmi<25)
    {
        category="Normal Weight";
    }
    else if(bmi>=25 && bmi<30)
    {
       category= "Overweight";
        
    }
    else{
        category="Obese";
    }
    result+="<br>Category:"+category;
    //display result
    document.getElementById("result").innerHTML=result;
}