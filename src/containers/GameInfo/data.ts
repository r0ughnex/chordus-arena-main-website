import { InfoGridItem } from 'components/InfoGrid';
import { ReactComponent as CPUIcon } from 'icons/game-cpu.svg';
import { ReactComponent as MineIcon } from 'icons/game-mine.svg';
import { ReactComponent as SafeIcon } from 'icons/game-safe.svg';
import { ReactComponent as ShieldIcon } from 'icons/game-shield.svg';
import { ReactComponent as ChessIcon } from 'icons/game-strategy.svg';
import { ReactComponent as WalletIcon } from 'icons/game-wallet.svg';

export const gameInfoItems: InfoGridItem[] = [
  {
    id: 'play-earn',
    Icon: WalletIcon,
    title: 'Play-and-earn',
    text: 'Start earning by dominating the arena and becoming a legendary Gladiator. The more you win - the more you earn! Each battle won gives you XP as well as token rewards.',
  },

  {
    id: 'turn-based',
    Icon: ChessIcon,
    title: 'Turn based strategy',
    text: 'Enjoy a strategy game where each turn counts. Apply critical thinking and teamwork to come up with the right strategy and bring victory to your team.',
  },

  {
    id: 'pvp',
    Icon: ShieldIcon,
    title: 'Player vs Player',
    text: 'Whether you join a team-vs-team match, a duel, guild wars or guild siege, you will get a chance to connect with real people that fight for glory and domination. Now the question is, are you on the same side?',
  },

  {
    id: 'pve',
    Icon: CPUIcon,
    title: 'Player vs Environment',
    text: 'Fight some mobs to gain experience before getting into a bloody fight against seasoned Gladiators. Get some juicy loot from the world boss fight for a chance to get rare drops.',
  },

  {
    id: 'mining',
    Icon: MineIcon,
    title: 'Mining gems',
    text: 'Try your luck in the mining shafts for a chance to get super rare loot such as artifacts, gems, gold and more! Use those farmable items to sell for profit, crafting or enhancing existing weapons.',
  },

  {
    id: 'staking',
    Icon: SafeIcon,
    title: 'Staking artifacts',
    text: 'Have unused weapons? Rent them to other players and enjoy some passive income. Let others do the dirty work and get a chance to take a share of their loot.',
  },
];
