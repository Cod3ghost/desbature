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
    },
    {
        id: 8,
        title: "ProfitPro - Sales & Inventory Management System",
        tools: ["Next.js", "TypeScript", "Supabase", "React", "Tailwind CSS"],
        category: ["fullstack"],
        description: "Full-stack web application streamlining sales tracking and inventory management for Nigerian businesses. Features real-time sales tracking with automatic inventory updates, role-based access control for admins and sales agents, comprehensive profit analytics dashboard, and mobile-responsive design. Built with Next.js 15, TypeScript, Supabase (PostgreSQL), and deployed on Vercel.",
        link: "https://profitpro.vercel.app"
    }
];

// ========================================
// DOM Elements
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projectsGrid');
const paginationContainer = document.getElementById('pagination');

// ========================================
// Pagination Variables
// ========================================

let currentPage = 1;
const projectsPerPage = 3;

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
        const href = link.getAttribute('href');

        // Only prevent default for anchor links (starting with #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // For external links like projects.html, let them work normally
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

// ========================================
// Pagination Functions
// ========================================

function renderProjects(page = 1) {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    currentPage = page;

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Calculate start and end indices for current page
    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = projects.slice(startIndex, endIndex);

    // Render projects for current page
    projectsToShow.forEach((project, index) => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
        // Trigger animation with stagger
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Render pagination
    renderPagination(totalPages, page);
}

function renderPagination(totalPages, currentPage) {
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    // Don't show pagination if only one page
    if (totalPages <= 1) {
        return;
    }

    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination-controls';

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-btn';
    prevButton.innerHTML = '&laquo; Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            renderProjects(currentPage - 1);
            scrollToProjects();
        }
    });
    paginationDiv.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'pagination-btn';
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            renderProjects(i);
            scrollToProjects();
        });
        paginationDiv.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-btn';
    nextButton.innerHTML = 'Next &raquo;';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            renderProjects(currentPage + 1);
            scrollToProjects();
        }
    });
    paginationDiv.appendChild(nextButton);

    paginationContainer.appendChild(paginationDiv);
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = projectsSection.offsetTop - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

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
    // Render projects with pagination
    renderProjects(1);

    // Update active nav link
    updateActiveNavLink();
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
// Dynamic Copyright Year
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// ========================================
// Console Easter Egg
// ========================================

console.log('%c👨‍💻 Data Science Portfolio', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ and data-driven insights', 'color: #ec4899; font-size: 14px;');
console.log('%cInterested in collaborating? Let\'s connect!', 'color: #f59e0b; font-size: 12px;');
