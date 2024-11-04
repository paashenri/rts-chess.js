import { Chess } from '../src/chess'

test('move - works - standard algebraic notation', () => {
  const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR KQkq - 0 1'
  const next = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR KQkq - 0 1'
  const chess = new Chess(fen)
  chess.move('e4')
  expect(chess.fen()).toBe(next)
})