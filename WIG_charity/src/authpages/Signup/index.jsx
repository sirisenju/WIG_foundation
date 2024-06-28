import React, { useState } from "react";
import Footer from "../../components/Footer";
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [buttonState, setButtonState] = useState(false)
  const { user_signup } = useAuth();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const validateEmail = (email) => {
    // Regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // Proceed with form submission
      //setLoading(true);
      //alert("login done");
      try {
        setButtonState(true)
        user_signup(email, password, first_name, last_name, phone_number, role);
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } catch (error) {
        alert("Sign up failed", error);
      }
      finally{
        setButtonState(false)
      }

      // clear the form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setConfirmPassword("");
    }
    else{
      alert("Complete the form to login!");
    }
  };

  return (
    <>
      <section className="h-full w-full">
        <div className="w-full lg:w-[70%] h-full sm:min-h-screen mx-auto block sm:flex flex-row p-3 mb-4 mt-4 glass">
          <div className="w-full sm:w-1/2 h-full p-0 sm:p-4">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-full text-center pb-4 pt-8">
                <h1 className="text-3xl font-semibold">Create Your Account.</h1>
                <p className=" text-base font-medium">Signup today.</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="block">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    placeholder="enter your name"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="block">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    placeholder="enter your last name"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
                <div className="block">
                  <label htmlFor="email">Email Address</label>
                  <input
                    placeholder="you@email.com"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div className="block sm:flex gap-2 w-full">
                  <div className="block w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      placeholder="080 *** *** 57"
                      className="w-full mt-2 py-2 px-2 rounded-lg"
                      type="text"
                      value={phone_number}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="block w-full mt-2 sm:mt-0">
                    <label htmlFor="role">Role</label>
                    <input
                      placeholder="enter your role"
                      className="w-full mt-2 py-2 px-2 rounded-lg"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="block sm:flex gap-2 w-full">
                  <div className="block w-full">
                    <label htmlFor="password">Password</label>
                    <input
                      placeholder="enter a strong password"
                      className="w-full mt-2 py-2 px-2 rounded-lg"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="block gap-2 w-full mt-2 sm:mt-0">
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input
                      placeholder="confirm passowrd"
                      className="w-full mt-2 py-2 px-2 rounded-lg"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={buttonState}
                  className="py-2 mt-4 mb-4 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white"
                >
                  {buttonState ? "Signning up...." : "Sign up"}
                </button>
              </form>
              <p className="text-center">
                Allready have an account?{" "}
                <span className=" hover:text-green-600">
                  {" "}
                  <Link to={"/login"}>Login here!</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 h-[380px] sm:h-full">
            <img
              className="w-full h-full object-cover rounded-md "
              src="./assets/signup_bg.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* footer component */}
      <Footer />
    </>
  );
}

export default Signup;
