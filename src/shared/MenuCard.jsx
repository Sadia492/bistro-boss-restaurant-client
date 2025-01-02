import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

export default function MenuCard({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const { refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = async () => {
    const cart = {
      menuId: _id,
      email: user?.email,
      name,
      image,
      price,
      recipe,
    };
    const { data } = await axiosSecure.post("/carts", cart);
    if (data.insertedId) {
      toast.success(`${name} added to cart`);
      refetch();
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="w-full">
        <img src={image} alt="Shoes" className="w-full" />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-yellow-500 text-yellow-500 border-0 border-b-4 mt-4"
          >
            Add to Cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
