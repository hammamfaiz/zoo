import { Tab } from "@headlessui/react";
import Meta from "./components/Meta";
import Header from "./components/Header";
import TimeList from "./components/TimeList";
import BottomNavigation from "./components/BottomNavigation";

export default function Home() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Meta title="Zoo: Time" />

      <Header />

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mx-4 lg:mx-16 mt-8 drop-shadow-lg">
          <Tab
            key="nocturnal"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Nocturnal
          </Tab>
          <Tab
            key="diurnal"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Diurnal
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel key="nocturnal">
            <TimeList activeTime="nocturnal" />
          </Tab.Panel>
          <Tab.Panel key="diurnal">
            <TimeList activeTime="diurnal" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <BottomNavigation />
    </div>
  );
}
