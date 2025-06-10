document.addEventListener('DOMContentLoaded', () => {
    const songsData = [
        { id: 1, title: "Implicit Demand for Proof", audio: "audio/implicit_demand_for_proof.mp3" },
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
        audioPlayer.type = "audio/mpeg";
        audioCell.appendChild(audioPlayer);
        row.appendChild(audioCell);

        songsTableBody.appendChild(row);
    });

    const triviaBtn = document.getElementById('trivia-btn');
    if (triviaBtn) {
        triviaBtn.addEventListener('click', () => {
            window.location.href = 'pagina3.html';
        });
    }
});