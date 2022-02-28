import Container from 'components/Container';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { motion } from 'framer-motion';
import { memo } from 'react';

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

  const renderContactUsLink = () => {
    const mailTo = 'contact@chordusarena.com';
    return <a href={`mailto:${mailTo}`}>contact us</a>;
  };

  return (
    <Section className={styles.TeamInfo} type={SectionType.Medm}>
      <Container>
        <motion.div {...motionAnimPropsContent}>
          <SectionTitle>Core Team</SectionTitle>

          <SectionText>
            We are hiring! Lorem ipsum, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo {renderContactUsLink()}.
          </SectionText>
        </motion.div>
      </Container>
    </Section>
  );
}

export default memo(TeamInfo);
