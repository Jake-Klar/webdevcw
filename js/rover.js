fetch('./txt/rover.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('rover').textContent = data;
})
.catch(error => {
    document.getElementById('rover').textContent = 'Error loading content'
});
