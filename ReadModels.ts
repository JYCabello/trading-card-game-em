import * as Events from "./Events"

export type GameState = Readonly<{
  myself: Readonly<{
    hp: number;
    deck: ReadonlyArray<number>;
    hand: ReadonlyArray<number>;
    manaSlots: number;
    manaSpent: number;
  }>,
  opponent: Readonly<{
    hp: number;
    deckSize: number;
    handSize: number;
    manaSlots: number;
    manaSpent: number;
  }>
}>

export function buildStateFor(
  playerID: number,
  events: ReadonlyArray<Events.GameEvent>
  ): GameState {
    const x: GameState = {
      myself: {
        hp: 30,
        deck: [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8],
        hand: [],
        manaSlots: 0,
        manaSpent: 0
      },
      opponent: {
        hp: 30,
        deckSize: 20,
        handSize: 0,
        manaSlots: 0,
        manaSpent: 0
      }
    }
    x.myself.hp = 45
    return x
}
  
