// Gör en div med smycken som kommer ner på sidan med hjälp av onlick knappen från tjänster sidan.
function jewelry() {
    let container = document.getElementById("getJewerly");
    let button = document.querySelector("#btn-jewelry");


    if (container.innerHTML.trim() !== "") {
        container.innerHTML = ""; // Ta bort innehållet
        button.textContent = "Visa smycken"; // Ändra texten tillbaka

        let scrollButton = document.getElementById("scroll-btn");
        if (scrollButton) scrollButton.remove(); // Ta bort scroll-knappen om den finns

    } else {

    let nyttInnehall = `
        <div class="container-jewelry">
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer_halsband_1.webp" alt="Klensmide smides halsband">
            <h1>Ett större smides halsband</h1>
            <p>600 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer_halband_2.webp" alt="Klensmide smides halsband">
            <h1>Ett större smides halsband</h1>
            <p>600 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-halsband-3.webp" alt="Enkel Klensmide smides halsband">
            <h1>Ett enkelt smides halsband</h1>
            <p>450 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-halsband-4.webp" alt="Enkel Klensmide smides halsband">
            <h1>Ett enkelt smides halsband</h1>
            <p>350 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-färglad-halsband-1.webp" alt="Färgglada enkel Klensmide smides halsband">
            <h1>Ett färgglad smides halsband</h1>
            <p>500 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-färglad-halsband-2.webp" alt="Färgglada enkla Klensmide smides halsband">
            <h1>Ett färgglad choker halsband</h1>
            <p>550 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-färglad-halsband-3.webp" alt="Birgittas färgglada enkla Klensmide smidde halsband">
            <h1>Ett färgglad choker halsband</h1>
            <p>600 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-hårkam-1.webp" alt="Birgittas Klensmide smidda hårkam med en blomma i mitten utav kammen som sedan går ut som rankor från blomman">
            <h1>Hårkam</h1>
            <p>350 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-hårkam-2.webp" alt="Birgittas Klensmide smidda hårkam som har tre formade löv i mitten och som har rankor som går utifrån kammen och inåt så de omfamnar löven">
            <h1>Hårkam</h1>
            <p>500 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-hårkam-3.webp" alt="Birgittas Klensmide smidda hårkam med en blomma och rankor">
            <h1>Hårkam</h1>
            <p>450 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-örhänge-1.webp" alt="Smides färgglad örhänge som är månformad med stenar">
            <h1>Färgglad smides örhänge med stenar</h1>
            <p>650 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-örhänge-3.webp" alt="Smides färgglad örhänge med en sten">
            <h1>Färgglad smides örhänge med en sten</h1>
            <p>550 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-örhänge-4.webp" alt="Birgittas Klensmide smidda enkla örhänge med två stenar">
            <h1>Smides örhänge med två stenar</h1>
            <p>800 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-örhänge-5.webp" alt="Birgittas Klensmide smidda enkla örhänge med två stenar">
            <h1>Smides örhänge med stenar</h1>
            <p>900 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Flux_Dev_An_elegant_exquisitely_crafted_fine_forged_jewelry_pi_1.webp" alt="Birgittas Klensmide smidda enkla ring med en stor swarovski kristal och fyra mindre swarovski kristaller">
            <h1>Smides ring med swarovski kristaller</h1>
            <p>2500 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Flux_Dev_An_elegant_exquisitely_crafted_fine_forged_jewelry_pi_3.webp" alt="Birgittas Klensmide smidda enkla ring med lövformer med små swarovski kristaller">
            <h1>Smides ring med små swarovski kristaller</h1>
            <p>2000 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer_modell_arband.webp" alt="Birgittas Klensmide smides armband formad som en ranka som klättrar runt till handleden">
            <h1>Smides armband</h1>
            <p>800 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer_arban_ringar_bänk.webp" alt="Olika typer av smides armband och ringer">
            <h1>Smides armband med olika design</h1>
            <p>750 - 900 kr</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-ringar-utan-sten.webp" alt="Birgittas Klensmide olika smidda enkla ringar med mönster i och utan sten i">
            <h1>Smides ringar</h1>
            <p>250 kr/st</p>
        </div>
        <br>
        <div class="jewelry-width">
            <img class="img-medium" src="images/Designer-sten-ringar.webp" alt="Birgittas Klensmide olika smidda färgglada ringar med  mönster och en varsin sten i">
            <h1>Smides sten ringar</h1>
            <p>450 kr/st</p>
        </div>
        </div>

    `;
    container.innerHTML += nyttInnehall;
    button.textContent = "Dölj smycken";

        // Skapa en scroll-knapp om den inte redan finns
        if (!document.getElementById("scrollToTopButton")) {
            let scrollButton = document.createElement("button");
            scrollButton.id = "scrollToTopButton";
            scrollButton.textContent = "⬆ Scrolla upp";
            scrollButton.style.position = "fixed";
            scrollButton.style.bottom = "20px";
            scrollButton.style.right = "20px";
            scrollButton.style.padding = "10px 15px";
            scrollButton.style.fontSize = "16px";
            scrollButton.style.cursor = "pointer";
            scrollButton.style.display = "block";
            scrollButton.style.background = "#4b4b4bcc";
            scrollButton.style.color = "#f7edd8";
            scrollButton.style.border = "none";
            scrollButton.style.borderRadius = "5px";
            scrollButton.onclick = function () {
                button.scrollIntoView({ behavior: "smooth", block: "center" });
            };

            document.body.appendChild(scrollButton);
        }
    }
}