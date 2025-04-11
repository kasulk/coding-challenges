function whosOnline(friends) {
  const output = {};

  for (const friend of friends) {
    const { username, status, lastActivity } = friend;
    const { online, offline, away } = output;

    if (status === "offline") {
      if (!offline) output.offline = [];
      output.offline.push(username);
    } else {
      if (lastActivity > 10) {
        if (!away) output.away = [];
        output.away.push(username);
      } else {
        if (!online) output.online = [];
        output.online.push(username);
      }
    }
  }

  return output;
}
