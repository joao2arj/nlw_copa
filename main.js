function create_game(player1, hour, player2) {
    return `
        <li>    <!-- "li" = itens da lista -->
            <img src="./assets/icon-${player1}.svg" alt="icon-${player1}">
            <strong>${hour}</strong>  <!-- "strong" = deixa o texto em negrito. -->
            <img src="./assets/icon-${player2}.svg" alt="icon-${player2}">
        </li>
    `
}

function create_card(date, day, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>  <!-- SPAN = diferenciação entre conteúdos(dia e data). -->
            <ul>    <!-- "ul" = lista não ordenada -->
                ${games}        
            </ul>
        </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>    <!--  Cabeçalho. -->
        <img src="./assets/logo.svg" alt="nlw_copa_logo"> <!-- Atributos: 'src' = source/onde a imagem se localiza; 'alt' = aviso ao aparecer quando a imagem não for localizada-->
    </header>
    <main id="cards">
        ${create_card("24/11", "quinta", 
            create_game("brazil", "16:00", "serbia"))}
        ${create_card("28/11", "segunda", 
            create_game("brazil", "13:00", "switzerland"))}
        ${create_card("02/12", "sexta", 
            create_game("brazil", "16:00", "serbia"))}
    </main>
`