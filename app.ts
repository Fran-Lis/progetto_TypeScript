interface IParticipant{
    firstName: string;
    lastName: string;
    originCountry: string;
    educationLevel: string;
    languages: string[];
    learningArea: string;
    offers: string[];
    subscribeCourse(course: ICourse): void;
}

interface ICourse{
    title: string;
    description: string;
    duration: number;
    professionalArea: string;
    subscribers: IParticipant[];
    addSubscriber(participant: IParticipant): void
}

interface ICompany{
    name: string;
    businessArea: string;
    description: string;
    openPositions: string[];
    offerPosition(participant: IParticipant, position: string): void
}

class Participant implements IParticipant{
    constructor(
        public firstName: string, 
        public lastName: string, 
        public originCountry: string,
        public educationLevel: string,
        public languages: string[],
        public learningArea: string,
        public offers: string[]
    ){}

    subscribeCourse(course: Course): void{
        course.addSubscriber(this)
    }
}

class Course implements ICourse{
    constructor(
        public title: string,
        public description: string,
        public duration: number,
        public professionalArea: string,
        public subscribers: Participant[],
    ){}
    addSubscriber(participant: Participant): void {
        this.subscribers.push(participant)
    }
}

class Company implements ICompany{
    constructor(
        public name: string,
        public businessArea: string,
        public description: string,
        public openPositions: string[]
    ){}

    offerPosition(participant: Participant, position: string): void {
        participant.offers.push(`${position} by ${this.name}`)
    }
}

// Examples

let participant1 = new Participant('Mario', 'Rossi', 'Italia', 'Diploma di maturità scientifica', ['Italiano', 'Inglese'], 'artigianato', [])
let participant2 = new Participant('Marco', 'Verdi', 'Italia', 'Diploma di maturità classica', ['Italiano', 'Spagnolo'], 'artigianato', [])
let participant3 = new Participant('Anna', 'Neri', 'Italia', 'Diploma di maturità linguistica', ['Italiano', 'Inglese', 'Spagnolo', 'Tedesco'], 'ristorazione', [])

let course1 = new Course('Corso per intagliatori di legname', 'Ti insegnamo a intagliare il legno', 135, 'artigianato', [])
let course2 = new Course('Corso per cuochi', 'Ti insegnamo a cucinare', 150, 'ristorazione', [])

let company1 = new Company('Artigiani4Ever', 'artigianato', 'Abbiamo aperto più di 100 botteghe in Italia', ['Intagliatore di legname', 'Fabbro'])
let company2 = new Company('PizzaSud', 'artigianato', 'Abbiamo aperto più di 30 pizzerie nel Sud Italia', ['Pizzaiolo', 'Cuoco'])

participant1.subscribeCourse(course1)
course1.addSubscriber(participant2)
console.log(`course1 subscribers: ${course1.subscribers.map((el) => ` ${el.firstName} ${el.lastName}`)}`)

participant3.subscribeCourse(course2)
console.log(`course2 subscribers: ${course2.subscribers.map((el) => ` ${el.firstName} ${el.lastName}`)}`)

company1.offerPosition(participant1, company1.openPositions[0])
company1.offerPosition(participant2, company1.openPositions[0])
company1.offerPosition(participant2, company1.openPositions[1])
company2.offerPosition(participant3, company2.openPositions[1])

console.log(`offers for participant1: ${participant1.offers}`)
console.log(`offers for participant2: ${participant2.offers}`)
console.log(`offers for participant3: ${participant3.offers}`)