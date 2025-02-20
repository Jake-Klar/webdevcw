document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector('.nav-title');
    var pageName = document.title;
    titleElement.textContent = pageName;
});
