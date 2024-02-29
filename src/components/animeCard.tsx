import React, { useState } from 'react';
import styles from './animeCard.module.css';

interface AnimeCardProps {
  title: string;
  imageUrl: string;
  description: string;
  averageRating: string;
  youtubeVideoId: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ title, imageUrl, description, averageRating, youtubeVideoId }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleVerMaisClick = () => {
    setShowDetails(!showDetails);
  };

  const handleTrailerClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.animeCard}>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
        <button className={styles.ratingButton} disabled>{averageRating}</button>
      </div>
      <div className={styles.cardBody}>
        <img src={imageUrl} alt={title} className={`${styles.animeImage} ${showDetails ? styles.small : ''}`} />
        <div className={styles.details} style={{ display: showDetails ? 'block' : 'none' }}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.verMaisBtn} onClick={handleVerMaisClick}>
          {showDetails ? 'Ver Menos' : 'Ver Mais'}
        </button>
        <button className={styles.trailerButton} onClick={handleTrailerClick}>
          <span role="img" aria-label="trailer">&#127916;</span> {/* Ícone de filme */}
        </button>
      </div>
      {showModal && (
        <div className={styles.modalBackground}>
          <div className={styles.modal}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <h2>Assista ao trailer do anime {title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;
