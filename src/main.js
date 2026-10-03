// =========================================================================================
// 🪐 ANDROIDDEVSTORE CENTRAL BACKGROUND MODULAR ROUTER ENGINE
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const landingView = document.getElementById('landing-scene-container');
    const storeDashboard = document.getElementById('store-dashboard-view');

    // ⚡ THE MASTER COORDINATOR: Safely hooks your button click entirely outside your index.html
    if (exploreBtn && landingView && storeDashboard) {
        exploreBtn.addEventListener('click', () => {
            // Smoothly closes onboarding landing folds
            landingView.style.display = 'none';
            
            // Instantly displays your hidden post-landing dashboard view slot
            storeDashboard.style.display = 'flex';
            window.scrollTo(0, 0);
            
            // Dynamically renders the temporary placeholder view on your pure pitch-black canvas
            storeDashboard.innerHTML = `
                <div style="width: 100%; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #000000; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
                    <h2 style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Ecosystem Activated</h2>
                    <p style="color: #86868b; font-size: 14px; margin-top: 4px;">AndroidDevStore Home Screen is ready for blueprinting.</p>
                </div>
            `;
            console.log("🪐 AndroidDevStore Engine: Home Screen layer activated via background main.js module!");
        });
    }
});
