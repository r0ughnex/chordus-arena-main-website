import Container from 'components/Container';
import InfoGrid from 'components/InfoGrid';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { motion } from 'framer-motion';
import { memo } from 'react';

import { gameInfoItems } from './data';
import styles from './GameInfo.module.scss';

export interface GameInfoProps {
  delay?: number;
}

function GameInfo({ delay = 1 }: GameInfoProps) {
  const motionAnimPropsContent = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 15 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  return (
    <Section className={styles.GameInfo} type={SectionType.Dark}>
      <Container>
        <motion.div {...motionAnimPropsContent}>
          <SectionTitle>Game aspects</SectionTitle>

          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionText>

          <InfoGrid items={gameInfoItems} />
        </motion.div>
      </Container>
    </Section>
  );
}

export default memo(GameInfo);
