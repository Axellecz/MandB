fetch('pages.json')
  .then(res => res.json())
  .then(data => {
    console.log("Image URLs:", data.pages);
    const container = document.getElementById("manga-container");
    container.innerHTML = "";
    data.pages.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Manga page";
      img.onerror = () => {
        console.error("Failed to load:", url);
      };
      container.appendChild(img);
    });
  })
  .catch(err => {
    console.error("Could not load pages", err);
  });

