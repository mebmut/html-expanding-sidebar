const button = document.querySelector('.sidebar-btn');

button.addEventListener('click',()=>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
})