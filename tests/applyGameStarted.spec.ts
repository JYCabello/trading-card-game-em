import { GameStarted } from '../src/Events';
import { applyGameStarted, GameState } from '../src/ReadModels'

describe('applyGameStarted', () => {
  it('does nothing with the state', () => {
    const state: GameState = {
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
    };
    const evt: GameStarted = {
      id: 987243,
      players: [87634, 12764]
    };

    expect(applyGameStarted(state, evt)).toEqual(state)
  })
})
