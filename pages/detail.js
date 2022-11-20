import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      setData(JSON.parse(router.query.data).data);
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <div>
      <Meta title="Zoo" />

      <Header />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="cover"
            width="720"
            height="600"
            src={data ? data.image_link : ""}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data ? data.name : ""}
            </h1>
            <p class="mb-8 leading-relaxed">
              {`${data ? data.name : ""} lives in the ${
                data ? data.habitat : ""
              } based in ${data ? data.geo_range : ""}. They can eat ${
                data ? data.diet : ""
              }`}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
