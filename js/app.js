// accessing id using function

function getId(incomeId) {


    const income = document.getElementById(incomeId);
    return income



}

// getting total cost using function 

function getTotalCost() {
    const rent = document.getElementById('rent');
    const food = document.getElementById('food');
    const clothes = document.getElementById('clothes');


    if (isNaN(rent.value) || isNaN(food.value) || isNaN(clothes.value) || rent.value < 0 || food.value < 0 || clothes.value < 0) {
        alert('Enter a valid number');
    } else {
        let totalCost = parseInt(rent.value) + parseInt(food.value) + parseInt(clothes.value);
        const totalExpense = document.getElementById('expense');

        totalExpense.innerText = totalCost;
        return totalCost;
    }

}

// getting income and total expenses calling function

document.getElementById('calculate').addEventListener('click', function() {



    // calling function
    const totalIncome = getId('total-income');
    const balance = getId('balance');
    const totalExpense = getId('expense');
    const totalCost = getTotalCost();

    if (totalCost > totalIncome.value) { alert('Your can not expense more than your income') } else {
        balance.innerText = totalIncome.value - totalExpense.innerText;
    }








})


// savings 
document.getElementById('savings').addEventListener('click', function() {

    const totalIncome = getId('total-income');
    let balance = getId('balance');
    let getBalance = parseInt(balance);
    const savingAmount = document.getElementById('save');
    if (savingAmount.value > getBalance) {
        alert('you can not save more than your balance');
    } else {
        const saving = document.getElementById('saving-amount');
        const totalSaving = (savingAmount.value * totalIncome.value) / 100;
        saving.innerText = totalSaving;

        const remainingAmount = document.getElementById('remaining-balance');



        remainingAmount.innerText = balance.innerText - saving.innerText;
    }


})