document.addEventListener('DOMContentLoaded', function() {
    const spotlightContainer = document.getElementById('spotlight-container');

    const businesses = [
        {
            name: "Dicumê Dindim Gourmet",
            logo: "https://files.menudino.com/cardapios/71594/logo.png",
            phone: "(98) 98188-7836",
            address: "Avenida 203 - Cidade Operária, São Luís, MA",
            website: "https://dindimdicume.menudino.com/",
        },
        {
            name: "Black's Burguer",
            logo: "https://ugc.production.linktr.ee/iNOikEbBRyCxzy40F6jO_XXprVcU0cSV1G734?io=true&size=avatar-v3_0",
            phone: "(98) 98906-0004",
            address: "R. 203, 2 - Cidade Operária, São Luís - MA",
            website: "https://www.instagram.com/blacks.burguer",
        },
        {
            name: "RH Confeitaria",
            logo: "https://ugc.production.linktr.ee/68f62a12-d87a-472f-9e0c-4e335b0e0ab5_IMG-2820.png?io=true&size=avatar-v3_0",
            phone: "(98) 98597-7105",
            address: "Only Online Services",
            website: "https://www.instagram.com/rayanehelena",
        }
    ];

    businesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img class="spotlight-logo" src="${business.logo}" alt="${business.name} logo">
            <h3>${business.name}</h3>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Special offer:</strong> <span>20% off this month!</span></p>
            <p><a href="${business.website}" target="_blank">Visit Website</a></p>
        `;

        spotlightContainer.appendChild(card);
    });
});