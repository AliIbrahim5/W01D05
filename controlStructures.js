1
let num1 = 3;
let num2 = -50;
let num3 = 6;

//2

if (num1 < num2) {
  console.log(num2);
} else if (num1 > num2) {
  console.log(num2);
} else {
  console.log("soory");
}

//3
if (num1>num2 && num1>num3)
{
  if (y>z)
  {
    console.log(num1+ ", " + num2 + ", " +num3);
  }
  else
  {
    console.log(num1 + ", " + num3 + ", " +num2);
  }
}
else if (num2>num1 && num2 >num3)
{
  if (num1>num3)
  {
    console.log(num2 + ", " + num1 + ", " +num3);
  }
  else
  {
  }
  console.log(num2 + ", " + num3 + ", " +num1);
} else if (num3>num1 && num3>num2)
{
  if (num1>num2)
  {
    console.log(num3 + ", " + num1 + ", " +num2);
  }
  else
  {
    console.log(num3 + ", " + num2 + ", " +num1);
  }
}





















//4

if (num1 % 2 !== 0) {
  console.log(" 3 :odd");
} else if ( num2 % 2 === 0)
{
  console.log(" 6 :even");
}

//5

for (let i = 0; i <= 20; i++) {
  console.log(i);
}
//6
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}
//7
for (let i = 20; i >=0 ; i--) {
  console.log(i);
}

//8
for (let i = 0; i <=20 ; i++) {
  if (i % 2 === 0) {
    console.log(i + ": even");
  } else {
    console.log(i + ": odd");
  }
}

//9

for (let i = 0; i <= 5; i++) {
  console.log("*".repeat(i));
}





