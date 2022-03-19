import Container from 'components/Container';
import InfoGrid from 'components/InfoGrid';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

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

  const memoizedInfoItems = useMemo(() => gameInfoItems, []);

  return (
    <Section className={styles.GameInfo} type={SectionType.Dark}>
      <Container>
        <motion.div {...motionAnimPropsContent}>
          <SectionTitle>Game aspects</SectionTitle>

          <SectionText>
            Chordus Arena is a free-to-play, play-and-earn, multiplayer, turn
            based strategy game. The game&apos;s main goal is to be fun and
            addicitve, while enabling players to be part of an ecosystem that
            mimics aspects of real life such as trading, housing, guilds etc.
          </SectionText>

          <InfoGrid items={memoizedInfoItems} />
        </motion.div>
      </Container>
    </Section>
  );
}

export default memo(GameInfo);
