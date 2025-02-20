fetch('./txt/sputnik.txt')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('sputnik').textContent = data;
                })
                .catch(error => {
                    document.getElementById('sputnik').textContent = 'Error loading content'
                });
