// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL INTERFACE ROUTER
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Looks for the trigger pill element inside your explore.html markup once mounted
    const exploreBtn = document.getElementById('explore-trigger-pill');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Direct root URL hop - completely unblockable over the Vite production grid!
            window.location.href = './mainscreen.html';
        });
    }
});
