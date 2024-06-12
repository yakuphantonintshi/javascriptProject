let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
    [
        {
            productName: "Bearded Iris",
            category: "Iris flower",
            Description: "Bearded Iris - Glacier Shadows - 3 plants p-pack",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/bearded-iris.jpg",
            Price: 165.00
        },
        {
            productName: "English Lavender",
            category: "Lavender flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/english-lavender.jpg",
            Price : 55.00
        },
        {
            productName: "Stargazer Lily",
            category: "Lily flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl : "https://yakuphantonintshi.github.io/myimages/Images/stargazer_lily.jpg",
            Price: 250.00
        },
        {
            productName: "Red Rose",
            category: "Rose flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/red_rose.jpg",
            Price: 300.00
        },
        {
            productName: "Tiffany Sunflower",
            category: "Sunflower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/tiffany_sunflower.jpg",
            Price: 200.00
        },
        {
            productName: "Alpine aster",
            category: "Aster flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/alpine_aster.jpg",
            Price: 345.00
        },
        {
            productName: "Dwarf Carnation",
            category: "Carnation flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/dwarf_carnation.jpg",
            Price: 500.00
        },
        {
            productName: "Iceland popies",
            category: "Popies flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/iceland_popies.jpg",
            Price: 450.00
        },
        {
            productName: "African Daisy",
            category: "Daisy flower",
            Description: "Price per bunch, Stems per bunch: 20",
            ImageUrl: "https://yakuphantonintshi.github.io/myimages/Images/african_daisy.jpg",
            Price: 200.00
        }
    ]
))