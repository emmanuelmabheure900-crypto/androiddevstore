// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure - Premium Profile & Dock Edition
// =========================================================================================

let Current_Active_Tab_Index = "home";
let Automated_App_Cache_Array = [];

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Spawning Emmanuel's custom 4-second loading layer...");

            // 🚀 STEP 1: INJECTS LOADER OVERLAY - CENTRAL SPINNING LINE ENTIRELY REMOVED FOREVER
            const loaderMountNode = document.createElement('div');
            loaderMountNode.id = "temporary-loader-mount-wrapper";
            loaderMountNode.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:linear-gradient(135deg, #0b0914 0%, #000000 100%); z-index:10005; display:flex; align-items:center; justify-content:center; box-sizing:border-box; font-family:-apple-system, BlinkMacSystemFont, sans-serif;";
            
            loaderMountNode.innerHTML = `
                <div class="glass-card" style="background:rgba(28, 28, 30, 0.75); -webkit-backdrop-filter:blur(30px); backdrop-filter:blur(30px); border:1px solid rgba(255, 255, 255, 0.08); border-radius:24px; padding:40px 32px; max-width:320px; width:85%; box-shadow:0 20px 50px rgba(0,0,0,0.6); text-align:center; box-sizing:border-box;">
                    <!-- 12-BLADE SPINNER RUNS PURELY ON YOUR KEYFRAMES WITHOUT EXTRA INTERFERENCE -->
                    <div class="ios-spinner" style="position:relative; width:44px; height:44px; margin:0 auto 24px;">
                        <style>
                            .ios-spinner div { position: absolute; width: 10%; height: 26%; background: #ff9f0a; left: 44.5%; top: 37%; opacity: 0; border-radius: 50px; animation: ios-fade-loop 1s linear infinite; }
                            .ios-spinner div:nth-child(1) { transform: rotate(0deg) translate(0, -130%); animation-delay: 0s; }
                            .ios-spinner div:nth-child(2) { transform: rotate(30deg) translate(0, -130%); animation-delay: -0.9167s; }
                            .ios-spinner div:nth-child(3) { transform: rotate(60deg) translate(0, -130%); animation-delay: -0.8333s; }
                            .ios-spinner div:nth-child(4) { transform: rotate(90deg) translate(0, -130%); animation-delay: -0.75s; }
                            .ios-spinner div:nth-child(5) { transform: rotate(120deg) translate(0, -130%); animation-delay: -0.6667s; }
                            .ios-spinner div:nth-child(6) { transform: rotate(150deg) translate(0, -130%); animation-delay: -0.5833s; }
                            .ios-spinner div:nth-child(7) { transform: rotate(180deg) translate(0, -130%); animation-delay: -0.5s; }
                            .ios-spinner div:nth-child(8) { transform: rotate(210deg) translate(0, -130%); animation-delay: -0.4167s; }
                            .ios-spinner div:nth-child(9) { transform: rotate(240deg) translate(0, -130%); animation-delay: -0.3333s; }
                            .ios-spinner div:nth-child(10) { transform: rotate(270deg) translate(0, -130%); animation-delay: -0.25s; }
                            .ios-spinner div:nth-child(11) { transform: rotate(300deg) translate(0, -130%); animation-delay: -0.1667s; }
                            .ios-spinner div:nth-child(12) { transform: rotate(330deg) translate(0, -130%); animation-delay: -0.0833s; }
                            @keyframes ios-fade-loop { from { opacity: 1; } to { opacity: 0.15; } }
                        </style>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                    </div>
                    <h2 style="font-size:20px; font-weight:700; margin:0 0 10px 0; letter-spacing:-0.4px; color:#ffffff;">AndroidDevStore</h2>
                    <p style="color:rgba(255, 255, 255, 0.55); font-size:13px; line-height:1.4; margin:0; letter-spacing: 0.5px;">Loading.............</p>
                </div>
            `;
            document.body.appendChild(loaderMountNode);

            // 🚀 STEP 2: TIMELINE TIMEOUT TRIGGER - RUNS FOR EXACTLY 4 SECONDS (4000ms)
            setTimeout(() => {
                console.log("🪐 Vanilla Engine: 4 Seconds complete. Purging loader layers...");
                const activeLoader = document.getElementById('temporary-loader-mount-wrapper');
                if (activeLoader) activeLoader.remove();

                const landingContainer = document.getElementById('landing-scene-container');
                if (landingContainer) landingContainer.style.display = 'none';

                compileStorefrontInterfaceSkeleton(stageRoot);
            }, 4000);
        });
    }
});
function compileStorefrontInterfaceSkeleton(stageRoot) {
    stageRoot.innerHTML = `
        <div id="vanilla-store-app-chassis" style="width: 100%; display: flex; flex-direction: column; background-color: #000000; min-height: 100vh; position: relative; box-sizing: border-box;">
            
            <!-- 📱 CORE SCROLL VIEWPORT -->
            <div id="main-storefront-scroll-viewport" style="width: 100%; height: calc(100vh - 80px); overflow-y: scroll; padding-top: 16px; padding-bottom: 40px; box-sizing: border-box; -webkit-overflow-scrolling: touch;">
                <div id="dynamic-tab-content-injection-slot" style="width: 100%; max-width: 360px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;"></div>
            </div>

            <!-- 🧭 FIXED SPACIOUS DOCK CAPSULE BAR SYSTEM LAYOUT METRICS -->
            <nav class="apple-nav-dock" style="position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); width: 88%; max-width: 330px; height: 52px; border-radius: 26px; z-index: 9999; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; padding: 0 12px; box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
                
                /* ========================================================================= */
                /* 🔮 [1. PASTE YOUR LIQUID GLASS CSS STYLES DIRECTLY IN THE SLOTS BELOW]     */
                /* ========================================================================= */
                background: rgba(255, 255, 255, 0.4) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
                /* ========================================================================= */
                /* 🏛️ [END OF GLASS STYLE HOOK]                                              */
                /* ========================================================================= */
            ">
                <!-- BUTTON 1: HOME TARGET ANCHOR -->
                <button class="nav-tab-action-trigger" data-tab-target="home" style="background: none; border: none; color: #ffffff; font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 28%; transition: color 0.15s ease;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Home</span>
                </button>
                
                <!-- BUTTON 2: SEARCH TARGET ANCHOR -->
                <button class="nav-tab-action-trigger" data-tab-target="search" style="background: none; border: none; color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 28%; transition: color 0.15s ease;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Search</span>
                </button>
                
                <!-- BUTTON 3: DEVELOPER PROFILE TARGET ANCHOR -->
                <button class="nav-tab-action-trigger" data-tab-target="about" style="background: none; border: none; color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 28%; transition: color 0.15s ease;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Developer</span>
                </button>
            </nav>

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
    tabTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedTarget = btn.getAttribute('data-tab-target');
            if (selectedTarget === Current_Active_Tab_Index) return;
            Current_Active_Tab_Index = selectedTarget;
            tabTriggers.forEach(t => t.style.color = "rgba(255,255,255,0.6)");
            btn.style.color = "#ffffff";
            executeTabTemplateRender();
            const viewport = document.getElementById('main-storefront-scroll-viewport');
            if (viewport) viewport.scrollTop = 0;
        });
    });
}

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
            <div style="width:100%; text-align:left; padding: 0 0 16px 0; margin-top: -8px;">
                <h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">AndroidDevStore</h1>
            </div>
            <div id="automated-apps-list-mount" style="width: 100%; display: flex; flex-direction: column; gap: 4px; padding-bottom: 60px;"></div>
        `;
        buildAutomatedAppCardStripRows();

    } else if (Current_Active_Tab_Index === "search") {
        contentSlot.innerHTML = `
            <div style="width:100%; text-align:left; padding: 0 0 12px 0; margin-top: -8px;"><h1 style="font-size: 34px; font-weight: 800; color: #ffffff; font-family:-apple-system, sans-serif; letter-spacing: -1.2px;">Search</h1></div>
            <div style="width: 100%; margin-bottom: 20px;"><input type="text" placeholder="Search Packages, Daemons, Tools" style="width: 100%; height: 36px; background: #1c1c1e; border: none; border-radius: 10px; padding: 0 12px 0 16px; color: #ffffff; font-size: 14px; outline: none; box-sizing: border-box; width: 100%;"></div>
        `;

    } else if (Current_Active_Tab_Index === "about") {
        // =========================================================================
        // 🔮 [2. YOUR EXACT SPECIFIED LEAD ARCHITECT ABOUT MARKUP INJECTED]         // =========================================================================
        contentSlot.innerHTML = `
            <div id="tab-developer-view" class="store-tab-content" style="width:100%; text-align:left; font-family:-apple-system, sans-serif; box-sizing:border-box; padding-bottom:70px; margin-top:-8px;">
                <div class="dev-badge-banner" style="width:100%;">
                    
                    <!-- AVATAR TOKEN ORB -->
                    <div class="dev-avatar" style="width: 56px; height: 52px; background: #ff9f0a; color: #000000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; margin-bottom: 16px;">EM</div>
                    
                    <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 4px 0; color:#ffffff; letter-spacing: -0.6px;">Emmanuel Mabheure</h2>
                    <p class="dev-title" style="color: #ff9f0a; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">Lead Platform Architect</p>
                    
                    <p class="dev-bio" style="color: #e5e5ea; font-size: 14px; line-height: 1.5; margin: 0 0 24px 0; font-weight: 500; opacity:0.95;">
                        Visionary software developer targeting the execution of premium mobile system abstractions. Engineering an ecosystem focused on bringing ultra-optimized layouts to global Android screens, tracking deliberately towards a future of massive scale and legacy.
                    </p>

                    <!-- Permanent Verification Tab Details -->
                    <div class="section-title" style="margin-top: 25px; font-size: 15px; font-weight:700; color:#ffffff; text-align: left; padding: 0 0 8px 0; border-bottom:0.5px solid rgba(255,255,255,0.1);">Direct Developer Contact</div>
                    
                    <div class="dev-contact-box" style="margin-top:12px; font-size:14px; line-height:1.6;">
                        <div class="contact-node-row" style="display:flex; justify-content:space-between; padding:4px 0;">
                            <span style="color:#86868b;">Email Address:</span>
                            <strong style="color:#ffffff; font-weight:600;">emmanuelmabheure900@gmail.com</strong>
                        </div>
                        <div class="contact-node-row" style="display:flex; justify-content:space-between; padding:4px 0; margin-top: 6px;">
                            <span style="color:#86868b;">Phone Line:</span>
                            <strong style="color:#ffffff; font-weight:600;">+263 78 770 7163</strong>
                        </div>
                    </div>

                    <!-- Legal Apple Style Copyright Architecture Footer -->
                    <footer style="margin-top: 40px; padding-top: 20px; border-top: 0.5px solid rgba(255,255,255,0.12); text-align: center; font-size: 11px; color: #86868b; line-height: 1.45;">
                        <p style="margin: 0; color:#86868b; font-weight:500;">Copyright © 2026 Emmanuel Mabheure. All Rights Reserved.</p>
                        <p style="margin: 6px 0 0 0; font-size: 10px; color:#636366; font-weight:500;">Licensed under Secure Platform Architecture Mandate Node 4.0. Unauthorized compilation shifts system liability parameters.</p>
                    </footer>
                </div>
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
                <div><h2 style="font-size: 22px; font-weight: 700; color: #ffffff;">${app.title}</h2><p style="font-size: 13px; color: #007aff; font-weight: 500; margin-top: 2px;">By ${app.developer}</p></div>
            </div>
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
