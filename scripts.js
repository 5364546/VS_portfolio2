document.addEventListener("DOMContentLoaded", function () {
    
  const categories = [
      {
        title: "Jobs",
        subcategories: [
          "accounting+finance",
          "admin / office",
          "arch / engineering",
          "art / media / design",
          "biotech / science",
          "business / mgmt",
          "customer service",
          "education",
          "food / bev / hosp",
          "general labor",
          "government",
          "healthcare",
          "human resource",
          "legal / paralegal",
          "manufacturing",
          "marketing / pr / ad",
          "nonprofit sector",
          "real estate",
          "retail / wholesale",
          "sales / biz dev",
          "salon / spa / fitness",
          "security",
          "skilled trade / craft",
          "software / qa / dba",
          "systems / network",
          "technical support",
          "transport",
          "tv / film / video",
          "web / info design",
          "writing / editing",
        ],
      },
      {
        title: "Housing",
        subcategories: [
          "apts / housing",
          "housing swap",
          "housing wanted",
          "office / commercial",
          "parking / storage",
          "real estate for sale",
          "rooms / shared",
          "rooms wanted",
          "sublet / temporary",
          "vacation rentals",
        ],
      },
      {
        title: "For Sale",
        subcategories: [
          "antiques",
          "appliances",
          "arts+crafts",
          "atv/utv/sno",
          "auto parts",
          "aviation",
          "baby+kid",
          "barter",
          "beauty+hlth",
          "bike parts",
          "bikes",
          "boat parts",
          "boats",
          "books",
          "business",
          "cars+trucks",
          "cds/dvd/vhs",
          "cell phones",
          "clothes+acc",
          "collectibles",
          "computer parts",
          "computers",
          "electronics",
          "farm+garden",
          "free stuff",
          "furniture",
          "garage sale",
          "general",
          "heavy equipment",
          "household",
          "jewelry",
          "materials",
          "motorcycle parts",
          "motorcycles",
          "music instr",
          "photo+video",
          "rvs+camp",
          "sporting",
          "tickets",
          "tools",
          "toys+games",
          "trailers",
          "video gaming",
          "wanted",
        ],
      },
      {
        title: "Community",
        subcategories: [
          "activities",
          "artists",
          "childcare",
          "classes",
          "events",
          "general",
          "groups",
          "local news",
          "lost+found",
          "missed connections",
          "musicians",
          "pets",
          "politics",
          "rants & raves",
          "rideshare",
          "volunteers",
        ],
      },
      {
        title: "Gigs",
        subcategories: [
          "computer",
          "creative",
          "crew",
          "domestic",
          "event",
          "labor",
          "talent",
          "writing",
        ],
      },
      {
        title: "services",
        subcategories: [
		"automotive",
		"beauty",
		"cell/mobile",
		"computer",
		"creative",
		"cycle",
		"event",
		"farm+garden",
		"financial",
		"health/well",	
		"household",
		"labor/move",
		"legal",
		"lessons",
		"marine",
		"pet",
		"real estate",
		"skilled trade",
		"sm biz ads",
		"travel/vac",
		"write/ed/tran",
		],
      },
      {
        title: "discussion forumsy",
        subcategories: [
            "apple",
            "arts",
            "atheist",
            "autos",
            "beauty",
            "bikes",
            "celebs",
            "comp",
            "cosmos",
            "diet",
            "divorce",
            "dying",
            "eco",
            "feedbk",
            "film",
            "fixit",
            "food",
            "frugal",
            "gaming",
            "garden",
            "haiku",
            "help",
            "history",
            "housing",
            "jobs",
            "jokes",
            "legal",
            "manners",
            "marriage",
            "money",
            "music",
            "open",
            "parent",
            "pets",
            "philos",
            "photo",
            "politics",
            "psych",
            "recover",
            "religion",
            "rofo",
            "science",
            "spirit",
            "sports",
            "super",
            "tax",
            "travel",
            "tv",
            "vegan",
            "words",
            "writing",
        ],
        },
        {
            title: "resumes",
            subcategories: []
        },
    
    ];
  
    const flashcardsContainer = document.querySelector(".flashcards");
  
    categories.forEach((category) => {
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
  
      const flashcardInner = document.createElement("div");
      flashcardInner.classList.add("flashcard-inner");
  
      const flashcardFront = document.createElement("div");
      flashcardFront.classList.add("flashcard-front");
      flashcardFront.textContent = category.title;
  
      const flashcardBack = document.createElement("div");
      flashcardBack.classList.add("flashcard-back");
  
      const ul = document.createElement("ul");
  
      category.subcategories.forEach((subcategory) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = subcategory;
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      flashcardBack.appendChild(ul);
  
      flashcardInner.appendChild(flashcardFront);
      flashcardInner.appendChild(flashcardBack);
      flashcard.appendChild(flashcardInner);
      flashcardsContainer.appendChild(flashcard);
    });

    adjustSubmenuPosition();

    const sidebarToggle = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('aside');

    sidebarToggle.addEventListener('click', function () {
      sidebar.classList.toggle('hide-sidebar');
});
  });
 
  function adjustSubmenuPosition() {
    const flashcardItems = document.querySelectorAll('.flashcard-inner');
  
    flashcardItems.forEach((flashcardItem) => {
      flashcardItem.addEventListener('mouseover', (event) => {
        const submenu = event.target.querySelector('.flashcard-back');
  
        if (submenu) {
          const viewportWidth = window.innerWidth;
          const submenuRect = submenu.getBoundingClientRect();
  
          if (submenuRect.right > viewportWidth) {
            submenu.style.left = 'auto';
            submenu.style.right = '0';
          } else {
            submenu.style.left = '0';
            submenu.style.right = 'auto';
          }
        }
      });
    });
  }
 /* Function to filter listings based on search input */
function filterListings() {
    const input = document.querySelector(".search-bar input[type='text']");
    const query = input.value;
  
    if (query) {
      window.location.href = `https://newyork.craigslist.org/search/sss?query=${encodeURIComponent(query)}`;
    }
  }
  
  // Add event listener to the search button
  const searchButton = document.querySelector(".search-bar button");
  searchButton.addEventListener("click", filterListings);
  
  // Add event listener to the search input for the Enter key
  const searchInput = document.querySelector(".search-bar input[type='text']");
  searchInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // Enter key code
      filterListings();
    }

  
  });
  
  /* Other existing code */
 
   