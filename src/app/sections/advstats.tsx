import Image from "next/image";
import chart from "../../../public/images/icon-brand-recognition.svg";
import odoMeter from "../../../public/images/icon-detailed-records.svg";
import brushes from "../../../public/images/icon-fully-customizable.svg";

interface benefitsType {
  title: string;
  desc: string;
  icon: any;
}

const benefits = [
  {
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: chart,
  },
  {
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: odoMeter,
  },
  {
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.",
    icon: brushes,
  },
];

const Advstats = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-12 bg-gray-200 p-6 py-20 pt-36">
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className="text-Very-Dark-Violet font-bold text-2xl">
          Advanced statistics
        </h3>
        <p className="text-Grayish-Violet font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-fit gap-20">
        {benefits.map((benefit: benefitsType, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white p-6 pt-16 gap-4 rounded-lg relative"
          >
            <div className="inline-flex items-center justify-center icon w-20 h-20 rounded-full p-6 bg-Dark-Violet absolute -top-10">
              <Image
                src={benefit.icon}
                width={30}
                height={30}
                alt="Icon"
                className="w-10 h-10 max-w-none"
              />
            </div>
            <h3 className="text-Very-Dark-Violet font-bold text-2xl">
              {benefit.title}
            </h3>
            <p className="text-Grayish-Violet font-medium">{benefit.desc}</p>
            {index < benefits.length - 1 && (
              <div className="w-2 h-20 bg-Cyan last-of-type: absolute -bottom-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advstats;
