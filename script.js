//function to help users make vacation decisions*//

let vacationType = prompt("Do you like Musical, Tropical or Adventurous vacations?:");
let groupSize = prompt("What is the size of your group?");
let destination= "";
let travelSuggestion="";

if (vacationType==="Musical"){
  destination = "New Orleans";
}
else if (vacationType==="Tropical"){
    destination = "Beach Vacation in Mexico";
}
else if(vacationType==="Adventurous"){
    destination = "Whitewater Rafting the Grand Canyon";
}

if (groupSize >0 && groupSize<3){
    travelSuggestion = " First Class";
}
else if (groupSize>4 && groupSize <6){
travelSuggestion = "Helicopter";
}
else if (groupSize>7){
    travelSuggestion = "Charter Flight";
}
let result = `Since you're a group of ${groupSize} going on a ${vacationType} vacation. You should take a ${travelSuggestion} to ${destination}`; 

console.log(result);

 //show results after both questions are answered*//

