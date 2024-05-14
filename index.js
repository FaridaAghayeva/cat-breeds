fetch("https://catfact.ninja/breeds")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw "Error";
    }
  })
  .then((data) => {
    data.data.map((item) => {
      let container = document.createElement("div");
      let span = document.createElement("span");
      let span2 = document.createElement("span");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      span.textContent = "Breed: ";
      span2.textContent = "Country:";
      p.textContent = item.breed;
      p2.textContent = item.country;
      container.appendChild(span);
      container.appendChild(p);
      container.appendChild(span2);
      container.appendChild(p2);

      document.body.appendChild(container);
    });
  });
