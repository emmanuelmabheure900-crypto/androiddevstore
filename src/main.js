// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER DOCK CONTROLLER
// Engineered & Founded by Emmanuel Mabheure - Vanilla Social iOS-Style Chassis
// =========================================================================================

let Current_Active_Tab_Index = "home";
let Automated_App_Cache_Array = [];

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Fetching standalone loading architecture layout...");

            // 🚀 TIMELINE 1: ASYNCHRONOUSLY FETCH AND INJECT YOUR CUSTOM LOADER SNIPPET FILE
            fetch('./src/components/Loader.html')
                .then(response => response.text())
                .then(loaderHtmlMarkup => {
                    const loaderMountNode = document.createElement('div');
                    loaderMountNode.id = "temporary-loader-mount-wrapper";
                    loaderMountNode.innerHTML = loaderHtmlMarkup;
                    document.body.appendChild(loaderMountNode);

                    // 🚀 TIMELINE 2: DELAY ALL LAYOUT RUNS FOR EXACTLY 3 SECONDS (3000ms)
                    setTimeout(() => {
                        console.log("🪐 Vanilla Engine: 3 Seconds complete. Compiling storefront chassis...");
                        
                        const activeLoader = document.getElementById('temporary-loader-mount-wrapper');
                        if (activeLoader) activeLoader.remove();

                        // Softly fades out the root onboarding scene container wrapper
                        const landingContainer = document.getElementById('landing-scene-container');
                        if (landingContainer) landingContainer.style.display = 'none';

                        // Compile your premium, header-free floating storefront capsule layout grids!
                        compileStorefrontInterfaceSkeleton(stageRoot);
                    }, 3000);
                })
                .catch(err => {
                    console.error("⚠️ Failed to fetch Loader snippet component, bypassing safely:", err);
                    compileStorefrontInterfaceSkeleton(stageRoot);
                });
        });
    }
});

// 🏛️ CORE SHELL GENERATOR: Draws the permanent floating navigation pill capsule
function compileStorefrontInterfaceSkeleton(stageRoot) {
    stageRoot.innerHTML = `
        <div id="vanilla-store-app-chassis" style="width: 100%; display: flex; flex-direction: column; background-color: #000000; min-height: 100vh; position: relative; box-sizing: border-box;">
            
            <!-- 🏛️ TOP BARS AND LINES COMPLETELY REMOVED FOR PURE BORDERLESS SPACE VIEWPORTS -->

            <!-- 📱 CORE SCROLL VIEWPORT - PUSHED HIGHER UP TO MAXIMIZE STRUCTURAL MOBILE AREA -->
            <div id="main-storefront-scroll-viewport" style="width: 100%; height: calc(100vh - 70px); overflow-y: scroll; padding-top: 16px; padding-bottom: 40px; box-sizing: border-box; -webkit-overflow-scrolling: touch;">
                <div id="dynamic-tab-content-injection-slot" style="width: 100%; max-width: 360px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;"></div>
            </div>

            <!-- 🧭 PREMIUM FLOATING LIQUID-GLASS CAPSULE NAVIGATION PILL CHASSIS -->
            <div style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 340px; height: 50px; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 25px; z-index: 9999; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; padding: 0 8px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);">
                
                <!-- NODE 1: HOME CONTROLLER TRIGGER -->
                <button class="nav-tab-action-trigger" data-tab-target="home" style="background: none; border: none; color: #ffffff; font-size: 10px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 16%; transition: color 0.1s ease;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <span>Home</span>
                </button>
                
                <!-- NODE 2: SEARCH MAGNIFYING GLASS VECTOR -->
                <button class="nav-tab-action-trigger" data-tab-target="search" style="background: none; border: none; color: #e5e5ea; font-size: 10px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 16%; transition: color 0.1s ease;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span>Search</span>
                </button>
                
                <!-- NODE 3: THE STRATEGIC PRIMARY BLUE PLUS CREATION SYSTEM CORE -->
                <div style="width: 20%; display: flex; justify-content: center; align-items: center; position: relative;">
                    <button id="floating-plus-action-core-btn" class="interactive-scale-feedback" style="position: absolute; top: -34px; width: 46px; height: 44px; background: #007aff; border: none; border-radius: 50%; color: #ffffff; font-size: 24px; font-weight: 300; display: flex; align-items: center; justify-content: center; cursor: pointer; outline: none; box-shadow: 0 4px 16px rgba(0,122,255,0.45); line-height: 1;">+</button>
                </div>
                
                <!-- NODE 4: GEOMETRIC CATEGORIES MATRIX BLOCK -->
                <button class="nav-tab-action-trigger" data-tab-target="categories" style="background: none; border: none; color: #e5e5ea; font-size: 10px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 16%; transition: color 0.1s ease;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block;"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
                    <span>Categories</span>
                </button>
                
                <!-- NODE 5: USER PROFILE DATA NODE (ABOUT CONSOLE) -->
                <button class="nav-tab-action-trigger" data-tab-target="about" style="background: none; border: none; color: #e5e5ea; font-size: 10px; font-weight: 700; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; gap: 2px; width: 16%; transition: color 0.1s ease;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block;"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <span>Profile</span>
                </button>
            </div>

            <!-- PRODUCT PREVIEW OVERLAY SHEET -->
            <div id="product-preview-detail-sheet" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000000; z-index: 10001; display: none; flex-direction: column; padding: 24px 16px; overflow-y: auto; box-sizing: border-box;"></div>
        </div>
    `;

    activateNavigationRoutingTabs();
    preloadAutomatedAppCardProfiles();
    executeTabTemplateRender();
}
function activateNavigationRoutingTabs() {
    const tabTriggers = document.querySelectorAll('.nav-tab-action-trigger');
    
    // Highlight Home trigger with pristine native white on boot up
    tabTriggers.forEach(t => { if(t.getAttribute('data-tab-target') === "home") t.style.color = "#ffffff"; });

    tabTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedTarget = btn.getAttribute('data-tab-target');
            if (selectedTarget === Current_Active_Tab_Index) return;

            Current_Active_Tab_Index = selectedTarget;
            
            // Unselected nodes return to a clear, high-contrast crisp Apple grey tint
            tabTriggers.forEach(t => t.style.color = "#e5e5ea");
            // Highlight selected capsule option tab with absolute full white contrast
            btn.style.color = "#ffffff";

            executeTabTemplateRender();
            const viewport = document.getElementById('main-storefront-scroll-viewport');
            if (viewport) viewport.scrollTop = 0;
        });
    });

    // ➕ HIGH-SPEED ROUTER INTERFACE LINK FOR THE MAIN CENTRAL BLUE PLUS COR BUTTON
    const plusBtn = document.getElementById('floating-plus-action-core-btn');
    if (plusBtn) {
        plusBtn.addEventListener('click', () => {
            console.log("🪐 Vanilla Engine: Routing to direct GitHub issues creation feedback hub...");
            window.open("https://github.com", "_blank");
        });
    }
}

// 🤖 DIRECT APP CARD REPO VAULT SCANNER SCRIPT AUTOMATION
function preloadAutomatedAppCardProfiles() {
    Automated_App_Cache_Array = [
        {
            id: "system-perf",
            title: "System Performance Engine",
            developer: "Emmanuel Mabheure",
            tier: "Normal Users Suite",
            rating: "4.9",
            size: "14.2 MB",
            iconGradient: "linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%)",
            description: "Advanced development automation daemons and environment compilation tools. Streamlines wireless terminal bridges, remote debugging workflows, and background resource management scripts to optimize local processor execution pipelines natively.",
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
            <!-- 🪐 HEADER REMOVED: TEXT STRIP RE-PAD BACKED FURTHER HIGHER INTO TOP VIEWPORT CORES -->
            <div style="width:100%; text-align:left; padding: 0 0 16px 0; margin-top: 4px;">
                <h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">AndroidDevStore</h1>
            </div>
            
            <div class="video-spotlight-chassis" style="width: 100%; height: 200px; border-radius: 20px; overflow: hidden; margin-bottom: 20px; background-color: #000000; box-shadow: 0 12px 32px rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; width: 100%;">
                <video src="./src/components/SpotlightVideo/memoji.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; max-height: 240px;"></video>
            </div>

            <div style="width: 100%; margin-bottom: 20px;">
                <input type="text" placeholder="🔍 Search Apps, Tiers, Developers" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;">
            </div>

            <!-- APPS STRIP ROW CORES ANCHOR MOUNT -->
            <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 4px; padding-bottom: 60px;"></div>
        `;
        buildAutomatedAppCardStripRows();

    } else if (Current_Active_Tab_Index === "search") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 0 0 16px 0; margin-top: 4px;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">Search</h1></div>
            <div style="width: 100%; margin-bottom: 20px;"><input type="text" placeholder="🔍 Packages, Daemons, Tools" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;"></div>
        `;

    } else if (Current_Active_Tab_Index === "categories") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 0 0 16px 0; margin-top: 4px;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">Categories</h1></div>
            <div style="width:100%; display:flex; flex-direction:column; gap:12px; padding-bottom: 60px;">
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">🚀 CGI Game Engines & Frameworks</div>
                <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 16px; color:#ffffff; font-size:15px; font-weight:600; text-align:left; cursor:pointer;">📦 Modding Tools & Script Daemons</div>
            </div>
        `;

    } else if (Current_Active_Tab_Index === "about") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 0 0 16px 0; margin-top: 4px;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">Profile</h1></div>
            <div style="background: rgba(255,255,255,0.02); border: 0.5px solid rgba(255,255,255,0.05); border-radius: 20px; width:100%; padding:20px; color:#ffffff; font-size:15px; font-weight:700; text-align:left; line-height:1.6; padding-bottom: 24px;">
                Emmanuel Mabheure
                <p style="font-size:13px; color:#ff9f0a; font-weight:600; margin-top:2px;">Founder & 3D Game Architect</p>
                <div style="width:100%; height:0.5px; background:rgba(255,255,255,0.08); margin:12px 0;"></div>
                <p style="font-size:13px; color:#e5e5ea; font-weight:500;">Parent Holding: Emmanuel Mabheure Foundations (EMF)</p>
                <p style="font-size:13px; color:#e5e5ea; font-weight:500; margin-top:4px;">Ecosystem Branch: Vanilla Inc</p>
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
                <div style="width: 44px; height: 44px; background: ${app.iconGradient}; border-radius: 10px; border: 0.5px solid rgba(255,255,255,0.05);"></div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; font-family: -apple-system, sans-serif;">${app.title}</div>
                    <div style="font-size: 12px; color: #86868b; margin-top: 1px;">${app.tier} &bull; By Emmanuel Mabheure</div>
                </div>
            </div>
            <button class="view-trigger-btn" style="background: #1c1c1e; color: #007aff; border: none; padding: 4px 14px; border-radius: 14px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">VIEW</button>
        `;

        const triggerRevealSheet = () => { triggerProductDetailOverlaySheet(app); };
        stripRowCard.querySelector('.view-trigger-btn').addEventListener('click', (ev) => { ev.stopPropagation(); triggerRevealSheet(); });
        stripRowCard.addEventListener('click', triggerRevealSheet);

        mountNode.appendChild(stripRowCard);
    });
}

function triggerProductDetailOverlaySheet(app) {
    const sheetOverlay = document.getElementById('product-preview-detail-sheet');
    if (!sheetOverlay) return;

    sheetOverlay.innerHTML = `
        <div style="width: 100%; max-width: 360px; margin: 0 auto; text-align: left; position: relative; font-family: -apple-system, sans-serif; padding-top: 20px;">
            <button id="close-preview-sheet-btn" style="background: #1c1c1e; border: none; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; cursor: pointer; position: absolute; top: 0; right: 0; display: flex; align-items: center; justify-content: center; outline: none;">✕</button>
            
            <div style="display: flex; align-items: center; gap: 16px; margin-top: 40px; margin-bottom: 24px;">
                <div style="width: 72px; height: 72px; background: ${app.iconGradient}; border-radius: 18px; border: 0.5px solid rgba(255,255,255,0.05);"></div>
                <div>
                    <h2 style="font-size: 22px; font-weight: 700; color: #ffffff;">${app.title}</h2>
                    <p style="font-size: 13px; color: #007aff; font-weight: 500; margin-top: 2px;">By ${app.developer}</p>
                </div>
            </div>
            
            <!-- STAGE 2 DOWNLOAD ACTION TRIGGER UNLOCKED NATIVELY POST-PREVIEW -->
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
    
    document.getElementById('get-binary-download-btn').addEventListener('click', () => {
        localStorage.setItem('active_download_apk_target', app.apkPath);
        window.location.href = "./download.html";
    });
}
