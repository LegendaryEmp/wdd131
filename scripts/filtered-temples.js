document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        },
        {
            templeName: "Phoenix Arizona",
            location: "Phoenix, Arizona, United States",
            dedicated: "2014, November, 16",
            area: 27000,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-11098.jpg"
        },
        {
            templeName: "Mesa Arizona",
            location: "Mesa, Arizona, United States",
            dedicated: "1927, October, 23",
            area: 113916,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546.jpg",
        },
        {
            templeName: "Gilbert Arizona",
            location: "Gilbert, Arizona, United States",
            dedicated: "2014, March, 2",
            area: 85000,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-46549.jpg",
        },
        {
            templeName: "Tucson Arizona",
            location: "Tucson, Arizona, United States",
            dedicated: "2017, August, 13",
            area: 38000,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-10238.jpg",
        },
        {
            templeName: "Gila Valley Arizona",
            location: "Central, Arizona, United States",
            dedicated: "2010, May, 23",
            area: 18600,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-12788.jpg",
        },
    ];

    const photosContainer = document.querySelector(".photos");
    const navMenu = document.querySelector(".nav-menu");

    const displayTemples = (filteredTemples) => {
        photosContainer.innerHTML = "";
        filteredTemples.forEach((temple) => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `${temple.templeName} Temple`;
            img.loading = "lazy";

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);

            photosContainer.appendChild(card);
        });
    };
    displayTemples(temples);

    navMenu.addEventListener("click", (e) => {
        e.preventDefault();
        const targetClass = e.target.classList;

        if (targetClass.contains("nav-old")) {
            const oldTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0], 10);
                return year < 1900;
            });
            displayTemples(oldTemples);
        } else if (targetClass.contains("nav-new")) {
            const newTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0], 10);
                return year > 2000;
            });
            displayTemples(newTemples);
        } else if (targetClass.contains("nav-large")) {
            const largeTemples = temples.filter((temple) => temple.area > 90000);
            displayTemples(largeTemples);
        } else if (targetClass.contains("nav-small")) {
            const smallTemples = temples.filter((temple) => temple.area < 10000);
            displayTemples(smallTemples);
        } else if (targetClass.contains("nav-link")) {
            displayTemples(temples);
        }
    });
});
