import * as Events from "./Events"

export type GameState = {
  readonly myself: {
    readonly hp: number;
    readonly deck: ReadonlyArray<number>;
    readonly hand: ReadonlyArray<number>;
    readonly manaSlots: number;
    readonly manaSpent: number;
  },
  readonly opponent: {
    readonly hp: number;
    readonly deckSize: number;
    readonly handSize: number;
    readonly manaSlots: number;
    readonly manaSpent: number;
  }
}

export function buildStateFor(
  playerID: number,
  events: ReadonlyArray<Events.GameEvent>
  ): GameState {
    const x = {
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
  
