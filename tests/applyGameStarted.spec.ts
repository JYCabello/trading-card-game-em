import { GameStarted } from '../src/Events';
import { applyGameStarted, GameState } from '../src/ReadModels'

describe('applyGameStarted', () => {
  it('removes initial hand from player deck', () => {
    const state: GameState = {
      playerId: 983274,
      myself: {
        hp: 30,
        deck: [0,0,1,1,2,2,2,3,3,4,4,4,5,5,6,7,8],
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
      id: '861556bc-1c09-42c4-bdf9-e7ac27ae7a53',
      playerOne: { id: 983274, initialHand: [3, 3, 6] },
      playerTwo: { id: 39874, initialHand: [1, 0, 3] }
    };

    expect(applyGameStarted(state, evt)).toEqual(state)
  })
})
