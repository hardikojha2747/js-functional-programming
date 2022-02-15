let arr = [11,5,78,45,23]


const findSum = (acc, curr) => acc + curr;       //Find the sum of the array       


const findMax =(acc, curr) => {                  //Find the maximum number from the array         
    if(acc < curr)
        acc=curr;
    return acc      
};


function reducer(arr, logic, initialValue) 
{    
    let acc = initialValue === undefined ? 0 : initialValue       
    for(let i=0;i<arr.length;i++)        
        acc = logic(acc, arr[i], i, arr);   
         return acc;
};


console.log(reducer(arr, findSum));         // To call sum function
console.log(reducer(arr, findMax));         // To call max function
