import classNames from 'classnames';
import Button, { ButtonSize, ButtonType, LinkTarget } from 'components/Button';
import useOSCollection from 'hooks/useOSCollection';
import { memo } from 'react';

import styles from './RankStatsSelector.module.scss';

export interface RankStatsSelectorProps {
  className?: string;
}

const heroImage = `${process.env.PUBLIC_URL}/images/ca-hero.png`;

const RankStatsSelector = ({ className }: RankStatsSelectorProps) => {
  const osCollectionHref = useOSCollection();

  const onSelectRankClick = () => {
    /* eslint-disable no-console */
    console.log('---------------------------');
    console.log('onSelectRankClick() called.');
  };

  return (
    <div className={classNames(styles.RankStatsSelector, className)}>
      <div className={styles.SelectorBox}>
        <div className={styles.SelectorBoxTop}>
          <div
            className={styles.SelectorBoxImage}
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          <h2 className={styles.SelectorBoxTitle}>
            <span className={styles.SelectorBoxTitleLine} />
            Common
          </h2>

          <Button
            size={ButtonSize.Small}
            type={ButtonType.Primary}
            onClick={onSelectRankClick}
            className={styles.SelectRankButton}
          >
            Select artifact rank
          </Button>
        </div>

        <div className={styles.SelectorBoxBottom}>
          <p className={styles.SelectorBoxText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, convallis
            posuere morbi leo massa molestie at.
          </p>

          <Button
            size={ButtonSize.Small}
            href={osCollectionHref}
            target={LinkTarget.Blank}
            type={ButtonType.Alternate}
            className={styles.ViewOSCollButton}
          >
            View full collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(RankStatsSelector);
