document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;
    var responseDiv = document.getElementById('response');

    fetch('https://your-app-name.herokuapp.com/receive_sms', { // এই URL টি Heroku তে হোস্ট করা API এর URL হবে
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `message=${message}&phone=${phone}`
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => {
        responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});