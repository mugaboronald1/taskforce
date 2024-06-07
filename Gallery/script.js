const photoItems = document.querySelectorAll('.photo-item');
const learnMoreItems = document.querySelectorAll('.learn-more');

// well i changed learn more to know more, i realised it should be know more according to
learnMoreItems.forEach(item => {
    item.textContent = 'know more';
});

photoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.learn-more').style.display = 'inline-block';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.learn-more').style.display = 'none';
    });
});
