/*
Aufgabe: Abschussarbeit
Name: Julia Kaiser
Matrikel: 256580
Datum: 13.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", mix);
    let currentDrink;
    let currentGlass;
    let mixer;
    let drinks = [];
    let nAlc = 1;
    let nNonAlc = 1;
    //Funktion f�r Canvas
    function mix() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        for (let i = 0; i < nAlc; i++) {
            let g = new Abschluss.GinInfo(150, 50, "#80d6ff");
            drinks.push(g);
        }
        for (let i = 0; i < nAlc; i++) {
            let v = new Abschluss.VodkaInfo(350, 50, "#d6d6d6");
            drinks.push(v);
        }
        for (let i = 0; i < nAlc; i++) {
            let r = new Abschluss.RumInfo(550, 50, "#f97c00");
            drinks.push(r);
        }
        for (let i = 0; i < nNonAlc; i++) {
            let c = new Abschluss.MixDrink(142.5, 450, "#400000");
            drinks.push(c);
        }
        for (let i = 0; i < nNonAlc; i++) {
            let f = new Abschluss.MixDrink(342.5, 450, "#ffff00");
            drinks.push(f);
        }
        for (let i = 0; i < nNonAlc; i++) {
            let t = new Abschluss.MixDrink(542.5, 450, "#8cc6c6");
            drinks.push(t);
        }
        //Hintergrund Bar
        Abschluss.crc2.fillStyle = "#606060";
        Abschluss.crc2.fillRect(0, 0, 800, 600);
        //Zeichnen der Labels
        //Arrays f�r die Drinks
        let flaschen = ["Gin", "Vodka", "Rum"];
        let glaeser = ["Cola", "Fanta", "Tonic"];
        let anzahlAlk = flaschen.length;
        let anzahlGlass = glaeser.length;
        if (anzahlAlk == flaschen.length) {
            for (let i = 0; i < flaschen.length; i++) {
                drawLabelAlc(flaschen[i]);
            }
        }
        if (anzahlGlass == glaeser.length) {
            for (let i = 0; i < glaeser.length; i++) {
                drawLabelGlass(glaeser[i]);
            }
        }
        drawBottles();
        drawSubmitButton();
    }
    //Funktion zum Zeichnen der Getr�nke
    function drawBottles() {
        for (let i = 0; i < drinks.length; i++) {
            let d = drinks[i];
            d.update();
        }
    }
    //Labels & Button zeichnen
    function drawLabelAlc(_drinks) {
        let label = document.createElement("div");
        label.style.backgroundColor = "#d4d4d4";
        label.innerText = _drinks;
        label.id = _drinks;
        label.className = "drinks";
        label.addEventListener("click", handleClickDrinks);
        document.body.appendChild(label);
    }
    function drawLabelGlass(_drinks) {
        let label = document.createElement("div");
        label.style.backgroundColor = "#d4d4d4";
        label.innerText = _drinks;
        label.id = _drinks;
        label.className = "glasses";
        label.addEventListener("click", handleClickGlasses);
        document.body.appendChild(label);
    }
    function drawSubmitButton() {
        let button = document.createElement("div");
        button.style.backgroundColor = "#000000";
        button.innerText = "MIX IT";
        button.id = "Submit";
        button.addEventListener("click", handleClick);
        document.body.appendChild(button);
    }
    //Klick-Events
    function handleClickDrinks(_event) {
        let click = _event.target;
        click.style.backgroundColor = "#f53d82";
        currentDrink = click.id;
        let divlistAlc = document.getElementsByClassName("drinks");
        for (let i = 0; i < divlistAlc.length; i++) {
            if (currentDrink != divlistAlc[i].id) {
                divlistAlc[i].style.backgroundColor = "#d4d4d4";
            }
        }
    }
    function handleClickGlasses(_event) {
        let click = _event.target;
        click.style.backgroundColor = "#f53d82";
        currentGlass = click.id;
        let divlistGlass = document.getElementsByClassName("glasses");
        for (let i = 0; i < divlistGlass.length; i++) {
            if (currentGlass != divlistGlass[i].id) {
                divlistGlass[i].style.backgroundColor = "#d4d4d4";
            }
        }
    }
    function handleClick(_event) {
        let click = _event.target;
        click.style.backgroundColor = "#c10061";
        mixer = click.id;
        if (currentDrink == "Gin" && currentGlass == "Cola") {
            alert("Gin mit Cola... Ob das schmeckt?");
        }
        else if (currentDrink == "Gin" && currentGlass == "Fanta") {
            alert("Gin mit Fanta... Ob das schmeckt?");
        }
        else if (currentDrink == "Gin" && currentGlass == "Tonic") {
            alert("Du hast einen Gin Tonic gemacht!");
        }
        else if (currentDrink == "Vodka" && currentGlass == "Cola") {
            alert("Vodka mit Cola... Dann kann die Party ja losgehen!");
        }
        else if (currentDrink == "Vodka" && currentGlass == "Fanta") {
            alert("Vodka mit Fanta... Na dann Prost!");
        }
        else if (currentDrink == "Vodka" && currentGlass == "Tonic") {
            alert("Vodka mit Tonic? Sehr exotisch!");
        }
        else if (currentDrink == "Rum" && currentGlass == "Cola") {
            alert("Du hast Rum-Cola gemacht! Ein Klassiker.");
        }
        else if (currentDrink == "Rum" && currentGlass == "Fanta") {
            alert("Rum mit Fanta... Ob das schmeckt?");
        }
        else if (currentDrink == "Rum" && currentGlass == "Tonic") {
            alert("Rum und Tonic? Bist du dir da sicher?");
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Cocktails.js.map