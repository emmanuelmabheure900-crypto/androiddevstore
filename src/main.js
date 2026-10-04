// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure - Leaving index.html Untouched Forever
// =========================================================================================

// 📥 AUTOMATED APPLICATION DATABASE MATRIX DOCKED DIRECTLY INSIDE MAIN.JS
const AndroidDevStore_CatalogDatabase = [
    {
        id: "app_performance_engine",
        title: "System Performance Engine",
        developer: "Emmanuel Mabheure",
        tier: "Normal Users Suite",
        iconGradient: "linear-gradient(135deg, #1e1e24 0%, #4a154b 100%)"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const dotsBtn = document.getElementById('dots-horizontal-trigger');
    const popoverMenu = document.getElementById('popover-dropdown-drawer');
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    // 1. Navbar Three-Dot Drawer Popover Actions
    if (dotsBtn && popoverMenu) {
        dotsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            popoverMenu.style.display = popoverMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', () => { popoverMenu.style.display = 'none'; });
    }

    // 2. ⚡ THE UNBLOCKABLE LOCAL STATE VIEW PORTAL INTERFACE CONTROLLER
    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', () => {
            console.log("🪐 Main.js Engine: Activating storefront templates...");
            // Compiles and injects the complete storefront layout natively from the background module
            stageRoot.innerHTML = `
                <div id="main-storefront-view-wrapper" style="width: 100%; display: flex; flex-direction: column; align-items: center; background-color: #000000; padding-top: 44px; box-sizing: border-box;">
                    
                    <!-- 🏛️ ULTRA-GLASS NAVIGATION HEADER BAR -->
                    <div style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: space-between; background: rgba(10, 10, 12, 0.01); backdrop-filter: blur(50px); -webkit-backdrop-filter: blur(50px); border-bottom: 0.5px solid rgba(255, 255, 255, 0.02); padding: 0 16px; position: fixed; top: 0; left: 0; z-index: 9998; box-sizing: border-box;">
                        <button id="menu-drawer-trigger-btn" style="background: none; border: none; color: #ffffff; cursor: pointer; display: flex; flex-direction: column; gap: 5px; padding: 4px; width: 24px;">
                            <div style="width: 20px; height: 2px; background-color: #ffffff; border-radius: 1px;"></div>
                            <div style="width: 14px; height: 2px; background-color: #ffffff; border-radius: 1px;"></div>
                        </button>
                        <div style="font-weight: 700; font-size: 16px; position: absolute; left: 50%; transform: translateX(-50%); color:#ffffff;">
                            <span>Android</span><span style="color: #ff9f0a;">DevStore</span>
                        </div>
                        <div style="width: 24px; height: 24px;"></div>
                    </div>

                    <!-- 👥 SLIDING LEFT NAVIGATION MENU DRAWER CONTAINER -->
                    <div id="left-sidebar-menu-drawer" style="position: fixed; top: 0; left: -280px; width: 260px; height: 100vh; background: rgba(19, 19, 21, 0.97); backdrop-filter: blur(40px); border-right: 0.5px solid rgba(255, 255, 255, 0.08); z-index: 9999; display: flex; flex-direction: column; padding: 60px 20px 24px 20px; transition: left 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
                        <button id="close-drawer-btn" style="position: absolute; top: 12px; right: 16px; background: none; border: none; color: #86868b; font-size: 20px; cursor: pointer; outline: none;">✕</button>
                        <div id="nav-apps-btn" style="color: #007aff; font-size: 17px; font-weight: 600; cursor: pointer; margin-bottom: 20px;">📦 Apps</div>
                        <div id="nav-settings-btn" style="color: #ffffff; font-size: 17px; font-weight: 600; cursor: pointer; margin-bottom: 20px;">⚙️ Settings</div>
                    </div>

                    <!-- MAIN STOREFRONT CONTAINER LAYOUT FEED COLUMN -->
                    <div id="store-main-content-scroll" style="width: 100%; max-width: 360px; padding: 20px 16px 40px 16px; display: flex; flex-direction: column; align-items: center; box-sizing: border-box;">
                        
                        <!-- 🎥 THE DYNAMIC LIVE SPOTLIGHT MEMOJI VIDEO CONSOLE -->
                        <!-- Sourced directly from your components spotlight directory without root errors! -->
                        <div class="video-spotlight-chassis" style="width: 100%; height: 200px; border-radius: 20px; overflow: hidden; margin-bottom: 24px; background: #1c1c1e; box-shadow: 0 12px 32px rgba(0,0,0,0.5); width: 100%;">
                            <video src="./src/components/SpotlightVideo/memoji.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
                        </div>

                        <!-- SEARCH FIELD BAR -->
                        <div style="width: 100%; margin-bottom: 24px;">
                            <input type="text" placeholder="🔍 Search Apps, Tiers, Developers" style="width: 100%; height: 38px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; width: 100%; box-sizing: border-box;">
                        </div>

                        <!-- AUTOMATED MOUNT DOCK INJECTING THE APPCARDS DIRECTORIES -->
                        <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 16px;"></div>
                    </div>

                    <!-- ⚙️ PREFERENCES SHEET MODULE -->
                    <div id="settings-view-panel-sheet" style="width: 100%; max-width: 360px; display: none; flex-direction: column; padding: 20px 16px 40px 16px; box-sizing: border-box; text-align: left;">
                        <div style="text-transform: uppercase; font-size: 11px; color: #86868b; font-weight: 600; margin-bottom: 8px; padding-left: 12px;">Device Preferences</div>
                        <div style="background-color: #1c1c1e; border-radius: 12px; width: 100%; padding: 16px; color: #ffffff; font-size: 15px;">Settings Content Module Standing By...</div>
                    </div>

                </div>
            `;
            
            window.scrollTo(0, 0);
            activateSidebarDrawerMechanics();
            buildAutomatedEcosystemCards();
        });
    }
});
function activateSidebarDrawerMechanics() {
    const trigger = document.getElementById('menu-drawer-trigger-btn');
    const drawer = document.getElementById('left-sidebar-menu-drawer');
    const closeBtn = document.getElementById('close-drawer-btn');
    const scrollCol = document.getElementById('store-main-content-scroll');
    const settingsView = document.getElementById('settings-view-panel-sheet');

    if (trigger && drawer && closeBtn) {
        trigger.addEventListener('click', (e) => { e.stopPropagation(); drawer.style.left = '0px'; });
        closeBtn.addEventListener('click', () => { drawer.style.left = '-280px'; });
        document.addEventListener('click', (e) => { if (!drawer.contains(e.target) && e.target !== trigger) drawer.style.left = '-280px'; });
    }

    if (document.getElementById('nav-apps-btn') && document.getElementById('nav-settings-btn')) {
        document.getElementById('nav-apps-btn').addEventListener('click', () => { settingsView.style.display = 'none'; scrollCol.style.display = 'flex'; drawer.style.left = '-280px'; });
        document.getElementById('nav-settings-btn').addEventListener('click', () => { scrollCol.style.display = 'none'; settingsView.style.display = 'flex'; drawer.style.left = '-280px'; });
    }
}

function buildAutomatedEcosystemCards() {
    const mountNode = document.getElementById('automated-apps-list-mount');
    if (!mountNode) return;

    AndroidDevStore_CatalogDatabase.forEach(app => {
        const rowCard = document.createElement('div');
        rowCard.style.cssText = "background: rgba(255, 255, 255, 0.02); border: 0.5px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border-radius: 16px; padding: 14px; display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: pointer;";
        rowCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
                <div style="width: 44px; height: 44px; background: ${app.iconGradient}; border-radius: 10px;"></div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${app.title}</div>
                    <div style="font-size: 11px; color: #86868b; margin-top: 2px;">${app.tier} &bull; By Emmanuel Mabheure</div>
                </div>
            </div>
            <button style="background: #2c2c2e; color: #007aff; border: none; padding: 6px 18px; border-radius: 14px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">VIEW</button>
        `;
        mountNode.appendChild(rowCard);
    });
}

// Simple local FAQ accordion layer toggler
window.toggleFaqAccordionTrack = function(element) {
    const answer = element.querySelector('.faq-answer-panel');
    if (answer) { answer.style.display = (answer.style.display === 'none') ? 'block' : 'none'; }
};
