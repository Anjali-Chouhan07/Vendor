import React from 'react';
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaChartLine,
  FaExchangeAlt, // 🔁 new return icon
} from 'react-icons/fa';

const items = [
  { key: 'home', label: 'Home', icon: <FaHome /> },
  { key: 'listings', label: 'Listings', icon: <FaBox /> },
  { key: 'orders', label: 'Orders', icon: <FaShoppingCart /> },
  { key: 'returns', label: 'Returns', icon: <FaExchangeAlt /> }, // updated icon
  { key: 'growth', label: 'Growth', icon: <FaChartLine /> },
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e40af',
      }}
    >
      {items.map((i) => (
        <button
          key={i.key}
          onClick={() => setActive(i.key)}
          style={{
            width: '100%',
            padding: '18px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: active === i.key ? '#2563eb' : 'transparent',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#3b82f6')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              active === i.key ? '#2563eb' : 'transparent')
          }
        >
          <span style={{ fontSize: '20px' }}>{i.icon}</span>
          <span style={{ fontSize: '12px' }}>{i.label}</span>
        </button>
      ))}
    </aside>
  );
}
