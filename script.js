const fb = document.getElementById('feedback');
const feedback = {
    feedbacks: []
};

fb.addEventListener('click', () => {
    const msg = document.getElementById('txt');
    const message = msg.value;
    feedback.feedbacks.push(message);
    alert(`Thank You For Your Feedbacks..!`);
    msg.value = '';
});