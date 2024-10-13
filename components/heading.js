export default function Heading() {
  const titles = ["Name", "Email", "Phone", "Action"];
  return (
    <div className="grid grid-cols-4 gap-x-1 my-4">
      {titles.map((title, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-red-600 text-white py-1 font-medium text-xl rounded"
        >
          {title}
        </div>
      ))}
    </div>
  );
}
