import classNames from 'classnames';
import { SectionText, SectionTitle } from 'components/Section';
import { memo } from 'react';
import toTitleCase from 'utils/toTitleCase';

import { artifactData, elementData } from '../data';
import { ArtifactType, ElementType } from '../types';
import styles from './ElementsSelector.module.scss';
import { getSelectorElementClassName } from './utils';

const imgPath = `${process.env.PUBLIC_URL}/images/element_crystals`;

export interface ElementsSelectorProps {
  onChange?: (elemType: ElementType) => void;
  selectedArtifact: ArtifactType;
  selectedElement: ElementType;
  className?: string;
}

const ElementsSelector = ({
  selectedArtifact,
  selectedElement,
  className,
  onChange,
}: ElementsSelectorProps) => {
  const crystalPic = `${imgPath}/${selectedElement}.png`;
  const onElementClick = (elemType: ElementType) => {
    if (elemType === selectedElement) {
      return;
    }

    if (onChange) {
      onChange(elemType);
    }
  };

  return (
    <div className={classNames(styles.ElementsSelector, className)}>
      <h3 className={styles.SelectorSub}>Artifact type</h3>

      <SectionTitle className={styles.SelectorTitle}>
        {toTitleCase(selectedArtifact)}
      </SectionTitle>

      <SectionText className={styles.SelectorText}>
        {artifactData[selectedArtifact].description}
      </SectionText>

      <div className={styles.SelectorElements}>
        {Object.values(ElementType).map((elemType, index) => {
          const key = `selector-element_${elemType}_${index}`;
          const isSelected = elemType === selectedElement;
          const crystalPic = `${imgPath}/${elemType}.png`;

          return (
            <button
              key={key}
              disabled={isSelected}
              onClick={() => onElementClick(elemType)}
              style={{ backgroundImage: `url(${crystalPic})` }}
              className={classNames(getSelectorElementClassName(elemType), {
                [styles.SelectorElementSelected]: isSelected,
              })}
            />
          );
        })}
      </div>

      <div className={styles.ElementInfo}>
        <h4 className={styles.ElementInfoTitle}>
          <span
            className={styles.ElementInfoCrystalImage}
            style={{ backgroundImage: `url(${crystalPic})` }}
          />
          {toTitleCase(selectedElement)}
        </h4>

        <p className={styles.ElementInfoText}>
          {elementData[selectedElement].description}
        </p>
      </div>
    </div>
  );
};

export default memo(ElementsSelector);
