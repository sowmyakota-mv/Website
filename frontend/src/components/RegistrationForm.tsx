import { useState } from "react";
import { Button } from "./ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [fullContact, setFullContact] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
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

    if (!fullName || !email || !fullContact || !password) {
      setFormError("Please fill in all details");
      return;
    }
    if (!dialCode) {
      setPhoneError("Please enter the correct country code");
      return;
    }
    if (emailError || phoneError) {
      alert("Fix errors before submitting");
      return;
    }

    setLoading(true);

    const formPayload = {
      fullName,
      email,
      phone: formattedPhone,
      password,
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(
        "https://backend-website-pkm7.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleReturnHome = () => {
    setFullContact("");
    setDialCode("");
    setEmail("");
    setEmailError("");
    setPhoneError("");
    setFormError("");
    setShowPassword(false);
    setFullName("");
    setPassword("");
    setSuccessMessage("");
    setIsSubmitted(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {isSubmitted ? (
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-2">
              Your Submission has been successfully received.
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && <p className="text-red-500 text-sm">{formError}</p>}

              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  placeholder="Enter your name"
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-600 mb-2">
                  Contact Number
                </label>
                <PhoneInput
                  country={" "} 
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
                {dialCode && fullContact && (
                  <p className="text-green-600 text-sm mt-1">
                    Formatted: {formattedPhone}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="absolute right-4 top-11 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </span>
              </div>
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
