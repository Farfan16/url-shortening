import facebookIcon from "../../../public/images/icon-facebook.svg";
import instagramIcon from "../../../public/images/icon-instagram.svg";
import twitterIcon from "../../../public/images/icon-twitter.svg";
import pinterestIcon from "../../../public/images/icon-pinterest.svg";
import Image from "next/image";

const footerContent = [
  {
    subTitle: "Features",
    pages: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    subTitle: "Resources",
    pages: ["Blog", "Developers", "Support"],
  },
  {
    subTitle: "Company",
    pages: ["About", "Our Team", "Careers", "Contact"],
  },
];

const socialIcons = [facebookIcon, instagramIcon, twitterIcon, pinterestIcon];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center h-full w-full p-8 py-16 gap-8 bg-Very-Dark-Violet">
      <h1 className="text-white font-bold text-3xl mb-2">Shortly</h1>
      {footerContent.map((content, index) => (
        <div key={index} className="flex flex-col gap-6">
          <h3 className="text-white font-semibold text-xl">
            {content.subTitle}
          </h3>
          <div className="flex flex-col gap-2">
            {content.pages.map((page, index) => (
              <h4 key={index} className="text-Gray text-sm font-medium">
                {page}
              </h4>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-row gap-6">
        {socialIcons.map((icon, index) => (
          <Image src={icon} width={24} height={24} alt="icon" key={index} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
