import classNames from 'classnames';
import { FC } from 'react';

import styles from './InfoGrid.module.scss';

export type InfoGridItem = {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  id: string;
};

export interface InfoGridProps {
  className?: string;
  items: InfoGridItem[];
}

function InfoGrid({ className, items }: InfoGridProps) {
  return (
    <div className={classNames(styles.InfoGrid, className)}>
      {items.map(({ Icon: IconComponent, title, text, id }, index) => {
        const key = `${id}_${index}`;

        return (
          <div className={styles.InfoGridItem} key={key}>
            <IconComponent className={styles.GridItemIcon} />
            <h4 className={styles.GridItemTitle}>{title}</h4>
            <p className={styles.GridItemText}>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default InfoGrid;
