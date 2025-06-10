document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const ratingInput = document.getElementById('rating');
    const ratingValueSpan = document.getElementById('rating-value');
    const ratingStar = document.getElementById('rating-star');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    const getSliderThumbPosition = (slider) => {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const value = parseFloat(slider.value);

        const percentage = (value - min) / (max - min);

        const sliderWidth = slider.offsetWidth;
        const thumbSize = 20;

        const trackWidth = sliderWidth - thumbSize;

        const thumbPosition = (percentage * trackWidth) + (thumbSize / 2);

        return thumbPosition;
    };

    const updateStarPosition = () => {
        if (!ratingInput || !ratingStar || !ratingValueSpan) {
            return;
        }

        const starWidth = ratingStar.offsetWidth;

        const thumbPosition = getSliderThumbPosition(ratingInput);

        let newLeftPosition = thumbPosition - (starWidth / 2);

        const minLeft = 0;
        const maxLeft = ratingInput.offsetWidth - starWidth;

        newLeftPosition = Math.max(minLeft, Math.min(newLeftPosition, maxLeft));


        ratingStar.style.left = `${newLeftPosition}px`;
        ratingValueSpan.textContent = ratingInput.value;
        ratingInput.setAttribute('aria-valuenow', ratingInput.value);
    };

    if (ratingInput) {
        ratingInput.value = ratingInput.value || '3';

        requestAnimationFrame(() => {
            updateStarPosition();
        });

        ratingInput.addEventListener('input', updateStarPosition);
        window.addEventListener('resize', updateStarPosition);
    }

    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                rating: ratingInput ? ratingInput.value : 'N/A',
                comment: document.getElementById('comment').value,
                listenAgain: document.querySelector('input[name="listen-again"]:checked') ? document.querySelector('input[name="listen-again"]:checked').value : 'N/A'
            };

            console.log('Comentario enviado:', formData);
            alert('¡Gracias por tu comentario!');

            commentForm.reset();
            if (ratingInput && ratingValueSpan) {
                ratingInput.value = '3';
                requestAnimationFrame(() => {
                    updateStarPosition();
                });
            }
            window.location.href = 'pagina1.html';
        });
    }

    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => {
            window.location.href = 'pagina1.html';
        });
    }
});