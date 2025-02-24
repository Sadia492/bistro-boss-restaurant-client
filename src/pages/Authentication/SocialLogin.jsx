import React from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function SocialLogin() {
  const axiosPublic = useAxiosPublic();
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(async (result) => {
      navigate("/");
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        role: "user",
      };
      const { data } = await axiosPublic.post("/users", userInfo);
      if (data.insertedId) {
        toast.success("Login successful");
      } else {
        toast.success(data?.message);
      }
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center btn bg-gradient-to-r w-full from-primary to-secondary text-white">
        <button onClick={handleSignInWithGoogle} className="flex gap-3">
          <FaGoogle></FaGoogle> Sign In With Google
        </button>
      </div>
    </div>
  );
}
