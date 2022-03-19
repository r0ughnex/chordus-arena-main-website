import BgVideo from 'components/BgVideo';
import Button, { ButtonType, LinkTarget } from 'components/Button';
import Container from 'components/Container';
import Counter from 'components/Counter';
import { getCounterFromTimeLeft } from 'components/Counter/utils';
import HeroNav from 'components/HeroNav';
import RaffleInputs from 'components/RaffleInputs';
import Section, { SectionText, SectionTitle } from 'components/Section';
import { motion } from 'framer-motion';
import { selectCounter } from 'models/counter';
import { initialState as minMaxDefault, selectMinMax } from 'models/minMax';
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'store';
import getTimeLeftFrom from 'utils/getTimeLeftFrom';

import styles from './IntroHero.module.scss';
import { HeroMode } from './types';

export interface IntroHeroProps {
  mode: HeroMode;
  delay?: number;
}

function IntroHero({ mode, delay = 1 }: IntroHeroProps) {
  const { PUBLIC_URL = '' } = process.env;
  const videoAsset = 'videos/ca-intro.mp4';
  const osCollName = 'chordus-arena-genesis';

  const minMax = useSelector(selectMinMax);
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch<Dispatch>();

  const isModeStats = mode === HeroMode.Stats;
  const isModeTimer = mode === HeroMode.Timer;
  const isModeRaffle = mode === HeroMode.Raffle;

  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const countdownEnd = 'Thu Mar 14 2022 16:00:00 GMT+1100';
  const [timeLeft, setTimeLeft] = useState(getTimeLeftFrom(countdownEnd));

  const onRaffleClick = () => {
    dispatch.counter.pickNextArtifact(null);
  };

  const onClearClick = () => {
    dispatch.counter.clearPickedArtifacts();
  };

  const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch.minMax.setMaxInputValue(e.target.value);
  };

  const onMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch.minMax.setMinInputValue(e.target.value);
  };

  const motionAnimPropsContent = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 15 },
    transition: {
      duration: 0.5,
      delay,
    },
  };

  const motionAnimPropsNav = {
    ...motionAnimPropsContent,
    animate: { opacity: 1 },
    initial: { opacity: 0 },
  };

  useEffect(() => {
    const clearCountdownRef = () => {
      if (!countdownRef.current) return;
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    };

    clearCountdownRef();
    if (!isModeTimer) {
      return;
    }

    if (timeLeft.difference > 0) {
      countdownRef.current = setTimeout(() => {
        setTimeLeft(getTimeLeftFrom(countdownEnd));
      }, 1000);
    }

    return clearCountdownRef;
  }, [countdownEnd, isModeTimer, timeLeft.difference]);

  return (
    <>
      <BgVideo
        type="video/mp4"
        className={styles.IntroVideo}
        src={`${PUBLIC_URL}/${videoAsset}`}
      />

      <Section className={styles.IntroHero}>
        <Container className={styles.HeroWrapper}>
          <motion.div {...motionAnimPropsContent}>
            <h3 className={styles.HeroSub}>Chordus Arena</h3>

            <SectionTitle className={styles.HeroTitle}>
              First ever collection
              <br />
              of ancient artifacts.
            </SectionTitle>

            <SectionText className={styles.HeroText}>
              Deadly weapons that live on the Ethereum blockchain and ready to
              be held by the strongest Gladiators in the Chordus universe.
            </SectionText>

            {isModeRaffle && (
              <>
                <RaffleInputs
                  left={{
                    label: 'Min',
                    value: minMax.minimum,
                    min: minMaxDefault.minimum,
                    max: minMaxDefault.maximum,
                    onChange: onMinInputChange,
                  }}
                  right={{
                    label: 'Max',
                    value: minMax.maximum,
                    min: minMaxDefault.minimum,
                    max: minMaxDefault.maximum,
                    onChange: onMaxInputChange,
                  }}
                />

                <div className={styles.ButtonWrapperRaffle}>
                  <Button type={ButtonType.Primary} onClick={onRaffleClick}>
                    Raffle
                  </Button>

                  <Button type={ButtonType.Secondary} onClick={onClearClick}>
                    Clear
                  </Button>
                </div>

                <Counter
                  left={{
                    value: `#${counter.previous}`,
                    label: 'Previous pick',
                  }}
                  center={{
                    value: `#${counter.current}`,
                    label: 'Current pick',
                  }}
                  right={{
                    value: `${counter.total}`,
                    label: 'Total picked',
                  }}
                />
              </>
            )}

            {(isModeTimer || isModeStats) && (
              <div className={styles.ButtonWrapperTimer}>
                <Button
                  type={ButtonType.Primary}
                  target={LinkTarget.Blank}
                  href={`https://opensea.io/collection/${osCollName}`}
                >
                  Explore
                </Button>

                <Button type={ButtonType.Secondary} disabled>
                  Sold out
                </Button>
              </div>
            )}

            {isModeTimer && <Counter {...getCounterFromTimeLeft(timeLeft)} />}

            {/**
             * @TODO: Change this to be retreived,
             * using the OpenSea NFT API instead.
             */}
            {isModeStats && (
              <Counter
                left={{
                  label: 'Collectables',
                  value: '450',
                }}
                center={{
                  label: 'Members',
                  value: '2.9k',
                }}
                right={{
                  label: 'Holders',
                  value: '95',
                }}
              />
            )}
          </motion.div>
        </Container>
      </Section>

      <motion.div {...motionAnimPropsNav}>
        <HeroNav className={styles.IntroNav} />
      </motion.div>
    </>
  );
}

export default memo(IntroHero);
