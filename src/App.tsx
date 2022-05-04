import ArtifactsViewer from 'containers/ArtifactsViewer';
import GameInfo from 'containers/GameInfo';
import IntroHero from 'containers/IntroHero';
import { HeroMode } from 'containers/IntroHero/types';
import TeamInfo from 'containers/TeamInfo';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.App}>
      <IntroHero mode={HeroMode.Stats} delay={1.5} />
      <ArtifactsViewer delay={2.0} />
      <GameInfo delay={2.5} />
      <TeamInfo delay={3.0} />
    </main>
  );
}

export default App;
