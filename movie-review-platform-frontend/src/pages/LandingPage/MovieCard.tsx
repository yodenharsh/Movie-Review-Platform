import { FC, useState } from "react";

interface CardProps {
  imgUrl: string;
  title: string;
  releaseDate: string;
}

const Card: FC<CardProps> = ({ imgUrl, title, releaseDate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-[5/8] overflow-hidden h-72"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.7 : 1 }}
      />

      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-75 text-white transition-transform duration-300 transform translate-y-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{releaseDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
