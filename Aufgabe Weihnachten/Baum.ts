namespace WeihnachtsbaumKonfigurator {
    window.addEventListener("load", init);


    interface Produkte {
        name: string;
        price: number;
    }
    //Bäume
    let baumklein: Produkte = {
        name: "Baum klein",
        price: 10

    };

    let baummittel: Produkte = {
        name: "Baum mittel",
        price: 20
    }

    let baumgross: Produkte = {
        name: "Baum gross",
        price: 30
    }
    //Halterungen
    let halt1: Produkte = {
        name: "Halterung gruen",
        price: 15
    }

    let halt2: Produkte = {
        name: "Halterung rot",
        price: 15
    }

    let halt3: Produkte = {
        name: "Halterung braun",
        price: 15
    }
    //Schmuck
    let schmu1: Produkte = {
        name: "Lichterkette",
        price: 5
    }

    let schmu2: Produkte = {
        name: "Stern",
        price: 3
    }

    let schmu3: Produkte = {
        name: "Lametta",
        price: 3
    }
    //Kerzen
    let kerze1: Produkte = {
        name: "Kerzen klein",
        price: 3
    }

    let kerze2: Produkte = {
        name: "Kerzen mittel",
        price: 3
    }

    let kerze3: Produkte = {
        name: "Kerzen gross",
        price: 3
    }

    let products: number[] = [baumklein.price, baummittel.price, baumgross.price, halt1.price, halt2.price, halt3.price, schmu1.price, schmu2.price, schmu3.price, kerze1.price, kerze2.price, kerze3.price];
    
    function init(_event: Event): void {
               
        //Radiobuttons für die Bäume
        let baeume: Produkte[] = [baumklein, baummittel, baumgross];
          
        for (let i: number = 0; i < baeume.length; i++) {
            let baumFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("baum");

            let radioButton: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            radioButton.type = "radio";
            radioButton.value = baeume[i].name;
            radioButton.id = baeume[i].name;

            let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = baeume[i].name;
            label.innerText = baeume[i].name;

            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }
        
        //Radiobuttons für die Halterungen
        let halterungen: Produkte[] = [halt1, halt2, halt3];

        for (let i: number = 0; i < halterungen.length; i++) {
            let halterungFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("halterung");

            let radioButton: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            radioButton.type = "radio";
            radioButton.value = halterungen[i].name;
            radioButton.id = halterungen[i].name;

            let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = halterungen[i].name;
            label.innerText = halterungen[i].name;

            let stepper: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";

            
            halterungFieldS.appendChild(radioButton);
            halterungFieldS.appendChild(stepper);
            halterungFieldS.appendChild(label);
        }
        
        //Checkboxen für den Schmuck
        let schmuck: Produkte[] = [schmu1, schmu2, schmu3];

        for (let i: number = 0; i < halterungen.length; i++) {
            let schmuckFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("checkbox");

            let checkBox: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.value = schmuck[i].name;
            checkBox.id = schmuck[i].name;

            let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = schmuck[i].name;
            label.innerText = schmuck[i].name;

            let stepper: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";

            schmuckFieldS.appendChild(checkBox);
            schmuckFieldS.appendChild(stepper);
            schmuckFieldS.appendChild(label);
        }
        
        //Checkboxen für die Kerzen
        let kerze: Produkte[] = [kerze1, kerze2, kerze3];

        for (let i: number = 0; i < kerze.length; i++) {
            let kerzenFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("checkboxkerze");

            let checkBoxK: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            checkBoxK.type = "checkbox";
            checkBoxK.value = kerze[i].name;
            checkBoxK.id = kerze[i].name;

            let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = kerze[i].name;
            label.innerText = kerze[i].name;

            let stepper: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            stepper.type = "number";
            stepper.value = "0";
            stepper.step = "1";
            stepper.min = "1";
            stepper.max = "10";

            kerzenFieldS.appendChild(checkBoxK);
            kerzenFieldS.appendChild(stepper);
            kerzenFieldS.appendChild(label);
       
        }

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChanges);
        }
    }

    function handleChanges(_event: Event): void {
        
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let anzahlNumber: number = parseInt(target.value); 
        let preisArtikel: number[] = products;    
        console.log("Preis fuer  betraegt: " + (anzahlNumber * preisArtikel[3]));
    }
}