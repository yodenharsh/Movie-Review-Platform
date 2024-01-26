import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface RatingCardProps {
  title: string;
  value: number;
  icon: IconDefinition;
  color: string;
}

const RatingCard: FC<RatingCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg border-2 border-slate-300 shadow-md transition-transform duration-300 hover:shadow-button-primary-bg">
      <div className="text-2xl font-bold mb-2 text-black">{title}</div>
      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex text-center justify-center items-center">
        <span className={`text-4xl font-bold ${color}`}>
          {value} <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </div>
  );
};

export default RatingCard;
