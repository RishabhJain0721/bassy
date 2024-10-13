"use client";

import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import AddContactModal from "@/components/addContactModal";
import Heading from "@/components/heading";
import Record from "@/components/record";
import { getRecords } from "@/libs/functions";

export default function Crud() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      const response = await getRecords();
      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-row w-full justify-between my-10">
        <h1 className="text-3xl font-semibold">Contacts</h1>
        <button
          onClick={addContact}
          className="bg-black px-4 py-2 rounded text-white flex flex-row justify-center items-center"
        >
          <IoMdAddCircle />
          &nbsp;
          <div>Add contact</div>
        </button>
      </div>

      {/* Conditionally render the AddContactModal */}
      {isModalVisible && <AddContactModal onClose={closeModal} />}

      <Heading />
      {contacts.map((contact) => (
        <Record
          key={contact._id}
          id={contact._id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </>
  );
}
