const randomNumber = Math.floor(Math.random(10000) * 100);
const evenMsg = 'Это четное число';
const oddMsg = 'Это нечетное число';
if (randomNumber % 2 === 0) 
{
    console.log(randomNumber, evenMsg); 
}
else
{ 
     console.log(randomNumber, oddMsg);
}