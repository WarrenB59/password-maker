const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "~`!@#$%^&*()|[]{}-_=+;:/?\"'";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let passwordGenerated = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez cocher au moins une case");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    passwordGenerated += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = passwordGenerated;
  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer Mot de Passe";
  }, 1000);
}

generateButton.addEventListener("click", generatePassword);
