import { FC, useState } from "react";
import ContentContainerCard from "../../components/ContentContainerCard";
import {
  faThumbsUp,
  faStar,
  faPercent,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RatingCard from "./RatingCard";
import React from "react";

interface MovieDetails {
  title: string;
  summary: string;
  releaseDate: string;
  directorList: string[];
  actorList: string[];
  genre: string;
  likeCount: number;
  dislikeCount: number;
  score: number;
  imgUrl: string;
}

const MovieDetailsPage: FC = () => {
  const imgUrl =
    "https://sciencefiction.com/wp-content/uploads/2017/06/Spider-Man-Homecoming-International-poster.jpg";
  const title = "Spider-Man Homecoming";
  const summary =
    "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.";
  const releaseDate = "2023-10-03";
  const actorList: string[] = ["Nathan Parker", "Maria Jose", "Geeman Bro"];
  const genre: string[] = ["Superhero", "Indian"];
  const score: number = 4.9;
  const likeCount = 99991;
  const dislikeCount = 42332;
  const directorList = ["Micheal Jordan"];

  const totalVotes = likeCount + dislikeCount;
  const likePercentage =
    totalVotes > 0 ? Math.round((likeCount / totalVotes) * 100) : 0;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [rating, setRating] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleRating = (value: React.SetStateAction<number>) => {
    setRating(value);
  };

  return (
    <div className="mx-auto flex justify-center my-12">
      <ContentContainerCard>
        <div className="flex text-white py-12 pl-12 pr-4">
          {/* Left Pane: Movie Poster */}
          <div className="w-1/4">
            <img src={imgUrl} alt={title} className="w-full h-auto" />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleLike}
                className="bg-green-500 text-white p-2 rounded-md"
              >
                <FontAwesomeIcon icon={faThumbsUp} /> Like
              </button>
              <button
                onClick={handleDislike}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                <FontAwesomeIcon icon={faThumbsDown} /> Dislike
              </button>
            </div>

            {/* Rating System */}
            <div className="mt-4">
              <strong>Your Rating:</strong>{" "}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  title="score"
                  onClick={() => handleRating(value)}
                  className={`text-xl mx-1 ${
                    rating >= value ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Pane: Movie Details */}
          <div className="w-3/4 grid grid-cols-9 py-4 pl-4 px-0 bg-black ml-4">
            <div className="col-span-7 p-6 ">
              <div className="bg-gray-800 rounded-md px-4 pt-4">
                <h1 className="text-3xl font-bold  mb-4 border-b-4 border-black">
                  {title}
                </h1>

                {/* Movie Summary Card */}
                <div className="pb-4 rounded-md mb-4">
                  <p className="text-gray-300">{summary}</p>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-md mb-4">
                <div className="mb-4">
                  <strong>Release Date:</strong> {releaseDate}
                </div>

                <hr className="border-t border-white mb-4" />

                <div className="mb-4">
                  <strong>Actors:</strong> {actorList.join(" ● ")}
                </div>

                <hr className="border-t border-white mb-4" />

                <div>
                  <strong>Directors:</strong> {directorList.join(" ● ")}
                </div>
              </div>

              {/* Genre Card */}
              <div className="bg-gray-800 rounded-md">
                <div className="flex items-center font-semibold text-center p-2">
                  {genre.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && (
                        <div className="border-r mx-2 h-5 bg-white opacity-50"></div>
                      )}
                      <span className=" flex-grow">{item}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="">
                <div className="p-4">
                  <RatingCard
                    title="Approval"
                    value={likePercentage}
                    icon={faPercent}
                    color="text-green-500"
                  />
                </div>
                <div className="p-4">
                  <RatingCard
                    title="Score"
                    value={score}
                    icon={faStar}
                    color="text-yellow-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainerCard>
    </div>
  );
};

export default MovieDetailsPage;
