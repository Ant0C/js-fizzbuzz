

for(let i=1; i<=100; i++){
    //let number=i+1;

    let number3 = i % 3
    let number5 = i % 5
    let number15 = i % 15
    

    if(number3 === 0){
        console.log("Fizz")
        
    } 

    if(number5 === 0){
        console.log("Buzz")
        
    }
    
    if(number15 === 0){
        console.log("FizzBuzz")
        
    }

    console.log(i)

}