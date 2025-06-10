document.addEventListener('DOMContentLoaded', () => {
    const backToAlbumBtn = document.getElementById('back-to-album-btn');
    const goToCommentBtn = document.getElementById('go-to-comment-btn');

    if (backToAlbumBtn) {
        backToAlbumBtn.addEventListener('click', () => {
            window.location.href = 'pagina1.html';
        });
    }

    if (goToCommentBtn) {
        goToCommentBtn.addEventListener('click', () => {
            window.location.href = 'pagina2.html';
        });
    }
});