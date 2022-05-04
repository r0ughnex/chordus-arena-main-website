import classNames from 'classnames';
import { ReactComponent as ArtStationIcon } from 'icons/artstation.svg';
import { ReactComponent as LinkedInIcon } from 'icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'icons/twitter.svg';
import { Fragment, memo } from 'react';

import GridItemLink from './GridItemLink';
import styles from './TeamGrid.module.scss';
import { TeamGridItem } from './types';

export interface TeamGridProps {
  className?: string;
  items: TeamGridItem[];
}

function TeamGrid({ className, items }: TeamGridProps) {
  const { PUBLIC_URL = '' } = process.env;
  const defaultImage = 'images/ca-logo.png';
  const defaultImageSrc = `${PUBLIC_URL}/${defaultImage}`;

  return (
    <div className={classNames(styles.TeamGrid, className)}>
      {items.map(
        (
          { artStation, linkedIn, twitter, picture, title, text, id },
          index,
        ) => {
          const hasImage = !!picture;
          const key = `grid-item_${id}_${index}`;
          const isProfileCreative = !!artStation;
          const gridItemLinks = [
            {
              href: isProfileCreative ? artStation : linkedIn,
              Icon: isProfileCreative ? ArtStationIcon : LinkedInIcon,
            },
            {
              href: twitter,
              Icon: TwitterIcon,
            },
          ];

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
                    const key = `item-text_${index}`;
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

                <div className={styles.GridItemLinks}>
                  {gridItemLinks.map(({ href, Icon }, index) => {
                    const key = `grid-item-link_${href}_${index}`;
                    const gridItemLinkProps = { id, href, Icon };
                    return <GridItemLink {...gridItemLinkProps} key={key} />;
                  })}
                </div>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}

export default memo(TeamGrid);
