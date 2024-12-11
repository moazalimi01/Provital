"use client";
import React, { useRef, useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "../styles/SixPillars.module.scss";
import Card from "./Card";

const SixPillars = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            id: 0,
            title: "Nutrition",
            imageSrc: "/images/pillars/1.png",
            iconSrc: "/images/pillars/vec1.png",
            statValue: "120/80",
            statUnit: "  mmHg",
            description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness."
        },
        {
            id: 1,
            title: "Physical Activity",
            imageSrc: "/images/pillars/2.png",
            iconSrc: "/images/pillars/vec2.png",
            statValue: "32",
            statUnit: "  minutes",
            description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease."
        },
        {
            id: 2,
            title: "Restorative Sleep",
            imageSrc: "/images/pillars/3.png",
            iconSrc: "/images/pillars/vec3.png",
            statValue: "8",
            statUnit: "  hours",
            description: "Consistent, quality sleep is essential for cognitive function and physical health."
        },
        {
            id: 3,
            title: "Stress Management",
            imageSrc: "/images/pillars/4.png",
            iconSrc: "/images/pillars/vec4.png",
            statValue: "60",
            statUnit: "  bpm",
            description: "Effective stress management techniques are crucial for mental well-being and overall health."
        },
        {
            id: 4,
            title: "Social connection",
            imageSrc: "/images/pillars/5.png",
            iconSrc: "/images/pillars/vec5.png",
            statValue: "Feeling",
            statUnit: "  better",
            description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health."
        },
        {
            id: 5,
            title: "Substance abuse",
            imageSrc: "/images/pillars/6.png",
            iconSrc: "/images/pillars/vec6.png",
            statValue: "62",
            statUnit: "  days",
            description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health."
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || !slider.children[activeIndex]) return;

        const cardWidth = slider.children[activeIndex].offsetWidth + 16;
        const scrollPosition = activeIndex * cardWidth;

        slider.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    }, [activeIndex]);

    const handleArrowClick = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const cardWidth = slider.children[0].offsetWidth + 16;
        const maxIndex = cards.length - 1;

        if (direction === "left" && activeIndex > 0) {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
            slider.scrollTo({
                left: slider.scrollLeft - cardWidth,
                behavior: "smooth",
            });
        }

        if (direction === "right" && activeIndex < maxIndex) {
            setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
            slider.scrollTo({
                left: slider.scrollLeft + cardWidth,
                behavior: "smooth",
            });
        }
    };

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <div className={styles.topSection}>
                <div className={styles.text}>
                    <h2 className={styles.works}>HOW IT WORKS</h2>
                    <h2>
                        <span className={styles.highlight}>Lifestyle as medicine:</span> The six pillars
                    </h2>
                </div>

                {/* Left and Right Arrows */}
                <div className={styles.arrowsRight}>
                    <button className={`${styles.arrow} ${styles.left}`} onClick={() => handleArrowClick("left")}>
                        <GoArrowLeft />
                    </button>
                    <button className={`${styles.arrow} ${styles.right}`} onClick={() => handleArrowClick("right")}>
                        <GoArrowRight />
                    </button>
                </div>
            </div>

            {/* Pillars */}
            <div className={styles.pillarsWrapper}>
                <div className={styles.pillars}>
                    {cards.map((card, index) => (
                        <button
                            key={card.id}
                            className={`${styles.pillar} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {card.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Modified Slider Section */}
            <div className={styles.sliderWrapper}>
                <div className={styles.slider} ref={sliderRef}>
                    {cards.map((card) => (
                        <div key={card.id} className={styles.cardWrapper}>
                            <Card
                                imageSrc={card.imageSrc}
                                iconSrc={card.iconSrc}
                                statValue={card.statValue}
                                statUnit={card.statUnit}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SixPillars;
