var num = 5;
let count =0;
for (var i = 1;i<=num;i++)
{
    var rev = 0;
    var digit = num %10
    rev = (rev * 10)+ digit;
    num = num/10
    count++;
}
console.log(count);