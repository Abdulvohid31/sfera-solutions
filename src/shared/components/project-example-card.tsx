import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface CardProps {
  Image: string | null;
  Name: string;
  discription: string;
  liveLink: string;
}

const ProjectExampleCard: React.FC<CardProps> = ({
  Image,
  Name,
  discription,
  liveLink,
}) => {
  const {t}=useTranslation()
  return (
    <div className="backdrop-blur-sm bg-black/30 rounded-xl shadow-lg overflow-hidden  flex flex-col">
      {/* Image Section */}
      <div className="h-70 bg-gray-200 flex items-center justify-center">
        {Image ? (
          <img src={Image} alt={Name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-sm">{t("no_image_available")}</span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow gap-5 ">
        <h3 className="text-3xl mt-3 font-semibold mb-2">
          <span className=" text-[#cfe80e] border-b border-[#6b25ff]">”</span>
          {Name}
        </h3>
        <p className="text-[#e0e1dd] text-[18px] flex-grow mt-3">{discription}</p>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" inline-block hover:text-[#6b25ff] text-center w-fit  text-[#e0e1dd] text-sm px-4 py-2 rounded-lg border border-[#cfe80e] transition"
        >
          {t("live")}
        </a>
      </div>
    </div>
  );
};

export default ProjectExampleCard;
