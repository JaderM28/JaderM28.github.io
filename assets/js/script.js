
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('active-nav');
    this.classList.toggle('fa-xmark')
})




let navlinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 22
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})