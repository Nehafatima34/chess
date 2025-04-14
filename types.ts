export type Theme = 'light' | 'soft-pink' | 'pastel-teal';
export type PieceStyle = 'wooden' | 'glass' | 'classic';

export interface GameSettings {
  theme: Theme;
  pieceStyle: PieceStyle;
}

export interface Square {
  piece: string | null;
  color: 'white' | 'black';
  position: string;
}

export interface Move {
  from: string;
  to: string;
  capturedPiece?: {
    type: string;
    color: 'w' | 'b';
  };
}

export interface CapturedPiece {
  type: string;
  color: 'w' | 'b';
  count: number;
}