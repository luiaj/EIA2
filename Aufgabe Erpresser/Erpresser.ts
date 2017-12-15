/*
Aufgabe: 9, Erpresserbrief
Name: Julia Kaiser
Matrikel: 256580
Datum: 14.12.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace L9_Erpresser {
    window.addEventListener("load", init);
    
    let currentLetter: string;

    function init(): void {
        
        //Array für das Alphabet
        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawSquare(buchstaben[i]);
                }            
            } 
        drawLetter();
        }
    
        function drawSquare(_buchstaben: string): void {

            let square: HTMLDivElement = document.createElement("div");

            square.style.width = "30px";
            square.style.height = "30px";
            square.style.backgroundColor = "black";
            square.innerText = _buchstaben;
            square.style.marginLeft = "3px";
            square.style.marginTop = "3px";
            square.id = _buchstaben;
            square.className = "letters";

            
            square.addEventListener("click", handleClick);
            document.body.appendChild(square);

        }
    
        function drawLetter(): void {

            let letter: HTMLDivElement = document.createElement("div");

            letter.style.width = "855px";
            letter.style.height = "300px";
            letter.style.backgroundColor = "grey";
            letter.style.border = "3px dotted black";
            letter.style.marginLeft = "3px";
            letter.style.marginTop = "10px";
            
            letter.addEventListener("click", putLetter);
            document.body.appendChild(letter);

        }

        function handleClick(_event: MouseEvent): void {
            let click: HTMLDivElement = <HTMLDivElement>_event.target;
            click.style.backgroundColor = "pink";
            
            currentLetter  = click.id;
             
            let divlist: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>> document.getElementsByClassName("letters");
            
            for (let i: number = 0; i < divlist.length; i++) {
                if (currentLetter != divlist[i].id) {
                    divlist[i].style.backgroundColor = "black";
                }
            }


        }
    
        function putLetter(_event: MouseEvent): void {
            let box: HTMLDivElement = document.createElement("div");

            box.style.width = "30px";
            box.style.height = "30px";
            box.style.backgroundColor = "black";
            box.innerText = currentLetter;
            box.style.marginLeft = "3px";
            box.style.marginTop = "3px";
            box.id = currentLetter;
            box.className = "letters";
            box.style.position = "absolute";
            box.style.left = _event.pageX + "px";
            box.style.top = _event.pageY + "px";
            
            
            document.body.appendChild(box);

            
            let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
        }
}
