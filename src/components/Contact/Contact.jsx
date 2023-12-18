import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Phone number copied to clipboard!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="mailto:arnabofficial123@gmail.com"
            id="contact-email"
            target="_blank"
          >
            arnabofficial123@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/starkArnab/"
            id="contact-github"
            target="_blank"
          >
            github.com/StarkArnab
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/arnab-d-865b3b1a4/"
            id="contact-linkedin"
            target="_blank"
          >
            linkedin.com/ArnabDey
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone Icon" />
          <a
            href="#"
            id="contact-phone"
            onClick={(e) => {
              e.preventDefault();
              copyToClipboard("+91 9748816798");
            }}
          >
            +91 9748816798
          </a>
        </li>
      </ul>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  );
};
