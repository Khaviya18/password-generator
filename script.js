$(document).ready(function () {
  $("#generate-button").on("click", function () {
    const length = $("#password-length").val();
    const password = generatePassword(length);
    $("#password-display").val(password);
  });

  $("#copy-button").on("click", function () {
    const passwordField = $("#password-display");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });
});

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }
  return password;
}