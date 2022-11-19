import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function About() {
  return (
    <div>
      <Meta title="Zoo: About" />

      <Header />

      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
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