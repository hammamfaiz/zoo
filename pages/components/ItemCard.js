import Image from "next/image";

export default function ItemCard(props) {
  try {
    return (
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={props.data.image_link}
            width="720"
            height="400"
            alt="thumbnail"
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {props.data.latin_name}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {props.data.name}
          </h2>
          <p className="leading-relaxed text-base">
            Habitat: {props.data.habitat}
          </p>
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
