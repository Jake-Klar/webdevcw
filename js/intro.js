fetch('./txt/intro.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('content').textContent = data;
})
.catch(error => {
    document.getElementById('content').textContent = 'Error loading content'
});
