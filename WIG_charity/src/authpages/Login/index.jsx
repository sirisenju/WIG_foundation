import React, { useState } from "react";
import Footer from "../../components/Footer";
import { useAuth } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const navigate = useNavigate();
  const { user_login } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSuperuser, setIsSuperuser] = useState(false);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const triggerSuccessToast = () => {
    setMessage("Login Successful");
    setType("success");
  };

  const triggerInvalidToast = () => {
    setMessage("Invalid Login Credentials");
    setType("info");
  };

  const triggerErrorToast = () => {
    setMessage("An Error Occurred, Please Try Again");
    setType("error");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setButtonState(true);
      user_login(email, password, (isSuperuser) => {
        if (isSuperuser === null) {
          setIsAuthenticated(false);
          setIsSuperuser(false);
          triggerInvalidToast();
          setButtonState(false);
        } else {
          setIsAuthenticated(true);
          if (isSuperuser) {
            setIsSuperuser(true);
            triggerSuccessToast();
            setTimeout(() => {
              navigate("/admin");
            }, 1000);
          } else {
            triggerSuccessToast();
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
          }
        }
      });
    } catch (error) {
      triggerErrorToast();
      setButtonState(false);
    }
  };
  return (
    <>
      <section className="w-full h-full">
        <div className="w-full lg:w-[70%] h-full sm:min-h-screen mx-auto block sm:flex flex-row p-3 mb-4 mt-4 glass">
          <div className="flex justify-center items-center sm:hidden">
            <div className="inline sm:flex justify-center items-center">
              <Link to={"/"}>
                <div className="flex justify-center items-center">
                  <img
                    className="h-16 w-16 rounded-[50%] "
                    src="./assets/west-logo.png"
                    alt=""
                  />
                </div>
              </Link>
              <h1 className="text-3xl pl-2 pb-2 text-center">
                The Westerners Foundation
              </h1>
            </div>
          </div>
          <div className="w-full sm:w-1/2 h-[380px] sm:h-full order-last">
            <img
              className="w-full h-full object-cover rounded-md "
              src="./assets/login_bg.jpg"
              alt=""
            />
          </div>
          <div className="w-full sm:w-1/2 h-full p-0 sm:p-4">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-full text-center pb-4 pt-8">
                <div className="hidden sm:flex justify-center items-center">
                  <div className="inline sm:flex justify-center items-center">
                    <Link to={"/"}>
                      <div className="flex justify-center items-center">
                        <img
                          className="h-16 w-16 rounded-[50%] "
                          src="./assets/west-logo.png"
                          alt=""
                        />
                      </div>
                    </Link>
                    <h1 className="text-3xl pl-2 pb-2">
                      The Westerners Foundation
                    </h1>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold">Login Your Account.</h1>
                <p className="text-xl font-medium">Welcome back!</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="block">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    placeholder="example: you@email.com"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="block">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="enter your password"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={buttonState}
                  className="py-2 mt-4 mb-5 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white"
                >
                  {buttonState ? "Loading..." : "Login"}
                </button>
              </form>
              {/* create account prompt */}
              <p className="text-center">
                New member?{" "}
                <span className="hover:text-green-600">
                  {" "}
                  <Link to={"/signup"}>Create an account!</Link>
                </span>
              </p>
              {/*  forgot password ?*/}
              <p className="text-center text-base pt-3">
                Forgot password?{" "}
                <span className=" hover:text-green-600">
                  {" "}
                  <a href="#">Change password.</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer component */}
      <Footer />
    </>
  );
}

export default Login;
