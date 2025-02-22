const temples = [
    {
        Name: "HP 8240 G8",
        Description: "10th Generation Intel core i5, 8GB RAM, 256GB SSD, 14.0 Inch Display",
        smallImage: "./images/240-G8.webp",
        wideImage: "./images/240-G8-wide.webp",
    },
    {
        Name: "Dell Latitude 5420",
        Description: "11th Generation Intel core i7, 8GB RAM, 256GB SSD, 14.0 Inch Display",
        smallImage: "./images/latitude-5420.webp",
        wideImage: "./images/latitude-5420-wide.webp",
    },
    {
        Name: "Dell Latitude 5491",
        Description: "8th Generation Intel core i5, 8GB RAM, 256GB SSD, 14.0 Inch Display",
        smallImage: "./images/latitude-5491.webp",
        wideImage: "./images/latitude-5491-wide.webp",
    }
];

const container = document.querySelector(".photos");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gridTemplateRows = "repeat(3, auto)";
container.style.gap = "20px";
container.style.justifyContent = "center";

temples.forEach((temple) => {
    for (let i = 0; i < 2; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.textAlign = "center";

        const picture = document.createElement("picture");

        const sourceWide = document.createElement("source");
        sourceWide.srcset = temple.wideImage;
        sourceWide.media = "(min-width: 768px)";

        const sourceSmall = document.createElement("source");
        sourceSmall.srcset = temple.smallImage;

        const img = document.createElement("img");
        img.src = temple.smallImage;
        img.alt = temple.Name;
        img.loading = "lazy";
        img.style.display = "block";
        img.style.margin = "0 auto";

        picture.appendChild(sourceWide);
        picture.appendChild(sourceSmall);
        picture.appendChild(img);

        const description = document.createElement("p");
        description.textContent = temple.Description;

        card.appendChild(picture);
        card.appendChild(description);

        container.appendChild(card);
    }
});
