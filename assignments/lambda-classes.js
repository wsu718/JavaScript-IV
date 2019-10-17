// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name,
        this.age = props.age,
        this.location = props.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    };
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty,
        this.favLanguage = props.favLanguage,
        this.catchPhrase = props.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    };
    grade(studentObj, subject){
        console.log(`${studentObj.name} received a perfect score in ${subject}!`)
    };
    gradeChange(studentObj){
        studentObj.grade = (studentObj.grade + (Math.floor(Math.random() * 21) - 10))
    };
};

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.PreviousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`)
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    };
    graduate(){
        if (this.grade > 70) {
            return console.log(`${this.name} you are ready to graduate!`)
        } else {
            return console.log(`${this.name} you need to raise your GPA!`)
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
}

const frank = new Person({
    name: 'Frank',
    age: 30,
    location: 'LA'
});

const joe = new Student({
    name: 'joe',
    age: 30,
    location: 'the OC',
    previousBackground: 'Nothing important',
    className: 'Computer Science',
    favSubjects: ['math', 'science'],
    grade: 67
});

const pedro = new Instructor({
    name: 'pedro',
    age: 30,
    location: 'SF',
    specialty: 'OOP',
    favLanguage: 'Javascript',
    catchPhrase: 'Duh!'
});

const isabella = new ProjectManagers({
    name: 'isabella',
    age: 30,
    location: 'Maine',
    specialty: 'OOP',
    favLanguage: 'Javascript',
    catchPhrase: 'Duh!',
    gradClassName: 'CS25',
    favInstructor: 'Britt'
});

console.log(isabella.gradClassName);
console.log(joe.favSubjects);

frank.speak();
joe.speak();
pedro.speak();
isabella.speak();
pedro.demo('math');
pedro.grade(joe, 'math');
joe.listSubjects();
joe.PRAssignment('JS');
joe.sprintChallenge('JS');
isabella.standUp('web25');
isabella.debugsCode(joe, 'arrays')
console.log(joe.grade);
pedro.gradeChange(joe);
console.log(joe.grade);
joe.graduate();