//Percentage Calculator Variables
const percentOf = document.getElementById("percent-of");
const percentOfWhole = document.getElementById("percent-of-whole");
const isPercentOf = document.getElementById("is-percent-of");
const isPercentOfWhole = document.getElementById("is-percent-of-whole");
const percentIncreaseFrom = document.getElementById("percent-increase-from");
const percentIncreaseTo = document.getElementById("percent-increase-to");
const firstPercentageResult = document.getElementById(
  "first-percentage-result"
);
const secondPercentageResult = document.getElementById(
  "second-percentage-result"
);
const thirdPercentageResult = document.getElementById(
  "third-percentage-result"
);
const firstPercentCalculateBtn = document.getElementById(
  "first-percentage-calculate-btn"
);
const secondPercentCalculateBtn = document.getElementById(
  "second-percentage-calculate-btn"
);
const thirdPercentCalculateBtn = document.getElementById(
  "third-percentage-calculate-btn"
);
const firstPercentResetBtn = document.getElementById(
  "first-percentage-reset-btn"
);
const secondPercentResetBtn = document.getElementById(
  "second-percentage-reset-btn"
);
const thirdPercentResetBtn = document.getElementById(
  "third-percentage-reset-btn"
);

//Spread Calculator Variables
const spreadSelector = document.getElementByIdById("spread-selector");

const checkUserInputForNumbers = (input) => {
  if (
    !input.value ||
    isNaN(parseInt(input.value)) ||
    parseInt(input.value) < 0
  ) {
    alert("Please provide a number greater than zero.");
    return;
  }
};

const getNumberFromPercentage = (num) => {
  return toFixed(num / 100);
};

const getWhatIsPercentOfNumber = () => {
  let num1 = parseInt(getNumberFromPercentage(isPercentOf.value));
  let num2 = parseInt(isPercentOfWhole.value);

  return num1 * num2;
};

const getIsWhatPercentOfNumber = () => {
  let num1 = parseInt(isPercentOf.value);
  let num2 = parseInt(isPercentOfWhole.value);
  return num1 / num2;
};

const getPercentChange = () => {
  let num1 = parseInt(percentIncreaseFrom.value);
  let num2 = parseInt(percentIncreaseTo.value);
  if(num1 = num2){
    return "0%"
  }
  if (num1 > num2) {
    return ((num1 - num2) / num1) * 100;
  } else if (num1 < num2) {
    return ((num2 - num1) / num1) * 100;
  }
};
