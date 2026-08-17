import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default function RandomPoker() {
  const [cardCount, setCardCount] = useState(5);
  const [cards, setCards] = useState([]);

  const drawCards = () => {
    const deck = [];
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        deck.push({ suit, rank, id: `${suit}-${rank}` });
      }
    }
    // Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    setCards(deck.slice(0, cardCount));
  };

  const getSuitColor = (suit) => {
    return suit === '♥' || suit === '♦' ? '#ef4444' : '#f8fafc';
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
          随机扑克牌
        </h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>
          从牌堆中随机抽取扑克牌，支持多种玩法
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#94a3b8', marginBottom: '8px' }}>
            抽牌数量
          </label>
          <input
            type="number"
            min="1"
            max="52"
            value={cardCount}
            onChange={(e) => setCardCount(parseInt(e.target.value) || 1)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: '#1e293b',
              color: '#f8fafc',
              fontSize: '14px',
            }}
          />
        </div>
        <button
          onClick={drawCards}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <RefreshCw size={16} />
          抽牌
        </button>
      </div>

      {cards.length > 0 && (
        <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                style={{
                  width: '70px',
                  height: '100px',
                  borderRadius: '8px',
                  background: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: getSuitColor(card.suit),
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                <span>{card.rank}</span>
                <span style={{ fontSize: '28px' }}>{card.suit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
