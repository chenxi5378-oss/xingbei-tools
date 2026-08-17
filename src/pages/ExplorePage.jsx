import React from 'react';
import { Compass } from 'lucide-react';
import './ExplorePage.css';

export default function ExplorePage() {
  return (
    <div className="explore-page">
      <div className="explore-header">
        <Compass size={32} />
        <h1>探索工具</h1>
        <p>发现和收藏你需要的工具</p>
      </div>
      
      <div className="explore-content">
        <div className="explore-empty">
          <p>探索功能开发中...</p>
        </div>
      </div>
    </div>
  );
}
