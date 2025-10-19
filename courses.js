// ----------------------
// 1. Objects and Methods
// ----------------------
const courseManager = {
  courses: [
    {
      title: "Data Structures and Algorithms with Python",
      instructor: "Dr. Sarah Johnson",
      image: "./assets/ads.png",
      progress: 12,
      total: 24,
      hours: 6
    },
    {
      title: "Data Science Fundamentals",
      instructor: "Prof. Michael Chen",
      image: "./assets/data-science.png",
      progress: 0,
      total: 32,
      hours: 12
    },
    {
      title: "HTML & CSS Mastery",
      instructor: "Emily Rodriguez",
      image: "./assets/html5-css3.png",
      progress: 18,
      total: 18,
      hours: 6
    },
    {
      title: "JavaScript Fundamentals",
      instructor: "Alex Johnson",
      image: "./assets/react.png",
      progress: 6,
      total: 20,
      hours: 2.1
    },
    {
      title: "Mobile UI/UX Design",
      instructor: "Emily Rodriguez",
      image: "./assets/uxui.png",
      progress: 9,
      total: 20,
      hours: 3.5
    },
    {
      title: "React for Beginners",
      instructor: "David Wilson",
      image: "./assets/js.png",
      progress: 2,
      total: 20,
      hours: 0.8
    }
  ],

  // Calculate completion %
  getProgress(course) {
    return ((course.progress / course.total) * 100).toFixed(0);
  },

  // Filter completed courses
  getCompleted() {
    return this.courses.filter(c => c.progress === c.total);
  }
};

// ----------------------
// 2. Arrays + Loops — Generate Cards
// ----------------------
const container = document.getElementById("courses-container");

courseManager.courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("course-card");

  const isCompleted = course.progress === course.total;
  const statusText = isCompleted ? "Completed" : (course.progress === 0 ? "Not Started" : "In Progress");
  const buttonText = isCompleted ? "View Certificate" : (course.progress === 0 ? "Start" : "Continue");

  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="course-image">
    <div class="course-info">
      <h3>${course.title}</h3>
      <p class="instructor">${course.instructor}</p>
      <p class="status ${statusText.toLowerCase().replace(" ", "-")}">${statusText}</p>
      <p class="details">${course.progress}/${course.total} • ${courseManager.getProgress(course)}% • ${course.hours}h</p>
      <button class="course-button">${buttonText}</button>
    </div>
  `;

  container.appendChild(card);
});

// ----------------------
// 3. Higher-Order Functions
// ----------------------
const titles = courseManager.courses.map(c => c.title);
console.log("📚 All Courses:", titles);

const completedTitles = courseManager.getCompleted().map(c => c.title);
console.log("✅ Completed:", completedTitles);

// ----------------------
// 4. Play Sound
// ----------------------
const clickSound = new Audio("./assets/click.mp3"); // add click.mp3 in your assets folder

document.addEventListener("click", e => {
  if (e.target.classList.contains("course-button")) {
    clickSound.play();
  }
});

// ----------------------
// 5. Animations
// ----------------------
const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {
  // Hover scale animation
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });

  // Click bounce animation
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "scale(1.05)";
      setTimeout(() => (card.style.transform = "scale(1)"), 150);
    }, 150);
  });
});
