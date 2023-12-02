class File {
  constructor(fullName, contents) {
    this.contents = contents;
    this._getsCount = 0;
    this._getcCount = 0;

    Object.defineProperties(this, {
      fullName: {
        value: fullName, // writable option defaults to false and can be omitted
      },
      filename: {
        // writing/setting not possible because of missing setter
        get() {
          return fullName.slice(0, fullName.lastIndexOf("."));
        },
      },
      extension: {
        get() {
          return fullName.slice(fullName.lastIndexOf(".") + 1);
        },
      },
    });
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    if (!this.contents) this.contents = str;
    else this.contents = this.contents + "\n" + str;
  }

  gets() {
    return this.contents.split("\n")[this._getsCount++];
  }

  getc() {
    return this.contents[this._getcCount++];
  }
}
