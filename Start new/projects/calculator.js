let calcuator=localStorage.getItem('calcuator') || '' ;
function updateCalculation(value){
    calcuator=calcuator+value;
    console.log(calcuator);
    localStorage.setItem('calcuator',calcuator);

    document.querySelector('.calculate_result').innerHTML=`${calcuator}`;
}