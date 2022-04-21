import 'pure-react-carousel/dist/react-carousel.es.css';

import Container from 'components/Container';
import Section, { SectionText, SectionTitle } from 'components/Section';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMediaMobileUp } from 'hooks/useMediaQuery';
import { CarouselProvider } from 'pure-react-carousel';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import ArtifactsCarousel from './ArtifactsCarousel';
import ArtifactsLoading from './ArtifactsLoading';
import styles from './ArtifactsViewer.module.scss';
import { carouselData, carouselOptions, viewerData } from './data';
import ElementsSelector from './ElementsSelector';
import { useArtifactsViewer } from './hooks';
import { ArtifactType, ElementType } from './types';

export interface ArtifactsViewerProps {
  delay?: number;
}

function ArtifactsViewer({ delay = 1 }: ArtifactsViewerProps) {
  const frameRef = useRef<null | HTMLIFrameElement>(null);
  const isMediaMobileUp = useIsMediaMobileUp();
  const {
    visibleSlidesMobile,
    visibleSlidesDesktop,
    visibleSlidesDefault,
    ...providerOptions
  } = carouselOptions;

  const [visibleSlides, setVisibleSlidies] = useState(
    isMediaMobileUp ? visibleSlidesDesktop : visibleSlidesMobile,
  );

  // 'currentSlide' might need to be offset by '1'.
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(`${carouselData.length / visibleSlidesDefault}`) +
      (isMediaMobileUp ? 0 : 1),
  );

  const [elementType, setElementType] = useState<ElementType>(
    ElementType.Darkness,
  );

  const [artifactType, setArtifactType] = useState<ArtifactType>(
    carouselData[currentSlide + (isMediaMobileUp ? 1 : 0)].type,
  );

  const [modelId, setModelId] = useState(
    viewerData[artifactType][elementType].id,
  );

  const { isViewerReady } = useArtifactsViewer({
    modelId,
    frameRef,
  });

  const motionAnimPropsWrapper = {
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  const motionAnimPropsFrame = {
    ...motionAnimPropsWrapper,
    animate: {
      opacity: isViewerReady ? 1 : 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  const motionAnimPropsLoader = {
    ...motionAnimPropsFrame,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const onSlideChange = useCallback((currSlide: number) => {
    setCurrentSlide(currSlide);
  }, []);

  const onElementChange = useCallback((elemType: ElementType) => {
    setElementType(elemType);
  }, []);

  useEffect(() => {
    setVisibleSlidies(
      isMediaMobileUp ? visibleSlidesDesktop : visibleSlidesMobile,
    );
  }, [isMediaMobileUp, visibleSlidesDesktop, visibleSlidesMobile]);

  useEffect(() => {
    setArtifactType(
      carouselData[currentSlide + (isMediaMobileUp ? 1 : 0)].type,
    );
  }, [isMediaMobileUp, currentSlide]);

  useEffect(() => {
    setModelId(viewerData[artifactType][elementType].id);
  }, [elementType, artifactType]);

  return (
    <motion.div {...motionAnimPropsWrapper}>
      <Section className={styles.ViewerSectionContent}>
        <Container>
          <SectionTitle>Ancient artifacts</SectionTitle>

          <SectionText>
            Competition rules allow only melee weapons, made stronger by using
            one of the six special elements, gathered from the farthest parts of
            the universe and brought to the arena where they can be forged by
            forge masters into Ancient Artifacts.
          </SectionText>
        </Container>
      </Section>

      <div className={styles.ViewerSectionWrapper}>
        <Section className={styles.ViewerSectionFrame}>
          <motion.iframe
            {...motionAnimPropsFrame}
            xr-spatial-tracking="true"
            execution-while-not-rendered="true"
            execution-while-out-of-viewport="true"
            allow="autoplay; xr-spatial-tracking"
            title="Chordus Arena Artifacts Viewer"
            sandbox="allow-forms allow-popups allow-scripts allow-same-origin"
            className={styles.ViewerFrame}
            web-share="true"
            tabIndex={-1}
            ref={frameRef}
          />

          <AnimatePresence>
            {!isViewerReady && (
              <motion.div {...motionAnimPropsLoader} key="loader">
                <ArtifactsLoading className={styles.ViewerLoader} />
              </motion.div>
            )}
          </AnimatePresence>
        </Section>

        <Section className={styles.ViewerSectionCarousel}>
          <CarouselProvider
            {...providerOptions}
            currentSlide={currentSlide}
            visibleSlides={visibleSlides}
            totalSlides={carouselData.length}
          >
            <ArtifactsCarousel onChange={onSlideChange} />
          </CarouselProvider>
        </Section>

        <Section className={styles.ViewerSectionElements}>
          <div className={styles.ArtifactRankSelector} />

          <ElementsSelector
            className={styles.ArtifactElemSelector}
            selectedArtifact={artifactType}
            selectedElement={elementType}
            onChange={onElementChange}
          />
        </Section>
      </div>
    </motion.div>
  );
}

export default memo(ArtifactsViewer);
