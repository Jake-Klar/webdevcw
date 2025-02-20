fetch('./txt/apollo.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('apollo').textContent = data;
})
.catch(error => {
    document.getElementById('apollo').textContent = 'Error loading content'
});
