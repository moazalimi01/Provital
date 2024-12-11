// components/ImageCarousel.js
import React from "react";
import styles from "../styles/ImageCarousel3.module.scss";

const ImageCarousel = () => {
    const images = [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
        "/images/image4.png",
        "/images/image5.png",
        "/images/image6.png",
        "/images/image7.png",
        "/images/image8.png",
    ];

    return (
        <div className={styles.column}>
            <div className={styles.imageStack}>
                {images.map((src, index) => (
                    <img key={`img-${index}`} className={styles.image} src={src} alt={`Image ${index + 1}`} />
                ))}
                {images.map((src, index) => (
                    <img key={`img-dup-${index}`} className={styles.image} src={src} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;