function combat(int $health, int $damage): int {
    $newHealth = $health - $damage;
    return $newHealth > 0 ? $newHealth : 0;
}