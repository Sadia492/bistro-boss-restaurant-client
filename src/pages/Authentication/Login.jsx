import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import SocialLogin from "./SocialLogin.jsx";

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const captchaRef = useRef();
  const { signInWithGoogle, signInUser, setUser } = useAuth();
  const [disabled, setDisabled] = useState(true);
  //   console.log(captchaRef.current);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const data = { email, password };
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
    form.reset();
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) == true) {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 h-screen w-11/12 mx-auto">
      <div className="card max-w-sm flex-1 w-full p-4  shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary from-0 to-75% to-secondary text-transparent bg-clip-text text-center">
            LOGIN HERE
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label className="input input-bordered flex  justify-between items-center gap-2">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className=""
                required
              />

              <button onClick={() => setShow(!show)} type="button" className="">
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <LoadCanvasTemplate />

            <label className="input input-bordered flex  justify-between items-center gap-2">
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type In the Captcha here"
                className=""
                required
              />
            </label>
            <button
              type="button"
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-xs mt-2"
            >
              Validate
            </button>
          </div>

          <div className="form-control mt-6">
            <button
              disabled={disabled}
              className="btn disabled:cursor-not-allowed bg-gradient-to-r from-primary to-secondary text-white"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Don't have an account? Please{" "}
            <Link className="text-red-500 font-bold" to="/register">
              Register
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
}
