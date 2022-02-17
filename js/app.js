// income and total expenses

function getCost() {
    const totalIncome = document.getElementById('total-income');





    const rent = document.getElementById('rent');
    const food = document.getElementById('food');
    const clothes = document.getElementById('clothes');

    let totalCost = parseInt(rent.value) + parseInt(food.value) + parseInt(clothes.value);


    const totalExpense = document.getElementById('expense');

    totalExpense.innerText = totalCost;
    const balance = document.getElementById('balance');

    balance.innerText = totalIncome.value - totalExpense.innerText;


}


// getting income and total expenses calling function

document.getElementById('calculate').addEventListener('click', function() {

    getCost();




})


// savings 
document.getElementById('savings').addEventListener('click', function() {


    const savingAmount = document.getElementById('save');
    const totalIncome = document.getElementById('total-income');

    const saving = document.getElementById('saving-amount');
    const totalSaving = (savingAmount.value * totalIncome.value) / 100;
    saving.innerText = totalSaving;

    const remainingAmount = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance');


    remainingAmount.innerText = balance.innerText - saving.innerText;
})