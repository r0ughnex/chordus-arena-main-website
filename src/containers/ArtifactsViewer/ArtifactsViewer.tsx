import 'pure-react-carousel/dist/react-carousel.es.css';

import Container from 'components/Container';
import Section, { SectionText, SectionTitle } from 'components/Section';
import { motion } from 'framer-motion';
import { CarouselProvider } from 'pure-react-carousel';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import ArtifactsCarousel from './ArtifactsCarousel';
import styles from './ArtifactsViewer.module.scss';
import { carouselData, carouselOptions, viewerData } from './data';
import { useArtifactsViewer } from './hooks';
import { ElementType } from './types';

export interface ArtifactsViewerProps {
  delay?: number;
}

function ArtifactsViewer({ delay = 1 }: ArtifactsViewerProps) {
  const frameRef = useRef<null | HTMLIFrameElement>(null);

  const initialSlide = parseInt(
    `${carouselData.length / carouselOptions.visibleSlides}`,
  );

  const [elementType] = useState(ElementType.Darkness);
  const [artifactType, setArtifactType] = useState(
    carouselData[initialSlide + 1].type,
  );

  const [modelId, setModelId] = useState(
    viewerData[artifactType][elementType].id,
  );

  const { isViewerReady } = useArtifactsViewer({
    modelId,
    frameRef,
  });

  const motionAnimPropsContent = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 15 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  const motionAnimPropsFrame = {
    animate: { opacity: isViewerReady ? 1 : 0 },
    initial: { opacity: 0 },
    transition: {
      duration: 0.5,
    },
  };

  const motionAnimPropsCarousel = {
    ...motionAnimPropsContent,
    animate: { opacity: 1 },
    initial: { opacity: 0 },
  };

  const onSlideChange = useCallback((currSlide: number) => {
    const { type } = carouselData[currSlide + 1];
    setArtifactType(type);
  }, []);

  useEffect(() => {
    setModelId(viewerData[artifactType][elementType].id);
  }, [elementType, artifactType]);

  return (
    <>
      <Section className={styles.ViewerSectionContent}>
        <Container>
          <motion.div {...motionAnimPropsContent}>
            <SectionTitle>Ancient artifacts</SectionTitle>

            <SectionText>
              Competition rules allow only melee weapons, made stronger by using
              one of the six special elements, gathered from the farthest parts
              of the universe and brought to the arena where they can be forged
              by forge masters into Ancient Artifacts.
            </SectionText>
          </motion.div>
        </Container>
      </Section>

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
          ref={frameRef}
        />
      </Section>

      <Section className={styles.ViewerSectionCarousel}>
        <CarouselProvider
          {...carouselOptions}
          currentSlide={initialSlide}
          totalSlides={carouselData.length}
        >
          <motion.div {...motionAnimPropsCarousel}>
            <ArtifactsCarousel onChange={onSlideChange} />
          </motion.div>
        </CarouselProvider>
      </Section>
    </>
  );
}

export default memo(ArtifactsViewer);
