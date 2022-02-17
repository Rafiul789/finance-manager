// income and total expenses

function getCost(incomeId) {


    const income = document.getElementById(incomeId);
    return income



}


// getting income and total expenses calling function

document.getElementById('calculate').addEventListener('click', function() {

    // calling function
    const totalIncome = getCost('total-income');
    const balance = getCost('balance');





    const rent = document.getElementById('rent');
    const food = document.getElementById('food');
    const clothes = document.getElementById('clothes');

    let totalCost = parseInt(rent.value) + parseInt(food.value) + parseInt(clothes.value);


    const totalExpense = document.getElementById('expense');

    totalExpense.innerText = totalCost;


    balance.innerText = totalIncome.value - totalExpense.innerText;




})


// savings 
document.getElementById('savings').addEventListener('click', function() {

    const totalIncome = getCost('total-income');
    const balance = getCost('balance');
    const savingAmount = document.getElementById('save');


    const saving = document.getElementById('saving-amount');
    const totalSaving = (savingAmount.value * totalIncome.value) / 100;
    saving.innerText = totalSaving;

    const remainingAmount = document.getElementById('remaining-balance');



    remainingAmount.innerText = balance.innerText - saving.innerText;
})