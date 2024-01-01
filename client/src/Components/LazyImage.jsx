import { useRef, useState, useEffect } from 'react';
import { urlFor } from '../client';

const LazyImage = ({ width, height, style, item, alt, }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const imageRef = ref.current; // Store ref.current in a variable

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        let observer;
        if (imageRef) {
            observer = new IntersectionObserver(callback);
            observer.observe(imageRef);
        }

        return () => {
            if (observer && imageRef) {
                observer.unobserve(imageRef);
                observer.disconnect();
            }
        };
    }, []);

    return (
        <img
            ref={ref}
            width={width}
            height={height}
            src={inView ? urlFor(item?.imageUrl).url() : ""}
            alt={alt}
            style={style}
        />
    );
};

export default LazyImage;
