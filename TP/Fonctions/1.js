function compare(a, b, c){

    if (a > b){
        if (a > c){
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (a < b) {
        if (b > c){
            console.log(b);
        } else {
            console.log(c);
        }
    }
}

const a = 4;
const b = 20;
const c = 3;

compare(a, b, c);