// components/ImageCarousel.js
import React from "react";
import styles from "../styles/ImageCarousel1.module.scss";

const ImageCarousel = () => {
    return (
        <div className={styles.column}>
            <div className={styles.imageStack}>
                <img className={styles.image} src="/images/image1.png" alt="Image 1" />
                <img className={styles.image} src="/images/image2.png" alt="Image 2" />
                <img className={styles.image} src="/images/image3.png" alt="Image 3" />
                <img className={styles.image} src="/images/image4.png" alt="Image 4" />
                <img className={styles.image} src="/images/image1.png" alt="Image 1" />
                <img className={styles.image} src="/images/image2.png" alt="Image 2" />
                <img className={styles.image} src="/images/image3.png" alt="Image 3" />
                <img className={styles.image} src="/images/image4.png" alt="Image 4" />
            </div>
        </div>
    );
};

export default ImageCarousel;