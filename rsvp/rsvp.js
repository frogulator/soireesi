
    document.getElementById('rsvpForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            attendance: document.getElementById('attendance').value,
            guests: document.getElementById('guests').value,
            comments: document.getElementById('comments').value
        };

        fetch('http://yourserver.com/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

