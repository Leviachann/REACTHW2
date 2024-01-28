import React from 'react';
import './Footer.css';
const Footer = ({ feedback, onFeedbackChange }) => {
  return (
    <footer>
      <h2>Feedback</h2>
      <div className="feedback-container">
        {feedback.map((item, index) => (
          <div key={index} className="feedback-card">
            <p className="username">{item.username}: </p>
            <p className="feedback-text">{item.text}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
