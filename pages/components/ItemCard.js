import Image from "next/image";
import Link from "next/link";

export default function ItemCard(props) {
  try {
    return (
      <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
        <Link
          href={{
            pathname: "/detail",
            query: {
              data: JSON.stringify(props),
            },
          }}
        >
          <div className="bg-gray-100 p-6 rounded-lg w-full drop-shadow-lg">
            <Image
              className="h-40 rounded w-full object-cover mb-6"
              src={props.data.image_link}
              width="720"
              height="400"
              alt="thumbnail"
            />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              {props.data.latin_name}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font">
              {props.data.name}
            </h2>
            <p className="leading-relaxed text-base line-clamp-1">
              Habitat: {props.data.habitat}
            </p>
          </div>
        </Link>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
