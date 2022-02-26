import Page from 'components/Page';
import IntroHero from 'containers/IntroHero';
import { HeroMode } from 'containers/IntroHero/types';

import styles from './App.module.scss';

function App() {
  return (
    <Page>
      <main className={styles.App}>
        <IntroHero mode={HeroMode.Timer} />
      </main>
    </Page>
  );
}

export default App;
