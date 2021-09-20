function addItem(item) {
  const itemHTML = `<div class="card" style="width: 18rem;"> <div class="card-body"><h5 class="card-title">${item.name}</h5><p class="card-text">${item.pantone_value}</p><div style="background:${item.color}";>${item.color}</div></div></div><br/>`;
  const itemsContainer = document.querySelector("#list-items");
  itemsContainer.innerHTML += itemHTML;
}

fetch("https://reqres.in/api/unknown")
  .then((response) => {
    //console.log(response.json());
    if (response.ok) {
      return response.json();
    }
  })
  .then((jsonContent) => {
    // Do something with the response data
    //console.log(jsonContent["data"].length);
    // for loop
    for (let i = 0; i < jsonContent["data"].length; i++) {
      addItem(jsonContent["data"][i]);
    }
  })
  .catch((err) => {
    console.log("Fetch Error :-S", err);
  });
