const membersDiv = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error("Erro ao carregar os dados.");
        const members = await response.json();

        members.forEach((member) => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member-card");

            memberDiv.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <figure>
                    <img src="${member.image}" alt="${member.name}">
                </figure>
            `;

            membersDiv.appendChild(memberDiv);
        });
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

function setActiveButton(button) {
    gridBtn.classList.remove("active");
    listBtn.classList.remove("active");
    button.classList.add("active");
}

gridBtn.addEventListener("click", () => {
    membersDiv.classList.add("grid");
    membersDiv.classList.remove("list");
    setActiveButton(gridBtn);
});

listBtn.addEventListener("click", () => {
    membersDiv.classList.add("list");
    membersDiv.classList.remove("grid");
    setActiveButton(listBtn);
});

fetchMemberData();