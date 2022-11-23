import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import profile from "../public/assets/profilepic.png";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Meta title="Zoo: About" />

      <Header />

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 px-5 py-5">
              About Us
            </h1>

            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 mx-auto ">
              <Image
                alt="icon"
                src={profile}
                className="rounded-full bg-white"
              />
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base px-5 py-5">
              Zoo Application is developed by Pipi. <br />
              Don't hesitate to contact us if you have any questions about this
              app!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
