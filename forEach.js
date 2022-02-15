const arr=[2,4,6,9];

Array.prototype.forEACH = function (logic){          
    var result=[];
    for(var i=0;i<this.length;i++)
      {
             result.push(logic(this[i],i,this));
             
      }
      return result;
}

console.log(arr.forEACH(x=>Math.pow(x,4)));   //Power of 4 of all the element in array
