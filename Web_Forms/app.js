// The code down is apply to the input_types.html

// grab our main form
let mainForm = document.getElementById('mainForm');
// lets add an event listener for the 'submit' event
mainForm.addEventListener('submit', ()=> {
    let hiddenInput = document.getElementById('hidden');
    // lets set up our timestamp
    let min = 1000 * 60;
    let hours = min * 60;
    let days = hours * 24;
    let years = days * 365;
    let d = new Date();
    //getTime() returns milliseconds since 1970
    let time = d.getTime();
    let timeStampInYears = Math.round(time / years);

    // final is to place this timestamp into the value attribute of our hidden input
    hiddenInput.value = timeStampInYears;
})