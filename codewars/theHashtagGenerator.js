function generateHashtag(str) {
  const words = str.trim().replace(/\s+/g, " ");

  if (!words) return false;

  const hashtag =
    "#" +
    words
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("");

  return hashtag.length > 140 ? false : hashtag;
}
