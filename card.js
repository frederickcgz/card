const numberInput = document.getElementById("card_number"),
      nameInput = document.getElementById("card_name"),
      monthInput = document.getElementById("card_month"),
      yearInput = document.getElementById("card_year"),
      cvcInput = document.getElementById("card_cvc"),
      cardNumber = document.getElementById("number"),
      cardName = document.getElementById("name"),
      cardMonth = document.getElementById("month"),
      cardYear = document.getElementById("year"),
      cardCvc = document.getElementById("cvc"),
      submitBtn = document.getElementById("submit_btn"),
      completed = document.querySelector(".thank"),
      form = document.querySelector("form");


function setCardData(e) {
    let target = e.target;
    let id = target.id;
    let value = target.value;
    let cardField = document.getElementById(id.replace("card_", ""));
    cardField.innerText = format(value);
}

function handleSubmit(e) {
  e.preventDefault();
  let isValid = true;
  const inputs = [nameInput, numberInput, monthInput, yearInput, cvcInput];
  inputs.forEach(input => {
      switch (input.id) {
          case "card_name":
              if (!input.value) {
                  input.classList.add("error");
                  input.parentElement.classList.add("error_message");
                  isValid = false;
              } else {
                  input.classList.remove("error");
                  input.parentElement.classList.remove("error_message");
              }
              break;
          case "card_number":
              if (!input.value || input.value.length < 16) {
                  input.classList.add("error");
                  input.parentElement.classList.add("error_message");
                  isValid = false;
              } else {
                  input.classList.remove("error");
                  input.parentElement.classList.remove("error_message");
              }
              break;
          case "card_month":
          case "card_year":
          case "card_cvc":
              if (!input.value) {
                  input.classList.add("error");
                  input.parentElement.classList.add("error_message");
                  isValid = false;
              } else {
                  input.classList.remove("error");
                  input.parentElement.classList.remove("error_message");
              }
              break;
          default:
              break;
      }
  });
  if (isValid) {
      completed.classList.remove("hidden");
      form.classList.add("hidden");
  }
}


function format(s) {
return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

const inputs = [
  {input: numberInput, output: cardNumber, event: "keyup"},
  {input: nameInput, output: cardName, event: "keyup"},
  {input: monthInput, output: cardMonth, event: "keyup"},
  {input: yearInput, output: cardYear, event: "keyup"},
  {input: cvcInput, output: cardCvc, event: "keyup"},
  {input: submitBtn, output: null, event: "click"}
];

inputs.forEach(item => {
  if (item.event === "keyup") {
      item.input.addEventListener(item.event, function(e) {
          item.output.innerText = format(e.target.value);
      });
  } else {
      item.input.addEventListener(item.event, handleSubmit);
  }
});

