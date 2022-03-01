import classNames from 'classnames';
import { ReactComponent as LinkedInIcon } from 'icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'icons/twitter.svg';
import { Fragment, memo } from 'react';

import styles from './TeamGrid.module.scss';

export type TeamGridItem = {
  linkedIn?: string;
  twitter?: string;
  picture?: string;
  title: string;
  text: string[];
  id: string;
};

export interface TeamGridProps {
  className?: string;
  items: TeamGridItem[];
}

function TeamGrid({ className, items }: TeamGridProps) {
  const { PUBLIC_URL = '' } = process.env;
  const defaultImage = 'images/ca-logo.png';
  const defaultImageSrc = `${PUBLIC_URL}/${defaultImage}`;

  const linkElemProps = {
    className: styles.GridItemLink,
    rel: 'noopener noreferrer',
    target: '_blank',
  };

  return (
    <div className={classNames(styles.TeamGrid, className)}>
      {items.map(({ linkedIn, twitter, picture, title, text, id }, index) => {
        const key = `${id}_${index}`;
        const hasImage = !!picture;

        return (
          <div className={styles.TeamGridItem} key={key}>
            <div className={styles.GridItemWrap}>
              <img
                className={
                  hasImage
                    ? styles.GridItemImageDefault
                    : styles.GridItemImageFallback
                }
                src={hasImage ? picture : defaultImageSrc}
                alt=""
              />
            </div>

            <div className={styles.GridItemWrap}>
              <h4 className={styles.GridItemTitle}>{title}</h4>

              <p className={styles.GridItemText}>
                {text.map((textContent, index) => {
                  const key = `text-${index}`;
                  const isFirst = index === 0;
                  const textSeperator = ', ';

                  if (isFirst) {
                    return <Fragment key={key}>{textContent}</Fragment>;
                  }

                  return (
                    <Fragment key={key}>
                      {textSeperator}
                      <br />
                      {textContent}
                    </Fragment>
                  );
                })}
              </p>

              {(linkedIn || twitter) && (
                <div className={styles.GridItemLinks}>
                  {twitter && (
                    <a {...linkElemProps} href={linkedIn}>
                      <LinkedInIcon className={styles.GridItemIcon} />
                    </a>
                  )}

                  {linkedIn && (
                    <a {...linkElemProps} href={twitter}>
                      <TwitterIcon className={styles.GridItemIcon} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(TeamGrid);
