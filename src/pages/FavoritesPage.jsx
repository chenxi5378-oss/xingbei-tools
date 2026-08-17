import React from 'react';
import { Heart } from 'lucide-react';
import './FavoritesPage.css';

export default function FavoritesPage() {
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <Heart size={32} />
        <h1>我的收藏</h1>
        <p>收藏你常用的工具</p>
      </div>
      
      <div className="favorites-content">
        <div className="favorites-empty">
          <p>暂无收藏工具</p>
          <p>点击工具卡片上的爱心图标添加收藏</p>
        </div>
      </div>
    </div>
  );
}
