// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure - Vanilla iOS-Style Architecture
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

// 📊 GLOBAL ENGINE RUNTIME VIEWS TRACKER STATE
let Current_Active_Tab_Index = "home"; 

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    // ⚡ LANDING FOLD: Handles the initial explore transition smoothly
    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Booting multi-tab system console...");
            compileStorefrontInterfaceSkeleton(stageRoot);
        });
    }
});

// 🏛️ CORE SHELL GENERATOR: Draws the permanent unmoveable layout components
function compileStorefrontInterfaceSkeleton(stageRoot) {
    stageRoot.innerHTML = `
        <div id="vanilla-store-app-chassis" style="width: 100%; display: flex; flex-direction: column; background-color: #000000; min-height: 100vh; position: relative; box-sizing: border-box;">
            
            <!-- 🏛️ TRANSLUCENT LIQUID GLASS COLLAPSE HEADER TOP BAR -->
            <div id="liquid-glass-top-navbar" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(10, 10, 12, 0.0); backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); border-bottom: 0.5px solid rgba(255, 255, 255, 0.0); position: fixed; top: 0; left: 0; z-index: 9998; box-sizing: border-box; transition: background 0.2s, backdrop-filter: 0.2s, border-bottom 0.2s;">
                <div id="collapsed-navbar-title-wordmark" style="font-weight: 700; font-size: 16px; letter-spacing: -0.3px; font-family: -apple-system, sans-serif; color: #ffffff; opacity: 0; transition: opacity 0.2s;">AndroidDevStore</div>
            </div>

            <!-- 📱 CORE SCROLL CONTENEUR: Captures device scrolling mechanics for collapsing titles -->
            <div id="main-storefront-scroll-viewport" style="width: 100%; height: calc(100vh - 49px); overflow-y: scroll; padding-top: 44px; padding-bottom: 30px; box-sizing: border-box;-webkit-overflow-scrolling: touch;">
                <div id="dynamic-tab-content-injection-slot" style="width: 100%; max-width: 360px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;"></div>
            </div>

            <!-- 🧭 FIXED UNMOVEABLE BOTTOM NAVIGATION TAB BAR (WHATSAPP IOS BLUEPRINT) -->
            <div style="width: 100%; height: 49px; background: rgba(19, 19, 21, 0.85); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border-top: 0.5px solid rgba(255, 255, 255, 0.08); position: fixed; bottom: 0; left: 0; z-index: 9999; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; padding-bottom: env(safe-area-inset-bottom);">
                <button class="nav-tab-action-trigger" data-tab-target="home" style="background: none; border: none; color: #007aff; font-size: 11px; font-weight: 600; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; outline: none; width: 22%;">
                    <span style="font-size: 16px;">🏠</span>Home
                </button>
                <button class="nav-tab-action-trigger" data-tab-target="categories" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 600; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; outline: none; width: 22%;">
                    <span style="font-size: 16px;">📦</span>Categories
                </button>
                <button class="nav-tab-action-trigger" data-tab-target="settings" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 600; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; outline: none; width: 22%;">
                    <span style="font-size: 16px;">⚙️</span>Settings
                </button>
                <button class="nav-tab-action-trigger" data-tab-target="developer" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 600; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; outline: none; width: 22%;">
                    <span style="font-size: 16px;">👨‍💻</span>Developer
                </button>
            </div>

        </div>
    `;

    // Hook scroll monitors instantly to control fluid large-title animations
    initializeScrollCollapseObserver();
    // Bind click events across your tab array elements
    activateNavigationRoutingTabs();
    // Force immediate compilation render of your home viewport layout
    executeTabTemplateRender();
}
function activateNavigationRoutingTabs() {
    const tabTriggers = document.querySelectorAll('.nav-tab-action-trigger');
    
    tabTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedTarget = btn.getAttribute('data-tab-target');
            if (selectedTarget === Current_Active_Tab_Index) return;

            Current_Active_Tab_Index = selectedTarget;

            // Reset typography color tones back to unselected grey values
            tabTriggers.forEach(t => t.style.color = "#86868b");
            // Highlight your active selected panel with native apple sky-blue
            btn.style.color = "#007aff";

            // Instantly wipe text canvas and inject the new sub-page layout metrics
            executeTabTemplateRender();
            
            // Force viewport context list scroll back to top zero position
            const viewport = document.getElementById('main-storefront-scroll-viewport');
            if (viewport) viewport.scrollTop = 0;
        });
    });
}

// 🏛️ WHATSAPP COLLAPSIBLE TRANSITION SCROLL CONTROLLER
function initializeScrollCollapseObserver() {
    const scrollContainer = document.getElementById('main-storefront-scroll-viewport');
    const glassHeaderBar = document.getElementById('liquid-glass-top-navbar');
    const wordmarkTitle = document.getElementById('collapsed-navbar-title-wordmark');

    if (scrollContainer && glassHeaderBar && wordmarkTitle) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollDistance = scrollContainer.scrollTop;

            // If the user scrolls past 30px, melt large title and fade-in the glass top navbar!
            if (scrollDistance > 32) {
                glassHeaderBar.style.background = "rgba(19, 19, 21, 0.85)";
                glassHeaderBar.style.backdropFilter = "blur(30px)";
                glassHeaderBar.style.webkitBackdropFilter = "blur(30px)";
                glassHeaderBar.style.borderBottom = "0.5px solid rgba(255, 255, 255, 0.08)";
                wordmarkTitle.style.opacity = "1";
            } else {
                // Return seamlessly back to deep spacious transparency at the top fold
                glassHeaderBar.style.background = "rgba(10, 10, 12, 0.0)";
                glassHeaderBar.style.backdropFilter = "blur(0px)";
                glassHeaderBar.style.webkitBackdropFilter = "blur(0px)";
                glassHeaderBar.style.borderBottom = "0.5px solid rgba(255, 255, 255, 0.0)";
                wordmarkTitle.style.opacity = "0";
            }
        });
    }
}
function executeTabTemplateRender() {
    const contentSlot = document.getElementById('dynamic-tab-content-injection-slot');
    if (!contentSlot) return;

    contentSlot.innerHTML = ""; // Clear active canvas frame boundaries

    // 🪐 ASYMMETRIC VIEWPORT SWITCH ROUTER
    if (Current_Active_Tab_Index === "home") {
        contentSlot.innerHTML = `
            <!-- LARGE COLLAPSIBLE TITLE ELEMENT -->
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Chats</h1></div>
            
            <!-- 🎥 LIVE SPOTLIGHT FRAME WITH SOLID ABSOLUTE PURE BLACK BACKING -->
            <div class="video-spotlight-chassis" style="width: 100%; height: 200px; border-radius: 20px; overflow: hidden; margin-bottom: 20px; background-color: #000000; box-shadow: 0 12px 32px rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center;">
                <video src="./src/components/SpotlightVideo/memoji.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; max-height: 240px;"></video>
            </div>

            <!-- COMPACT MATCHING SEARCH ROW SLOTS -->
            <div style="width: 100%; margin-bottom: 20px;">
                <input type="text" placeholder="🔍 Search Apps, Tiers, Developers" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;">
            </div>

            <!-- APPS INJECTION PANEL DOCK ENTRY -->
            <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 12px;"></div>
        `;
        buildCompactStorefrontCardItems();

    } else if (Current_Active_Tab_Index === "categories") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Categories</h1></div>
            <div style="width:100%; display:flex; flex-direction:column; gap:12px;">
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">🚀 CGI Game Engines & Frameworks</div>
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">📦 Modding Tools & Script Daemons</div>
            </div>
        `;

    } else if (Current_Active_Tab_Index === "settings") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Settings</h1></div>
            <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; width:100%; padding:16px; color:#86868b; font-size:14px; text-align:left;">
                Device Preferences, Shell Logs, and Console updates will track inside this module layer...
            </div>
        `;

    } else if (Current_Active_Tab_Index === "developer") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Developer</h1></div>
            <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; width:100%; padding:16px; color:#ffffff; font-size:15px; font-weight:700; text-align:left;">
                Founded by Emmanuel Mabheure
                <p style="font-size:12px; color:#86868b; font-weight:500; margin-top:4px;">Engineered modularly by the Vanilla Development Team.</p>
            </div>
        `;
    }
}

function buildCompactStorefrontCardItems() {
    const mountNode = document.getElementById('automated-apps-list-mount');
    if (!mountNode) return;

    AndroidDevStore_CatalogDatabase.forEach(app => {
        const stripRowCard = document.createElement('div');
        stripRowCard.style.cssText = "background: rgba(255, 255, 255, 0.01); border-bottom: 0.5px solid rgba(255, 255, 255, 0.05); padding: 10px 0; display: flex; align-items: center; justify-content: space-between; width: 100; cursor: pointer;";
        stripRowCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
                <div style="width: 46px; height: 44px; background: ${app.iconGradient}; border-radius: 10px;"></div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; font-family: -apple-system, sans-serif;">${app.title}</div>
                    <div style="font-size: 12px; color: #86868b; margin-top: 1px;">${app.tier} &bull; By Emmanuel Mabheure</div>
                </div>
            </div>
            <button style="background: #1c1c1e; color: #007aff; border: none; padding: 4px 14px; border-radius: 14px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">VIEW</button>
        `;
        mountNode.appendChild(stripRowCard);
    });
}
