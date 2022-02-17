document.getElementById('calculate').addEventListener('click', function() {
    const totalIncome = document.getElementById('total-income');

    const rent = document.getElementById('rent');
    const food = document.getElementById('food');
    const clothes = document.getElementById('clothes');

    let totalCost = parseInt(rent.value) + parseInt(food.value) + parseInt(clothes.value);


    const totalExpense = document.getElementById('expense');

    totalExpense.innerText = totalCost;


    const balance = document.getElementById('balance');

    balance.innerText = totalIncome.value - totalExpense.innerText;


})