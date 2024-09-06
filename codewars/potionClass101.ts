interface iPotion {
  color: number[];
  volume: number;
  mix(potion: iPotion): iPotion;
}

export class Potion implements iPotion {
  color: number[];
  volume: number;

  constructor(color: number[], volume: number) {
    this.color = color;
    this.volume = volume;
  }

  mix({ color, volume }: iPotion): iPotion {
    const sumVolumes = this.volume + volume;

    const mixedColor = this.color.map((colorValue, i) => {
      const oldValue = colorValue * this.volume;
      const newValue = color[i] * volume;
      const mixValue = Math.ceil((oldValue + newValue) / sumVolumes);
      return mixValue;
    });

    return new Potion(mixedColor, sumVolumes);
  }
}
