var Participant = /** @class */ (function () {
    function Participant(firstName, lastName, originCountry, educationLevel, languages, learningArea, offers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.originCountry = originCountry;
        this.educationLevel = educationLevel;
        this.languages = languages;
        this.learningArea = learningArea;
        this.offers = offers;
    }
    Participant.prototype.subscribeCourse = function (course) {
        course.addSubscriber(this);
    };
    return Participant;
}());
var Course = /** @class */ (function () {
    function Course(title, description, duration, professionalArea, subscribers) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.professionalArea = professionalArea;
        this.subscribers = subscribers;
    }
    Course.prototype.addSubscriber = function (participant) {
        this.subscribers.push(participant);
    };
    return Course;
}());
var Company = /** @class */ (function () {
    function Company(name, businessArea, description, openPositions) {
        this.name = name;
        this.businessArea = businessArea;
        this.description = description;
        this.openPositions = openPositions;
    }
    Company.prototype.offerPosition = function (participant, position) {
        participant.offers.push("".concat(position, " by ").concat(this.name));
    };
    return Company;
}());
// Examples
var participant1 = new Participant('Mario', 'Rossi', 'Italia', 'Diploma di maturità scientifica', ['Italiano', 'Inglese'], 'artigianato', []);
var participant2 = new Participant('Marco', 'Verdi', 'Italia', 'Diploma di maturità classica', ['Italiano', 'Spagnolo'], 'artigianato', []);
var participant3 = new Participant('Anna', 'Neri', 'Italia', 'Diploma di maturità linguistica', ['Italiano', 'Inglese', 'Spagnolo', 'Tedesco'], 'ristorazione', []);
var course1 = new Course('Corso per intagliatori di legname', 'Ti insegnamo a intagliare il legno', 135, 'artigianato', []);
var course2 = new Course('Corso per cuochi', 'Ti insegnamo a cucinare', 150, 'ristorazione', []);
var company1 = new Company('Artigiani4Ever', 'artigianato', 'Abbiamo aperto più di 100 botteghe in Italia', ['Intagliatore di legname', 'Fabbro']);
var company2 = new Company('PizzaSud', 'artigianato', 'Abbiamo aperto più di 30 pizzerie nel Sud Italia', ['Pizzaiolo', 'Cuoco']);
participant1.subscribeCourse(course1);
course1.addSubscriber(participant2);
console.log("course1 subscribers: ".concat(course1.subscribers.map(function (el) { return " ".concat(el.firstName, " ").concat(el.lastName); })));
participant3.subscribeCourse(course2);
console.log("course2 subscribers: ".concat(course2.subscribers.map(function (el) { return " ".concat(el.firstName, " ").concat(el.lastName); })));
company1.offerPosition(participant1, company1.openPositions[0]);
company1.offerPosition(participant2, company1.openPositions[0]);
company1.offerPosition(participant2, company1.openPositions[1]);
company2.offerPosition(participant3, company2.openPositions[1]);
console.log("offers for participant1: ".concat(participant1.offers));
console.log("offers for participant2: ".concat(participant2.offers));
console.log("offers for participant3: ".concat(participant3.offers));
