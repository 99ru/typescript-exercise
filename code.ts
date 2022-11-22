// Yan & Oskar - 2022-11-22

// 1 Types
const animal: string = "bird";
const animals: string[] = ["bird", "tiger", "ronaldo", "sui"];
const age: number = 45;

const isOpen: boolean = false;

const sum = (tal1: number, tal2: number) : number => tal1 + tal2;

const sayHello = (name: string): string => {
    return `Hello ${name}`;
}

const room: object = {
    name: "Stora konferensen",   
    seats: 50,
    dropInAvailable: false,
    hourlyFee: 350
}


// 2 Enum

enum Color {
  red = 'Du måste stanna',
  yellow = 'Gasa!',
  green = 'Kör på'
}

const trafficLight = (color: Color) => {
    switch (color) {
        case Color.red:
            console.log(Color.red);
            break;
        case Color.yellow:
            console.log(Color.yellow);
            break;
          
        case Color.green:
            console.log(Color.green);
            break;
    }
  }

    trafficLight(Color.yellow);
    // a) skapa en enum => Color så att du istället anropar funktionen såhär: trafficLight(Color.red); 

    // b) ta emot värde av typen Color

    // c) skriv om koden så att den använder enum istället för string i switch (col) 


    // 3) Funktion
    const getPersonList = (firstname: string, lastname: string, yearOfBirth: number, isFemale: boolean) : string => {
        return `<ul>
        <li><b>Förnamn:</b> ${firstname}</li>
         <li><b>Efternamn:</b> ${lastname}</li>
         <li><b>Födelseår:</b> ${yearOfBirth}</li>
         <li><b>Kön:</b> ${isFemale ? "Man" : "Kvinna"}</li>
         </ul>`;
    }
 
    /* const personHTML: string = getPersonList('Juan', 'Penaldo', 1337, false) */

   /* console.log(getPersonList('Juan', 'Penaldo', 1337, false)); */

   // 4) Interface
   // b. skapa ett objekt av typen Person och lägg till alla atribut


// a)
 interface Person { 
  firstname: string,
  lastname: string,
  yaerOfBirth: number,
  isFemale: boolean
}

// b)
const person: Person = {
    firstname: 'Juan',
    lastname: 'Penaldo',
    yaerOfBirth: 1337,
    isFemale: false
}

// c), d)
const getPersonList2 = (person: Person) : string => {
    return `<ul>
    <li><b>Förnamn:</b> ${person.firstname}</li>
        <li><b>Efternamn:</b> ${person.lastname}</li>
        <li><b>Födelseår:</b> ${person.yaerOfBirth}</li>
        <li><b>Kön:</b> ${person.isFemale}</li>
        </ul>`;
}

// e)
console.log(getPersonList2(person));

   // 5) Array / Funktion / Interface
   // a.) skapa ett interface examResult och applicera det på objekten i arrayen
   // b.) ändra alla any i getPassedExams till rätt typ 

   interface ExamResult { 
        studentId: number;
        score: number;
        name: string; 
   }

   const getPassedExams = (examResults: ExamResult[]): object => examResults.filter((examResult) => examResult.score >= 50);

   const examResults: ExamResult [] = [
    {studentId: 12, score: 75, name:"Oskar"},
    {studentId: 15, score: 50, name:"Juan"},
    {studentId: 18, score: 10, name:"Simon"},
   ];

    const passedExams = getPassedExams(examResults);
    console.log(passedExams); 
