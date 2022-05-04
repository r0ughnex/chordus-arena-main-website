export function useOSCollectionUrl() {
  return 'https://opensea.io/collection';
}

export function useOSCollectionName() {
  return 'chordus-arena-genesis';
}

export default function useOSCollection() {
  const osCollName = useOSCollectionName();
  const osCollUrl = useOSCollectionUrl();
  return `${osCollUrl}/${osCollName}`;
}
