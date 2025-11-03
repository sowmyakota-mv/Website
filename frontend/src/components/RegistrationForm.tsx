import { useState } from "react";
import { Button } from "./ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [fullContact, setFullContact] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [formError, setFormError] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formattedPhone = dialCode
    ? `+${dialCode} ${fullContact.replace(dialCode, "").trim()}`
    : fullContact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setEmailError("");
    setPhoneError("");
    setNameError("");

    let valid = true;

    // Name validation
    if (!fullName.trim()) {
      setNameError("Please enter your full name");
      valid = false;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
        valid = false;
      }
    }

    // Contact validation
    if (!fullContact.trim()) {
      setPhoneError("Please enter your contact number");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);

    const formPayload = {
      fullName,
      email,
      phone: formattedPhone,
      location,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        "https://websitebackend-dzgn.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formPayload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setSuccessMessage("Thank you! Your registration is successful.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setFormError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReturnHome = () => {
    setFullContact("");
    setDialCode("");
    setEmail("");
    setEmailError("");
    setPhoneError("");
    setNameError("");
    setFormError("");
    setFullName("");
    setLocation("");
    setSuccessMessage("");
    setIsSubmitted(false);
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-lg">
      <div className="w-full p-8">
        {isSubmitted ? (
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-2">
              Your submission has been successfully received.
            </p>
            <Button
              onClick={handleReturnHome}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              OK
            </Button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-center mb-6">
              Register With Us
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && <p className="text-red-500 text-sm">{formError}</p>}

              {/* Full Name */}
              <div>
                <label className="block text-gray-600 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setNameError("");
                  }}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">{nameError}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-600 mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={"gb"}
                  value={fullContact}
                  onChange={(value, country) => {
                    setFullContact(value);
                    setDialCode(country.dialCode);
                    setPhoneError("");
                  }}
                  inputClass="!w-full !bg-white !px-14 !py-3 !border !rounded-lg !text-gray-700 !focus:ring-2 !focus:ring-blue-500 !outline-none"
                  containerClass="relative w-full"
                  buttonClass="!bg-white !border-none !absolute !left-3 !top-1/2 !transform !-translate-y-1/2"
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "Enter your phone number",
                  }}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              {/* Location */}
              <div className="relative">
                <label className="block text-gray-600 mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Location"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
