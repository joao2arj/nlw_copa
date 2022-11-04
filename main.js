function create_game(player1, hour, player2) {
    return `
        <li>    <!-- "li" = itens da lista -->
            <img src="./assets/icon-${player1}.svg" alt="icon-${player1}">
            <strong>${hour}</strong>  <!-- "strong" = deixa o texto em negrito. -->
            <img src="./assets/icon-${player2}.svg" alt="icon-${player2}">
        </li>
    `
}

let delay = -0.3;
function create_card(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>  <!-- SPAN = diferenciação entre conteúdos(dia e data). -->
            <ul>    <!-- "ul" = lista não ordenada -->
                ${games}        
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =
    create_card("24/11", "quinta", 
        create_game("uruguai", "10:00", "korea") +
        create_game("brazil", "16:00", "serbia")) +
    create_card("25/11", "sexta",
        create_game("eua", "16:00", "england")) +
    create_card("28/11", "segunda", 
        create_game("switzerland", "13:00", "brazil") + 
        create_game("portugal", "16:00", "uruguai")) +
    create_card("02/12", "sexta", 
        create_game("brazil", "16:00", "cameroon"))