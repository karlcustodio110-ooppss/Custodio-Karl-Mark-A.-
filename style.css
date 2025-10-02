/* style.css */

/* --- Universal Styles & Typography --- */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #4CAF50; /* A vibrant green for accents */
    --secondary-color: #388E3C; /* Darker green for hover/active states */
    --background-light: #f4f7f6; /* Light background for body */
    --background-dark: #2c3e50; /* Dark background for header/nav */
    --text-light: #ecf0f1;
    --text-dark: #34495e;
    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--background-light);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* --- Header Section --- */
header {
    background-color: var(--background-dark);
    color: var(--text-light);
    padding: 40px 20px;
    text-align: center;
}

.header-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 5px;
}

.header-content p {
    font-size: 1.1rem;
    font-weight: 300;
    opacity: 0.8;
}

/* --- Navigation --- */
nav {
    display: flex;
    justify-content: center;
    background-color: var(--primary-color);
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: sticky; /* Makes the nav stick to the top */
    top: 0;
    z-index: 1000;
}

.nav-btn {
    background: none;
    border: none;
    color: var(--text-light);
    padding: 12px 20px;
    margin: 0 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, color 0.3s;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-btn i {
    font-size: 1.1rem;
}

.nav-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

.nav-btn.active {
    background-color: var(--background-dark); /* Highlight active button */
    color: var(--primary-color);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}

/* --- Main Content Area --- */
main {
    flex-grow: 1;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

section {
    display: none; /* Hidden by default, controlled by JavaScript */
    padding: 30px;
    background-color: #fff;
    border-radius: var(--border-radius);
    box-shadow: var(--card-shadow);
    margin-bottom: 30px;
    animation: fadeIn 0.5s ease-in-out;
}

section.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

section h2 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

/* --- About Me Specifics --- */
.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
}

.profile-pic {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid var(--primary-color);
    box-shadow: var(--card-shadow);
}

.about-content p {
    max-width: 800px;
    font-size: 1.1rem;
    line-height: 1.8;
}

.skills-list {
    margin-top: 20px;
    padding: 20px;
    background-color: var(--background-light);
    border-radius: var(--border-radius);
    width: 100%;
    max-width: 600px;
}

.skills-list h3 {
    color: var(--text-dark);
    margin-bottom: 15px;
    font-size: 1.5rem;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 5px;
}

.skill-tag {
    display: inline-block;
    background-color: var(--secondary-color);
    color: var(--text-light);
    padding: 8px 15px;
    margin: 5px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background-color 0.3s, transform 0.2s;
}

.skill-tag:hover {
    background-color: var(--primary-color);
    transform: scale(1.05);
}

/* --- Desktop Layout Adjustments (About Section) --- */
@media (min-width: 768px) {
    .about-content {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
    }
    .about-content p {
        flex-grow: 1;
        max-width: none;
    }
    .profile-pic {
        margin-right: 30px;
        flex-shrink: 0;
    }
    .skills-list {
        margin-left: auto;
        max-width: 100%;
    }
}

/* --- Responsiveness for Navigation --- */
@media (max-width: 600px) {
    nav {
        flex-wrap: wrap;
        padding: 5px;
    }
    .nav-btn {
        width: calc(50% - 10px); /* Two buttons per row */
        margin: 5px;
        font-size: 0.9rem;
        padding: 10px 15px;
        justify-content: center;
    }
    .header-content h1 {
        font-size: 2rem;
    }
    section {
        padding: 20px;
    }
}
