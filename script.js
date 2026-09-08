/* ========================================================================
   CORE STORE APPLICATION MECHANICS BLUEPRINT
   DEVELOPER CODE ARCHITECTURE PROTECTION VERIFIED v2.7
   ======================================================================== */

const storeDatabase = [
    { id: "calculator", name: "iOS Calculator", desc: "Classic round-button arithmetic interface layout clone", isFeatured: true, classIcon: "icon-calculator", svgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" },
    { id: "clock", name: "iOS Clock", desc: "Precision custom millisecond tracker and global chronometer system", isFeatured: true, classIcon: "icon-clock", svgPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" },
    { id: "notes", name: "iOS Notes Notebook", desc: "Sleek native glass structural rich-text pad note storage log", isFeatured: false, classIcon: "icon-notes", svgPath: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" },
    { id: "settings", name: "iOS Settings Console", desc: "Unified smartphone hardware parameter configurations dashboard", isFeatured: false, classIcon: "icon-settings", svgPath: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" },
    { id: "compass", name: "iOS Compass Orientation", desc: "Magnetic vector directional geographic bearing sensor utility tool", isFeatured: false, classIcon: "icon-compass", svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 10.12L9 15l2.88-4.88L15 9l-3.12 3.12z" },
    { id: "weather", name: "iOS Weather Atmosphere", desc: "Dynamic local climate metric monitoring and forecast system", isFeatured: false, classIcon: "icon-weather", svgPath: "M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" },
    { id: "files", name: "iOS Files Directory", desc: "Local sandboxed database files folder tree browsing system", isFeatured: false, classIcon: "icon-files", svgPath: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" },
    { id: "reminders", name: "iOS Reminders", desc: "Operational checklists item parameter tracker blueprint matrix", isFeatured: false, classIcon: "icon-reminders", svgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" },
    { id: "voicememos", name: "iOS Voice Memos", desc: "High-fidelity microphone sound wave frequency recorder monitor", isFeatured: false, classIcon: "icon-voicememos", svgPath: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" },
    { id: "calendar", name: "iOS Calendar Planner", desc: "Chronological daily task scheduler agenda timeline tracker", isFeatured: false, classIcon: "icon-calendar", svgPath: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-5-7H7v2h7v-2z" }
];

/* SECURE DEVELOPER BYPASS MATRIX */
// If the shield locks you anywhere online, type window.activateDevKey() in your console once!
window.activateDevKey = function() {
    localStorage.setItem("dev_key_sig", "emmanuel-master-key");
    alert("Developer Signature Active. Refreshing platform...");
    window.location.reload();
};

function verifyPlatformIntegrity() {
    // 1. Check if your phone's browser holds your secret bypass key
    if (localStorage.getItem("dev_key_sig") === "emmanuel-master-key") {
        return true; 
    }

    const currentDomain = window.location.hostname;
    
    // 2. Check standard allowed staging testing anchors
    if (currentDomain && 
        !currentDomain.includes("localhost") && 
        !currentDomain.includes("jsfiddle") && 
        !currentDomain.includes("jshell.net") && 
        !currentDomain.includes("github.io")) {
        
        const shield = document.getElementById("integrity-lock-screen");
        if (shield) shield.style.display = "block";
        return false;
    }
    return true;
}

function compileStorefront(filterText = "") {
    if (!verifyPlatformIntegrity()) return;

    const featuredTarget = document.getElementById('featured-list-target');
    const basicTarget = document.getElementById('basic-list-target');

    if (!featuredTarget || !basicTarget) return;

    featuredTarget.innerHTML = "";
    basicTarget.innerHTML = "";

    let matchedCount = 0;

    storeDatabase.forEach(app => {
        const matchesSearch = app.name.toLowerCase().includes(filterText.toLowerCase()) || 
                             app.desc.toLowerCase().includes(filterText.toLowerCase());

        if (!matchesSearch) return;
        matchedCount++;

        const appCard = document.createElement('div');
        appCard.className = "app-card-item";
        appCard.innerHTML = `
            <div class="app-meta-box">
                <div class="app-vector-icon ${app.classIcon}">
                    <svg viewBox="0 0 24 24"><path d="${app.svgPath}"/></svg>
                </div>
                <div class="app-text-info">
                    <h3>${app.name}</h3>
                    <p>${app.desc}</p>
                </div>
            </div>
            <button onclick="window.location.href='download.html?app=${app.id}'" class="ios-action-btn">GET</button>
        `;

        if (app.isFeatured && filterText === "") {
            featuredTarget.appendChild(appCard);
        } else {
            basicTarget.appendChild(appCard);
        }
    });

    const noMatchesElement = document.getElementById('noMatches');
    if (noMatchesElement) {
        noMatchesElement.style.display = (matchedCount === 0) ? 'block' : 'none';
    }
}

function handleTabSwitch(tabId, activeBtn) {
    document.querySelectorAll('.apple-nav-dock .dock-item').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');

    document.getElementById('tab-today-view').style.display = (tabId === 'today') ? 'block' : 'none';
    document.getElementById('tab-apps-view').style.display = (tabId === 'apps') ? 'block' : 'none';
    document.getElementById('tab-developer-view').style.display = (tabId === 'developer') ? 'block' : 'none';

    if (tabId === 'apps') {
        const searchInput = document.getElementById('storeSearchInput');
        if (searchInput) {
            setTimeout(() => { searchInput.focus(); }, 60);
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindEvents() {
    const btnToday = document.getElementById('btn-today');
    const btnApps = document.getElementById('btn-apps');
    const btnDev = document.getElementById('btn-developer');
    const searchInput = document.getElementById('storeSearchInput');

    if (btnToday) btnToday.onclick = function() { handleTabSwitch('today', this); };
    if (btnApps) btnApps.onclick = function() { handleTabSwitch('apps', this); };
    if (btnDev) btnDev.onclick = function() { handleTabSwitch('developer', this); };
    
    if (searchInput) {
        searchInput.oninput = function(e) {
            compileStorefront(e.target.value);
        };
    }
}

window.onload = function() {
    compileStorefront();
    bindEvents();
};

compileStorefront();
bindEvents();
