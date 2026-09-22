function double(nb){
    return (nb * 2);
}

function square(nb){
    return (nb * nb);
}

function transform(nb, f){
    console.log(f(nb));
}

transform(5, double);
transform(5, square);