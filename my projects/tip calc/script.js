const billTotal = document.getElementById("billTotalInput");
const tip = document.getElementById("tipInput");
const people = document.getElementById("numberOfPeople");
const perPerson = document.getElementById("perPersonTotal");

let peopleCount = Number(people.innerText);

const calculateBill = () => {
    const bill = Number(billTotal.value);
    const tipPercentage = Number(tip.value) / 100;
    const tipAmount = bill * tipPercentage;
    const total = bill + tipAmount;
    const final = total / peopleCount;
    perPerson.innerText = `$${final.toFixed(2)}`;
};

const increasePeople = () => {
    peopleCount++;
    people.innerText = peopleCount;
    calculateBill();
};
const decreasePeople = () => {
    if (peopleCount <= 1) {
        return;
    }
    peopleCount--;
    people.innerText = peopleCount;
    calculateBill();
};
