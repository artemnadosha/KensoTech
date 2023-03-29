const askedQuestionItems = document.querySelectorAll('.asked-questions-item');

export const askedQuestion = () => {
    askedQuestionItems.forEach(items => items.addEventListener('click', (event) => {
        const icon = items.querySelector('.icon-arrow-checkbox');
        const content = items.querySelector('.asked-question-content');

        icon.classList.toggle('active');
        content.classList.toggle('active');
        content.animate([
            {opacity: '0'},
            {opacity: '1'}],{
                duration: 1000,
        })
    }))
}
