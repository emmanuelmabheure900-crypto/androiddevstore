/* 🍏 ACCESSIBLE FUNCTION ROUTING MAPS FOR DOCK LINKS */
function dispatchView(screenKeyString) {
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
}

/* 🔍 LIVE REPOSITORY SEARCH FILTER */
function filterApps() {
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
}

