// Create a student enrollment system using JavaScript classes. Implement two classes, Student and 
// Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class 
// should have methods for enrolling in courses and displaying enrolled courses, while the Admission class 
// should handle student enrollments, course admission, and the display of enrolled students. Your task is to 
// implement these classes with clear and organized code, adhering to the specified requirements provided.

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.enrolledCourses = [];
    }

    assignCourse(course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} has enrolled in the course: ${course}`);
    }

    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.enrolledCourses.join(', ')}`);
    }
}

class Admission {
    constructor() {
        this.enrolledStudents = [];
    }

    enrollStudent(student) {
        this.enrolledStudents.push(student);
        console.log(`Student ${student.name} with email ${student.email} has been enrolled.`);
    }

    admitStudent(student) {
        this.enrolledStudents.push(student);
        console.log(`Student ${student.name} has been enrolled.`);
    }

    showEnrolledStudents() {
        console.log("Enrolled students:");
        this.enrolledStudents.forEach(student => {
            console.log(`${student.name} (${student.email}): ${student.enrolledCourses.join(', ')}`);
        });
    }
}

const admissionOffice = new Admission();

const student1 = new Student('Mithun', 'mithun@pw.live');
const student2 = new Student('Farman', 'farman@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

student1.assignCourse('Full Stack WEB Development');
student2.assignCourse('Data Science Masters');

student1.showCourses();
student2.showCourses();

admissionOffice.showEnrolledStudents();
