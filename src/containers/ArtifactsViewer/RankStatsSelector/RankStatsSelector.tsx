import classNames from 'classnames';
import Button, { ButtonSize, ButtonType, LinkTarget } from 'components/Button';
import StatBar from 'components/StatBar';
import useOSCollection from 'hooks/useOSCollection';
import useRankColor from 'hooks/useRankColor';
import { memo, useState } from 'react';
import toTitleCase from 'utils/toTitleCase';

import { rankStatsData, rankStatsMax } from '../data';
import { ArtifactRank } from '../types';
import styles from './RankStatsSelector.module.scss';

export interface RankStatsSelectorProps {
  selectedRank: ArtifactRank;
  className?: string;
}

const heroImage = `${process.env.PUBLIC_URL}/images/ca-hero.png`;

const RankStatsSelector = ({
  selectedRank,
  className,
}: RankStatsSelectorProps) => {
  const osCollectionHref = useOSCollection();
  const titleLineColor = useRankColor(selectedRank);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const { bonusStats, ratingPoints } = rankStatsData[selectedRank];
  const { bonusStats: bonusStatsMax, ratingPoints: ratingPointsMax } =
    rankStatsMax;

  const widthStats = (bonusStats / bonusStatsMax) * 100;
  const widthRating = (ratingPoints / ratingPointsMax) * 100;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onCloseButtonClick = () => setIsSelectorVisible(false);
  const onSelectButtonClick = () => setIsSelectorVisible(true);

  return (
    <div className={classNames(styles.RankStatsSelector, className)}>
      <div className={styles.SelectorBox}>
        <div className={styles.SelectorBoxTop}>
          <div
            className={styles.SelectorBoxImage}
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          <h2 className={styles.SelectorBoxTitle}>
            <span
              className={styles.SelectorBoxTitleLine}
              style={{ backgroundColor: titleLineColor }}
            />
            {toTitleCase(selectedRank)}
          </h2>

          <Button
            size={ButtonSize.Small}
            type={ButtonType.Primary}
            onClick={onSelectButtonClick}
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

          <div className={styles.SelectorStats}>
            <div className={styles.SelectorStat}>
              <p className={styles.SelectorStatText}>Bonus stats</p>
              <StatBar artifactRank={selectedRank} widthPercent={widthStats} />
            </div>

            <div className={styles.SelectorStat}>
              <p className={styles.SelectorStatText}>Rating points</p>
              <StatBar artifactRank={selectedRank} widthPercent={widthRating} />
            </div>
          </div>

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
