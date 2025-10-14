document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
    };

    alert('გილოცავთ, თქვენ უკვე გოაელი ხართ! თქვენი წარმატება გარანტირებულია! \n\nთქვენი მონაცემები:\nსახელი: ' + formData.name + '\nელ.ფოსტა: ' + formData.email);
    this.reset();
});