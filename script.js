// How many pages are in the chapter
const totalPages = 10; // Change this to however many pages you have
const chapterFolder = "chapter-1"; // Folder name

const container = document.getElementById("manga-pages");

for (let i = 1; i <= totalPages; i++) {
  const img = document.createElement("img");
  
  // Pad page numbers to 3 digits: 001, 002, etc.
  const paddedNum = String(i).padStart(3, "0");
  img.src = `${chapterFolder}/${paddedNum}.jpg`;
  img.alt = `Page ${i}`;
  
  container.appendChild(img);
}
