class Dictionary {
  constructor() {
    this.entries = {};
  }

  newEntry(key, value) {
    this.entries[key] = value;
  }

  look(key) {
    return this.entries[key] || `Can't find entry for ${key}`;
  }
}
