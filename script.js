// // For Form to be functional
// async function submitForm(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Gather form data
//   const formData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   try {
//     // Send data to the API endpoint
//     const response = await fetch("https://your-api-endpoint.com/send-message", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     // Handle the response
//     if (response.ok) {
//       alert("Success! Your message has been sent.");
//       document.getElementById("contactForm").reset(); // Clear the form
//     } else {
//       throw new Error("Failed to send message");
//     }
//   } catch (error) {
//     alert("Error: " + error.message);
//   }
// }
