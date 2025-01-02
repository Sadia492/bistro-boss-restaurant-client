import React from "react";
import SectionTitle from "../shared/SectionTitle";
import useCart from "../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function ManageItems() {
  const { cartData, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (id) => {
    const { data } = await axiosSecure.delete(`/cart/${id}`);
    if (data.deletedCount) {
      toast.success("data deleted");
      refetch();
    }
  };

  return (
    <div>
      <SectionTitle
        title={"MANAGE ALL ITEMS"}
        subtitle={"---Hurry Up!---"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartData?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
