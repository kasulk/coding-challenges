class Song {
  listeners = [];

  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  howMany(people) {
    const numInitialListeners = this.listeners.length;

    people.forEach((person) => {
      person = person.toLowerCase();
      if (!this.listeners.includes(person)) this.listeners.push(person);
    });

    return this.listeners.length - numInitialListeners;
  }
}
