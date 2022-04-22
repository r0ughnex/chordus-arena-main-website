import classNames from 'classnames';
import { useIsMediaMobileUp } from 'hooks/useMediaQuery';
import usePrevious from 'hooks/usePrevious';
import { CarouselContext, Slide, Slider } from 'pure-react-carousel';
import { memo, useContext, useEffect, useState } from 'react';

import { carouselData } from '../data';
import styles from './ArtifactsCarousel.module.scss';

export interface ArtifactsCarouselProps {
  onChange?: (currSlide: number) => void;
  className?: string;
}

const ArtifactsCarousel = ({ onChange, className }: ArtifactsCarouselProps) => {
  const carouselContext = useContext(CarouselContext);
  const isMediaMobileUp = useIsMediaMobileUp();
  const [currSlide, setCurrSlide] = useState(
    carouselContext.state.currentSlide,
  );

  const prevSlide = usePrevious(currSlide);

  useEffect(() => {
    const onChange = () => {
      setCurrSlide(carouselContext.state.currentSlide);
    };

    const subscribe = () => {
      carouselContext.subscribe(onChange);
    };

    const unsubscribe = () => {
      carouselContext.unsubscribe(onChange);
    };

    subscribe();
    return unsubscribe;
  }, [carouselContext]);

  useEffect(() => {
    if (currSlide === prevSlide) {
      return;
    }

    if (onChange) onChange(currSlide);
  }, [prevSlide, currSlide, onChange]);

  return (
    <Slider tabIndex={-1} className={classNames(styles.Slider, className)}>
      {carouselData.map(({ id, picture }, index) => {
        const isSlideSelected = index === currSlide + (isMediaMobileUp ? 1 : 0);
        const backgroundImage = `url(${picture})`;

        const slideInnerClass = isSlideSelected
          ? styles.SlideInnerSelected
          : styles.SlideInnerDefault;

        const slideOverlayClass = isSlideSelected
          ? styles.SlideOverlaySelected
          : styles.SlideOverlayDefault;

        return (
          <Slide
            key={id}
            index={index}
            tabIndex={-1}
            className={styles.SlideOuter}
            innerClassName={slideInnerClass}
          >
            <div className={slideOverlayClass} />
            <div className={styles.SlideBgImage} style={{ backgroundImage }} />
          </Slide>
        );
      })}
    </Slider>
  );
};

export default memo(ArtifactsCarousel);
