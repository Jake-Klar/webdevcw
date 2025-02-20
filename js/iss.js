fetch('./txt/iss.txt')
.then(response => response.text())
.then(data => {
    document.getElementById('iss').textContent = data;
})
.catch(error => {
    document.getElementById('iss').textContent = 'Error loading content'
});
