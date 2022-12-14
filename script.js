const ham = document.querySelector('.toggle');
const icons = document.querySelector('i.ham-btn');
const lists = document.querySelector('.hilang');
const btn = document.querySelector('.menubtn')

ham.addEventListener('click', function () {
    icons.classList.toggle('fa-xmark');
    lists.classList.toggle('active');
    btn.classList.toggle('active');
});
