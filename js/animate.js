document.addEventListener("DOMContentLoaded", () => {
    
    const animatedElements = document.querySelectorAll(".float-in");

    
    const addAnimation = (element, index) => {
        setTimeout(() => {
            element.classList.add("animate");
        }, index * 50); 
    };

    // Buat observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const index = Array.from(animatedElements).indexOf(element);
                addAnimation(element, index);
                observer.unobserve(element); 
            }
        });
    });

    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block';
}

function closeCard() {
    document.querySelector('.float-card').style.display = 'none';
}

document.querySelectorAll('.slide')[0].style.display = 'block';
setInterval(showNextSlide, 3000);