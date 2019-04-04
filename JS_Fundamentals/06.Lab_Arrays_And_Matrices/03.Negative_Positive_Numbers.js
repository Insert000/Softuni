function nums(input) {
    let result ;
    if (!input) {
       result = input.sort((b,a) => b-a);
    }else{
       result=  input.sort((a,b) => a-b);
    }
    console.log(result);

}
nums([7, -2, 8, 9]);
nums([3, -2, 0, -1]);