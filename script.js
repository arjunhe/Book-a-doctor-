// Mock data for doctors (can be replaced with API data)
const doctors = [
    { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Lisa Wong", specialty: "Dermatologist" },
    { id: 3, name: "Dr. Michael White", specialty: "Neurologist" }
  ];
  
  // Register a new user
  document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Display a success message (replace with API call in a real app)
    document.getElementById("message").textContent = `Welcome, ${name}! You have successfully registered.`;
  });
  
  // Display doctors on the doctor listing page
  const doctorList = document.getElementById("doctorList");
  
  if (doctorList) {
    doctors.forEach((doctor) => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("doctor-card");
  
      doctorCard.innerHTML = `
        <h3>${doctor.name}</h3>
        <p>Specialty: ${doctor.specialty}</p>
        <button onclick="bookDoctor(${doctor.id})">Book Now</button>
      `;
      doctorList.appendChild(doctorCard);
    });
  }
  
  // Function to book a doctor
  function bookDoctor(doctorId) {
    const doctor = doctors.find((doc) => doc.id === doctorId);
    if (doctor) {
      alert(`You have successfully booked an appointment with ${doctor.name}!`);
    }
  }
  