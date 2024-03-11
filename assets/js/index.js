

function handleChange()
{
    const checkboxValue = document.getElementById('overlay-input')
    if(checkboxValue.value == 'on') {
        document.querySelector('.mySwiper').style.zIndex = "-1"
    } else {
        document.querySelector('.mySwiper').style.zIndex = "1"
    }
}

window.addEventListener("scroll", function() {
    var footer = document.querySelector(".footer");
    footer.style.position = "fixed";
  });
  

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addRemoveFadeInOutClass() {
    var elements = document.querySelectorAll('.fade-in-out');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        }
    });
}

// Initial check when page loads
addRemoveFadeInOutClass();

// Event listener for scroll event
window.addEventListener('scroll', function() {
    addRemoveFadeInOutClass();
});


