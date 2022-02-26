import classNames from 'classnames';
import Container from 'components/Container';
import Section from 'components/Section';
import { ReactComponent as DiscordIcon } from 'icons/discord.svg';
import { ReactComponent as OpenSeaIcon } from 'icons/opensea.svg';
import { ReactComponent as TwitterIcon } from 'icons/twitter.svg';
import { memo } from 'react';

import styles from './HeroNav.module.scss';

export interface HeroNavProps {
  className?: string;
}

function HeroNav({ className }: HeroNavProps) {
  const osCollName = 'chordus-arena-genesis';
  const twitterHandle = 'ChordusArena';
  const discordInvite = 'NesAmStaEc';

  const linkElemProps = {
    className: styles.NavLink,
    rel: 'noopener noreferrer',
    target: '_blank',
  };

  return (
    <div className={classNames(styles.HeroNav, className)}>
      <Section className={styles.NavSection}>
        <Container className={styles.NavContainer}>
          <a
            {...linkElemProps}
            href={`https://opensea.io/collection/${osCollName}`}
          >
            <OpenSeaIcon className={styles.NavIcon} />
          </a>

          <a {...linkElemProps} href={`https://discord.gg/${discordInvite}`}>
            <DiscordIcon className={styles.NavIcon} />
          </a>

          <a {...linkElemProps} href={`https://twitter.com/${twitterHandle}`}>
            <TwitterIcon className={styles.NavIcon} />
          </a>
        </Container>
      </Section>
    </div>
  );
}

export default memo(HeroNav);
