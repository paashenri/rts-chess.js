import { Chess } from '../src/chess'

test('move - works - standard algebraic notation', () => {
  const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR KQkq - 0 1'
  const next = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR KQkq - 0 1'
  const chess = new Chess(fen)
  chess.move('e4')
  expect(chess.fen()).toBe(next)
})

test('move - works - standard algebraic notation - black moves first', () => {
  const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR KQkq - 0 1'
  const next = 'rnbqkbnr/pppp1ppp/8/4p3/8/8/PPPPPPPP/RNBQKBNR KQkq - 0 2'
  const chess = new Chess(fen)
  chess.move({from: 'e7', to: 'e5'});
  expect(chess.fen()).toBe(next)
})