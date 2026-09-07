/* 🍏 ACCESSIBLE GLOBAL WINDOW FUNCTION ROUTING MAPS */
window.dispatchView = function(screenKeyString) {
    document.getElementById('panel-today').style.display = 'none';
    document.getElementById('panel-apps').style.display = 'none';
    document.getElementById('panel-about').style.display = 'none';

    document.getElementById('dock-today-node').classList.remove('active');
    document.getElementById('dock-apps-node').classList.remove('active');
    document.getElementById('dock-about-node').classList.remove('active');

    if (screenKeyString === 'today') {
        document.getElementById('panel-today').style.display = 'block';
        document.getElementById('dock-today-node').classList.add('active');
    } 
    else if (screenKeyString === 'apps') {
        document.getElementById('panel-apps').style.display = 'block';
        document.getElementById('dock-apps-node').classList.add('active');
    } 
    else if (screenKeyString === 'about') {
        document.getElementById('panel-about').style.display = 'block';
        document.getElementById('dock-about-node').classList.add('active');
    }
};

/* 🔍 LIVE ARRAY KEY SEARCH FILTERS */
window.filterApps = function() {
    var query = document.getElementById('searchBar').value.toLowerCase();
    var entries = document.querySelectorAll('.list-search-item');
    var matchedCount = 0;

    for (var i = 0; i < entries.length; i++) {
        var name = entries[i].getAttribute('data-name');
        if (name.indexOf(query) !== -1) {
            entries[i].style.display = 'flex';
            matchedCount++;
        } else {
            entries[i].style.display = 'none';
        }
    }
    document.getElementById('noMatches').style.display = (matchedCount === 0) ? 'block' : 'none';
};

/* 📥 NEW TRIGGER FUNCTION: DROPDOWN TOAST ALERT CONTROL PIPELINE */
window.triggerDownload = function(downloadUrl, buttonElement) {
    var toast = document.getElementById('ios-toast-alert');
    if (!toast) return;

    // Slide down the elegant frosted alert banner
    toast.classList.add('show-alert-toast');

    // Hold the banner on screen for exactly 3 seconds, then retract and launch payload
    setTimeout(function() {
        toast.classList.remove('show-alert-toast');
        
        // Only trigger window navigation if a real download URL is active
        if (downloadUrl && downloadUrl !== 'YOUR_LINK') {
            window.open(downloadUrl, '_blank');
        }
    }, 3000);
};
