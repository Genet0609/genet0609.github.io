
const progressBars = document.querySelectorAll('.progress .progress-bar');


function setProgressBarWidth() {
    progressBars.forEach(progressBar => {
        const valueNow = progressBar.getAttribute('aria-valuenow');
        progressBar.style.width = valueNow + '%';
    });
}


window.addEventListener('scroll', () => {
    const skillsContent = document.querySelector('.skills-content');
    if (skillsContent && isElementInViewport(skillsContent)) {
        setProgressBarWidth();
    }
});


function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
