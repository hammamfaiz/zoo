import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://zoo-animals-api.p.rapidapi.com/animals/rand/10", options)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Exotic Animals
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Did you know that there are more than 8.7 million species of animal
            in this world ? Browse some of the unique and exotic animal here !
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.length === 0 ? (
            <p className="mx-auto text-center font-bold">Loading ...</p>
          ) : (
            data.map((item, index) => <ItemCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
