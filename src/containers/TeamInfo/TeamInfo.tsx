import Container from 'components/Container';
import HeroNav from 'components/HeroNav';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import TeamGrid from 'components/TeamGrid';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

import { teamInfoItems } from '.';
import styles from './TeamInfo.module.scss';

export interface TeamInfoProps {
  delay?: number;
}

function TeamInfo({ delay = 1 }: TeamInfoProps) {
  const motionAnimPropsContent = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 15 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  const motionAnimPropsNav = {
    ...motionAnimPropsContent,
    animate: { opacity: 1 },
    initial: { opacity: 0 },
  };

  const renderContactUsLink = () => {
    const mailTo = 'contact@chordusarena.com';
    return <a href={`mailto:${mailTo}`}>contact&nbsp;us</a>;
  };

  const memoizedTeamItems = useMemo(() => teamInfoItems, []);

  return (
    <>
      <Section className={styles.TeamInfo} type={SectionType.Medm}>
        <Container>
          <motion.div {...motionAnimPropsContent}>
            <SectionTitle>Core team</SectionTitle>

            <SectionText>
              We are hiring! Lorem ipsum, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo {renderContactUsLink()}.
            </SectionText>

            <TeamGrid items={memoizedTeamItems} />
          </motion.div>
        </Container>
      </Section>

      <motion.div {...motionAnimPropsNav}>
        <HeroNav className={styles.FooterNav} copyright={true} />
      </motion.div>
    </>
  );
}

export default memo(TeamInfo);
