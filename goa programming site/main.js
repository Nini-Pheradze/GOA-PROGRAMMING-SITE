// კონსულტაციისთვის
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // მომხმარებლის მიერ შეყვანილი მონაცემების წაკითხვა
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
    };

    alert('მადლობა თქვენი ინტერესისთვის! ჩვენ დაგიკავშირდებით უახლოეს მომავალში.\n\nთქვენი მონაცემები:\nსახელი: ' + formData.name + '\nელ.ფოსტა: ' + formData.email);
    // ფორმის გასასუფთავებლად
    this.reset();
});