import React from 'react';

export enum EPillType {
  WARN = 'warn',
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  CUSTOM = 'custom',
}

interface IPillStyle {
  border: string;
  text: string;
}

interface IProps {
  pillType: EPillType;
  text: string;
  style?: IPillStyle;
  size?: 'S' | 'M' | 'L' | 'XL';
}

const defaultStyles = {
  info: {
    border: 'border-blue-500',
    text: 'text-blue-500',
  },
  success: {
    border: 'border-green-500',
    text: 'text-green-500',
  },
  warn: {
    border: 'border-amber-500',
    text: 'text-amber-500',
  },
  error: {
    border: 'border-red-500',
    text: 'text-red-500',
  },
};

const Pill = ({
  pillType = EPillType.INFO,
  text,
  style,
  size = 'S',
}: IProps) => {
  const setPillType = () => {
    switch (pillType) {
      case EPillType.CUSTOM:
        return Object.values({ ...defaultStyles.info, ...style }).join(' ');
      case EPillType.SUCCESS:
        return Object.values(defaultStyles.success).join(' ');
      case EPillType.WARN:
        return Object.values(defaultStyles.warn).join(' ');
      case EPillType.ERROR:
        return Object.values(defaultStyles.error).join(' ');
      default:
        return Object.values(defaultStyles.info).join(' ');
    }
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
      className={`rounded-full border-2 border-solid py-1 px-3 ${getPillSize()} mr-1 ${setPillType()}`}
    >
      {text}
    </span>
  );
};

export default Pill;
