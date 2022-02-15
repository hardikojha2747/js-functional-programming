const radius=[4,5,7,8];

const area = function(radius)                           //To find the area of the radius 
{
    return Math.PI *radius *radius;
}

const circumference = function(radius)                  //To find the circumference of the radius
{
    return 2 * Math.PI *radius;
}


const diameter = function(radius)                       //To find the diameter of the radius
{
    return 2 *radius;
}


Array.prototype.calculate = function (logic){          
    const output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
};



console.log(radius.calculate(area));                     //console.log(radius.map(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));



