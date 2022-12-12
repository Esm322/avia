let buttons = document.querySelectorAll('.tab-filter');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        buttons.forEach((button) => button.classList.remove('tab-active'));
        button.classList.add('tab-active')
    })
})

let borders = document.querySelector('.second-butt');

borders.forEach((border) => {
    border.addEventListener('click', () =>{
        borders.forEach((border) => border.classList.remove('.tab-active-noborder'));
        border.classList.add('tab-active-noborder')
    })
})