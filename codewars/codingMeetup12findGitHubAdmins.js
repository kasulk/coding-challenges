function findAdmin(devs, lang) {
  return devs.reduce((acc, dev) => {
    const { language, githubAdmin } = dev;
    return language === lang && githubAdmin === "yes" ? [...acc, dev] : acc;
  }, []);
}
