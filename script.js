const courses = [
  {
    name: "Data Structures and Algorithms with Python",
    hours: "12/24",
    by: "Dr. Sarah Johnson",
    status: "In progress",
  },
  {
    name: "Data Science Fundamentals",
    hours: "0/32",
    by: "Prof. Michael Chen",
    status: "Not started",
  },
  {
    name: "HTML & CSS Mastery",
    hours: "18/18",
    by: "Emily Rodriguez",
    status: "Completed",
  },
  {
    name: "JavaScript Fundamentals",
    hours: "6/20",
    by: "Alex Johnson",
    status: "In progress",
  },
  {
    name: "Mobile UI/UX Design",
    hours: "9/20",
    by: "Emily Rodriguez",
    status: "In progress",
  },
  {
    name: "React for Beginners",
    hours: "2/20",
    by: "David Wilson",
    status: "In Progress",
  },
];

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("course-results");

function displayCourses(list) {
  resultsDiv.innerHTML = "";

  if (list.length === 0) {
    resultsDiv.innerHTML = "<h3>No courses found</h3>";
    return;
  }

  list.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p><b>Hours:</b> ${course.hours}</p>
            <p><b>Instructor:</b> ${course.by}</p>
            <p><b>Status:</b> ${course.status}</p>
        `;
    resultsDiv.appendChild(courseCard);
  });
}

function courseFind() {
  const query = input.value.toLowerCase();

  if (query === "") {
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = "none";
    return;
  }

  resultsDiv.style.display = "grid";

  const filtered = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(query) ||
      course.by.toLowerCase().includes(query)
  );

  displayCourses(filtered);
}

input.addEventListener("input", courseFind);

courseFind();

displayCourses(courses);
