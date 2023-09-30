function declareWinner(fighter1, fighter2, firstAttacker) {
  // as long as both of the fighters have health > 0
  /// decrease health of second attacker by damagePerAttack of first attacker
  /// after the attack,
  /// if second attackers health is < 0, return first attackers name
  /// then
  /// decrease health of first attacker by damagePerAttack of second attacker
  /// if first attackers health is < 0, return second attackers name
  /// else do the same as above, but in opposite order

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (fighter1.name === firstAttacker) {
      // first attacker strikes
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) return fighter1.name;

      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) return fighter2.name;
      //
    } else {
      // second attacker strikes
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) return fighter2.name;

      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) return fighter1.name;
    }
  }
}
