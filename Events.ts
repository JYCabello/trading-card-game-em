type GameStarted = {
    id: number,
    players: number[]
}

type FirstPlayerPicked = {
    id: number,
    playerID: number
}

type TurnStarted = {
    id: number
}

type ManaSlotGranted = {
    id: number
}

type ManaRefilled = {
    id: number
}

type CardDrawn = {
    id: number,
    card: number
}