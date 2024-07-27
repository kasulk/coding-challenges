function isRubyComing(devsList) {
  return devsList.filter((dev) => dev.language === "Ruby").length > 0;
}
