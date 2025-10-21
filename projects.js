// ========================================
// Projects Page - Render All Projects by Category
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const powerbiGrid = document.getElementById('powerbiGrid');
    const mlDataScienceGrid = document.getElementById('mlDataScienceGrid');
    const fullstackGrid = document.getElementById('fullstackGrid');

    // Filter projects by category
    const powerbiProjects = projects.filter(p => p.category.includes('powerbi'));
    const mlProjects = projects.filter(p => p.category.includes('ml') || p.category.includes('python'));
    const fullstackProjects = projects.filter(p => p.category.includes('fullstack'));

    // Render PowerBI projects
    if (powerbiGrid && powerbiProjects.length > 0) {
        powerbiProjects.forEach(project => {
            const card = createProjectCard(project);
            powerbiGrid.appendChild(card);
        });
    } else if (powerbiGrid) {
        powerbiGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No Business Intelligence projects yet.</p>';
    }

    // Render ML & Data Science projects
    if (mlDataScienceGrid && mlProjects.length > 0) {
        mlProjects.forEach(project => {
            const card = createProjectCard(project);
            mlDataScienceGrid.appendChild(card);
        });
    } else if (mlDataScienceGrid) {
        mlDataScienceGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No Machine Learning projects yet.</p>';
    }

    // Render Full-Stack projects
    if (fullstackGrid && fullstackProjects.length > 0) {
        fullstackProjects.forEach(project => {
            const card = createProjectCard(project);
            fullstackGrid.appendChild(card);
        });
    } else if (fullstackGrid) {
        fullstackGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No Full-Stack projects yet.</p>';
    }

    // Add scroll animations
    const projectCards = document.querySelectorAll('.project-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card);
    });
});
