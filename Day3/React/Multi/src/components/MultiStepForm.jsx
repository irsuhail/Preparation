import { useState } from "react";


const Step1 = ({ data, handleChange }) => (
  <div>
    <h2>Personal Info</h2>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={data.firstName}
      onChange={handleChange}
    />
    <br />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={data.lastName}
      onChange={handleChange}
    />
  </div>
);


const Step2 = ({ data, handleChange }) => (
  <div>
    <h2>Account Details</h2>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={data.email}
      onChange={handleChange}
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={data.password}
      onChange={handleChange}
    />
  </div>
);


const Step3 = ({ data, handleChange }) => (
  <div>
    <h2>Preferences</h2>
    <label>
      <input
        type="checkbox"
        name="newsletter"
        checked={data.newsletter}
        onChange={(e) =>
          handleChange({ target: { name: "newsletter", value: e.target.checked } })
        }
      />
      Subscribe to newsletter
    </label>
    <br />
    <label>
      <input
        type="checkbox"
        name="notifications"
        checked={data.notifications}
        onChange={(e) =>
          handleChange({ target: { name: "notifications", value: e.target.checked } })
        }
      />
      Enable notifications
    </label>
  </div>
);


const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
    notifications: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  
  const renderFinalStep = () => (
    <div>
      <h2>Review Your Data</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );

  return (
    <div>
      <h1>Multi-step Registration</h1>
      <p>Step {step} of 4</p>

      {step === 1 && <Step1 data={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 data={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 data={formData} handleChange={handleChange} />}
      {step === 4 && renderFinalStep()}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 4 && <button onClick={nextStep}>Next</button>}
        {step === 4 && <button onClick={() => alert("Form submitted!")}>Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
