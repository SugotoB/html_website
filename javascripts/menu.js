

// MENU
let products = {
    data: [
      {
        productName: "Classic American Baked",
        price: "30",
        image: "images/americanbaked_item.jpg",
        link: "itempage1.html"
      },
      {
        productName: "Creamy Caramel",
        price: "40",
        image: "images/creamycaramel_item.jpg",
        link: "itempage2.html"
      },
      {
        productName: "Quad Chocolate Baked",
        price: "35",
        image: "images/quadchocbaked_item.jpg",
        link: "itempage3.html",
      },
      {
        productName: "Wild Strawberry",
        price: "30",
        image: "images/wildstrawberry_item.jpg",
        link: "itempage4.html"
      },
      {
        productName: "Citron Glazed",
        price: "35",
        image: "images/citronglaze_item.jpg",
        link: "itempage5.html"
      },
      {
        productName: "Marbled",
        price: "40",
        image: "images/marblecheesecake.jpg",
        link: "itempage6.html"
      },
    ]
  };
  for (let i of products.data) {
    let link = document.createElement("a");
    link.href = i.link;
    link.style.textDecoration = "none";

    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);

    link.appendChild(card); // append the card to the link
    document.getElementById("products").appendChild(link); // append the link instead of the card
}
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove('hide');
        } else {
            cards[index].classList.add('hide');
        }
    });
});


// autocomplete
  // Create a div element to contain the items
  let suggestions = [
    "Classic American Baked",
    "Creamy Caramel",
    "Quad Chocolate Baked",
    "Wild Strawberry",
    "Citron Glazed",
    "Marbled",
  ];

function autocomplete(inp, arr) {
  let currentFocus;

  inp.addEventListener("input", function(e) {
    let a, b, val = this.value;

    closeAllLists();

    if (!val) { 
        return false;
    }
    currentFocus = -1;

    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(a);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("div");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
    }
}

function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("search-input"), suggestions);


window.onload = () => {
    let cards = document.querySelectorAll(".card");
    
    cards.forEach((card) => {
        card.classList.remove('hide');
    });
};