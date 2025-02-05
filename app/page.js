import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <div className="w-1/2 bg-black p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white bg-gray-800 p-3 rounded-md text-center">
          CPRG-306
        </h1>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/week-3">
              <span className="text-blue-400 hover:underline">Go to Week 3 Assignment</span>
            </Link> 

            
          </li>
        </ul>
      </div>
    </main>
  );
}
