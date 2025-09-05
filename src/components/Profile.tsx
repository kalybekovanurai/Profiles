import { people } from "./People";

interface ProfilesProps {
  theme: boolean;
}

const Profiles = ({ theme }: ProfilesProps) => {
  return (
    <div className={theme ? "dark" : ""}>
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          User Cards
        </h1>
        <div className="flex gap-6 justify-center flex-wrap">
          {people.map((person, index) => (
            <div
              key={index}
              className="w-[467px] h-[262px] bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              <img
                src={person.image}
                className="w-24 h-24 rounded-full mb-3 border-4 border-blue-500"
              />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {person.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-300 mb-3">
                {person.email}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
