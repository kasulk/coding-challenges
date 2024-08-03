function getFirstPython(devs) {
  const firstPythonDev = devs.find((dev) => dev.language === "Python");

  if (!firstPythonDev) return "There will be no Python developers";
  return `${firstPythonDev.firstName}, ${firstPythonDev.country}`;
}
