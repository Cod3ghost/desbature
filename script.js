// ========================================
// Project Data
// ========================================

const projects = [
    {
        id: 1,
        title: "Student Performance & Well Being Analysis",
        tools: ["PowerBI", "Power Query", "DAX"],
        category: ["powerbi"],
        description: "Comprehensive dashboard analyzing student performance metrics and well-being indicators. Features interactive visualizations for tracking academic progress, attendance patterns, and student wellness factors to support data-driven educational decisions.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiOGZjY2ExMmEtNGQ4Yi00NzM3LThhY2YtMmEwYzFlNzQ4YzljIiwidCI6Ijg2MjZhNDc3LTk1YjctNDVhMi1hNjNlLWFkY2M1Mjk3ODlkYiIsImMiOjN9"
    },
    {
        id: 2,
        title: "Breast Cancer Prediction through PCA-Enhanced Logistic Regression",
        tools: ["Python", "Scikit-learn", "PCA", "Logistic Regression"],
        category: ["python", "ml"],
        description: "Machine learning model for breast cancer prediction utilizing Principal Component Analysis (PCA) for dimensionality reduction and logistic regression for classification. Achieved high accuracy in distinguishing between malignant and benign tumors.",
        link: "https://colab.research.google.com/drive/1AHS96fDz1qzXMXVUvy2VATs2KU7XJeix?usp=sharing"
    },
    {
        id: 3,
        title: "Global Data Science Job Market Analysis",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        category: ["python"],
        description: "In-depth analysis of the global data science job market, exploring salary trends, required skills, geographic distribution, and industry demands. Provides insights into emerging technologies and career opportunities in the data science field.",
        link: "https://colab.research.google.com/drive/1lmth1wgBCOlzjLoc-HXr2dVNNhPVY2i1?usp=sharing"
    },
    {
        id: 4,
        title: "Employee Retention and Workforce Analysis",
        tools: ["PowerBI", "Power Query", "DAX"],
        category: ["powerbi"],
        description: "Strategic workforce analytics dashboard identifying key factors influencing employee retention. Analyzes turnover rates, satisfaction scores, departmental trends, and provides actionable insights for HR decision-making and talent management.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTI4YzZiYTEtNWI2Zi00YmFmLTlhZjAtNjZiNWFmY2M1OTg5IiwidCI6Ijg2MjZhNDc3LTk1YjctNDVhMi1hNjNlLWFkY2M1Mjk3ODlkYiIsImMiOjN9"
    },
    {
        id: 5,
        title: "Thriving Child Social Media Analysis",
        tools: ["PowerBI", "Power Query", "DAX"],
        category: ["powerbi"],
        description: "Analytics dashboard examining social media engagement patterns and their impact on child development and well-being. Visualizes usage statistics, content interactions, and correlations with developmental outcomes.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiM2UyZjgwMWEtOGY5Yy00NGY4LThjOGYtMmQ2YjliNzQzYTM3IiwidCI6Ijg2MjZhNDc3LTk1YjctNDVhMi1hNjNlLWFkY2M1Mjk3ODlkYiIsImMiOjN9"
    },
    {
        id: 6,
        title: "Christmas Sales Trend Analysis",
        tools: ["PowerBI", "Power Query", "DAX"],
        category: ["powerbi"],
        description: "Seasonal sales analytics dashboard tracking Christmas shopping trends, revenue patterns, and consumer behavior. Includes year-over-year comparisons, product category performance, and predictive insights for inventory planning.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZjU1MmM0ZGEtYTRhZC00MzMwLTlhZjAtNjZiNWFmY2M1Mjk3ODlkYiIsImMiOjN9"
    },
    {
        id: 7,
        title: "Netflix Data Analysis",
        tools: ["Python", "Pandas", "Data Visualization"],
        category: ["python"],
        description: "Exploratory data analysis of Netflix content library, examining content distribution by genre, country, release year, and ratings. Identifies trends in content production and provides insights into streaming platform strategies.",
        link: "https://colab.research.google.com/drive/1OW4gys_iFjME9T4KBNtl7AwgVdaNMFJe?usp=sharing"
    }
];

// ========================================
// DOM Elements
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');

// ========================================
// Mobile Navigation
// ========================================

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Smooth Scrolling with Offset
// ========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// Project Rendering
// ========================================

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category.join(' '));

    const toolTags = project.tools.map(tool =>
        `<span class="tool-tag">${tool}</span>`
    ).join('');

    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
        </div>
        <div class="project-body">
            <div class="project-tools">
                ${toolTags}
            </div>
            <p class="project-description">${project.description}</p>
        </div>
        <div class="project-footer">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    `;

    return card;
}

function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const card = createProjectCard(project);

        if (filter === 'all' || project.category.includes(filter)) {
            projectsGrid.appendChild(card);
            // Trigger animation
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            }, 10);
        }
    });

    // If no projects match the filter
    if (projectsGrid.children.length === 0) {
        projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No projects found for this category.</p>';
    }
}

// ========================================
// Project Filtering
// ========================================

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ========================================
// Intersection Observer for Scroll Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================================
// Initialize on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render all projects initially
    renderProjects('all');

    // Update active nav link
    updateActiveNavLink();

    // Add animation delays to project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ========================================
// Performance Optimization: Debounce Scroll
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// ========================================
// External Link Security
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// ========================================
// Console Easter Egg
// ========================================

console.log('%c👨‍💻 Data Science Portfolio', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ and data-driven insights', 'color: #ec4899; font-size: 14px;');
console.log('%cInterested in collaborating? Let\'s connect!', 'color: #f59e0b; font-size: 12px;');
