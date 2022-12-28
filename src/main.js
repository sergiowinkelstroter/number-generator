const button = document.getElementById("generate");

button.addEventListener("click", () => {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  let result = Math.floor(Math.random() * (max - min + 1)) + min;

  if (isNaN(result)) {
    result = "Valor invalido";
  }

  if (min > max) {
    result = "Valor invalido";
  }

  document.querySelector("#result > span").textContent = result;
});
