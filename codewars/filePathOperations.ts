export class FileMaster {
  filepath: string;

  constructor(filepath: string) {
    this.filepath = filepath;
  }

  extension() {
    return this.filepath.split(".")[1];
  }

  filename() {
    return this.filepath.split("/").slice(-1)[0].split(".")[0];
  }

  dirpath() {
    return this.filepath.split("/").slice(0, -1).join("/") + "/";
  }
}
