function affiche(n){

    console.log("Les nombres entiers pairs compris entre 0 et n :");
    
    for (let i=0; i<=n; i++){
        if (i % 2 == 0){
            console.log(i)
        }

    }

    console.log("Les nombres entiers pairs et multiples de 7 compris entre 0 et n :");

    for (let i=0; i<=n; i++){
        if (i % 2 == 0 && i % 7 == 0){
            console.log(i)
        }

    }

    console.log("Les nombres entiers pairs et multiples de 3, ainsi que les nombres entiers multiple de 7 compris entre 0 et n :");

    for (let i=0; i<=n; i++){
        if (i % 2 == 0 && i % 3 == 0){
            console.log(i)
        }
        if (i % 7 == 0){
            console.log(i)
        } 

    }

    console.log("Les nombres entiers pairs et multiples de 3, mais non multiples de 7 compris entre 0 et n.");

    for (let i=0; i<=n; i++){
        if (i % 2 == 0 && i % 3 == 0 && i % 7 != 0){
                console.log(i)
            } 
        }
}

affiche(20);