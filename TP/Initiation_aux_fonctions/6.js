function npremier(a) {
    if (a < 2) {
        return false;
    }
    if (a === 2) {
        return true;
    }
    if (a % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(npremier(1));
