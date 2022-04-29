import classNames from 'classnames';
import Button, { ButtonSize, ButtonType, LinkTarget } from 'components/Button';
import StatBar from 'components/StatBar';
import { AnimatePresence, motion } from 'framer-motion';
import useOSCollection from 'hooks/useOSCollection';
import useRankColor from 'hooks/useRankColor';
import { ReactComponent as CloseIcon } from 'icons/clear.svg';
import { memo, MouseEvent, useState } from 'react';
import getRankColor from 'utils/getRankColor';
import toTitleCase from 'utils/toTitleCase';

import { rankStatsData, rankStatsMax } from '../data';
import { ArtifactRank } from '../types';
import styles from './RankStatsSelector.module.scss';

export interface RankStatsSelectorProps {
  onChange?: (rank: ArtifactRank) => void;
  selectedRank: ArtifactRank;
  className?: string;
}

const heroImage = `${process.env.PUBLIC_URL}/images/ca-hero.png`;

const RankStatsSelector = ({
  selectedRank,
  className,
  onChange,
}: RankStatsSelectorProps) => {
  const osCollectionHref = useOSCollection();
  const titleLineColor = useRankColor(selectedRank);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const { bonusStats, ratingPoints } = rankStatsData[selectedRank];
  const { bonusStats: bonusStatsMax, ratingPoints: ratingPointsMax } =
    rankStatsMax;

  const widthStats = (bonusStats / bonusStatsMax) * 100;
  const widthRating = (ratingPoints / ratingPointsMax) * 100;

  const motionAnimPropsModalRoot = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.35,
    },
  };

  const motionAnimPropsModalClose = {
    ...motionAnimPropsModalRoot,
    transition: {
      duration: 0.5,
    },
  };

  const motionAnimPropsModalItem = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
    },
  };

  const onRankSelect = () => {
    setIsSelectorVisible(true);
  };

  const onCloseClick = (e?: MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsSelectorVisible(false);
  };

  const onRankChange = (rank: ArtifactRank, e?: MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsSelectorVisible(false);
    if (rank === selectedRank) {
      return;
    }

    if (onChange) {
      onChange(rank);
    }
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
            <span
              className={styles.SelectorBoxTitleLine}
              style={{ backgroundColor: titleLineColor }}
            />
            {toTitleCase(selectedRank)}
          </h2>

          <Button
            onClick={onRankSelect}
            size={ButtonSize.Small}
            type={ButtonType.Primary}
            className={styles.SelectRankButton}
          >
            Select artifact rank
          </Button>
        </div>

        <div className={styles.SelectorBoxBottom}>
          <p className={styles.SelectorBoxText}>
            Each rank provides a different number of extra stats as well as
            higher possible value ranges. The higher the rank - the more
            effecient the artifact.
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

      <AnimatePresence>
        {isSelectorVisible && (
          <motion.div
            {...motionAnimPropsModalRoot}
            className={styles.SelectorModal}
          >
            <motion.a
              {...motionAnimPropsModalClose}
              className={styles.ModalClose}
              href="#close-rank-modal"
              onClick={onCloseClick}
            >
              <CloseIcon className={styles.ModalCloseIcon} />
            </motion.a>

            {Object.values(ArtifactRank).map((rank, index) => {
              const { bonusStats, ratingPoints } = rankStatsData[rank];
              const lineColor = getRankColor(rank);
              const key = `select_${rank}_${index}`;

              return (
                <motion.a
                  key={key}
                  {...motionAnimPropsModalItem}
                  className={styles.ModalItem}
                  href={`#select-rank-${rank}`}
                  onClick={e => onRankChange(rank, e)}
                >
                  <h2 className={styles.ModalItemTitle}>
                    <span
                      className={styles.ModalItemTitleLine}
                      style={{ backgroundColor: lineColor }}
                    />
                    {toTitleCase(rank)}
                  </h2>

                  <p className={styles.ModalItemText}>
                    {bonusStats} / {bonusStatsMax} bonus stats
                    <br />
                    {ratingPoints} rating points
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(RankStatsSelector);
