/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [

    {
        name: "HTML",
        icon: "devicon-html5-plain"
    },

    {
        name: "CSS",
        icon: "devicon-css3-plain"
    },

    {
        name: "JavaScript",
        icon: "devicon-javascript-plain"
    },

    {
        name: "Java",
        icon: "devicon-java-plain"
    },

    {
        name: "Python",
        icon: "devicon-python-plain"
    },

    {
        name: "C++",
        icon: "devicon-cplusplus-plain"
    },

    {
        name: "SQL",
        icon: "devicon-mysql-plain"
    },

    {
        name: "Git",
        icon: "devicon-git-plain"
    }

];


/* =========================================================
   PROJECTS
========================================================= */

/*
    Add your projects here later.

    Example:

    {
        title: "My Portfolio",
        desc: "Personal portfolio website.",
        url: "https://github.com/yourusername/portfolio",
        tags: ["HTML", "CSS", "JS"]
    }

*/

const PROJECTS = [

    // Add projects here later.

];


/* =========================================================
   YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   SKILLS MARQUEE
========================================================= */

const marqueeTrack = document.getElementById("marqueeTrack");


if (marqueeTrack) {

    const marqueeItems = [...SKILLS, ...SKILLS]
        .map(skill => {

            const icon = skill.icon
                ? `<i class="${skill.icon}" aria-hidden="true"></i>`
                : "";

            return `
                <span>
                    ${icon}
                    ${skill.name}
                    /
                </span>
            `;

        })
        .join("");


    marqueeTrack.innerHTML = marqueeItems;

}


/* =========================================================
   SKILLS GRID
========================================================= */

const skillsGrid = document.getElementById("skillsGrid");


if (skillsGrid) {

    skillsGrid.innerHTML = "";


    SKILLS.forEach(skill => {

        const card = document.createElement("div");

        card.className = "skill-card";


        const icon = skill.icon
            ? `<i class="${skill.icon} skill-card__icon" aria-hidden="true"></i>`
            : "";


        card.innerHTML = `

            ${icon}

            <span class="skill-card__name">
                ${skill.name}
            </span>

        `;


        skillsGrid.appendChild(card);

    });

}


/* =========================================================
   PROJECTS
========================================================= */

const projectsList = document.getElementById("projectsList");


if (projectsList) {

    if (PROJECTS.length === 0) {

        projectsList.innerHTML = `

            <div class="projects__empty">

                <strong>
                    [ projects coming soon ]
                </strong>

                <br><br>

                I'm currently building projects to showcase here.

            </div>

        `;

    } else {

        PROJECTS.forEach((project, index) => {

            const row = document.createElement("a");


            row.className = "project-row";


            row.href = project.url || "#";


            if (project.url) {

                row.target = "_blank";

                row.rel = "noopener noreferrer";

            }


            const number =
                String(index + 1).padStart(2, "0");


            const tags =
                (project.tags || []).join(" · ");


            row.innerHTML = `

                <span class="project-row__index">
                    ${number}
                </span>


                <span>

                    <span class="project-row__title">
                        ${project.title}
                    </span>

                    <span class="project-row__desc">
                        ${project.desc}
                    </span>

                </span>


                <span class="project-row__tags">
                    ${tags}
                </span>

            `;


            projectsList.appendChild(row);

        });

    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealTargets.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".index-nav a");


const sections =
    document.querySelectorAll("main section[id]");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                navLinks.forEach(link => {

                    const target =
                        link.getAttribute("href");


                    link.classList.toggle(
                        "is-active",
                        target === `#${entry.target.id}`
                    );

                });

            });

        },

        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            document.activeElement?.blur();

        }

    }
);