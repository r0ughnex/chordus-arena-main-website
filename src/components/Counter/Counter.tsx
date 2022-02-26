import classNames from 'classnames';

import styles from './Counter.module.scss';

export interface CounterItemProps {
  label: string;
  value: string;
}

export interface CounterProps {
  center: CounterItemProps;
  right: CounterItemProps;
  left: CounterItemProps;
  className?: string;
}

function Counter({ className, left, center, right }: CounterProps) {
  return (
    <div className={classNames(styles.Counter, className)}>
      <div>
        <h2 className={styles.CounterValue}>{left.value}</h2>
        <h4 className={styles.CounterLabel}>{left.label}</h4>
      </div>

      <div>
        <h2 className={styles.CounterValue}>{center.value}</h2>
        <h4 className={styles.CounterLabel}>{center.label}</h4>
      </div>

      <div>
        <h2 className={styles.CounterValue}>{right.value}</h2>
        <h4 className={styles.CounterLabel}>{right.label}</h4>
      </div>
    </div>
  );
}

export default Counter;
