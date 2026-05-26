import React, { useState } from 'react';
import './PhotoSection.css';

const PHOTOS = [
  { src: '/images/photos/IMG_1073.webp',          label: 'brothers' },
  { src: '/images/photos/IMG_1590_Original.webp', label: 'japan' },
  { src: '/images/photos/IMG_1812.webp',          label: 'calm' },
  { src: '/images/photos/IMG_2842.webp',          label: 'lake' },
  { src: '/images/photos/IMG_3731.webp',          label: 'sunset' },
  { src: '/images/photos/IMG_3746.webp',          label: 'elsie' },
  { src: '/images/photos/IMG_3812.webp',          label: 'hoops' },
  { src: '/images/photos/IMG_5962.webp',          label: 'hike' },
];

export const PhotoSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="photos">
      <div className="photos-inner">
        {/* Left — numbered list */}
        <div className="photos-list">
          <h2 className="photos-heading">Photos</h2>
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`photo-row${activeIdx === i ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <span className="row-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="row-label">{photo.label}</span>
            </div>
          ))}
        </div>

        {/* Right — sticky preview */}
        <div className="photos-preview">
          <div className="preview-frame">
            {PHOTOS.map((photo, i) => (
              <img
                key={i}
                src={photo.src}
                alt={photo.label}
                className={`preview-img${activeIdx === i ? ' is-active' : ''}`}
              />
            ))}
          </div>
          <div className="preview-meta">
            <span className="meta-label">{PHOTOS[activeIdx].label}</span>
            <span className="meta-count">
              {String(activeIdx + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
