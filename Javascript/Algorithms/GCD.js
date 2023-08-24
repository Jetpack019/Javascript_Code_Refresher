function euclideanGCD(a,b){
    if(b === 0){
        return a;
    }
    return euclideanGCD(b,a%b);
}