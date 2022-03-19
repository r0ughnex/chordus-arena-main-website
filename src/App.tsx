import GameInfo from 'containers/GameInfo';
import IntroHero from 'containers/IntroHero';
import { HeroMode } from 'containers/IntroHero/types';
import TeamInfo from 'containers/TeamInfo';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.App}>
      <IntroHero mode={HeroMode.Stats} delay={1.5} />
      <GameInfo delay={2.0} />
      <TeamInfo delay={2.5} />
    </main>
  );
}

export default App;
