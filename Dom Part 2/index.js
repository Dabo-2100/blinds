let z = 10;
function test() {
  let x = 20;
  let y = 50;

  let today = new Date();

  function avarage(no, no2) {
    let z = 70;
    return (no + no2) / 2;
  }
  console.log(z);
  z = avarage(x, y);
}
test();
console.log(z);
