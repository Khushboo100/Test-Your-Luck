var count=0;
var score=0;
var fortunes=['Great Deal Of Money!!!','Got A Treasure!!!','You Have Bee Pranked!!!','Purchased Luxurious Car!!!','Full Of FunDay!!!','Bike Riding!!!','Fallen Into The Drain!!!','Go To Washroom!!!','You Lost The Sale Offer!!!'];
function does(id){

    count++;
    console.log("After cick count = "+count);
    if(count==3){
        fortune();
        if(score>=30)
        {
            alert("Your Score : "+score+"\nYou Won with High Level Scores!!!");
        }
        else if (score>=5 && score<30)
        {
            alert("Your Score : "+score+"\nYou Won with Medium Level Scores!!!");
        }
        else {
            alert("Your Score : "+score+"\nYou Lose!!!");
            
        }
        alert("Play Again!!!");
        window.location.reload(true);
    }
    else{
        
        fortune();
    }

}

function fortune(){
    
    var random = fortunes[(Math.random() * fortunes.length) | 0]
    window.alert(random);
    switch(random){
        case "Great Deal Of Money!!!" : score+=10;break;
        case "Got A Treasure!!!":score+=10;break;
        case "Purchased Luxurious Car!!!":score+=10;break;
        case "Full Of FunDay!!!":score+=10;break;
        case "Bike Riding!!!":score+=10;break;
        case "Fallen Into The Drain!!!":score-=5;break;
        case "Go To Washroom!!!":score-=5;break;
        case "You Lost The Sale Offer!!!":score-=5;break;
        case "You Have Bee Pranked!!!":score-=5;break;
    }
}
