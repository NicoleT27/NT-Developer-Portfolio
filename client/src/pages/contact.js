//  document.getElementById("contactForm").addEventListener("submit", function(event){
//     event.preventDefault();

//         const formData = new FormData(this);
//       fetch('/contact', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById("responseMessage").innerText = data;
//         console.log(data);
//         // Handle the response from the server as needed
//       })
//       .catch(error => {
//         console.error('Error:', error);
//           document.getElementById("responseMessage").innerText =
//             "An error occurred";
//         // Handle the error as needed
//       });
//     });
 

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.getElementById("email")
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const phone = document.getElementById("phone");
    const emailVal = email.value.trim();
    const subjectVal = subject.value.trim();
    const messageVal = message.value.trim();
    const phoneVal = phone.value.trim();


    const data =
    {
        email,
        subject,
        message,
        phone
    }





    // const formData = new FormData(this);
    // fetch("/", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const responseMessageElement =
    //       document.getElementById("responseMessage");
    //     responseMessageElement.innerText = data.message;

    //     if (data.success) {
    //       // Additional success handling if needed
    //     } else {
    //       // Additional error handling if needed
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     document.getElementById("responseMessage").innerText =
    //       "An error occurred";
    //     // Handle the error as needed
    //   });
  });