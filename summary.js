var tableLength = 12;
var tourDestination = ['coxs', 'nepal', 'butan', 'london'];
tourDestination.indexOf('butan');

var fourthDestination = tourDestination[3];
tourDestination[1] = 'Srilanka';

tourDestination.push('Newyork');
tourDestination.pop();//array er last element remove korbe

if(tourDestination[1]== 'nepal'){
    console.log('pahare pahare');
}
else if(tourDestination[1]=='china'){
    console.log('china jabo na');
}
else if(tourDestination.length == 4){
    console.log('aro gurbo teka ase');
}
else{
    console.log('kuthao jabo na mosha marmu');
}


var eggPrice = 32;
var myBudget = 32;
if(myBudget <= eggPrice){
    console.log('ami dim kinbo');
}
 