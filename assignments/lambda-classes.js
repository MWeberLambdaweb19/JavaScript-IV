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
console.log(john117.age);
console.log(cortana.gender);
console.log(john117.speak());
console.log(cortana.speak());
// INSTRUCTOR CLASS
class Instructor extends Person {
    constructor(teacherAttributes){
        super(teacherAttributes);
        this.specialty = teacherAttributes.specialty;
        this.favLanguage = teacherAttributes.favLanguage;
        this.catchPhrase = teacherAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} has received a perfect score on ${subject}!`
    }
}
// STUDENT CLASS
class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        return `${favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has completed ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has completed ${subject}`
    }
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
const josh = new Instructor({
    name: "Josh Knell",
    age: "35",
    location:"Utah",
    gender: "Male",
    specialty: "Teaching!",
    favLanguage: "Javascript!",
    catchPhrase: "You're not stupid, you can do this!",
})
const dan = new Instructor({
    name: "Dan",
    age: "35",
    location:"airplane",
    gender: "Male",
    specialty: "Teaching!",
    favLanguage: "HTML/CSS",
    catchPhrase: "[I haven't had any time to pull a catchphrase from him]",
})
const proman1 = new ProjectManager({
    name: "Bub Trident",
    age: 27,
    location:"Philidelphia",
    gender: "Male",
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
    specialty: "Writing Code!",
    favLanguage: "C#!",
    catchPhrase: "Time to perk up!",
    gradClassName: "Web18",
    favInstructor: "Dan",
})
// CHANNELS HERE
const proman1Channel = `${proman1.name}'s Channel!`
const proman2Channel = `${proman2.name}'s Channel!`
const helpChannel = "Help Channel"
const sprintChannel = "Sprint Channel"
// SUBJECTS HERE
const js = "Javascript";
const rt = "React";
const html = "Hyper Text Markup Language";
const css = "Cascading Style Sheets";
console.log(proman1.standUp(proman1Channel))