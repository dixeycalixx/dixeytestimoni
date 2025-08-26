// script.js
document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    const testimonialDiv = document.createElement('div');
    testimonialDiv.classList.add('testimonial');
    testimonialDiv.innerHTML = `
        <strong>${name}</strong> (${date})<br>
        Item: ${item} - Nominal: ${amount}<br>
        Status: ${status}
        <div class="comment-section">
            <input type="text" placeholder="Komentar" class="comment-input">
            <button class="comment-button">Kirim</button>
            <div class="comments"></div>
        </div>
    `;

    document.getElementById('testimonials').appendChild(testimonialDiv);

    document.querySelector('.comment-button').addEventListener('click', function() {
        const commentInput = testimonialDiv.querySelector('.comment-input');
        const commentText = commentInput.value;
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            testimonialDiv.querySelector('.comments').appendChild(commentDiv);
            commentInput.value = '';
        }
    });

    this.reset();
});
