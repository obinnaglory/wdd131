// Temple data
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/800%2C/0/default"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois",
    dedicated: "2002-06-27",
    area: 54000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/04d0f7f577ff089808b71b864e1f58b2e877a124/full/800%2C/0/default"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Abia, Nigeria",
    dedicated: "2005-08-07",
    area: 41000,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/640%2C/0/default"
  },
  // ➕ Add at least 3 more temples
];

// DOM references
const container = document.getElementById("temple-cards");
const navLinks = document.querySelectorAll("nav a");

// Function to render cards
function renderTemples(list) {
  container.innerHTML = ""; // clear
  list.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Filter functions
function filterTemples(criteria) {
  let filtered = temples;
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  renderTemples(filtered);
}

// Event listeners for nav
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(link.dataset.filter);
  });
});

// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render
renderTemples(temples);
