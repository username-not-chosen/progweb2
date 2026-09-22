function compareA(a, b){

    if (a == b){
      console.log(true);
    } else {
        console.log(false);
    }
}

function compareB(a, b){

    if (a = b){
      console.log(false);
    }
}


compareA(4, '4'); // true 
compareA(4.0, '4'); // true
compareA(4, 'quatre'); // false

compareB(8, '8'); // false
compareB(8, 'huit'); // false