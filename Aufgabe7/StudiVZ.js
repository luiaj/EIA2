/*
Aufgabe: , 7 StudiVZ
Name: Julia Kaiser
Matrikel: 256580
Datum: 01.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (M) oder 1(F)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitted = _input.split(",");
        if (Number.isNaN(parseInt(splitted[0]))) {
            return "Matrikelnummer keine Nummer";
        }
        var geschlecht = parseInt(splitted[4]) == 1; //(splitted[4] === "true");
        let student = {
            Matrikelnummer: parseInt(splitted[0]),
            Name: splitted[1],
            Vorname: splitted[2],
            Alter: parseInt(splitted[3]),
            Geschlecht: geschlecht,
            Kommentar: splitted[5]
        };
        students.push(student);
        console.log(students[0], students[1]);
        return "Eingegebene Daten: " + "\nMatrikelnummer: " + student.Matrikelnummer + "\nName: " + student.Name + "\nVorname: " + student.Vorname + "\nAlter: " + student.Alter + "\nGeschlecht: " + student.Geschlecht + "\nKommentar: " + student.Kommentar;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (_matrikel == students[i].Matrikelnummer) {
                return "Student: " + "\nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + students[i].Geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map