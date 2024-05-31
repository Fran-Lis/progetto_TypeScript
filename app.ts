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