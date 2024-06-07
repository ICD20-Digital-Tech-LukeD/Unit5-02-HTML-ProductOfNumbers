function ProductOfNumbers(){
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let result = document.getElementById("result");
  let product = 0;

  for (let i = 0; i < num2; i++) {
    product += num1;
  }

  result.innerHTML = product;
}
