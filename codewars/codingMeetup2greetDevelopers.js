function greetDevelopers(devs) {
  return devs.map((dev) => {
    const greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;

    return {
      ...dev,
      greeting,
    };
  });
}
