
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send("service_e4ojo08", "template_juq56y9", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        attendance: document.getElementById('attendance').value,
        guests: document.getElementById('guests').value,
        comments: document.getElementById('comments').value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
});


