"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getRecord } from "@/libs/functions";
import { updateRecord } from "@/libs/functions";
import { useRouter } from "next/navigation";

export default function Edit() {
  const router = useRouter();
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRecord(id, { name, email, phone });
    router.push("/crud");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const params = useParams();
  useEffect(() => {
    const { id } = params;
    (async () => {
      const response = await getRecord(id);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    })();
  }, []);

  return (
    <>
      <div className="bg-black bg-opacity-50">
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="bg-white p-8 rounded-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Update Contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
