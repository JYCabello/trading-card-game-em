import * as Events from "./Events"

export type GameState = Readonly<{
  playerId: number;
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
  }>,
  isMyTurn: boolean
}>

export const applyGameStarted = (state: GameState, event: Events.GameStarted): GameState => {
  return state
}

const applyFirstPlayerPicked = (state: GameState, event: Events.FirstPlayerPicked): GameState => {
  throw "TODO"
}

const applyTurnStarted = (state: GameState, event: Events.TurnStarted): GameState => {
  throw "TODO"
}

const applyManaSlotGranted = (state: GameState, event: Events.ManaSlotGranted): GameState => {
  throw "TODO"
}

const applyManaRefilled = (state: GameState, event: Events.ManaRefilled): GameState => {
  throw "TODO"
}

const applyCardDrawn = (state: GameState, event: Events.CardDrawn): GameState => {
  throw "TODO"
}

export function buildStateFor(
  playerId: number,
  events: ReadonlyArray<Events.GameEvent>
): GameState {

  const initialState : GameState = {
    playerId: playerId,
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
    },
    isMyTurn: false
  }

  return events.reduce((acc: GameState, evt: Events.GameEvent): GameState => {
    switch (evt.type) {
      case "GameStarted":
        return applyGameStarted(acc, evt.value);

      case "FirstPlayerPicked":
        return applyFirstPlayerPicked(acc, evt.value);

      case "TurnStarted":
        return applyTurnStarted(acc, evt.value);

      case "ManaSlotGranted":
        return applyManaSlotGranted(acc, evt.value);

      case "ManaRefilled":
        return applyManaRefilled(acc, evt.value);

      case "CardDrawn":
        return applyCardDrawn(acc, evt.value);

      default:
        const _: never = evt
      return acc
    }
  }, initialState);
}
