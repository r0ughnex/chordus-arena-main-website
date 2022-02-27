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
    title: 'Play and earn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },

  {
    id: 'turn-based',
    Icon: ChessIcon,
    title: 'Turn based strategy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },

  {
    id: 'pvp',
    Icon: ShieldIcon,
    title: 'Player vs Player',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },

  {
    id: 'pve',
    Icon: CPUIcon,
    title: 'Player vs Environment',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },

  {
    id: 'mining',
    Icon: MineIcon,
    title: 'Mining gems',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },

  {
    id: 'staking',
    Icon: SafeIcon,
    title: 'Staking artifacts',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreus magna aliqua.',
  },
];
