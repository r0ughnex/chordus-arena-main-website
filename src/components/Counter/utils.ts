import { TimeLeft } from 'utils/getTimeLeftFrom';

import { CounterItemProps } from '.';

export type CounterTimeLeft = {
  center: CounterItemProps;
  right: CounterItemProps;
  left: CounterItemProps;
};

export const formatCounterValue = (value: number) => {
  return `${value}`.padStart(2, '0');
};

export const getCounterFromTimeLeft = (timeLeft: TimeLeft): CounterTimeLeft => {
  const { days, hours, minutes, seconds } = timeLeft;

  if (days > 0) {
    return {
      left: {
        value: formatCounterValue(days),
        label: 'Days',
      },

      center: {
        value: formatCounterValue(hours),
        label: 'Hours',
      },

      right: {
        value: formatCounterValue(minutes),
        label: 'Minutes',
      },
    };
  }

  return {
    left: {
      value: formatCounterValue(hours),
      label: 'Hours',
    },

    center: {
      value: formatCounterValue(minutes),
      label: 'Minutes',
    },

    right: {
      value: formatCounterValue(seconds),
      label: 'Seconds',
    },
  };
};
