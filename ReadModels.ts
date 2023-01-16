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
  }>,
  isMyTurn: boolean
}>

const applyGameStarted = (state: GameState, event: Events.GameStarted): GameState => {
    throw "TODO"
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
  playerID: number,
  events: ReadonlyArray<Events.GameEvent>
  ): GameState {

    const initialState : GameState = {
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
          return applyGameStarted(acc, evt.event);

        case "FirstPlayerPicked":
          return applyFirstPlayerPicked(acc, evt.event);

        case "TurnStarted":
          return applyTurnStarted(acc, evt.event);

        case "ManaSlotGranted":
          return applyManaSlotGranted(acc, evt.event);

        case "ManaRefilled":
          return applyManaRefilled(acc, evt.event);

        case "CardDrawn":
          return applyCardDrawn(acc, evt.event);

        default:
          const _: never = evt
          return acc
      }
    }, initialState);
}
