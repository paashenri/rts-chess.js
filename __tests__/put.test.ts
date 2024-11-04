import {
  Chess,
  Piece,
  BLACK,
  ROOK,
} from '../src/chess'

test('put', () => {
  const chess = new Chess()
  chess.clear()

  const piece: Piece = {
    type: ROOK,
    color: BLACK,
  }
  expect(chess.put(piece, 'a1')).toEqual(true)
  expect(chess.get('a1')).toEqual(piece)
})
