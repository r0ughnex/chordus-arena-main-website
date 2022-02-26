export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  difference: number;
};

const getTimeLeftFrom = (fromDate: string): TimeLeft => {
  const difference = new Date(fromDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      difference,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    difference,
  };
};

export default getTimeLeftFrom;
