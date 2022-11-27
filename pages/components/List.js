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
      <div className="container px-5 py-6 mx-auto pb-24">
        <div className="flex flex-wrap -m-4">
          {data.length === 0 ? (
            <p className="mx-auto text-center font-bold mt-10">Loading...</p>
          ) : (
            data.map((item, index) => <ItemCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
