import classNames from 'classnames';
import { memo } from 'react';

import styles from './ArtifactsLoading.module.scss';

export interface ArtifactsLoadingProps {
  className?: string;
}

const ArtifactsLoading = ({ className }: ArtifactsLoadingProps) => {
  return (
    <div className={classNames(styles.LoadingRoot, className)}>
      {[...Array(3).keys()].map(key => (
        <span className={styles.LoadingSpan} key={key} />
      ))}

      <h4 className={styles.LoadingText}>Loading...</h4>
    </div>
  );
};

export default memo(ArtifactsLoading);
