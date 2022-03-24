import Container from 'components/Container';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';

import styles from './ArtifactsViewer.module.scss';
import { artifactsShield } from './data';
import { useArtifactsViewer } from './hooks';

export interface ArtifactsViewerProps {
  delay?: number;
}

function ArtifactsViewer({ delay = 1 }: ArtifactsViewerProps) {
  const intervalIdRef = useRef<number | null>(null);
  const frameRef = useRef<null | HTMLIFrameElement>(null);
  const [modelId, setModelId] = useState(artifactsShield[0]);
  const { isViewerReady } = useArtifactsViewer({ modelId, frameRef });

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

  /**
   * @TODO: Effect to test if the artifacts,
   * can be changed by user selection or not.
   * To be removed once the carousel is built!
   */
  useEffect(() => {
    const testIntervalDelay = 15000;
    const clearPrevInterval = () => {
      const id = intervalIdRef.current;

      if (id) {
        clearInterval(id);
        intervalIdRef.current = null;
      }
    };

    clearPrevInterval();
    let currentIndex = 0;
    intervalIdRef.current = window.setInterval(() => {
      currentIndex += 1;

      if (currentIndex >= artifactsShield.length) {
        currentIndex = 0;
      }

      setModelId(artifactsShield[currentIndex]);
    }, testIntervalDelay);
  }, []);

  return (
    <>
      <Section className={styles.ViewerSectionTop} type={SectionType.Medm}>
        <Container>
          <motion.div {...motionAnimPropsContent}>
            <SectionTitle>Ancient artifacts</SectionTitle>

            <SectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SectionText>
          </motion.div>
        </Container>
      </Section>

      <Section className={styles.ViewerSectionBttm} type={SectionType.Medm}>
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
    </>
  );
}

export default memo(ArtifactsViewer);
