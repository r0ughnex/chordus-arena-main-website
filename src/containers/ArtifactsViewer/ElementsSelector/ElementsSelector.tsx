import classNames from 'classnames';
import { SectionText, SectionTitle } from 'components/Section';
import { memo } from 'react';

import { ElementType } from '../types';
import styles from './ElementsSelector.module.scss';
import { getSelectorElementClassName } from './utils';

export interface ElementsSelectorProps {
  onChange?: (elemType: ElementType) => void;
  selectedElement: ElementType;
  className?: string;
}

const ElementsSelector = ({
  selectedElement,
  onChange,
  className,
}: ElementsSelectorProps) => {
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

      <SectionTitle className={styles.SelectorTitle}>Shield</SectionTitle>

      <SectionText className={styles.SelectorText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et doloreus magna aliqua. Ut enim ad minim
        veniam.
      </SectionText>

      <div className={styles.SelectorElements}>
        {Object.values(ElementType).map((elemType, index) => {
          const key = `selector-element_${elemType}_${index}`;
          const isSelected = elemType === selectedElement;

          return (
            <button
              key={key}
              disabled={isSelected}
              onClick={() => onElementClick(elemType)}
              className={classNames(getSelectorElementClassName(elemType), {
                [styles.SelectorElementSelected]: isSelected,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(ElementsSelector);