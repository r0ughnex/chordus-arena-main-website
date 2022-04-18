import classNames from 'classnames';
import { FC, SVGProps } from 'react';

import styles from './GridItemLink.module.scss';

export interface GridItemLinkProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  href?: string;
  id: string;
}

function GridItemLink({ Icon, className, href, id }: GridItemLinkProps) {
  return (
    <a
      key={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        { [styles.GridItemLinkDisabled]: !href },
        { [styles.GridItemLinkEnabled]: href },
        className,
      )}
    >
      <Icon className={styles.GridItemIcon} />
    </a>
  );
}

export default GridItemLink;
