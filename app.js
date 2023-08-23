const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animations')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    });
});
const the_animation = document.querySelectorAll('.animation')