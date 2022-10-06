// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { FaArrowRight } from "react-icons/fa";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("myyveyww");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form
//       className="formNewsletter"
//       action="https://formspree.io/f/myyveyww"
//       method="POST"
//       onSubmit={handleSubmit}
//     >
//       <label htmlFor="email"></label>
//       <div className="containerInputEmail">
//       <input
//         id="email"
//         type="email"
//         name="email"
//         placeholder=" Ingresa tu email"
//       />
//       <button Name="buttonSubmit" type="submit" disabled={state.submitting}>
//         <FaArrowRight />
//       </button>
//       </div>
//       <div className="messangeError">
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <ValidationError  prefix="Message" field="message" errors={state.errors} />
//       </div>
//     </form>
//   );
// }

// export { ContactForm };
