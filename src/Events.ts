export type GameStarted = {
  id: string,
  playerOne: { id: number; initialHand: number[] },
  playerTwo: { id: number; initialHand: number[] }
}

export type FirstPlayerPicked = {
  id: number,
  playerID: number
}

export type TurnStarted = {
  id: number
}

export type ManaSlotGranted = {
  id: number
}

export type ManaRefilled = {
  id: number
}

export type CardDrawn = {
  id: number,
  card: number
}

type Case<TName extends string, T> =
  { type: TName, value: T }


export type GameEvent =
  Case<"GameStarted", GameStarted> |
  Case<"FirstPlayerPicked", FirstPlayerPicked> |
  Case<"TurnStarted", TurnStarted> |
  Case<"ManaSlotGranted", ManaSlotGranted> |
  Case<"ManaRefilled", ManaRefilled> |
  Case<"CardDrawn", CardDrawn>
