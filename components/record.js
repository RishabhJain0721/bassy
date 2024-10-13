import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { deleteRecord } from "@/libs/functions";

export default function Record({ id, name, email, phone }) {
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/crud/edit/${id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteRecord(id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-4 py-3">
      <div className="text-center">{name}</div>
      <div className="text-center">{email}</div>
      <div className="text-center">{phone}</div>
      <div className="text-center">
        <button onClick={handleEdit} className=" text-center mr-7">
          <FaPencil />
        </button>

        <button onClick={handleDelete} className=" text-center">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
