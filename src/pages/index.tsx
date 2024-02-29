import React from 'react';
import AnimeCard from '../components/animeCard';
import styles from './index.module.css';
import { fetchAnimeData } from './api';

interface AnimeData {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage: {
      medium: string;
    };
    description: string;
    averageRating: string;
    youtubeVideoId: string;
  };
}

interface HomeProps {
  animeData: AnimeData[];
}

const Home: React.FC<HomeProps> = ({ animeData }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundImage}></div>
      <div className="flex flex-wrap justify-around">
        {animeData ? (
          animeData.map((anime) => (
            <div key={anime.id} className="card-wrapper">
              <AnimeCard
                title={anime.attributes.canonicalTitle}
                imageUrl={anime.attributes.posterImage.medium}
                description={anime.attributes.description}
                averageRating={anime.attributes.averageRating}
                youtubeVideoId={anime.attributes.youtubeVideoId}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const animeData = await fetchAnimeData();

  return {
    props: {
      animeData,
    },
  };
}

export default Home;
