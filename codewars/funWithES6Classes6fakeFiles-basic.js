class File {
  constructor(fullName, contents) {
    // this.fullName = fullName;
    // this.filename;
    // this.extension;
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
    // console.log("getContent():", this.contents);
    // console.log("-----------------------------");
    return this.contents;
  }
  write(str) {
    // console.log("write():", str);
    // console.log("write() before:", this.contents);
    this.contents = this.contents + "\n" + str;
    // console.log("write() after:", this.contents);
    // console.log("-----------------------------");
  }
  gets() {
    // console.log("gets():", this.contents);
    // console.log("-----------------------------");
    // console.log("=" + this.contents.split("\n")[this._getsCount + 1]);

    return this.contents.split("\n")[this._getsCount++];
  }
  getc() {
    console.log("getc():", this.contents);
    console.log("-----------------------------");
    console.log("=" + this.contents[this._getcCount + 1]);

    return this.contents[this._getcCount++];
  }
}

// const bla = new File("testfile.txt", "blabla babbel blub!");
// console.log(bla);
