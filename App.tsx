import React, { useState } from 'react';
import { Chessboard } from './components/Chessboard';
import { ThemeSelector } from './components/ThemeSelector';
import { GameInfo } from './components/GameInfo';
import { Theme, PieceStyle } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [pieceStyle, setPieceStyle] = useState<PieceStyle>('wooden');

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Manimacha Chess</h1>
        
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          <div className="space-y-4">
            <GameInfo />
            <div className="flex items-center justify-center">
              <Chessboard theme={theme} pieceStyle={pieceStyle} />
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <ThemeSelector
              currentTheme={theme}
              currentPieceStyle={pieceStyle}
              onThemeChange={setTheme}
              onPieceStyleChange={setPieceStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;