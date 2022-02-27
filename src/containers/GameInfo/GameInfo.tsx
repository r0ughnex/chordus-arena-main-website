import classNames from 'classnames';
import Container from 'components/Container';
import InfoGrid from 'components/InfoGrid';
import Section, {
  SectionText,
  SectionTitle,
  SectionType,
} from 'components/Section';
import { memo } from 'react';

import { gameInfoItems } from './data';
import styles from './GameInfo.module.scss';

export interface GameInfoProps {
  className?: string;
}

function GameInfo({ className }: GameInfoProps) {
  return (
    <Section
      type={SectionType.Dark}
      className={classNames(styles.GameInfo, className)}
    >
      <Container>
        <SectionTitle>Game aspects</SectionTitle>

        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SectionText>

        <InfoGrid items={gameInfoItems} />
      </Container>
    </Section>
  );
}

export default memo(GameInfo);
