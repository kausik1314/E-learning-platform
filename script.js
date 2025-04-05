// Schedule Now button
document.addEventListener("DOMContentLoaded", function () {
    const scheduleBtn = document.querySelector("button.bg-green-500");
    const timeSlotSelect = document.querySelector("select");

    scheduleBtn.addEventListener("click", () => {
      const selectedTime = timeSlotSelect.value;
      if (selectedTime === "Select Time Slot") {
        alert("⏰ Please select a time slot before scheduling.");
      } else {
        alert(`✅ Lecture scheduled for ${selectedTime}!`);
        // You can also send this data to a backend here via fetch()
      }
    });

    // View Reports button
    const reportBtn = document.querySelector("button.bg-yellow-500");
    reportBtn.addEventListener("click", () => {
      alert("📊 Redirecting to performance reports...");
      // Simulate redirect (can replace with real URL later)
      window.location.href = "performance-reports.html"; // or any other page
    });
  });