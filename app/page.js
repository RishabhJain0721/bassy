import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Contacts app</h1>
      <p className="text-lg"> Welcome to the contacts app!</p>

      <Link href="/crud">
        <div className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go to contacts
        </div>
      </Link>
    </div>
  );
}
