import React from "react";
import { Modal, Button } from "react-bootstrap";
import DashboardStore from "../../store/DashboardStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AnimatedModal = ({ show, handleClose }) => {
  const navigate = useNavigate()
  const { isFormSubmit, LoginFormValue, LoginFormChange, SubmitLogin } = DashboardStore();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regex for email validation
    return emailPattern.test(email);
  };
    const HandleSubmit = async (e) => {

        // Validate Email
        if (!LoginFormValue.email) {
            toast.error("Please enter an email.");
            return;
        } else if (!validateEmail(LoginFormValue.email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        // Validate Password
        if (!LoginFormValue.password) {
            toast.error("Please enter a password.");
            return;
        }

        // Submit Login
        const res = await SubmitLogin(LoginFormValue);

        if (res?.data?.success === true) {
            toast.success(res.data.message);  // Show success message
            navigate("/") // Redirect to home page or desired page
            handleClose(); // Close the modal after successful submission
        } else {
            toast.error(res.data.message);
        }

    };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>

          <div className="mb-3">
            <label htmlFor="email" className="input-label">Email address</label>
            <input
              type="email"
              value={LoginFormValue.email}
              onChange={(e) => LoginFormChange("email", e.target.value)}
              className="form-control email-input"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              value={LoginFormValue.password}
              onChange={(e) => LoginFormChange("password", e.target.value)}
              className="form-control password-input"
              id="password"
              placeholder="Password"
            />
          </div>
          <Button variant="primary" onClick={HandleSubmit} className="submit-button" disabled={isFormSubmit}>
            Submit
          </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AnimatedModal;
