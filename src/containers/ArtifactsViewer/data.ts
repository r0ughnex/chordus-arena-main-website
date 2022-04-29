import { v4 as uuidv4 } from 'uuid';

import { carouselOptions } from './config';
import {
  ArtifactData,
  ArtifactRank,
  ArtifactType,
  ElementData,
  ElementType,
  RankStatField,
  RankStatsData,
  ViewerData,
} from './types';

const imgPath = `${process.env.PUBLIC_URL}/images/artifact_thumbs`;

export const viewerData: ViewerData = {
  [ArtifactType.Hammer]: {
    [ElementType.Neutral]: { id: 'b54078efaa2f466f8d9182a7fa429d6e' },
    [ElementType.Poison]: { id: '73656bd3e6774b0fa8cc17821d6ec5ee' },
    [ElementType.Fire]: { id: '7921620f1a774766b33b8f54011b99a2' },
    [ElementType.Frost]: { id: 'fb48251bc2fe419db1c96abb6df8f486' },
    [ElementType.Light]: { id: 'aaabf6209f4c487aa9250e0b3ac79edc' },
    [ElementType.Darkness]: { id: 'd557f1b1f57748d28afc2adbe7cc077e' },
  },

  [ArtifactType.Shield]: {
    [ElementType.Neutral]: { id: 'a8a42d153b284543824efdd45ad05056' },
    [ElementType.Poison]: { id: '06c3ff2c4f3344c284490cb4f0ba90ac' },
    [ElementType.Fire]: { id: '8e33790459984f6498a6e82eb855e289' },
    [ElementType.Frost]: { id: 'f133a8619e66473d9d18577dfb46cec0' },
    [ElementType.Light]: { id: 'e7e47e56bff9490ab6ac27ecb9c00aa7' },
    [ElementType.Darkness]: { id: 'bc4bba1a9c6343128608a013114b8aeb' },
  },

  [ArtifactType.Sickle]: {
    [ElementType.Neutral]: { id: '93db67c9c16d47a08cb357c3ad9687a5' },
    [ElementType.Poison]: { id: '2f41c98ad72949fda26db2ee15e193a4' },
    [ElementType.Fire]: { id: '4e1544c03d1e4c2a9c6d094e169403ee' },
    [ElementType.Frost]: { id: 'aac4c62c66d5420b900c24c9a336c533' },
    [ElementType.Light]: { id: '92272fb2bdc24b15bc687a7b933b5319' },
    [ElementType.Darkness]: { id: '699eb5837d28468abb6d4de3ba9a0b35' },
  },

  [ArtifactType.Axe]: {
    [ElementType.Neutral]: { id: '09a782bd9caf409e84b6c37be8e783a8' },
    [ElementType.Poison]: { id: 'd648aa23e6af4b56bc41d176a4626c2b' },
    [ElementType.Fire]: { id: '2eac37decef345638a613dc74a7f28e6' },
    [ElementType.Frost]: { id: '80f2503d8b6946618bd47bf5333a7eb9' },
    [ElementType.Light]: { id: '4862bebe17ff4cd99d2bcdb822a54d37' },
    [ElementType.Darkness]: { id: '0a513467cff243838ed0fd378afbc434' },
  },

  [ArtifactType.Claw]: {
    [ElementType.Neutral]: { id: '1b9f3f29e80543c4a16664bfbeb7c84f' },
    [ElementType.Poison]: { id: '5c583652a31645278e8cb4ac16e9dcfb' },
    [ElementType.Fire]: { id: 'e13bac7131af42adb98ca94758345eae' },
    [ElementType.Frost]: { id: '62d962b0740d43b5bcb9ca3741f4bc23' },
    [ElementType.Light]: { id: '224380fdf8ab4b668d75a1e90d31473b' },
    [ElementType.Darkness]: { id: 'db0a1b529a8f429f8ccb22b671e5dd81' },
  },

  [ArtifactType.Dagger]: {
    [ElementType.Neutral]: { id: '6ad74a2adebb46be9d9a0ba205b0e510' },
    [ElementType.Poison]: { id: '3ab51cbfb4ba436d8144025947ac6de6' },
    [ElementType.Fire]: { id: 'e90b0f546ea54970b1984b907f748b28' },
    [ElementType.Frost]: { id: 'af2b7a95f8d44a808d888aaa2791284f' },
    [ElementType.Light]: { id: 'a9076b1f3c6646498f6970be57b5c955' },
    [ElementType.Darkness]: { id: '70ad2af8b40848ff865d5e6ab130a507' },
  },

  [ArtifactType.Sword]: {
    [ElementType.Neutral]: { id: '4d9ec5b74a3b4d7991dd15a69b0712c7' },
    [ElementType.Poison]: { id: 'a6bcb48fa34f4f2180b35777b17fb57b' },
    [ElementType.Fire]: { id: '9bd2dcfb9f8b49239b06a85ca35dcd9d' },
    [ElementType.Frost]: { id: '15e6a3d9f0494ba38437850e1c28ebf2' },
    [ElementType.Light]: { id: 'd0b2c72bafd447a0ae89aaa72ce971b9' },
    [ElementType.Darkness]: { id: '26581583e8ef40878629b384d4f640af' },
  },
};

export const rankStatsMax: RankStatField = {
  ratingPoints: 900,
  bonusStats: 5,
};

export const rankStatsData: RankStatsData = {
  [ArtifactRank.Base]: {
    ratingPoints: 150,
    bonusStats: 0,
  },

  [ArtifactRank.Common]: {
    ratingPoints: 236,
    bonusStats: 1,
  },

  [ArtifactRank.Rare]: {
    ratingPoints: 334,
    bonusStats: 2,
  },

  [ArtifactRank.Epic]: {
    ratingPoints: 435,
    bonusStats: 3,
  },

  [ArtifactRank.Legendary]: {
    ratingPoints: 554,
    bonusStats: 4,
  },
};

export const artifactData: ArtifactData = {
  [ArtifactType.Hammer]: {
    description:
      'A brutal killer that has one goal - smash. A bit heavy, but ensures a one hit kill. Perfect if you have some extra defense and don’t mind sacrificing a bit of speed for extra force.',
  },

  [ArtifactType.Shield]: {
    description:
      'The Attack Shield is a deadly tool that can be used for both offense and defense. The sharp blade and spikes around the shield are deadly and the compact size allows a quick switch to defense mode.',
  },

  [ArtifactType.Sickle]: {
    description:
      'Built for those who have the skill and power to use this unique weapon. A balanced combination of sharpness, weight, crash ability and maneuver, this weapon will serve well those who can master the right skill.',
  },

  [ArtifactType.Axe]: {
    description:
      'Going to battle with a battle axe is never a bad idea, especially a two handed one. Often fighting an enemy covered with protection, you’d want something that can cut through the thickest shields and armor.',
  },

  [ArtifactType.Claw]: {
    description:
      'Force is not always the best choice, especially if you have the speed and accuracy. With a weapon like this, you will be able to alice and stab your enemy while staying light on your feet allowing you to dodge anything that comes in your way.',
  },

  [ArtifactType.Dagger]: {
    description:
      'The perfect weapon for fast attacks and great maneuver. While being sharp and deadly, it is also compact enough to allow for quick reaction and provides the ability to dodge attacks.',
  },

  [ArtifactType.Sword]: {
    description:
      'Heavy enough to slice anything in its path, the two handed sword will be a great fit for anyone who can lift it. Once the enemy is hit, chances are he won’t be able to get up.',
  },
};

export const elementData: ElementData = {
  [ElementType.Neutral]: {
    description:
      'While being a neutral element, this ancient substance is capable of greatly increasing the damage of your weapon. Often it will be enough to defeat any enemy.',
  },

  [ElementType.Poison]: {
    description:
      "If you can't defeat your enemy with one blow, maybe poisoning them is the best tactic. Not only will they suffer an injury, but they will also lose the ability to cast magic spells.",
  },

  [ElementType.Fire]: {
    description:
      'To ensure victory, the fire element will bring some extra damage over time. Even if you run away from the battle, your enemy might still die behind you from the fatal burns.',
  },

  [ElementType.Frost]: {
    description:
      'If it jumps and you can’t hit it - freeze it. This element allows you to freeze your enemy, ensuring a direct hit with your heavy weapon. By the time your enemy can move, it’s too late.',
  },

  [ElementType.Light]: {
    description:
      'The light element is a force that can’t be explained, however it seems to enhance both attack and defense, making you almost invincible. Whatever this is, you want it on your side.',
  },

  [ElementType.Darkness]: {
    description:
      'The dark element is mysterious and evil in nature, but once you control it, it will allow you to steal life from your opponents while greatly increasing your damage. If you see it against you - run.',
  },
};

/**
 * NOTE: Just repeating the array of carousel data 'N' no. of times,
 * so as to create the illusion of an infinitely scrolling carousel.
 */
export const carouselData = ((repeat = 1) =>
  Array.from({ length: repeat }, () => [
    {
      type: ArtifactType.Hammer,
      picture: `${imgPath}/hammer.png`,
    },

    {
      type: ArtifactType.Shield,
      picture: `${imgPath}/shield.png`,
    },

    {
      type: ArtifactType.Sickle,
      picture: `${imgPath}/sickle.png`,
    },

    {
      type: ArtifactType.Axe,
      picture: `${imgPath}/axe.png`,
    },

    {
      type: ArtifactType.Claw,
      picture: `${imgPath}/claw.png`,
    },

    {
      type: ArtifactType.Dagger,
      picture: `${imgPath}/dagger.png`,
    },

    {
      type: ArtifactType.Sword,
      picture: `${imgPath}/sword.png`,
    },
  ]).flat())(carouselOptions.visibleSlidesDefault * 2).map(data => {
  return { ...data, id: uuidv4() };
});
