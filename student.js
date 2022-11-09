class Student{

    #id;
    #nom;
    #cognom;
    #estudis;
    #curs; //númeric, entre 1 al 4
    #email;

    constructor(id) {
        this.#id = id;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get cognom() {
        return this.#cognom;
    }

    set cognom(value) {
        this.#cognom = value;
    }


    set estudis(value) {
        this.#estudis = value;
    }

    get curs() {
        return this.#curs;
    }

    set curs(value) {
        this.#curs = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get codiEstudiant() {

        let codi = this.#estudis;

        let arrayTest = codi.split("-");
        let codiFinal = arrayTest[0];

        return codiFinal;


    }

    get nomEstudi(){


        let codi = this.#estudis;

        let arrayTest = codi.split("-");
        let codiFinal = arrayTest[1];

        return codiFinal;

    }

}


/*

Creeu els accessors de lectura i escriptura necessaris per tal de poder modificar totes les dades (els estudis haurien de ser de només escriptura)


Creeu també un mètode (getCodiEstudi) que retornarà només el codi de l'estudi que està realitzant l'alumne (ICC0,IP10, etc)




 */


/*

-> id: 9641005012
-> nom: Adrià
-> cognom: Neila Reguero
-> estudis: ICC0 - Desenvolupament d'aplicacions web
-> curs: 2
-> adria.neila@cirvianum.cat


 */

let alumne1 = new Student(9641005012);
alumne1.nom="Adrià";
alumne1.cognom="Neila Reguero";
alumne1.estudis="ICC0 - Desenvolupament d'aplicacions web";
alumne1.curs=2;
alumne1.email="adria.neila@cirvianum.cat";
console.log(alumne1);
console.log("\n");
console.log("Codi estudiant: " + alumne1.codiEstudiant);
console.log("Nom estudiant: " + alumne1.nomEstudi);


let alumne2 = new Student(891725033);
alumne2.nom="Abril";
alumne2.cognom="Rivas Rodriguez";
alumne2.estudis="BATXLOE - Batxillerat de ciències i tecnologia";
alumne2.curs=2;
alumne2.email="abril.rivas@cirvianum.cat";
console.log(alumne2);
console.log("\n");
console.log("Codi estudiant: " + alumne2.codiEstudiant);
console.log("Nom estudiant: " + alumne2.nomEstudi);



let studentsTest2 = [ [alumne1],[alumne2]];

let students = [[9641005012, 'Adrià', 'Neila Reguero', "ICC0 - Desenvolupament d'aplicacions web", 2, 'adria.neila@cirvianum.cat'],
    [1544905045, 'Albert', 'Urgell Caballeria',  "ICC0 - Desenvolupament d'aplicacions web", 2, 'albert.urgell@cirvianum.cat'],
    [15316198455, 'Rafael Andre', 'Sousa Silva', "ICC0 - Desenvolupament d'aplicacions web", 2, 'rafaelandre.sousa@cirvianum.cat'],
    [10140705019, 'Navjashan', 'Singh Kaur', "ICC0 - Desenvolupament d'aplicacions web", 2, 'navjashan.singh@cirvianum.cat'],
    [9732365012, 'Pau', 'Mas Vilar', "ICC0 - Desenvolupament d'aplicacions web", 2, 'pau.mas@cirvianum.cat'],
    [15503568549, 'Paulo Andree', 'Fraga Castro', "ICC0 - Desenvolupament d'aplicacions web", 2, 'paulo.fraga@cirvianum.cat'],
    [8363275019, 'Marçal', 'Clajer Regales', "ICC0 - Desenvolupament d'aplicacions web", 2, 'marcal.clajer@cirvianum.cat'],
    [9684995018, 'Genís', 'Berengueras Sentmarti', "ICC0 - Desenvolupament d'aplicacions web", 2, 'genis.berengueras@cirvianum.cat'],
    [1518095046, 'Jordi', 'Bargalló Segura', "ICC0 - Desenvolupament d'aplicacions web", 2, 'jordi.bargallo@cirvianum.cat'],
    [4440985095, 'Nil', 'Roura Gallardo', "IP10 - Perruqueria i cosmètica capil·lar", 2, 'nil.roura@cirvianum.cat'],
    [1476615042, 'Tatiana', 'Rodríguez', "IP10 - Perruqueria i cosmètica capil·lar", 2, 'tatiana.rodriguez@cirvianum.cat'],
    [6713295009, 'Aleix', 'Povedano Mas', "IC10 - Sistemes microinformàtics i xarxes", 2, 'aleix.povedano@cirvian   um.cat'],
    [6712625006, 'Marc', 'Penas Garrote', "IC10 - Sistemes microinformàtics i xarxes", 2, 'marc.penas@cirvianum.cat'],
    [891725033, 'Abril', 'Rivas Rodriguez', "BATXLOE - Batxillerat de ciències i tecnologia", 2, 'abril.rivas@cirvianum.cat'],
    [6407865005, 'Eloi', 'Puig Cotrina', "BATXLOE - Batxillerat de ciències i tecnologia", 2, 'eloi.puig@cirvianum.cat']];



class StudentsCollection {

    #arrayEstudiants;

    constructor(arrayEstudiants) {
        this.#arrayEstudiants = arrayEstudiants;
    }


    FuncioTest(variableTest){
        return variableTest;
    }

    static FuncioTest2(variable){
        return variableTest;
    }

}

































