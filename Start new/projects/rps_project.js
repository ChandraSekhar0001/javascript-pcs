let score=JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    ties:0
};


updateScore();

function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.win} Lose: ${score.lose} Ties: ${score.ties}`;
}


function winLose(result){
    if (result==='Tie'){
        document.querySelector('.js-wl').innerHTML=`${result}.`;
    }else{
        document.querySelector('.js-wl').innerHTML=`You ${result}.`;
    }
}

function upadteMoves(playerMove,computerM){
    document.querySelector('.js-moves').innerHTML=`You <img src="project_reso/rps_reso/${playerMove}-emoji.png" class="mov">
<img src="project_reso/rps_reso/${computerM}-emoji.png" class="mov"> Computer`
}

function function1(){
    const randomN=Math.random();
    let computerM='';
    if (randomN>=0 && randomN <= 1/3){
        computerM='rock';
    }else if(randomN>= 1/3 && randomN<= 2/3){
        computerM='paper';
    }else{
        computerM='scissors';
    }
    return computerM;
}
function funResult(playermove){
     const computerM=function1();
     let result='';
     if (playermove==='rock'){
        if (computerM===playermove){
            result='Tie';
        }else if(computerM==='paper'){
            result='Lose';
        }else{
            result='Win';
        }

     }else if(playermove==='paper'){
        if(computerM===playermove){
            result='Tie';
        }else if(computerM==='rock'){
            result='Win';
        }else{
            result='Lose';
        }
        
     }else{
        if(computerM===playermove){
            result='Tie';
        }else if(computerM==='paper'){
            result='Win';
        }else{
            result='Lose';
        }
     }
     if (result ==='Win'){
        score.win+=1;
     }else if(result==='Lose'){
        score.lose+=1;
     }else{
        score.ties+=1;
     }

     localStorage.setItem('score',JSON.stringify(score));


     winLose(result);

     upadteMoves(playermove,computerM);

     updateScore();

     
}