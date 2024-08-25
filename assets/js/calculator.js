let num1=parseInt(prompt("enter the number"));
let num2=parseInt(prompt("enter the number"));
let operator=prompt("choice one of the following operator +,-,*,/")
if(isNaN(num1) || isNaN(num2)) {
    alert("wrong input or incomplete data")
}else{
    if(operator == "+"){
        alert("the addition of "+num1+" and "+num2+" is " +(num1+num2))
    }else if(operator == "-" && num2 > num1){
        alert(num2 +" second oprand is greater than to the first oprand "+ num1+" please enter great number in first oprand and small number in second oprand ")
    }else if(operator == "-"){
        alert("the subraction of "+num1+" and " +num2+ " is " +(num1-num2))
    }else if(operator == "*"){
        alert("the multiplication of "+num1+ " and "+num2+" is " +(num1*num2))
    }else if(operator == "/"){
        alert("the division of "+num1+" and "+num2+" is " +(num1/num2))
    }else if(operator ==""){
        alert("please input operator")
    }else if(operator!="+,-,*,/"){
        alert("enter only the given operator")
    }
}