import Page from 'components/Page';
import GameInfo from 'containers/GameInfo';
import IntroHero from 'containers/IntroHero';
import { HeroMode } from 'containers/IntroHero/types';

import styles from './App.module.scss';

function App() {
  return (
    <Page>
      <main className={styles.App}>
        <IntroHero mode={HeroMode.Timer} />
        <GameInfo />
      </main>
    </Page>
  );
}

export default App;
