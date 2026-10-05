// Generate Appointment ID
function generateAppointmentId() {
    return "APT" + Math.floor(1000 + Math.random() * 9000);
}

// Patient Registration
document.getElementById("patientForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const patientName = document.getElementById("patientName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const address = document.getElementById("address").value;
    const symptoms = document.getElementById("symptoms").value;

    const appointmentId = generateAppointmentId();
    const status = "Confirmed";

    // Add appointment to table
    const tableBody = document.getElementById("appointmentTableBody");

    tableBody.innerHTML = `
        <tr>
            <td>${appointmentId}</td>
            <td>${patientName}</td>
            <td>${department}</td>
            <td>${doctor}</td>
            <td>${appointmentDate}</td>
            <td>${appointmentTime}</td>
            <td>
                <span class="badge bg-success">${status}</span>
            </td>
        </tr>
    `;

    // Display health information
    const healthInfoCard = document.getElementById("healthInfoCard");

    healthInfoCard.innerHTML = `
        <div class="card-body">
            <h4 class="text-primary mb-4">Patient Health Information</h4>

            <div class="row g-3">

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Patient Name:</strong>
                        ${patientName}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Blood Group:</strong>
                        ${bloodGroup}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Department:</strong>
                        ${department}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Doctor:</strong>
                        ${doctor}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Appointment Date:</strong>
                        ${appointmentDate}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="health-item">
                        <strong>Appointment Time:</strong>
                        ${appointmentTime}
                    </div>
                </div>

                <div class="col-12">
                    <div class="health-item">
                        <strong>Symptoms:</strong>
                        ${symptoms}
                    </div>
                </div>

                <div class="col-12">
                    <div class="health-item">
                        <strong>Appointment Status:</strong>
                        <span class="badge bg-success">${status}</span>
                    </div>
                </div>

            </div>
        </div>
    `;

    // Success message
    alert(
        "Patient registered successfully!\n\n" +
        "Appointment ID: " + appointmentId
    );

    // Scroll to appointments
    document.getElementById("appointments").scrollIntoView({
        behavior: "smooth"
    });
});