// ASCII Art Logo
const asciiLogo = `
██████╗ ██╗███╗   ███╗██╗████████╗██████╗  ██████╗ ███╗   ██╗
██╔══██╗██║████╗ ████║██║╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║
██║  ██║██║██╔████╔██║██║   ██║   ██████╔╝██║   ██║██╔██╗ ██║
██║  ██║██║██║╚██╔╝██║██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║
██████╔╝██║██║ ╚═╝ ██║██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║
╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`;

document.getElementById('ascii-logo').textContent = asciiLogo;

// Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSection = btn.getAttribute('data-section');
        
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active'); 
        
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// Typewriter Effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// About Content with Typewriter
const aboutContent = `
<p>&gt; NAME: Dimitris Angelidis</p>
<p>&gt; ROLE: Full Stack Developer</p>
<p>&gt; LOCATION: Greece</p>
<p>&gt; STATUS: Loading...</p>
<br>
<p>Passionate programmer with expertise in modern web technologies.</p>
<p>Building innovative solutions and crafting elegant code since 20XX.</p>
<p>Specializing in creating robust applications that solve real-world problems.</p>
`;

setTimeout(() => {
    const aboutElement = document.getElementById('about-content');
    aboutElement.innerHTML = aboutContent;
}, 500);

// Skills Data
const skills = [
    { name: 'JavaScript', level: 75 },
    { name: 'PHP', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Java', level: 90 }
];

const skillsGrid = document.getElementById('skills-grid');
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
            <div class="skill-progress" style="width: 0%" data-level="${skill.level}"></div>
        </div>
        <div style="margin-top: 5px;">${skill.level}%</div>
    `;
    skillsGrid.appendChild(skillItem);
});

// Animate skill bars when skills section is active
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-level') + '%';
                }, 100);
            });
        }
    });
});

observer.observe(document.getElementById('skills'));

// Projects Data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack online shopping system with payment integration',
        tech: 'PHP, MySQL, JavaScript, Bootstrap'
    },
    {
        title: 'Task Management App',
        description: 'Real-time collaborative task tracker with team features',
        tech: 'React, Node.js, MongoDB'
    },
    {
        title: 'Portfolio CMS',
        description: 'Custom content management system for creative professionals',
        tech: 'PHP, MySQL, jQuery, CSS3'
    },
    {
        title: 'Weather Dashboard',
        description: 'Interactive weather forecast application with geolocation',
        tech: 'JavaScript, API Integration, Java'
    },
    {
        title: 'IT Management',
        description: 'Coordination of IT operations, project delivery, and long-term technology planning',
        tech: 'IT Governance, Agile/Scrum, Vendor Management, Budgeting, Cybersecurity, Cloud Infrastructure'
    }
];

const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';
    projectItem.innerHTML = `
        <div class="project-title">&gt; ${project.title}</div>
        <p>${project.description}</p>
        <div class="project-tech">TECH: ${project.tech}</div>
    `;
    projectsList.appendChild(projectItem);
});

// Contact Form
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            formResponse.className = 'success';
            formResponse.textContent = '&gt; MESSAGE TRANSMITTED SUCCESSFULLY';
            contactForm.reset();
        } else {
            formResponse.className = 'error';
            formResponse.textContent = '&gt; ERROR: ' + result.message;
        }
    } catch (error) {
        formResponse.className = 'error';
        formResponse.textContent = '&gt; CONNECTION ERROR: Unable to send message';
    }
    
    setTimeout(() => {
        formResponse.style.display = 'none';
    }, 5000);
});

// Uptime Counter
let startTime = Date.now();

function updateUptime() {
    const elapsed = Date.now() - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    const uptimeElement = document.getElementById('uptime');
    uptimeElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateUptime, 1000);

// Screen flicker effect on load
window.addEventListener('load', () => {
    document.body.style.animation = 'flicker 0.5s';
});

// Add flicker animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
`;
document.head.appendChild(style);
