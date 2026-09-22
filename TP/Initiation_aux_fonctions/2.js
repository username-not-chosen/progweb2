function getRandomInt(min, max){
    return Math.round(((Math.random() * (max - min + 1)) + min)) ;
}

for (let i=0; i<10; i++){
    console.log(getRandomInt(1,6));
}