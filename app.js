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
