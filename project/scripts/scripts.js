const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Step 2: Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Step 3: Find the <select> element
  const selectMenu = document.getElementById("productName");

  // Step 4: Make sure it exists on the page
  if (selectMenu) {
    // Step 5: Loop through the array and add each product as an <option>
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;       // The value (like fc-1888)
      option.textContent = product.name; // The name shown to user
      selectMenu.appendChild(option);
    });
  }

});
