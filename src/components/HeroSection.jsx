"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/HeroSection.module.scss";
import ImageCarousel1 from "./ImageCarousel1"; // Adjust the path if needed
import ImageCarousel2 from "./ImageCarousel2"; // Adjust the path if needed
import ImageCarousel3 from "./ImageCarousel3"; // Import ImageCarousel3
import { BsPostcardHeart } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoMdSearch } from "react-icons/io"; // Import IoMdSearch

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size on mount
        const handleResize = () => {
            if (window.innerWidth <= 1100) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check screen size initially

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={styles.hero}>
            {/* For Image Carousel */}
            <div className={styles.columns}>
                {isMobile ? (
                    <div className={styles.column3}>
                        <ImageCarousel3 /> {/* Show ImageCarousel3 on mobile */}
                    </div>
                ) : (
                    <>
                        <div className={styles.column1}>
                            <ImageCarousel1 /> {/* Show ImageCarousel1 on desktop */}
                        </div>
                        <div className={styles.column2}>
                            <ImageCarousel2 /> {/* Show ImageCarousel2 on desktop */}
                        </div>
                    </>
                )}
            </div>

            {/* For Text gradient */}
            <div className={styles.text}>
                <h1>
                    Book an appointment with <br />
                    <span className={styles.gradientText}>lifestyle medicine</span> experts
                </h1>
                <p>Optimize your lifestyle and reverse chronic diseases.</p>

                {/* Search Bar */}
                <div className={styles.searchBar}>
                    <div className={styles.conditionWrapper}>
                        <IoMdSearch className={styles.searchIcon} />
                        <input type="text" placeholder="Condition, procedure, speciality..." />
                    </div>
                    <div className={styles.locationWrapper}>
                        <MdLocationOn className={styles.locationIcon} />
                        <input type="text" placeholder="City, state, or zipcode" />
                    </div>
                    <div className={styles.insuranceWrapper}>
                        <BsPostcardHeart className={styles.insuranceIcon} />
                        <input type="text" placeholder="Insurance carrier" />
                    </div>
                    <button className={styles.findButton}>
                        <IoMdSearch className={styles.findButtonIcon} />
                        Find now
                    </button>
                </div>
            </div>

            {/* Tilted Gradient Rectangle */}
            <div className={styles.tiltedRectangle}></div>
        </section>
    );
};

export default HeroSection;
