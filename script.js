const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value.trim();
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();

    // Gender
    const genderInput = document.querySelector(
        'input[name="gender"]:checked'
    );
    const gender = genderInput ? genderInput.value : "";

    // Skills
    const skills = [];
    document.querySelectorAll(".checkbox-group input:checked").forEach(skill => {
        skills.push(skill.value);
    });

    // Mandatory Validation
    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        gender === "" ||
        department === "" ||
        course === "" ||
        skills.length === 0 ||
        dob === "" ||
        address === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid Email.");
        return;
    }

    // Mobile Validation
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    // Age Validation
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (age < 18) {
        alert("Age must be greater than 18.");
        return;
    }

    // Create Table Row
    const row = tableBody.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = mobile;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = department;
    row.insertCell(5).innerHTML = course;
    row.insertCell(6).innerHTML = skills.join(", ");
    row.insertCell(7).innerHTML = dob;
    row.insertCell(8).innerHTML = address;

    // Success Message
    alert("Student Registered Successfully!");

    // Reset Form
    form.reset();
});