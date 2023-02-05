//faktoriel
//Implement a function named factorial that 
//has one parameter: an integer, . It must return the value of n! (i.e., n factorial).
function factorial(n){
    if(n==0) return 1;
    return n*factorial(n-1);
}