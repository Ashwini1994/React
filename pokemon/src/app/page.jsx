import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative xl:w-full 2xl:w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]  "
            src="/pokemon.svg"
            alt="Pokemon logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="mt-8 text-white py-1 px-1 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          <Link href="/dashboard">
            <h2>Click here to view Pokemons</h2>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
