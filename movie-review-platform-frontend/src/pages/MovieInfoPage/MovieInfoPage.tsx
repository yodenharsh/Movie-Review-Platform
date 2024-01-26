import { FC } from "react";
import ContentContainerCard from "../../components/ContentContainerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";

interface MovieDetails {
  title: string;
  summary: string;
  releaseDate: string;
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
  const genre: string[] = ["superhero", "indian"];
  const score: number = 4.9;
  const likeCount = 99991;
  const dislikeCount = 42332;

  const totalVotes = likeCount + dislikeCount;
  const likePercentage =
    totalVotes > 0 ? Math.round((likeCount / totalVotes) * 100) : 0;

  return (
    <div className="mx-auto flex justify-center my-12">
      <ContentContainerCard>
        <div className="flex text-white p-12">
          {/* Left Pane: Movie Poster */}
          <div className="w-1/4">
            <img src={imgUrl} alt={title} className="w-full h-auto" />
          </div>

          {/* Right Pane: Movie Details */}
          <div className="w-3/4 grid grid-cols-9 p-4">
            <div className="col-span-7">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-600">{summary}</p>

              <div className="mt-4">
                <strong>Release Date:</strong> {releaseDate}
              </div>

              <div className="mt-2">
                <strong>Actor List:</strong> {actorList.join(", ")}
              </div>

              <div className="mt-2">
                <strong>Genre:</strong> {genre.join(", ")}
              </div>
            </div>
            <div className="col-span-2">
              <div className="mt-2 flex items-center">
                <strong>Approval:</strong>{" "}
                <span className="ml-2 text-5xl text-green-500">
                  {likePercentage}% <FontAwesomeIcon icon={faThumbsUp} />
                </span>
              </div>

              <div className="mt-2 flex items-center">
                <strong>Score:</strong>
                <br /> {score}/10{" "}
                <span className="ml-2 text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContentContainerCard>
    </div>
  );
};

export default MovieDetailsPage;
