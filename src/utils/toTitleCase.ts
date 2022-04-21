export default function toTitleCase(str?: string) {
  const strLower = str?.toLowerCase();
  const emptyStr = '';
  const space = ' ';

  if (!strLower) {
    return emptyStr;
  }

  return strLower
    .split(space)
    .map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(space);
}
