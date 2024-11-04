import { Chess } from '../src/chess'

describe('Two moves by same color', () => {
  it('Should let white to move twice', () => {
    const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR KQkq - 0 1'
    const next = 'rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR KQkq - 0 1'
    const chess = new Chess(fen, 0)
    chess.move('e4')
    chess.move({from: 'e4', to: 'e5'});
    expect(chess.fen()).toBe(next)
  })

  it('Should throw error since white has to wait for timer', () => {
    const chess = new Chess()
    chess.move('e4')
    
    // Attempting to make another move immediately should throw an error
    expect(() => chess.move({ from: 'e4', to: 'e5' })).toThrowError('White cannot move yet. Cooldown not expired.')
  })
})