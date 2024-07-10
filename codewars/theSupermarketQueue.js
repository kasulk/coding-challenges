function queueTime(customers, numTills) {
  let time = 0;
  let checkingOut = [];

  while (customers.length) {
    while (checkingOut.length < numTills && customers.length) {
      const nextCustomer = customers.shift();
      checkingOut.push(nextCustomer);
    }

    while (checkingOut.length) {
      checkingOut = checkingOut
        .map((customer) => --customer)
        .filter((customer) => customer);
      time++;

      if (checkingOut.length < numTills && customers.length) break;
    }
  }

  return time;
}
