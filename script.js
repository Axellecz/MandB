const container = document.getElementById("manga-container");

// Placeholder: set total pages when images are added
const totalPages = 0; // Update this to how many images you have
const imageFolder = "manga-pages"; // Folder where your images will go

if (totalPages === 0) {
  console.log("No pages added yet.");
} else {
  container.innerHTML = ""; // Clear placeholder text
  for (let i = 1; i <= totalPages; i++) {
    const img = document.createElement("img");
    const padded = String(i).padStart(3, "0"); // 001, 002...
    img.src = `${imageFolder}/${padded}.jpg`;
    img.alt = `Page ${i}`;
    container.appendChild(img);
  }
}
