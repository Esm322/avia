let buttons = document.querySelectorAll('.tab-filter');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        buttons.forEach((button) => button.classList.remove('tab-active'));
        button.classList.add('tab-active')
    })
})