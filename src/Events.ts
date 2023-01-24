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


export type GameEvent =
  { type: "GameStarted", event: GameStarted } |
  { type: "FirstPlayerPicked", event: FirstPlayerPicked } |
  { type: "TurnStarted", event: TurnStarted } |
  { type: "ManaSlotGranted", event: ManaSlotGranted } |
  { type: "ManaRefilled", event: ManaRefilled } |
  { type: "CardDrawn", event: CardDrawn }
