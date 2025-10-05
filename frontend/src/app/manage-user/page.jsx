"use client";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


const ManageUser = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/getall`
    );
    console.table(res.data);
    setUserList(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id}`)
      .then((result) => {
        toast.success("user deleted successfully");
        fetchUsers();
      })
      .catch((err) => {
        console.error(err);
        toast.error("failed to delete user");
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-5">
        <h1 className="text-center font-bold text-3xl">Manage-User</h1>

        <table className="table-auto w-full mt-10 border border-black">
          <thead>
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">City</th>
              <th className="p-3">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="p-2 border border-gray-300">{user.id}</td>
                  <td className="p-2 border border-gray-300">{user.name}</td>
                  <td className="p-2 border border-gray-300">{user.email}</td>
                  <td className="p-2 border border-gray-300">{user.city}</td>
                  <td className="p-2 border border-gray-300">
                    {new Date(user.createAt).toLocaleDateString()}
                  </td>
                  <td className="p-2 border border-gray-300">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      <IconTrash />
                    </button>
                  </td>
                  <td className="p-2 border border-gray-300">
                    <Link href={'/update-user/' + user._id}
                      className='block w-fit bg-blue-500 text-white px-3'
                    >
                      <IconPencil />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;