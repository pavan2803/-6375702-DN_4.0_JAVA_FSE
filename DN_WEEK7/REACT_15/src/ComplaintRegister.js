import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName.trim() || !complaint.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    const referenceNumber = 'REF' + Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint Registered Successfully!\nReference Number: ${referenceNumber}`);
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Employee Name:</label>
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        style={styles.input}
        placeholder="Enter your name"
      />

      <label style={styles.label}>Complaint:</label>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        style={styles.textarea}
        placeholder="Describe your complaint"
      ></textarea>

      <button type="submit" style={styles.button}>Submit Complaint</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    gap: '15px',
    background: '#f2f2f2',
    padding: '20px',
    borderRadius: '10px'
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    height: '100px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default ComplaintRegister;
