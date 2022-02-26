import classNames from 'classnames';
import { ChangeEvent } from 'react';

import styles from './RaffleInputs.module.scss';

export interface RaffleInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  label: string;
  max: number;
  min: number;
}

export interface RaffleInputsProps {
  className?: string;
  left: RaffleInputProps;
  right: RaffleInputProps;
}

function RaffleInputs({ className, left, right }: RaffleInputsProps) {
  return (
    <div className={classNames(styles.RaffleInputs, className)}>
      <div className={styles.InputRoot}>
        <p className={styles.InputLabel}>{left.label}</p>

        <input
          type="number"
          min={left.min}
          max={left.max}
          value={left.value}
          onChange={left.onChange}
          className={styles.InputElem}
        />
      </div>

      <div className={styles.InputRoot}>
        <p className={styles.InputLabel}>{right.label}</p>

        <input
          type="number"
          min={right.min}
          max={right.max}
          value={right.value}
          onChange={right.onChange}
          className={styles.InputElem}
        />
      </div>
    </div>
  );
}

export default RaffleInputs;
