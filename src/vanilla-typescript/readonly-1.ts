/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface Cat {
  name: string;
  breed: string;
}

//Readonly tworzy typ z wszystkimi propsami tylko do odczytu
function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat('Usul', 'Tabby');
//CAN'T usul.name = 'Piter';

//readonly sprawia że to co zwróci funkcja będzie tylko do odczytu
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const coordinateOne = makeCoordinate(10, 20, 30);
// CAN'T coordinateOne[0] = 99;

// as const makes variable REALLY IMMUTABLE!!!
const reallyConst = [1, 2, 3] as const;
//CAN"T reallyConst[0] = 50;
