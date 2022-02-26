import classNames from 'classnames';
import { memo } from 'react';

import styles from './BgVideo.module.scss';

export interface BgVideoProps {
  className?: string;
  type: string;
  src: string;
}

function BgVideo({ className, type, src }: BgVideoProps) {
  return (
    <div className={classNames(styles.BgVideo, className)}>
      <video autoPlay muted loop playsInline className={styles.VideoPlayer}>
        <source src={src} type={type} />
      </video>

      <div className={styles.VideoOverlay} />
    </div>
  );
}

export default memo(BgVideo);
