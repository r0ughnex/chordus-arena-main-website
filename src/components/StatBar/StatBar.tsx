import classNames from 'classnames';
import { ArtifactRank } from 'containers/ArtifactsViewer';
import useRankColor from 'hooks/useRankColor';
import { memo } from 'react';

import styles from './StatBar.module.scss';

export interface StatBarProps {
  artifactRank: ArtifactRank;
  widthPercent: number;
  className?: string;
}

function StatBar({ artifactRank, widthPercent, className }: StatBarProps) {
  const barColor = useRankColor(artifactRank);

  return (
    <div className={classNames(styles.StatBar, className)}>
      <span className={styles.StatBarFull} />

      <span
        className={styles.StatBarValue}
        style={{
          width: `${widthPercent}%`,
          backgroundColor: barColor,
        }}
      />
    </div>
  );
}

export default memo(StatBar);
