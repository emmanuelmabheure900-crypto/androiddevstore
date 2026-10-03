// =========================================================================================
// 🪐 ANDROIDDEVSTORE UNIVERSAL COMPILER & DYNAMIC INTERFACE ENGINE
// Engineered & Founded by Emmanuel Mabheure
// =========================================================================================

// 📥 1. AUTOMATED DATA DICTIONARY MATRIX (Add unlimited items here with zero HTML touches!)
const AndroidDevStore_CatalogDatabase = [
    {
        id: "app_performance_engine",
        title: "System Performance Engine",
        developer: "Emmanuel Mabheure",
        tier: "Normal Users Suite",
        rating: "4.9",
        size: "14.2 MB",
        iconGradient: "linear-gradient(135deg, #1e1e24 0%, #4a154b 100%)",
        description: "Optimize your system environment tracking loops with a curated performance profile or background shell script of your own choice. Inject automated terminal hooks safely.",
        apkPath: "./src/binaries/system_perf_v1.apk"
    },
    {
        id: "app_debug_daemon",
        title: "Wireless Debug Daemon",
        developer: "Verified Partner Core",
        tier: "Advanced (Locked Bootloader)",
        rating: "4.8",
        size: "8.7 MB",
        iconGradient: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
        description: "Establish robust automation script triggers via deep local wireless terminal bridges. Created by premium verified publishers registered on our global platform network.",
        apkPath: "./src/binaries/wireless_debug_v3.apk"
    }
];

// 🎙️ 2. SIRI AI MEMOJI AUTOMATED KNOWLEDGE BASE DATA
const Siri_KnowledgeBase = {
    "hello": "Hello Emmanuel. Welcome back to the AndroidDevStore development console. I am standing by.",
    "hi": "Hello there. How can I assist you with your system profiles today?",
    "tools": "AndroidDevStore features premium suites including the System Performance Engine and the Wireless Debug Daemon.",
    "developer": "This entire platform and its core architecture layout were completely founded and engineered by Emmanuel Mabheure.",
    "help": "You can ask me about the tools, the developer, or say download to fetch binaries."
};

// ⚡ 3. RUNTIME LISTENERS INITIALIZATION ON BOOT
document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-trigger-pill');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Forces an instant direct page hop over to your root storefront layout view
            window.location.href = './mainscreen.html';
        });
    }

    // 📡 DYNAMIC PAGE MAPPER: Runs interaction hooks automatically if user is inside mainstore
    if (window.location.pathname.includes('mainscreen.html')) {
        initializeMainStorefrontConsole();
    }
});

// 🏛️ 4. CORE STOREFRONT DISPLAY LOOPS AND ENGINE ASSEMBLY
function initializeMainStorefrontConsole() {
    // Select the app mount container nodes inside mainscreen.html
    const appsMountNode = document.getElementById('automated-apps-list-mount');
    const searchField = document.getElementById('store-search-input-field');

    // Run automated generation loop to draw card matrix lines instantly
    if (appsMountNode) {
        renderAutomatedAppGrid(AndroidDevStore_CatalogDatabase, appsMountNode);
    }

    // Activate Real-Time Search Filtering Engine
    if (searchField && appsMountNode) {
        searchField.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filteredData = AndroidDevStore_CatalogDatabase.filter(app => {
                return app.title.toLowerCase().includes(query) || app.tier.toLowerCase().includes(query) || app.developer.toLowerCase().includes(query);
            });
            renderAutomatedAppGrid(filteredData, appsMountNode);
        });
    }

    // Setup and active Siri Speech Voice Recognition parameters
    setupSiriVoiceRecognitionChannels();
}

function renderAutomatedAppGrid(catalogData, mountNode) {
    mountNode.innerHTML = "";

    catalogData.forEach(app => {
        const card = document.createElement('div');
        card.style.cssText = "background: rgba(255, 255, 255, 0.02); border: 0.5px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border-radius: 16px; padding: 14px; display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: pointer;";
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; text-align: left;">
                <div style="width: 44px; height: 44px; background: ${app.iconGradient}; border-radius: 10px;"></div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; font-family: -apple-system, sans-serif;">${app.title}</div>
                    <div style="font-size: 11px; color: #86868b; margin-top: 2px;">${app.tier} &bull; By ${app.developer}</div>
                </div>
            </div>
            <button class="view-trigger-btn" style="background: #2c2c2e; color: #007aff; border: none; padding: 6px 18px; border-radius: 14px; font-size: 12px; font-weight: 700; cursor: pointer; outline: none;">VIEW</button>
        `;

        // Direct two-stage flow hook: triggers detail panels when row items are tapped
        const launchView = () => { triggerProductDetailOverlaySheet(app); };
        card.querySelector('.view-trigger-btn').addEventListener('click', (ev) => { ev.stopPropagation(); launchView(); });
        card.addEventListener('click', launchView);

        mountNode.appendChild(card);
    });
}

// 🗣️ 5. SIRI AUDIO SPEECH ENGINE LAYER (THE ORIGINAL VOICE VOICE TRICK)
function setupSiriVoiceRecognitionChannels() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    // Locates the native mic button floating inside your storefront layers
    const micBtn = document.getElementById('start-voice-input-btn') || document.getElementById('video-component-dock');

    if (SpeechRecognition && micBtn) {
        const voiceTracker = new SpeechRecognition();
        voiceTracker.continuous = false;
        voiceTracker.lang = 'en-US';

        micBtn.addEventListener('click', () => { voiceTracker.start(); });

        voiceTracker.onstart = () => { console.log("🎙️ Siri Listening channel engaged..."); };
        
        voiceTracker.onresult = (event) => {
            const parsedText = event.results[0][0].transcript.toLowerCase();
            console.log(`Siri Captured Text Token: ${parsedText}`);
            
            let replyMessage = "I processed your voice request, but that script command isn't mapped in my dictionary logs yet.";
            
            for (let key in Siri_KnowledgeBase) {
                if (parsedText.includes(key)) {
                    replyMessage = Siri_KnowledgeBase[key];
                    break;
                }
            }

            executeSiriAcousticVoiceSpeak(replyMessage);
        };
    }
}

function executeSiriAcousticVoiceSpeak(textToOutput) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Clears running audio lines instantly
        const waveUtterance = new SpeechSynthesisUtterance(textToOutput);
        
        const runtimeVoices = window.speechSynthesis.getVoices();
        const nativeVoiceToken = runtimeVoices.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB'));
        if (nativeVoiceToken) waveUtterance.voice = nativeVoiceToken;

        // 📡 REPLICATES AUTHENTIC SIRI AUDIO MAP FREQUENCIES
        waveUtterance.pitch = 1.15; // Elevates audio register range pitch
        waveUtterance.rate = 1.05;  // Adjust velocity speeds to match apple system tones

        window.speechSynthesis.speak(waveUtterance);
    }
}

function triggerProductDetailOverlaySheet(app) {
    const sheetOverlay = document.getElementById('product-preview-detail-sheet');
    if (!sheetOverlay) return;

    // Full screen overlay details window injector containing the final secure GET button
    sheetOverlay.innerHTML = `
        <div style="width: 100%; max-width: 360px; margin: 0 auto; text-align: left; position: relative;">
            <button id="close-preview-sheet-btn" style="background: #1c1c1e; border: none; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; cursor: pointer; position: absolute; top: 0; right: 0; display: flex; align-items: center; justify-content: center;">✕</button>
            <div style="display: flex; align-items: center; gap: 16px; margin-top: 40px; margin-bottom: 24px;">
                <div style="width: 72px; height: 72px; background: ${app.iconGradient}; border-radius: 18px;"></div>
                <div><h2 style="font-size: 22px; font-weight: 700; color: #ffffff;">${app.title}</h2><p style="font-size: 13px; color: #007aff; font-weight: 500;">By ${app.developer}</p></div>
            </div>
            <button id="get-binary-download-btn" style="background: #007aff; color: #ffffff; border: none; width: 100%; padding: 12px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer;">GET</button>
        </div>
    `;
    sheetOverlay.style.display = 'flex';
    
    document.getElementById('close-preview-sheet-btn').addEventListener('click', () => { sheetOverlay.style.display = 'none'; });
    document.getElementById('get-binary-download-btn').addEventListener('click', () => {
        // Direct link trajectory: sends user cleanly down to download.html gate channel
        localStorage.setItem('active_download_apk_target', app.apkPath);
        window.location.href = "./download.html";
    });
}
