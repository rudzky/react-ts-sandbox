function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [getter, setter] = simpleState(10);

console.log(getter());
setter(62);
console.log(getter());

const [getter2, setter2] = simpleState<string | null>(null);

console.log(getter2());
setter2('witam');
console.log(getter2());

// ||
// ||
// ||

interface Rank<RankType> {
  item: RankType;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20,
  },
  {
    name: 'Pikachu',
    hp: 43,
  },
  {
    name: 'Charizard',
    hp: 71,
  },
  {
    name: 'Megasour',
    hp: 10,
  },
];

const ranks = ranker(pokemon, (poke) =>
  poke.hp
    .toString()
    .split('')
    .map(Number)
    .reduce((acc: number, val: number) => acc + val)
);

console.log(ranks);
