// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & MASTER PLATFORM MODULE ROUTER
// Engineered & Founded by Emmanuel Mabheure - Premium Multi-File Fetch Engine
// =========================================================================================

let Current_Active_Tab_Index = "home";

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    const stageRoot = document.getElementById('platform-dynamic-stage-root');

    if (exploreBtn && stageRoot) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("🪐 Vanilla Engine: Spawning Emmanuel's custom 4-second loading layer...");

            // 🚀 TIMELINE 1: FETCH AND INJECT YOUR STANDALONE 12-BLADE ORANGE LOADER COMPONENT
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

                        // Compiles your premium storefront chassis and pulls your separate dock.html
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

            <!-- 🧭 FIXED COMPACT CAPSULE NAVIGATION DOCK (FETCHES DIRECTLY FROM DOCK.HTML) -->
            <nav id="dynamic-floating-apple-dock" style="position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); width: 88%; max-width: 330px; height: 52px; border-radius: 26px; z-index: 9999; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; padding: 0 12px; box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
                background: rgba(255, 255, 255, 0.09) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
            "></nav>

            <div id="product-preview-detail-sheet" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #000000; z-index: 10001; display: none; flex-direction: column; padding: 24px 16px; overflow-y: auto; box-sizing: border-box;"></div>
        </div>
    `;

    // Asynchronously fetches your exact vector icons out of src/insides/dock.html
    fetch('./src/insides/dock.html')
        .then(res => res.text())
        .then(dockHtml => {
            const dockContainer = document.getElementById('dynamic-floating-apple-dock');
            if (dockContainer) {
                dockContainer.innerHTML = dockHtml;
                activateNavigationRoutingTabs();
                loadTabTemplateMarkupContent();
            }
        })
        .catch(err => console.error("⚠️ Failed to load standalone dock.html element:", err));
}
function activateNavigationRoutingTabs() {
    const tabTriggers = document.querySelectorAll('.nav-tab-action-trigger');
    tabTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab-target');
            if (target === Current_Active_Tab_Index) return;
            Current_Active_Tab_Index = target;
            
            // Set unselected colors back to translucent crisp white
            tabTriggers.forEach(t => t.style.color = "rgba(255,255,255,0.6)");
            btn.style.color = "#ffffff";
            loadTabTemplateMarkupContent();
        });
    });
}

function loadTabTemplateMarkupContent() {
    const slot = document.getElementById('dynamic-tab-content-injection-slot');
    if (!slot) return;
    
    // 📡 DYNAMIC TRANSIT GATE: Reads directly out of your separate html target files on click
    let filePath = `./src/insides/${Current_Active_Tab_Index}.html`;
    
    fetch(filePath)
        .then(res => res.text())
        .then(htmlMarkup => {
            slot.innerHTML = htmlMarkup;
            
            // Post-injection click observer bindings for your home card preview strips
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
