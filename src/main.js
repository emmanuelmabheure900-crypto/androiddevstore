// =========================================================================================
// 🪐 MECLOUD CENTRAL CORE COMPILER & SCENE ROUTING ENGINE
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

window.MobileMenuEngine = {
    toggleContextPanel: function() {
        const nodeMenu = document.getElementById('dropdownMenuNode');
        if (nodeMenu) {
            const currentViewState = window.getComputedStyle(nodeMenu).display;
            nodeMenu.style.display = (currentViewState === "none") ? "flex" : "none";
        }
    }
};

// ⚡ PARALLEL COMPONENT LAYOUT HARVEST MATRIX ENGINE
async function runEcosystemCompilerSync() {
    console.log("🪐 MeCloud Engine: Initializing parallel runtime compilation paths...");
    
    try {
        // Asynchronously fetches all independent presentation skins over the Vite network
        const [avatar, catalog, plus, footer, mainScreen] = await Promise.all([
            fetch('/src/components/Avatar.html').then(r => r.text()),
            fetch('/src/components/card-catalog/index.html').then(r => r.text()),
            fetch('/src/components/MeCloudPlus/index.html').then(r => r.text()),
            fetch('/src/components/Footer.html').then(r => r.text()),
            // 📡 MODULAR HOOK: PRE-LOADS YOUR SEPARATE SKELETON STOREFRONT FILE
            fetch('/src/components/MainScreen.html').then(r => r.text())
        ]);

        // 📐 DOCK ELEMENTS INSTANTLY INTO THEIR DESIGNATED ROOT CONTAINER PASSES
        if (document.getElementById('avatar-mount')) document.getElementById('avatar-mount').innerHTML = avatar;
        if (document.getElementById('card-catalog-mount')) document.getElementById('card-catalog-mount').innerHTML = catalog;
        if (document.getElementById('card-plus-mount')) document.getElementById('card-plus-mount').innerHTML = plus;
        if (document.getElementById('footer-mount')) document.getElementById('footer-mount').innerHTML = footer;

        console.log("🚀 MeCloud Portal compilation complete. Wiring up your Explore switcher trigger event...");

        // ⚡ ACTIVE GATEWAY TRANSITION CONTROLLER (Wired natively inside main.js)
        const exploreBtn = document.querySelector('.large-pill-signin-btn');
        const landingScroller = document.getElementById('chassis-scroller-track');
        const mountContainerBox = document.getElementById('card-plus-mount');

        if (exploreBtn && landingScroller && mountContainerBox) {
            // Overrides default anchor page hops to run an instant visibility scene swap locally
            exploreBtn.removeAttribute('href'); 
            exploreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Vanishes the old MeCloud entry landing folds cleanly
                landingScroller.style.display = 'none';
                
                // Instantly injects and activates your separate MainScreen storefront component skeleton layer!
                mountContainerBox.innerHTML = mainScreen;
                mountContainerBox.style.display = 'flex';
                window.scrollTo(0, 0);

                // Localized MainScreen Hamburger Drawer Interaction Loops
                const trigger = document.getElementById('menu-drawer-trigger-btn');
                const drawer = document.getElementById('left-sidebar-menu-drawer');
                const closeBtn = document.getElementById('close-drawer-btn');

                if (trigger && drawer && closeBtn) {
                    trigger.addEventListener('click', (ev) => { ev.stopPropagation(); drawer.style.left = '0px'; });
                    closeBtn.addEventListener('click', () => { drawer.style.left = '-280px'; });
                    document.addEventListener('click', (ev) => { if (!drawer.contains(ev.target) && ev.target !== trigger) drawer.style.left = '-280px'; });
                }
                
                console.log("🪐 AndroidDevStore Main Screen deployed live successfully!");
            });
        }

    } catch (error) {
        console.error("⚠️ Ecosystem compilation deferral: File paths mismatch or missing fields.", error);
    }
}

// Auto-hide legacy navigation context card overlay overlays if user clicks out
document.addEventListener('click', (e) => {
    const nodeMenu = document.getElementById('dropdownMenuNode');
    const menuTrigger = document.querySelector('.triple-dot-menu-trigger');
    if (nodeMenu && menuTrigger && nodeMenu.style.display === "flex") {
        if (!nodeMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
            nodeMenu.style.display = "none";
        }
    }
});

window.addEventListener('DOMContentLoaded', runEcosystemCompilerSync);
