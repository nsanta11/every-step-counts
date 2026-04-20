import './SectionTitle.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionTitle({ children, color, align = 'center', className }: SectionTitleProps) {
  return (
    <h2
      className={`section-title${align === 'left' ? ' section-title--left' : ''}${className ? ` ${className}` : ''}`}
      style={color ? { color } : undefined}
    >
      {children}
    </h2>
  );
}
