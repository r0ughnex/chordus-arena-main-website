import { ArtifactRank } from 'containers/ArtifactsViewer';
import { Color } from 'styles/variables';

export default function getRankColor(rank: ArtifactRank) {
  switch (rank) {
    case ArtifactRank.Base: {
      return Color.RankBase;
    }

    case ArtifactRank.Common: {
      return Color.RankComm;
    }

    case ArtifactRank.Rare: {
      return Color.RankRare;
    }

    case ArtifactRank.Epic: {
      return Color.RankEpic;
    }

    case ArtifactRank.Legendary: {
      return Color.RankLegend;
    }

    default: {
      return Color.RankDefault;
    }
  }
}
