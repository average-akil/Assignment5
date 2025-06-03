document.getElementById('btn-donation').addEventListener('click', function (event) {

    event.preventDefault();
    //donation ja dibo input dilam

    const donationValue = getInputFieldValueById('input-donation');
    //donation already ja dewa ase ta input nilam

    const donationGiven = getInputTextValueById('1st-donation-amount');
    //main balance ta update korar jnno nilam
    const mainBlance = getInputTextValueById('main-balance')

    if (typeof donationGiven == "number" && donationGiven > 0) {
        if (donationValue <= mainBlance) {
            // jototuk donation dicchi oita real time e update hocche
            const newAmount = donationValue + donationGiven;
            document.getElementById('1st-donation-amount').innerText = newAmount
            // main balance theke donation kata niye kaaj
            //main balance  e enough taka na hoile balance update korbe na

            const newMainBlance = mainBlance - donationValue;
            document.getElementById('main-balance').innerText = newMainBlance;
        } else {
            alert('eto teka nai')
        }

    } else {
        alert('fatrami koriyen na')
    }

})