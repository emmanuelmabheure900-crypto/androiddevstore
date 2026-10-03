// =========================================================================================
// 🪐 ANDROIDDEVSTORE BACKGROUND NAVIGATION GATEWAY ROUTER
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Hooks the mounted button element ID cleanly from the DOM grid matrix
    const exploreBtn = document.getElementById('explore-trigger-pill');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Forces relative trajectory pathing to secure successful jumps inside subfolders
            window.location.href = './mainscreen.html';
        });
    }
});
