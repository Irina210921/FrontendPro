let userNum = 121;
let str = String(userNum);

let num1 = str[0];
let num2 = str[1];
let num3 = str[2];

if(
    num1 === num2 &&
    num2 === num3)
{
    console.log('three numbers are the same');
}
else if (
    num1 === num2 ||
    num2 !== num3)
{
    console.log('two numbers are equal');
}
else {
    console.log('false');
}

