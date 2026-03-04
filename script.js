// ===== PAGE VIEWS (every refresh) =====
let pageViews = parseInt(localStorage.getItem("pageViews")) || 0;
pageViews++;
localStorage.setItem("pageViews", pageViews);
document.getElementById("page-views").textContent = pageViews;


// ===== TOTAL VISITS (once per session) =====
let totalVisits = parseInt(localStorage.getItem("totalVisits")) || 0;

// Only increment if this session hasn't been counted yet
if (!sessionStorage.getItem("sessionCounted")) {
    totalVisits++;
    localStorage.setItem("totalVisits", totalVisits);
    sessionStorage.setItem("sessionCounted", "true");
}

document.getElementById("total-visits").textContent = totalVisits;


// ===== LAST VISIT =====
let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
    document.getElementById("last-visit").textContent = lastVisit;
}

let now = new Date().toLocaleString();
localStorage.setItem("lastVisit", now);


// easter egg programming 

document.getElementById("easter-egg").addEventListener("click", function() {
    alert("Congratulations! You've found the Easter Egg! ");
    document.documentElement.style.cursor = "url('images/egg.jpg'), auto";
});

// button programming 

document.getElementById("whyDoI-needAButton").addEventListener("click", function() {
    document.getElementById("whyDoI-needAButton").textContent = "no";
});



emojiUrlHover({
  'hero-section':  '🔥',
  'about-section': '👋',
  'contact-btn':   '💌',
  'stats': '🤓',
}, {
  restore: true,   // reset URL on mouse-leave
  baseUrl: '/',    // optional custom base path
});