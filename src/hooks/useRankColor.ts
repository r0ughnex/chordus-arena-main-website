import { ArtifactRank } from 'containers/ArtifactsViewer';
import getRankColor from 'utils/getRankColor';

export default function useRankColor(rank: ArtifactRank) {
  return getRankColor(rank);
}
