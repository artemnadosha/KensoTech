const inputRadioAll = document.querySelectorAll('.radio-circle');
const inputCheackBox = document.querySelector('.checkbox');
const inputLabel = document.querySelectorAll('label');

export const inputChecked = () => {
    inputLabel.forEach(items => items.addEventListener('click', (event) => {

        if(event.target.type === 'checkbox') {
            if(event.target.checked) {
                inputCheackBox.classList.add('active');
            } else {
                inputCheackBox.classList.remove('active');
            }
        } else {
            inputRadioAll.forEach(items => items.classList.remove('active'))
            const inputRadio = event.currentTarget.querySelector('.radio-circle');
            if(event.target.checked) {
                inputRadio.classList.add('active');
            }
        }
    }))
}
