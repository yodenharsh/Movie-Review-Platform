import { FC } from "react";
import ContentContainerCard from "../../components/ContentContainerCard";
import LandingPageSection from "./LandingPageSection";

const LandingPage: FC = () => {
  return (
    <div className="mx-auto  my-12 flex justify-center">
      <ContentContainerCard>
        <LandingPageSection
          title="All Time Popular"
          loginRequired={false}
          delay={2200}
          imageData={[
            {
              imageUrl:
                "https://media-cache.cinematerial.com/p/500x/d8xunuwn/painkillers-imdb-movie-poster.jpg",
              title: "BladeKiller",
              releaseDate: "2029-12-05",
              linkToMovie: "example.com",
            },
          ]}
        ></LandingPageSection>
        <LandingPageSection
          title="All Time Top-Rated"
          loginRequired={false}
          delay={2600}
          imageData={[
            {
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BNzM2ZjY4MDItYzMxMS00ZjgxLTkxNTctMTQ3Mzg3Nzk1ZjMyXkEyXkFqcGdeQXVyMjU5MTgzMDU@._V1_FMjpg_UX1000_.jpg",
              title: "Lifelines",
              releaseDate: "2003-11-03",
              linkToMovie: "example.com",
            },
          ]}
        ></LandingPageSection>
        <LandingPageSection
          title="Your Favorite Movies"
          loginRequired={true}
          delay={3200}
          imageData={[
            {
              imageUrl:
                "https://m.media-amazon.com/images/M/MV5BM2JjNjkwMWQtZDBkZi00NjA5LTgwNjItNzFiYjk1OTVhZGVlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY1200_CR92,0,630,1200_AL_.jpg",
              title: "Prey",
              releaseDate: "2019-04-08",
              linkToMovie: "example.com",
            },
          ]}
        ></LandingPageSection>
      </ContentContainerCard>
    </div>
  );
};

export default LandingPage;
