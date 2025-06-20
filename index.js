// code your solution here
function saturdayFun (Activity = 'roller-skate'){
  return (`This Saturday, I want to ${Activity}!`)  
}


const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};


function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
