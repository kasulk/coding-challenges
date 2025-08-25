export function replaceEmojis(text) {
  const validEmojiNames = [
    "happy",
    "love",
    "angry",
    "shocked",
    "thumb",
    "sad",
    "nerdy",
    "tongue",
    "sleepy",
  ];

  return text.replaceAll(/:(\w*):/g, (match, foundEmojiName) => {
    return validEmojiNames.includes(foundEmojiName)
      ? `<span class="emoji emoji-${foundEmojiName}"> </span>`
      : match;
  });
}
