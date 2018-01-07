var WeihnachtsbaumKonfigurator;
(function (WeihnachtsbaumKonfigurator) {
    window.addEventListener("load", init);
    //B�ume
    let baumklein = {
        name: "Baum klein",
        price: 10
    };
    let baummittel = {
        name: "Baum mittel",
        price: 20
    };
    let baumgross = {
        name: "Baum gross",
        price: 30
    };
    //Halterungen
    let halt1 = {
        name: "Halterung gruen",
        price: 15
    };
    let halt2 = {
        name: "Halterung rot",
        price: 15
    };
    let halt3 = {
        name: "Halterung braun",
        price: 15
    };
    //Schmuck
    let schmu1 = {
        name: "Lichterkette",
        price: 5
    };
    let schmu2 = {
        name: "Stern",
        price: 3
    };
    let schmu3 = {
        name: "Lametta",
        price: 3
    };
    //Kerzen
    let kerze1 = {
        name: "Kerzen klein",
        price: 3
    };
    let kerze2 = {
        name: "Kerzen mittel",
        price: 3
    };
    let kerze3 = {
        name: "Kerzen gross",
        price: 3
    };
    let products = [baumklein.price, baummittel.price, baumgross.price, halt1.price, halt2.price, halt3.price, schmu1.price, schmu2.price, schmu3.price, kerze1.price, kerze2.price, kerze3.price];
    function init(_event) {
        //Radiobuttons f�r die B�ume
        let baeume = [baumklein, baummittel, baumgross];
        for (let i = 0; i < baeume.length; i++) {
            let baumFieldS = document.getElementById("baum");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.value = baeume[i].name;
            radioButton.id = baeume[i].name;
            let label = document.createElement("label");
            label.htmlFor = baeume[i].name;
            label.innerText = baeume[i].name;
            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }
        //Radiobuttons f�r die Halterungen
        let halterungen = [halt1, halt2, halt3];
        for (let i = 0; i < halterungen.length; i++) {
            let halterungFieldS = document.getElementById("halterung");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.value = halterungen[i].name;
            radioButton.id = halterungen[i].name;
            let label = document.createElement("label");
            label.htmlFor = halterungen[i].name;
            label.innerText = halterungen[i].name;
            let stepper = document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";
            halterungFieldS.appendChild(radioButton);
            halterungFieldS.appendChild(stepper);
            halterungFieldS.appendChild(label);
        }
        //Checkboxen f�r den Schmuck
        let schmuck = [schmu1, schmu2, schmu3];
        for (let i = 0; i < halterungen.length; i++) {
            let schmuckFieldS = document.getElementById("checkbox");
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.value = schmuck[i].name;
            checkBox.id = schmuck[i].name;
            let label = document.createElement("label");
            label.htmlFor = schmuck[i].name;
            label.innerText = schmuck[i].name;
            let stepper = document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";
            schmuckFieldS.appendChild(checkBox);
            schmuckFieldS.appendChild(stepper);
            schmuckFieldS.appendChild(label);
        }
        //Checkboxen f�r die Kerzen
        let kerze = [kerze1, kerze2, kerze3];
        for (let i = 0; i < kerze.length; i++) {
            let kerzenFieldS = document.getElementById("checkboxkerze");
            let checkBoxK = document.createElement("input");
            checkBoxK.type = "checkbox";
            checkBoxK.value = kerze[i].name;
            checkBoxK.id = kerze[i].name;
            let label = document.createElement("label");
            label.htmlFor = kerze[i].name;
            label.innerText = kerze[i].name;
            let stepper = document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";
            kerzenFieldS.appendChild(checkBoxK);
            kerzenFieldS.appendChild(stepper);
            kerzenFieldS.appendChild(label);
        }
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChanges);
        }
    }
    function handleChanges(_event) {
        let target = _event.target;
        let anzahlNumber = parseInt(target.value);
        let preisArtikel = products;
        console.log("Preis fuer  betraegt: " + (anzahlNumber * preisArtikel[3]));
    }
})(WeihnachtsbaumKonfigurator || (WeihnachtsbaumKonfigurator = {}));
//# sourceMappingURL=Baum.js.map