import React from 'react';
import { useTranslation } from 'react-i18next';
import './InstagramFeedSection.css';

// Import images
import cubo1 from '../../../assets/images/cubo1.webp';
import cubo2 from '../../../assets/images/cubo2.webp';
import cubo3 from '../../../assets/images/cubo3.webp';

export default function InstagramFeedSection() {
  const { t } = useTranslation();

  const posts = [
    { id: 1, img: cubo1 },
    { id: 2, img: cubo2 },
    { id: 3, img: cubo3 }
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        
        <div className="instagram-header">
          <div className="instagram-title-area">
            <h2 className="instagram-title">{t('instagram.title')}</h2>
            <a href="https://www.instagram.com/cuboinnovacionrionegro?igsh=bXdlbnoxMWt0ajh5" target="_blank" rel="noreferrer" className="instagram-user">
              {t('instagram.user')}
            </a>
          </div>
          <a href="https://www.instagram.com/cuboinnovacionrionegro?igsh=bXdlbnoxMWt0ajh5" target="_blank" rel="noreferrer" className="instagram-btn">
            {t('instagram.btn')}
          </a>
        </div>

        <div className="instagram-grid">
          {posts.map((post) => (
            <a href={post.link} key={post.id} className="instagram-post" target="_blank" rel="noreferrer">
              <img src={post.img} alt="Instagram Post" className="instagram-img" />
              <div className="instagram-overlay">
                {/* Ícono de "Play" o "Instagram" que dibujaste en tu wireframe */}
                <span className="instagram-icon">▶</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}     