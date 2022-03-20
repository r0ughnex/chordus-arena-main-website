import Container from 'components/Container';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { motion } from 'framer-motion';
import { memo, useRef, useState } from 'react';

import styles from './ArtifactsViewer.module.scss';
import { useArtifactsViewer } from './hooks';

export interface ArtifactsViewerProps {
  delay?: number;
}

function ArtifactsViewer({ delay = 1 }: ArtifactsViewerProps) {
  console.log('---------------------------------');
  console.log('ArtifactsViewer: render() called.');
  const [modelId] = useState('bc4bba1a9c6343128608a013114b8aeb');
  const frameRef = useRef<null | HTMLIFrameElement>(null);

  const motionAnimPropsContent = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 15 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  const { isViewerReady } = useArtifactsViewer({ modelId, frameRef });

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
        <iframe
          ref={frameRef}
          web-share="true"
          xr-spatial-tracking="true"
          execution-while-not-rendered="true"
          execution-while-out-of-viewport="true"
          allow="autoplay; xr-spatial-tracking"
          title="Chordus Arena Artifacts Viewer"
          sandbox="allow-forms allow-popups allow-scripts allow-same-origin"
          className={
            !isViewerReady
              ? styles.ViewerFrameHidden
              : styles.ViewerFrameVisible
          }
        />
      </Section>
    </>
  );
}

export default memo(ArtifactsViewer);
