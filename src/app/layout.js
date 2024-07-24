import React from 'react';
import MainNavBar from '@/components/MainNavBar';
import { cookies } from 'next/headers';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

export default function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang='en' data-color-theme={theme} style={themeColors}>
      <body>
        <div className='header'>
          <MainNavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
