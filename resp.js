burger = document.querySelector('.burger')
responsive= document.querySelector('.responsive')

burger.addEventListener('click',()=>{
    responsive.classList.toggle('visibility_resp');
    responsive.classList.toggle('h-nav-resp');
})