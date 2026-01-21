import { useState, useEffect } from "react";

const PasswordStrengthValidator = () => {
  const [password, setPassword] = useState("");
  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  // Update criteria whenever password changes
  useEffect(() => {
    setCriteria({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  // Calculate how many criteria are met
  const passedCount = Object.values(criteria).filter(Boolean).length;

  // Determine border color based on number of passed criteria
  const getBorderColor = () => {
    if (passedCount <= 1) return "red";
    if (passedCount <= 3) return "orange";
    return "green";
  };

  return (
    <div>
      <h2>Password Strength Validator</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          border: `2px solid ${getBorderColor()}`,
          padding: "10px",
          width: "100%",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />

      <ul>
        <li>
          {criteria.length ? "✓" : "✗"} Minimum 8 characters
        </li>
        <li>
          {criteria.uppercase ? "✓" : "✗"} At least 1 uppercase letter
        </li>
        <li>
          {criteria.number ? "✓" : "✗"} At least 1 number
        </li>
        <li>
          {criteria.specialChar ? "✓" : "✗"} At least 1 special character
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthValidator;
