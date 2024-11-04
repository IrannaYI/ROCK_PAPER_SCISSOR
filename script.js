function fun(choice){
    let score=0;
    let game=['ROCK','PAPER','SCISSOR'];
    gus=game[(Math.floor(Math.random() * game.length))]

    // console.log(choice)
    // console.log(gus);
    
    document.getElementById('ip1').innerHTML= choice;
    document.getElementById('ip2').innerHTML= gus;
        
    if(choice==gus){
       document.getElementById('res').innerHTML= 'IT\'S A DRAW'
       document.getElementById('res').style.color="blue"
    //    console.log('draw')
   
   }
    else if(choice=='Rock' && gus=='SCISSOR' || choice=='Paper' && gus=='ROCK' || choice=='Scissor' && gus=='PAPER'){
        document.getElementById('res').innerHTML= 'YOU WON'
        // console.log('win')
        document.getElementById('res').style.color=" rgb(19, 211, 32)"
        score++
        document.getElementById('ur_scr').innerHTML=score;
    }
    else{
        document.getElementById('res').innerHTML= 'YOU LOST'
        document.getElementById('res').style.color="red"
        // console.log('lost')
    
        document.getElementById('ur_scr').innerHTML=score;
    }
}