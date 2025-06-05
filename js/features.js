document.getElementById('show-transaction-history').addEventListener('click', function (event) {
    event.preventDefault();
    showSectionById('transaction-section')

    document.getElementById('show-transaction-history').classList.add('bg-lime-400');
    document.getElementById('show-donation-field').classList.remove('bg-lime-400');
})
document.getElementById('show-donation-field').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('payment-section').classList.remove('hidden')
    document.getElementById('show-donation-field').classList.add('bg-lime-400');
    document.getElementById('show-transaction-history').classList.remove('bg-lime-400');

})