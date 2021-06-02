/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: 'Before Load',
};

const isLoading = (state: string) => state === LoadingState.loading;

// Literal Types czyli 1 | 2 | 3 itd...

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5 + 1);
  }
  return pip;
}

// CAN"T onsole.log(rollDice(4));

//String Literal means the argument has to be exactly

function sendTheEvent(name: 'addToCart', data: { productId: number }): void;
function sendTheEvent(name: 'checkout', data: { cartCount: number }): void;
function sendTheEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendTheEvent('addToCart', { productId: 1234 });
sendTheEvent('checkout', { cartCount: 99 });

//This one won't work because it has no matching function version
// sendTheEvent('Joe Rogan Experience', { cool: true });
