// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

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
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', () => {
            
            // 🧠 COMPILES COMPACT CENTERED NAVIGATION AND APPCARDS CORE INSTANTLY
            stageRoot.innerHTML = `
                <div id="main-storefront-view-wrapper" style="width: 100%; display: flex; flex-direction: column; align-items: center; background-color: #000000; padding-top: 44px; box-sizing: border-box;">
                    
                    <!-- 🏛️ ULTRA-GLASS NAVIGATION HEADER BAR (PERFECTLY CENTERED LOGO) -->
                    <div class="store-nav-bar" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: space-between; background: rgba(10, 10, 12, 0.01); backdrop-filter: blur(50px); -webkit-backdrop-filter: blur(50px); border-bottom: 0.5px solid rgba(255, 255, 255, 0.02); padding: 0 16px; position: fixed; top: 0; left: 0; z-index: 9998; box-sizing: border-box;">
                        
                        <!-- ☰ TOP-LEFT: THREE-LINE HAMBURGER TRIGGER BUTTON -->
                        <button id="menu-drawer-trigger-btn" class="interactive-scale-feedback" style="background: none; border: none; color: #ffffff; cursor: pointer; display: flex; flex-direction: column; gap: 4px; padding: 6px; width: 24px; outline: none;">
                            <div style="width: 18px; height: 2px; background-color: #ffffff; border-radius: 1px;"></div>
                            <div style="width: 18px; height: 2px; background-color: #ffffff; border-radius: 1px;"></div>
                            <div style="width: 18px; height: 2px; background-color: #ffffff; border-radius: 1px;"></div>
                        </button>
                        
                        <!-- 🎯 HORIZONTAL CENTER: BRAND WORDMARK TITLE -->
                        <div class="brand-font-center" style="font-weight: 700; font-size: 16px; letter-spacing: -0.3px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; position: absolute; left: 50%; transform: translateX(-50%); color: #ffffff;">
                            <span>Android</span><span style="color: #ff9f0a;">DevStore</span>
                        </div>
                        
                        <!-- RIGHT CONTENT BALANCER -->
                        <div style="width: 24px; height: 24px;"></div>
                    </div>

                    <!-- 📡 DYNAMIC SLOT FOR THE SEPARATE SIDEBAR COMPONENT -->
                    <div id="sidebar-component-mount-dock"></div>

                    <!-- MAIN STOREFRONT CONTAINER LAYOUT FEED COLUMN -->
                    <div id="store-main-content-scroll" style="width: 100%; max-width: 360px; padding: 20px 16px 40px 16px; display: flex; flex-direction: column; align-items: center; box-sizing: border-box;">
                        <div class="video-spotlight-chassis" style="width: 100%; height: 200px; border-radius: 20px; overflow: hidden; margin-bottom: 24px; background: #1c1c1e; box-shadow: 0 12px 32px rgba(0,0,0,0.5); width: 100%;">
                            <video src="./src/components/SpotlightVideo/memoji.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
                        </div>
                        <div style="width: 100%; margin-bottom: 24px;">
                            <input type="text" placeholder="🔍 Search Apps, Tiers, Developers" style="width: 100%; height: 38px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; width: 100%; box-sizing: border-box;">
                        </div>
                        <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 16px;"></div>
                    </div>
                </div>
            `;
            
            window.scrollTo(0, 0);

            // 🚀 STEP 3: ASYNCHRONOUSLY FETCH AND LOAD THE SEPARATE SIDEBAR FILE LAYOUT
            fetch('./src/components/Sidebar.html')
                .then(response => response.text())
                .then(htmlMarkup => {
                    const dock = document.getElementById('sidebar-component-mount-dock');
                    if (dock) {
                        dock.innerHTML = htmlMarkup;
                        activateSidebarDrawerMechanics(); // Bind trigger listeners once loaded!
                    }
                })
                .catch(err => console.error("⚠️ Failed to load isolated Sidebar view sheet:", err));

            buildAutomatedEcosystemCards();
        });
    }
});

function activateSidebarDrawerMechanics() {
    const trigger = document.getElementById('menu-drawer-trigger-btn');
    const drawer = document.getElementById('left-sidebar-menu-drawer');
    const closeBtn = document.getElementById('close-drawer-btn');

    if (trigger && drawer && closeBtn) {
        trigger.addEventListener('click', (e) => { e.stopPropagation(); drawer.style.left = '0px'; });
        closeBtn.addEventListener('click', () => { drawer.style.left = '-280px'; });
        document.addEventListener('click', (e) => { if (!drawer.contains(e.target) && e.target !== trigger) drawer.style.left = '-280px'; });
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
