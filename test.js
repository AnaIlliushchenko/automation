console.log('Hello world')

let a = 10;
let b = 100;
let i;
i = a;
a = b;
b = i;
console.log(a);
console.log(b);

function pipeTree() {
  let pattеrn = '';

  for (let i = 1; i <= 15; i++){
  
    if (i % 2) {
      for(space = (15 - i) / 2; space >= 1; space--){
        pattеrn += " ";
      }
      for (let a = 1; a <= i; a++ ){
        pattеrn += "*";
      }
    pattеrn += "\n";
    }
  }

return pattеrn;
}

console.log(pipeTree());
