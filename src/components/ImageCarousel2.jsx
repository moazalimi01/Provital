import React from "react";
import styles from "../styles/ImageCarousel2.module.scss";

const ImageCarousel = () => {
    return (
        <div className={styles.column}>
            <div className={styles.imageStack}>
                <img className={styles.image} src="/images/image5.png" alt="Image 1" />
                <img className={styles.image} src="/images/image6.png" alt="Image 2" />
                <img className={styles.image} src="/images/image7.png" alt="Image 3" />
                <img className={styles.image} src="/images/image8.png" alt="Image 4" />
                {/* Duplicate images for seamless looping */}
                <img className={styles.image} src="/images/image5.png" alt="Image 1" />
                <img className={styles.image} src="/images/image6.png" alt="Image 2" />
                <img className={styles.image} src="/images/image7.png" alt="Image 3" />
                <img className={styles.image} src="/images/image8.png" alt="Image 4" />
            </div>
        </div>
    );
};

export default ImageCarousel;