// Tab switching logic for portfolio navigation
// Ensures only the selected tab's content is visible and highlights the active tab

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.canvas-nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            // Hide all tab contents
            tabContents.forEach(tc => tc.style.display = 'none');
            // Add active to clicked button
            btn.classList.add('active');
            // Show corresponding tab content
            const tabId = btn.id.replace('tab-', '');
            const content = document.getElementById('tab-content-' + tabId);
            if (content) content.style.display = 'block';
        });
    });
});
