document.addEventListener("DOMContentLoaded", async () => {
  // Jalankan include
  const includes = document.querySelectorAll("[data-include]");
  for (const el of includes) {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    el.innerHTML = await res.text();
  }

  // ======== MENU TOGGLE ========
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    let open = false;
    menuBtn.addEventListener('click', () => {
      open = !open;
      if (open) {
        menu.classList.remove('hidden');
        menu.classList.add('max-h-96', 'opacity-100');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('max-h-96', 'opacity-100');
      }
    });
  }

  // ======== PROGRESS BAR ANIMATION ========
  const bars = document.querySelectorAll(".progress-bar");
  if (bars.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-slideInLeft", "transition");
          } else {
            entry.target.classList.remove("animation-slideInLeft", "transition");
          }
        });
      },
      { threshold: 0 }
    );
    bars.forEach(bar => observer.observe(bar));
  }

  // ======== EDUCATION ANIMATION ========
  const edu = document.querySelectorAll(".education");
  if (edu.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-lightSpeedInLeft", "transition");
          } else {
            entry.target.classList.remove("animation-lightSpeedInLeft", "transition");
          }
        });
      },
      { threshold: 0 }
    );
    edu.forEach(education => observer.observe(education));
  }

  // ======== EXPERIENCE ANIMATION ========
  const exp = document.querySelectorAll(".experience");
  if (exp.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-lightSpeedInLeft", "transition");
          } else {
            entry.target.classList.remove("animation-lightSpeedInLeft", "transition");
          }
        });
      },
      { threshold: 0 }
    );
    exp.forEach(experience => observer.observe(experience));
  }

  // ======== ACHIEVEMENT ANIMATION ========
  const ach = document.querySelectorAll(".achievement");
  if (ach.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-jackInTheBox", "transition");
          } else {
            entry.target.classList.remove("animation-jackInTheBox", "transition");
          }
        });
      },
      { threshold: 0 }
    );
    ach.forEach(achievement => observer.observe(achievement));
  }

  // ======== PROJECT ANIMATION ========
  const proj = document.querySelectorAll(".project");
  if (proj.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-jackInTheBox", "transition");
          } else {
            entry.target.classList.remove("animation-jackInTheBox", "transition");
          }
        });
      },
      { threshold: 0 }
    );
    proj.forEach(project => observer.observe(project));
  }

  // ======== FILTER PROJECTS ========
  const filterProjects = document.getElementById("filterCategory");
  const allProjects = document.querySelectorAll(".project");
  if (filterProjects) {
    filterProjects.addEventListener("change", function () {
      const selectedCategory = filterProjects.value;
      allProjects.forEach(project => {
        const projectCategory = project.getAttribute("data-category");
        if (selectedCategory === "All" || projectCategory === selectedCategory) {
          project.classList.add("block");
          project.classList.remove("hidden");
        } else {
          project.classList.remove("block");
          project.classList.add("hidden");
        }
      });
    });
  }

  // ======== FILTER ACHIEVEMENTS ========
  const filterAchievement = document.getElementById("filterAchievement");
  const allAchievements = document.querySelectorAll(".achievement");
  if (filterAchievement) {
    filterAchievement.addEventListener("change", function () {
      const selectedCategory = filterAchievement.value;
      allAchievements.forEach(achievement => {
        const achievementCategory = achievement.getAttribute("data-category");
        if (selectedCategory === "All" || achievementCategory === selectedCategory) {
          achievement.classList.add("block");
          achievement.classList.remove("hidden");
        } else {
          achievement.classList.remove("block");
          achievement.classList.add("hidden");
        }
      });
    });
  }

});
