'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * @typedef {Object} CarouselProps
 * @property {React.ReactNode} children - The slides to display in the carousel.
 * @property {boolean} [autoplay=false] - Whether the carousel should automatically advance slides.
 * @property {number} [interval=5000] - The time in milliseconds between automatic slide transitions.
 * @property {string} [className] - Additional CSS class names to apply to the carousel container.
 * 
 * A responsive and customizable carousel component for displaying a rotating set of slides.
 * 
 * @param {CarouselProps} props - The properties for the carousel component.
 * @returns {JSX.Element} The rendered carousel component.
 * 
 * @example
 * // Basic usage with three slides
 * <Carousel>
 *   <CarouselItem>Slide 1 Content</CarouselItem>
 *   <CarouselItem>Slide 2 Content</CarouselItem>
 *   <CarouselItem>Slide 3 Content</CarouselItem>
 * </Carousel>
 * 
 * @example
 * // Autoplay carousel with a 3-second interval
 * <Carousel autoplay interval={3000}>
 *   {
 *       // Slides 
 *   }
 * </Carousel>
 */

const Carousel = ({ children, autoplay = false, interval = 5000, className }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null); // Not used in this simplified version

	/**
	 * Navigates the carousel to a specific slide index.
	 *
	 * @param {number} index - The index of the slide to navigate to.
	 */

	const goToSlide = useCallback((index) => {
		setCurrentIndex((index + children.length) % children.length);
	}, [children.length]); // Dependency array for useCallback

	useEffect(() => {
		let autoplayInterval;
		if (autoplay) {
			autoplayInterval = setInterval(() => goToSlide(currentIndex + 1), interval);
		}
		return () => clearInterval(autoplayInterval);
	}, [currentIndex, autoplay, interval, goToSlide]);

	return (
		<div className={`relative ${className}`}>
			<div className="overflow-hidden rounded-md ">
				<div
					className="flex transition-transform duration-500 ease-in-out "
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{children.map((child, index) => (
						<div key={index} className="flex-shrink-0 w-full" style={{ minWidth: '100%' }}>
							{/* Pass through children without applying default styles */}
							{child}
						</div>
					))}
				</div>
			</div>

			<CarouselButton onClick={() => goToSlide(currentIndex - 1)} direction="left" />
			<CarouselButton onClick={() => goToSlide(currentIndex + 1)} direction="right" />

			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
				{children.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
							}`}
					/>
				))}
			</div>
		</div>
	);
};


/**
 * @typedef {Object} CarouselItemProps
 * @property {React.ReactNode} children - The content of the carousel item.
 * @property {string} [className] - Additional CSS class names to apply to the carousel item container.
 * 
 * Represents a single slide within the Carousel component.
 * 
 * @param {CarouselItemProps} props - The properties for the carousel item.
 * @returns {JSX.Element} The rendered carousel item.
 */
export const CarouselItem = ({ children, className, ...rest }) => {
	return (
		<div className={` ${className}`}
			{...rest}
		>
			{children}
		</div>
	)
};



/**
 * @typedef {Object} CarouselButtonProps
 * @property {function} onClick - A callback function triggered when the button is clicked.
 * @property {'left'|'right'} direction - The direction of the arrow button ("left" or "right").
 * 
 * An internal component for the left and right arrow buttons in the carousel.
 * 
 * @param {CarouselButtonProps} props - The properties for the carousel button.
 * @returns {JSX.Element} The rendered carousel button.
 */

const CarouselButton = ({ onClick, direction }) => {
	const arrowPath = direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";
	const translateXClass = direction === "left" ? "translate-x-1/3" : "-translate-x-1/3";

	return (
		<button
			onClick={onClick}
			className={`absolute border border-gray-500 rounded-full p-1.5 ${direction === "left" ? "right-full" : "left-full"
				} top-1/2 -translate-y-1/2 ${translateXClass}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 text-gray-200"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrowPath} />
			</svg>
		</button>
	);
};

export default Carousel;
