
const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');
const closeNavBtn = document.querySelector('.navbar .close-btn');


navBtn.addEventListener('click', function() {
    navbar.classList.add('show-nav');
});

closeNavBtn.addEventListener('click', () => navbar.classList.remove('show-nav'));
closeCartBtn.addEventListener('click', () => cart.classList.remove('show-cart'));

const questionBtns = document.querySelectorAll('.questions .plus');


questionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const answer = e.target.parentElement.parentElement.nextElementSibling;
        // console.log(answer);
        btn.innerHTML = `<i class="fa-solid fa-minus"></i>`
        answer.classList.toggle('show-answer');
        if (!answer.classList.contains('show-answer')) {
            btn.innerHTML = `<i class="fa-solid fa-plus"></i>`
        }
    })
})


