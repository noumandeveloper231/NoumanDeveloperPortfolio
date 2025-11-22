import Odometer from "../reusable/Odometer"

// Icons
import { RiEmotionHappyLine } from "react-icons/ri";
import { Book, Clock, HeadphonesIcon } from "lucide-react";

const Clients = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] p-8 md:p-10 rounded-2xl whitespace-nowrap">
      <div data-aos="fade-up" className="bg-[var(--accent)]/30 shadow-2xl hover:-translate-y-2 transition-all cursor-pointer p-8 rounded-2xl flex flex-col gap-4 items-center ">
        <div className="p-6 hover:scale-110 transition-all cursor-pointer rounded-full bg-green-500/30 shadow-xl">
          <RiEmotionHappyLine size={50} className="text-green-500" />
        </div>
        <Odometer value={50} />
        <h3 className="text-xl font-semibold">
          Happy Clients
        </h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="150" className="bg-[var(--accent)]/30 shadow-2xl hover:-translate-y-2 transition-all cursor-pointer p-8 rounded-2xl flex flex-col gap-4 items-center ">
        <div className="p-6 hover:scale-110 transition-all cursor-pointer rounded-full bg-orange-500/30 shadow-xl">
          <Book size={50} className="text-orange-500" />
        </div>
        <Odometer value={134} />
        <h3 className="text-xl font-semibold">
          Projects
        </h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="bg-[var(--accent)]/30 shadow-2xl hover:-translate-y-2 transition-all cursor-pointer p-8 rounded-2xl flex flex-col gap-4 items-center ">
        <div className="p-6 hover:scale-110 transition-all cursor-pointer rounded-full bg-gray-500/30 shadow-xl">
          <HeadphonesIcon size={50} className="text-gray-500" />
        </div>
        <Odometer value={1248} />
        <h3 className="text-xl font-semibold">
          Hours Given
        </h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="450" className="bg-[var(--accent)]/30 shadow-2xl hover:-translate-y-2 transition-all cursor-pointer p-8 rounded-2xl flex flex-col gap-4 items-center ">
        <div className="p-6 hover:scale-110 transition-all cursor-pointer rounded-full bg-pink-500/30 shadow-xl">
          <Clock size={50} className="text-pink-500" />
        </div>
        <Odometer value={24} />
        <h3 className="text-xl font-semibold">
          Hours Support
        </h3>
      </div>
    </div>
  )
}

export default Clients
