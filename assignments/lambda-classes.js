// CODE here for your Lambda Classes
// BASE CLASS
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){ 
        return `This is ${this.name}`;
    }
};
const john117 = new Person({
    name: "John 117",
    age: 37,
    location: "Forward Unto Dawn",
    gender: "Male",
});
const cortana = new Person({
    name: "Cortana",
    age: 7,
    location: "Halo Infinite",
    gender: "Ambiguous due to being an AI, represented as female"
});
//console.log(john117.age);
//console.log(cortana.gender);
//console.log(john117.speak());
//console.log(cortana.speak());
// INSTRUCTOR CLASS
class Instructor extends Person {
    constructor(teacherAttributes){
        super(teacherAttributes);
        this.position = teacherAttributes.position;
        this.specialty = teacherAttributes.specialty;
        this.favLanguage = teacherAttributes.favLanguage;
        this.catchPhrase = teacherAttributes.catchPhrase;
    }
    demo(subject){
        return `${this.position} ${this.name} says: 'Today we are learning about ${subject}!'`;
    }
    gradePRAssignment(student, subject){
        return `${this.position} ${this.name} says: '${student.name} has received a perfect score on the ${subject} Pull Request Assignment!'`
    }
    gradeSprintChallenge(student, subject){
        return `${this.position} ${this.name} says: '${student.name} has received a perfect score on the ${subject} Sprint Challenge!'`
    }
    addGradePercent(student){
        student.gradePercent += (Math.floor(Math.random()* 10));
        return `${this.position} ${this.name} adds some grade points to ${student.name}'s grade percentage!`
    };
    addGradePerfect(student){
        student.gradePercent += 10
        return `${this.position} ${this.name} adds a perfect 10/10 to ${student.name}'s grade percentage!`
    }
}
// STUDENT CLASS
class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.gradePercent = studentAttributes.gradePercent;
    }
    listsSubjects(){
        return `${this.name}'s favorite subjects at Lambda are: '${this.favSubjects}'`;
    }
    PRAssignment(subject){
        return `${this.name} has completed the ${subject} Pull Request Assignment!`
    }
    sprintChallenge(subject){
        return `${this.name} has completed the ${subject} Sprint Challenge!`
    }
    graduate(){
        if(this.gradePercent >= 70){
            return `${this.name} gradutes from Lambda School!`
        } else {
            return `${this.name} does not gradute from Lambda School!`
        }
    };
}
// PROJECT MANAGERS HERE
class ProjectManager extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    };
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel stand up time!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}!`
    }
}
// OBJECTS HERE
const instruct1 = new Instructor({
    name: "Josh Knell",
    age: "35",
    location:"Utah",
    gender: "Male",
    position: "Instructor",
    specialty: "Teaching!",
    favLanguage: "Javascript!",
    catchPhrase: "You're not stupid, you can do this!",
})
const instruct2 = new Instructor({
    name: "Dan Something",
    age: "35",
    location:"airplane",
    gender: "Male",
    position: "Instructor",
    specialty: "Teaching!",
    favLanguage: "HTML/CSS",
    catchPhrase: "[I haven't had any time to pull a catchphrase from him]",
})
const proman1 = new ProjectManager({
    name: "Bub Trident",
    age: 27,
    location:"Philidelphia",
    gender: "Male",
    position: "PM",
    specialty: "Debugging Code!",
    favLanguage: "React!",
    catchPhrase: "Just chew this code a little bit, then you'll get it!",
    gradClassName: "Web18",
    favInstructor: "Josh",
})
const proman2 = new ProjectManager({
    name: "Coffee Mug",
    age: 29,
    location:"California",
    gender: "Female",
    position: "PM",
    specialty: "Writing Code!",
    favLanguage: "C#!",
    catchPhrase: "Time to perk up!",
    gradClassName: "Web18",
    favInstructor: "Dan",
})
const student1 = new Student({
    name: "Lana Lane",
    age: 25,
    location: "Florida",
    gender: "Female",
    specialty: "Box models... without Flexbox!",
    favLanguage: "CSS",
    previousBackground: "Accounting",
    className: "Web19",
    favSubjects: ["HTML", "CSS", "Javascript"],
    gradePercent: 40,
})
const student2 = new Student({
    name: "Clark Kent",
    age: 35,
    location: "New York",
    gender: "Male",
    specialty: "LESS!",
    favLanguage: "CSS",
    previousBackground: "Journalism",
    className: "Web19",
    favSubjects: ["HTML", "CSS", "Javascript"],
    gradePercent: 40,
})
// CHANNELS HERE
const proman1Channel = `${proman1.name}'s Channel`
const proman2Channel = `${proman2.name}'s Channel`
const helpChannel = "Help Channel"
const sprintChannel = "Sprint Channel"
// SUBJECTS HERE
const js = "Javascript";
const rt = "React";
const html = "Hyper Text Markup Language";
const css = "Cascading Style Sheets";
// STRETCH FUNCTIONS HERE
// function pointsforgrade(min, max) {
//     Math.floor(Math.random() * (max - min) + min);
// }

// TESTING INSTRUCTOR, PM, AND STUDENT 1 HERE
// console.log(instruct1.demo(js));
// console.log(student1.PRAssignment(js));
// console.log(proman1.standUp(proman1Channel));
// console.log(proman1.standUp(helpChannel));
// console.log(proman1.standUp(sprintChannel));
// console.log(student1.listsSubjects());
// console.log(proman1.gradePRAssignment(student1, js));
// console.log(student1.sprintChallenge(js));
// console.log(proman1.debugsCode(student1, js));
// console.log(instruct1.gradeSprintChallenge(student1, js));
// TESTING INSTRUCTOR, PM, AND STUDENT 2 HERE
// console.log(instruct2.demo(html));
// console.log(student2.PRAssignment(html));
// console.log(proman2.standUp(proman2Channel));
// console.log(student2.listsSubjects());
// console.log(proman2.gradePRAssignment(student2, html));
// console.log(student2.sprintChallenge(html));
// console.log(proman2.debugsCode(student2, html));
// console.log(instruct2.gradeSprintChallenge(student2, html));

// STRETCH LOGS HERE
console.log(student1.gradePercent);
console.log(student2.gradePercent);
console.log(student1.PRAssignment(html));
console.log(student2.PRAssignment(html));
console.log(proman1.addGradePercent(student1));
console.log(proman2.addGradePercent(student2));
console.log(student1.sprintChallenge(html));
console.log(student2.sprintChallenge(html));
console.log(instruct1.addGradePerfect(student1));
console.log(instruct2.addGradePerfect(student2));
console.log(student1.gradePercent);
console.log(student2.gradePercent);
console.log(student1.PRAssignment(css));
console.log(student2.PRAssignment(css));
console.log(proman1.addGradePercent(student1));
console.log(proman2.addGradePercent(student2));
console.log(student1.sprintChallenge(css));
console.log(student2.sprintChallenge(css));
console.log(instruct1.addGradePercent(student1));
console.log(instruct2.addGradePercent(student2));
console.log(student1.gradePercent);
console.log(student2.gradePercent);
console.log(student1.PRAssignment(css));
console.log(student2.PRAssignment(css));
console.log(proman1.addGradePercent(student1));
console.log(proman2.addGradePercent(student2));
console.log(student1.sprintChallenge(css));
console.log(student2.sprintChallenge(css));
console.log(instruct1.addGradePercent(student1));
console.log(instruct2.addGradePercent(student2));
console.log(student1.gradePercent);
console.log(student2.gradePercent);
console.log(student1.graduate());
console.log(student2.graduate());

