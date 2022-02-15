const arr= [4,25,31,121,64,57,232];

const isSquare = function(arr)                          //To check if there is a square in an array  
{
    if(arr>0 && Math.sqrt(arr)%1===0)
        
        return arr;
}

const isEven = function(arr)                            //To check if there is an even number in an array
{
 if(arr%2==0)
    return arr;
}


Array.prototype.check= function(logic)                 //To filter out the false value
{
    var result=[];
    for(var i=0;i<this.length;i++)
      {
          const op =logic(this[i]);
          if(op)
             result.push(this[i]);
             
      }
      return result;
}


console.log(arr.check(isSquare));                       //console.log(arr.filter(isSquare));
console.log(arr.check(isEven));






