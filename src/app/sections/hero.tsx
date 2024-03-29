import Image from "next/image";
import WorkingIllus from "../../../public/images/illustration-working.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center bg-white gap-6 p-6 min-w-full">
      <div className="image translate-x-8 w-96 h-full">
        <Image
          src={WorkingIllus}
          width={500}
          height={500}
          alt="Working Illustration"
        />
      </div>
      <div className="flex flex-col text-center justify-center items-center w-full h-fit gap-4">
        <h2 className="text-Very-Dark-Violet font-bold text-4xl">
          More than just shorter links
        </h2>
        <p className="text-Gray px-6">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default Hero;
