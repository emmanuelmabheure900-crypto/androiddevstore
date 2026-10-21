// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER DOCK CONTROLLER
// Engineered & Founded by Emmanuel Mabheure - Multi-File Component Fetch Router
// =========================================================================================

let Current_Active_Tab_Index = "home";

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Spawning Emmanuel's custom 4-second loading layer...");

            // 🚀 TIMELINE 1: FETCH AND INJECT YOUR STANDALONE 12-BLADE ORANGE LOADER
            fetch('./src/insides/loader.html')
                .then(res => res.text())
                .then(loaderHtml => {
                    const loaderNode = document.createElement('div');
                    loaderNode.id = "active-runtime-loader-screen";
                    loaderNode.innerHTML = loaderHtml;
                    document.body.appendChild(loaderNode);

                    // 🚀 TIMELINE 2: DELAY EVERYTHING FOR EXACTLY 4 SECONDS (4000ms)
                    setTimeout(() => {
                        const activeLoader = document.getElementById('active-runtime-loader-screen');
                        if (activeLoader) activeLoader.remove();

                        const landingContainer = document.getElementById('landing-scene-container');
                        if (landingContainer) landingContainer.style.display = 'none';

                        // Compiles your premium, header-free floating storefront capsule layout grids
                        compileStorefrontInterfaceSkeleton(stageRoot);
                    }, 4000);
                })
                .catch(err => {
                    console.error("⚠️ Loader component missing, bypassing safely:", err);
                    compileStorefrontInterfaceSkeleton(stageRoot);
                });
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

            <!-- 🧭 BALANCED PILL CAPSULE SYSTEM BAR WITH YOUR UNCHANGED LIQUID GLASS CSS -->
            <nav class="apple-nav-dock" style="position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); width: 88%; max-width: 330px; height: 52px; border-radius: 26px; z-index: 9999; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; padding: 0 12px; box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;
                background: rgba(255, 255, 255, 0.09) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
            ">
                <div style="content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent); pointer-events:none;"></div>
                <div style="content:''; position:absolute; top:0; left:0; width:1px; height:100%; background:linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3)); pointer-events:none;"></div>

                <button class="nav-tab-action-trigger" data-tab-target="home" style="background: none; border: none; color: #ffffff; font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 30%; transition: color 0.15s ease; position:relative; z-index:10;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Home</span>
                </button>
                
                <button class="nav-tab-action-trigger" data-tab-target="search" style="background: none; border: none; color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 30%; transition: color 0.15s ease; position:relative; z-index:10;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Search</span>
                </button>
                
                <button class="nav-tab-action-trigger" data-tab-target="about" style="background: none; border: none; color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 600; font-family: -apple-system, sans-serif; cursor: pointer; outline: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; width: 30%; transition: color 0.15s ease; position:relative; z-index:10;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="display: block;"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <span style="font-size: 10px; font-weight: 500;">Developer</span>
                </button>
            </nav>

            <div id="product-preview-detail-sheet" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000000; z-index: 10001; display: none; flex-direction: column; padding: 24px 16px; overflow-y: auto; box-sizing: border-box;"></div>
        </div>
    `;

    activateNavigationRoutingTabs();
    loadTabTemplateMarkupContent();
}
function activateNavigationRoutingTabs() {
    const tabTriggers = document.querySelectorAll('.nav-tab-action-trigger');
    tabTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab-target');
            if (target === Current_Active_Tab_Index) return;
            Current_Active_Tab_Index = target;
            tabTriggers.forEach(t => t.style.color = "rgba(255,255,255,0.6)");
            btn.style.color = "#ffffff";
            loadTabTemplateMarkupContent();
        });
    });
}

function loadTabTemplateMarkupContent() {
    const slot = document.getElementById('dynamic-tab-content-injection-slot');
    if (!slot) return;
    
    // 🤖 AUTOMATED ROUTER: Seamlessly fetches your separate HTML templates from your repository folder path
    let filePath = `./src/insides/${Current_Active_Tab_Index}.html`;
    
    fetch(filePath)
        .then(res => res.text())
        .then(htmlMarkup => {
            slot.innerHTML = htmlMarkup;
            
            // Post-injection event bindings for interactive elements
            if (Current_Active_Tab_Index === "home") {
                const rowItem = document.getElementById('system-perf-row-item');
                const btnItem = document.querySelector('.view-trigger-btn');
                if (rowItem) rowItem.addEventListener('click', openDetailPreviewSheet);
                if (btnItem) btnItem.addEventListener('click', (e) => { e.stopPropagation(); openDetailPreviewSheet(); });
            }
        })
        .catch(err => console.error("⚠️ Component file fetch failed mapping:", err));
}

function openDetailPreviewSheet() {
    const sheet = document.getElementById('product-preview-detail-sheet');
    if (!sheet) return;
    sheet.innerHTML = `
        <div style="width:100%; max-width:360px; margin:0 auto; text-align:left; position:relative; font-family:-apple-system,sans-serif; padding-top:20px;">
            <button id="close-preview-sheet-btn" style="background:#1c1c1e; border:none; color:#ffffff; width:32px; height:32px; border-radius:50%; font-size:14px; cursor:pointer; position:absolute; top:0; right:0; display:flex; align-items:center; justify-content:center; outline:none;">✕</button>
            <div style="display:flex; align-items:center; gap:16px; margin-top:40px; margin-bottom:24px;">
                <div style="width:72px; height:72px; background:linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%); border-radius:18px; border:0.5px solid rgba(255,255,255,0.05);"></div>
                <div><h2 style="font-size:22px; font-weight:700; color:#ffffff;">System Performance Engine</h2><p style="font-size:13px; color:#007aff; font-weight:500; margin-top:2px;">By Emmanuel Mabheure</p></div>
            </div>
            <button id="get-binary-download-btn" style="background:#007aff; color:#ffffff; border:none; width:100%; padding:12px; border-radius:12px; font-size:15px; font-weight:700; cursor:pointer; outline:none; box-shadow:0 4px 14px rgba(0,122,255,0.3);">GET</button>
            <div style="display:flex; background:#1c1c1e; border-radius:12px; padding:12px; justify-content:space-around; text-align:center; margin-top:24px; box-sizing:border-box;">
                <div><div style="font-size:11px; color:#86868b; font-weight:600;">RATINGS</div><div style="font-size:16px; font-weight:700; color:#ffffff; margin-top:4px;">4.9 ★</div></div>
                <div style="width:0.5px; background:rgba(255,255,255,0.1); height:30px;"></div>
                <div><div style="font-size:11px; color:#86868b; font-weight:600;">SIZE</div><div style="font-size:16px; font-weight:700; color:#ffffff; margin-top:4px;">14.2 MB</div></div>
            </div>
            <h4 style="font-size:14px; font-weight:700; color:#ffffff; margin-top:24px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">Description</h4>
            <p style="font-size:14px; color:#86868b; line-height:1.5;">Advanced development automation daemons and environment compilation tools. Streamlines wireless terminal bridges, remote debugging workflows, and background resource management scripts to optimize local processor execution pipelines natively.</p>
        </div>
    `;
    sheet.style.display = 'flex';
    document.getElementById('close-preview-sheet-btn').addEventListener('click', () => { sheet.style.display = 'none'; });
    document.getElementById('get-binary-download-btn').addEventListener('click', () => {
        localStorage.setItem('active_download_apk_target', './apks/system_perf.apk');
        window.location.href = "./download.html";
    });
}
