// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure - Vanilla iOS-Style Architecture
// =========================================================================================

// 📊 GLOBAL ENGINE RUNTIME VIEWS TRACKER STATE
let Current_Active_Tab_Index = "home";
let Automated_App_Cache_Array = [];

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    // ⚡ LANDING FOLD: Handles the initial explore transition smoothly on click
    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Booting 5-tab system console layout...");
            compileStorefrontInterfaceSkeleton(stageRoot);
        });
    }
});

// 🏛️ CORE SHELL GENERATOR: Draws the permanent unmoveable layout components
function compileStorefrontInterfaceSkeleton(stageRoot) {
    stageRoot.innerHTML = `
        <div id="vanilla-store-app-chassis" style="width: 100%; display: flex; flex-direction: column; background-color: #000000; min-height: 100vh; position: relative; box-sizing: border-box;">
            
            <!-- 🏛️ TRANSLUCENT LIQUID GLASS COLLAPSE HEADER TOP BAR -->
            <div id="liquid-glass-top-navbar" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: space-between; background: rgba(10, 10, 12, 0.0); backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); border-bottom: 0.5px solid rgba(255, 255, 255, 0.0); position: fixed; top: 0; left: 0; z-index: 9998; box-sizing: border-box; padding: 0 16px; transition: background 0.2s, backdrop-filter: 0.2s, border-bottom 0.2s;">
                <div id="collapsed-navbar-title-wordmark" style="font-weight: 700; font-size: 16px; letter-spacing: -0.3px; font-family: -apple-system, sans-serif; color: #ffffff; opacity: 0; transition: opacity 0.2s;">AndroidDevStore</div>
                <!-- ➕ TOP RIGHT SHORTCUT OPTION BUTTON (LINKED TO GITHUB ISSUES SECURITY PORTAL) -->
                <a href="https://github.com" target="_blank" id="top-right-feedback-trigger" style="text-decoration: none; color: #ffffff; font-size: 20px; font-weight: 400; opacity: 0.9; cursor: pointer; padding: 4px; display: block; outline: none;">+</a>
            </div>

            <!-- 📱 CORE SCROLL VIEWPORT: Controls the fluid collapsible large title animations -->
            <div id="main-storefront-scroll-viewport" style="width: 100%; height: calc(100vh - 49px); overflow-y: scroll; padding-top: 44px; padding-bottom: 40px; box-sizing: border-box; -webkit-overflow-scrolling: touch;">
                <div id="dynamic-tab-content-injection-slot" style="width: 100%; max-width: 360px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;"></div>
            </div>

            <!-- 🧭 FIXED UNMOVEABLE BOTTOM NAVIGATION TAB BAR (APPLE ICLOUD MATRIX - NO EMOJIS) -->
            <div style="width: 100%; height: 49px; background: rgba(19, 19, 21, 0.85); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border-top: 0.5px solid rgba(255, 255, 255, 0.08); position: fixed; bottom: 0; left: 0; z-index: 9999; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; padding-bottom: env(safe-area-inset-bottom);">
                <button class="nav-tab-action-trigger" data-tab-target="home" style="background: none; border: none; color: #007aff; font-size: 11px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; width: 18%;">Home</button>
                <button class="nav-tab-action-trigger" data-tab-target="search" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; width: 18%;">Search</button>
                <button class="nav-tab-action-trigger" data-tab-target="feedback" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; width: 18%;">Feedback</button>
                <button class="nav-tab-action-trigger" data-tab-target="categories" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; width: 18%;">Categories</button>
                <button class="nav-tab-action-trigger" data-tab-target="about" style="background: none; border: none; color: #86868b; font-size: 11px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; width: 18%;">About</button>
            </div>

            <!-- 🔮 TWO-STAGE SLIDING INTERACTIVE DETAIL SHEET PANEL OVERLAY -->
            <div id="product-preview-detail-sheet" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000000; z-index: 10001; display: none; flex-direction: column; padding: 24px 16px; overflow-y: auto; box-sizing: border-box;"></div>
        </div>
    `;

    initializeScrollCollapseObserver();
    activateNavigationRoutingTabs();
    preloadAutomatedAppCardProfiles();
    executeTabTemplateRender();
}
function activateNavigationRoutingTabs() {
    const tabTriggers = document.querySelectorAll('.nav-tab-action-trigger');
    tabTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedTarget = btn.getAttribute('data-tab-target');
            if (selectedTarget === Current_Active_Tab_Index) return;

            Current_Active_Tab_Index = selectedTarget;
            tabTriggers.forEach(t => t.style.color = "#86868b");
            btn.style.color = "#007aff";

            executeTabTemplateRender();
            const viewport = document.getElementById('main-storefront-scroll-viewport');
            if (viewport) viewport.scrollTop = 0;
        });
    });
}

function initializeScrollCollapseObserver() {
    const scrollContainer = document.getElementById('main-storefront-scroll-viewport');
    const glassHeaderBar = document.getElementById('liquid-glass-top-navbar');
    const wordmarkTitle = document.getElementById('collapsed-navbar-title-wordmark');

    if (scrollContainer && glassHeaderBar && wordmarkTitle) {
        scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollTop > 32) {
                glassHeaderBar.style.background = "rgba(19, 19, 21, 0.85)";
                glassHeaderBar.style.backdropFilter = "blur(30px)";
                glassHeaderBar.style.webkitBackdropFilter = "blur(30px)";
                glassHeaderBar.style.borderBottom = "0.5px solid rgba(255, 255, 255, 0.08)";
                wordmarkTitle.style.opacity = "1";
            } else {
                glassHeaderBar.style.background = "rgba(10, 10, 12, 0.0)";
                glassHeaderBar.style.backdropFilter = "blur(0px)";
                glassHeaderBar.style.webkitBackdropFilter = "blur(0px)";
                glassHeaderBar.style.borderBottom = "0.5px solid rgba(255, 255, 255, 0.0)";
                wordmarkTitle.style.opacity = "0";
            }
        });
    }
}

// 🤖 AUTOMATED CARD SCRAPER DATA PROFILE PRELOADER
function preloadAutomatedAppCardProfiles() {
    // Local static fallback configuration arrays matching your custom includes/appcards/ profiles
    Automated_App_Cache_Array = [
        {
            id: "system-perf",
            title: "System Performance Engine",
            developer: "Emmanuel Mabheure",
            tier: "Normal Users Suite",
            rating: "4.9",
            size: "14.2 MB",
            iconGradient: "linear-gradient(135deg, #1e1e24 0%, #4a154b 100%)",
            description: "Optimize your system environment tracking loops with a curated performance profile or background shell script of your own choice. Inject automated terminal hooks safely without hardware brick vulnerabilities.",
            apkPath: "./apks/system_perf.apk"
        }
    ];
}
function executeTabTemplateRender() {
    const contentSlot = document.getElementById('dynamic-tab-content-injection-slot');
    if (!contentSlot) return;

    contentSlot.innerHTML = ""; 

    if (Current_Active_Tab_Index === "home") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">AndroidDevStore</h1></div>
            
            <!-- HOME TIMELINE SPOTLIGHT VIDEO ENCLOSURE (SOLID BLACK GROUNDING GRID) -->
            <div class="video-spotlight-chassis" style="width: 100%; height: 200px; border-radius: 20px; overflow: hidden; margin-bottom: 20px; background-color: #000000; box-shadow: 0 12px 32px rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; width: 100%;">
                <video src="./src/components/SpotlightVideo/memoji.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; max-height: 240px;"></video>
            </div>

            <div style="width: 100%; margin-bottom: 20px;">
                <input type="text" placeholder="🔍 Search Apps, Tiers, Developers" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;">
            </div>

            <!-- 🤖 INSTANT SLOTS FOR THE AUTOMATED APPCARD LOOP -->
            <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 4px;"></div>
        `;
        buildAutomatedAppCardStripRows();

    } else if (Current_Active_Tab_Index === "search") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Search</h1></div>
            <div style="width: 100%; margin-bottom: 20px;"><input type="text" placeholder="🔍 Packages, Daemons, Tools" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;"></div>
        `;

    } else if (Current_Active_Tab_Index === "feedback") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Feedback</h1></div>
            <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; width:100%; padding:16px; color:#86868b; font-size:14px; text-align:left;">
                To log feedback reports or terminal environment bugs safely without script spam anomalies, tap the <strong>+</strong> option at the top ribbon right fold to access the GitHub Issue center.
            </div>
        `;

    } else if (Current_Active_Tab_Index === "categories") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">Categories</h1></div>
            <div style="width:100%; display:flex; flex-direction:column; gap:12px;">
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">🚀 CGI Game Engines & Frameworks</div>
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">📦 Modding Tools & Script Daemons</div>
            </div>
        `;

    } else if (Current_Active_Tab_Index === "about") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 12px 0 16px 0;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1px;">About</h1></div>
            <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; width:100%; padding:20px; color:#ffffff; font-size:15px; font-weight:700; text-align:left; line-height:1.6;">
                Emmanuel Mabheure
                <p style="font-size:13px; color:#ff9f0a; font-weight:600; margin-top:2px;">Founder & 3D Game Architect</p>
                <div style="width:100%; height:0.5px; background:rgba(255,255,255,0.08); margin:12px 0;"></div>
                <p style="font-size:13px; color:#86868b; font-weight:500;">Parent Corporate Body: Emmanuel Mabheure Foundations (EMF)</p>
                <p style="font-size:13px; color:#86868b; font-weight:500; margin-top:4px;">Subsidiary Workspace Node: Vanilla Inc</p>
            </div>
        `;
    }
}

function buildAutomatedAppCardStripRows() {
    const mountNode = document.getElementById('automated-apps-list-mount');
    if (!mountNode) return;

    Automated_App_Cache_Array.forEach(app => {
        const stripRowCard = document.createElement('div');
        stripRowCard.style.cssText = "background: transparent; border-bottom: 0.5px solid rgba(255, 255, 255, 0.06); padding: 12px 0; display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: pointer;";
        stripRowCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
                <div style="width: 44px; height: 44px; background: ${app.iconGradient}; border-radius: 10px;"></div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; font-family: -apple-system, sans-serif;">${app.title}</div>
                    <div style="font-size: 12px; color: #86868b; margin-top: 1px;">${app.tier} &bull; By Emmanuel Mabheure</div>
                </div>
            </div>
            <!-- STAGE 1: COMPACT 'VIEW' CLICK TARGET BAR -->
            <button class="view-trigger-btn" style="background: #1c1c1e; color: #007aff; border: none; padding: 4px 14px; border-radius: 14px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">VIEW</button>
        `;

        // Hooks up click events on both button and row container to slide up the preview layout sheets
        const triggerRevealSheet = () => { triggerProductDetailOverlaySheet(app); };
        stripRowCard.querySelector('.view-trigger-btn').addEventListener('click', (ev) => { ev.stopPropagation(); triggerRevealSheet(); });
        stripRowCard.addEventListener('click', triggerRevealSheet);

        mountNode.appendChild(stripRowCard);
    });
}

// STAGE 2: THE PRODUCT PREVIEW SLIDE SHEET LAYOUT REVEAL
function triggerProductDetailOverlaySheet(app) {
    const sheetOverlay = document.getElementById('product-preview-detail-sheet');
    if (!sheetOverlay) return;

    sheetOverlay.innerHTML = `
        <div style="width: 100%; max-width: 360px; margin: 0 auto; text-align: left; position: relative; font-family: -apple-system, sans-serif; padding-top: 20px;">
            <button id="close-preview-sheet-btn" style="background: #1c1c1e; border: none; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; cursor: pointer; position: absolute; top: 0; right: 0; display: flex; align-items: center; justify-content: center; outline: none;">✕</button>
            
            <div style="display: flex; align-items: center; gap: 16px; margin-top: 40px; margin-bottom: 24px;">
                <div style="width: 72px; height: 72px; background: ${app.iconGradient}; border-radius: 18px;"></div>
                <div>
                    <h2 style="font-size: 22px; font-weight: 700; color: #ffffff;">${app.title}</h2>
                    <p style="font-size: 13px; color: #007aff; font-weight: 500; margin-top: 2px;">By ${app.developer}</p>
                </div>
            </div>
            
            <!-- STAGE 3: 'GET' ACTION TRIGGER IS REVEALED IN PREVIEW PAGE -->
            <button id="get-binary-download-btn" style="background: #007aff; color: #ffffff; border: none; width: 100%; padding: 12px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; outline: none; box-shadow: 0 4px 14px rgba(0,122,255,0.3);">GET</button>
            
            <div style="display: flex; background: #1c1c1e; border-radius: 12px; padding: 12px; justify-content: space-around; text-align: center; margin-top: 24px; box-sizing: border-box;">
                <div><div style="font-size: 11px; color: #86868b; font-weight: 600;">RATINGS</div><div style="font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 4px;">${app.rating} ★</div></div>
                <div style="width:0.5px; background:rgba(255,255,255,0.1); height:30px;"></div>
                <div><div style="font-size: 11px; color: #86868b; font-weight: 600;">SIZE</div><div style="font-size: 16px; font-weight: 700; color: #ffffff; margin-top: 4px;">${app.size}</div></div>
            </div>
            
            <h4 style="font-size: 14px; font-weight: 700; color: #ffffff; margin-top: 24px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Description</h4>
            <p style="font-size: 14px; color: #86868b; line-height: 1.5;">${app.description}</p>
        </div>
    `;
    sheetOverlay.style.display = 'flex';
    
document.getElementById('close-preview-sheet-btn').addEventListener('click', () => { sheetOverlay.style.display = 'none'; });
// Tapping GET maps token metrics to localStorage and launches download.html gate instantly
document.getElementById('get-binary-download-btn').addEventListener('click', () => {
localStorage.setItem('active_download_apk_target', app.apkPath);
window.location.href = "./download.html";
});
}
