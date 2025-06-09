document.addEventListener('DOMContentLoaded', () => {
    // Datos de las canciones
    const songsData = [
        { id: 1, title: "Implicit Demand for Proof", audio: "audio/implicit_demand_for_proof.mp3" }, // Ruta de marcador de posición
        { id: 2, title: "Fall Away", audio: "audio/fall_away.mp3" },
        { id: 3, title: "The Pantaloon", audio: "audio/the_pantaloon.mp3" },
        { id: 4, title: "Addict with a Pen", audio: "audio/addict_with_a_pen.mp3" },
        { id: 5, title: "Friend, Please", audio: "audio/friend_please.mp3" },
        { id: 6, title: "Forest", audio: "audio/forest.mp3" },
        { id: 7, title: "Glowing Eyes", audio: "audio/glowing_eyes.mp3" },
        { id: 8, title: "Kitchen Sink", audio: "audio/kitchen_sink.mp3" },
        { id: 9, title: "Trees", audio: "audio/trees.mp3" },
        { id: 10, title: "Ruby", audio: "audio/ruby.mp3" },
        { id: 11, title: "Anathema", audio: "audio/anathema.mp3" },
        { id: 12, title: "Lovely", audio: "audio/lovely.mp3" },
        { id: 13, title: "Time to Say Goodbye", audio: "audio/time_to_say_goodbye.mp3" }
    ];

    const songsTableBody = document.querySelector('#songs-table tbody');

    // Poblar la tabla de canciones
    songsData.forEach(song => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = song.id;
        row.appendChild(idCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = song.title;
        row.appendChild(titleCell);

        const audioCell = document.createElement('td');
        const audioPlayer = document.createElement('audio');
        audioPlayer.controls = true;
        audioPlayer.src = song.audio;
        audioPlayer.type = "audio/mpeg"; // Asumiendo MP3, cambiar si es necesario
        audioCell.appendChild(audioPlayer);
        row.appendChild(audioCell);

        songsTableBody.appendChild(row);
    });

    // Lógica del formulario de comentarios
    const showCommentFormBtn = document.getElementById('show-comment-form-btn');
    const commentFormSection = document.getElementById('comment-form-section');
    const closeFormBtn = document.getElementById('close-form-btn');
    const commentForm = document.getElementById('comment-form');
    const ratingInput = document.getElementById('rating');
    const ratingValueSpan = document.getElementById('rating-value');

    // Actualizar la visualización de la calificación
    ratingInput.addEventListener('input', () => {
        ratingValueSpan.textContent = ratingInput.value;
    });

    // Mostrar formulario de comentarios
    showCommentFormBtn.addEventListener('click', () => {
        commentFormSection.classList.remove('hidden');
    });

    // Ocultar formulario de comentarios
    closeFormBtn.addEventListener('click', () => {
        commentFormSection.classList.add('hidden');
    });

    // Manejar el envío del formulario
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            rating: ratingInput.value,
            comment: document.getElementById('comment').value,
            newsletter: document.getElementById('newsletter').checked,
            listenAgain: document.querySelector('input[name="listen-again"]:checked').value
        };

        console.log('Comentario enviado:', formData);
        alert('¡Gracias por tu comentario!');

        /* Aquí es donde se enviarían los datos a un servidor */

        commentForm.reset(); // Limpiar el formulario
        ratingValueSpan.textContent = '3'; // Restablecer la visualización de la calificación
        commentFormSection.classList.add('hidden'); // Ocultar el formulario después del envío
    });
});