import React from 'react';

export enum EPillStyle {
  FILLED = 'filled',
  BORDER = 'border',
}

interface IProps {
  style?: EPillStyle;
  text: string;
  color?: string;
  size?: 'S' | 'M' | 'L' | 'XL';
}

function pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? darkColor : lightColor;
}

const Pill = ({
  text,
  size = 'S',
  color = '#8A2BE2',
  style = EPillStyle.BORDER,
}: IProps) => {
  const getPillStyles = () => {
    switch (style) {
      case EPillStyle.FILLED:
        return `border-[color:var(--pill-color)] bg-[color:var(--pill-color)] ${pickTextColorBasedOnBgColorAdvanced(
          color,
          'text-white',
          'text-black',
        )}`;

      default:
        return 'border-[color:var(--pill-color)] text-[color:var(--pill-color)]';
    }
  };

  const setPillColor = () => {
    return { '--pill-color': color };
  };

  const getPillSize = () => {
    switch (size) {
      case 'M':
        return 'text-base';
      case 'L':
        return 'text-lg';
      case 'XL':
        return 'text-2xl';
      default:
        return 'text-xs';
    }
  };

  return (
    <span
      style={{ ...setPillColor() }}
      className={`rounded-full border-2 border-solid py-1 px-3 ${getPillSize()} mr-1 ${getPillStyles()}`}
    >
      {text}
    </span>
  );
};

export default Pill;
