let n = 3;
let stars = "";
for (let i = 1; i <= n; i++) // to increase the stars
{
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  stars += "\n";
}
for (let i = 1; i <= n - 1; i++) //to decrease the stars
{
  for (let j = 0; j < n - i; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);