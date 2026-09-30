// 🪐 MOBILEME ECOSYSTEM ROUTING & INJECTION ORCHESTRATOR ENGINE

// 1. ASYNCHRONOUS COMPONENT LOADING HANDSHAKERS
const components = {
    header: './src/components/Header.html',
    about: './src/components/About.html'
};

async function mountApplicationComponents() {
    try {
        // Fetch raw component files natively
        const headerRes = await fetch(components.header);
        const headerHTML = await headerRes.text();
        const aboutRes = await fetch(components.about);
        const aboutHTML = await aboutRes.text();

        // Inject blocks directly into index containers
        document.getElementById('header-mount-landing').innerHTML = headerHTML;
        document.getElementById('header-mount-store').innerHTML = headerHTML;
        document.getElementById('about-drawer-overlay').innerHTML = aboutHTML;

        // Initialize event listener bindings post-mount
        bindInteractiveInterfaceActions();
    } catch (err) {
        console.error("⚠️ MobileMe Component Compiling Error: ", err);
    }
}

// 2. ISOLATED BUTTON SWITCHING ROUTINES & DRAWER TOGGLES
function bindInteractiveInterfaceActions() {
    const landingScene = document.getElementById('landing-stage');
    const storeScene = document.getElementById('store-stage');
    const aboutOverlay = document.getElementById('about-drawer-overlay');

    // Explore button trigger -> Slingshots user cleanly to Store view!
    document.getElementById('explore-trigger').addEventListener('click', () => {
        landingScene.classList.replace('scene-active', 'scene-hidden');
        storeScene.classList.replace('scene-hidden', 'scene-active');
        window.scrollTo(0, 0);
    });

    // Exit Store button trigger -> Back to landing fold!
    document.getElementById('exit-store-trigger').addEventListener('click', () => {
        storeScene.classList.replace('scene-active', 'scene-hidden');
        landingScene.classList.replace('scene-hidden', 'scene-active');
        window.scrollTo(0, 0);
    });

    // Trigger overlay drawer open loops on all profile clicks
    document.querySelectorAll('#profile-drawer-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            aboutOverlay.classList.remove('drawer-hidden');
        });
    });

    // Close about panel cross button click
    document.getElementById('close-about-drawer').addEventListener('click', () => {
        aboutOverlay.classList.add('drawer-hidden');
    });
}

// Fire injection on DOM compilation
window.addEventListener('DOMContentLoaded', mountApplicationComponents);

