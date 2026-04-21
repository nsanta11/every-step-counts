import { useState } from 'react';
import iconArrow from '@/assets/images/icon-arrow.svg';
import './Accordion.scss';

interface AccordionLocation {
  name: string;
  description: string;
}

interface AccordionItem {
  id: string;
  question: string;
  icon?: React.ReactNode;
  answer?: string;
  list?: string[];
  locations?: AccordionLocation[];
}

interface AccordionProps {
  items: AccordionItem[];
  variant?: 'default' | 'trail';
  defaultOpenId?: string | null;
}

export default function Accordion({ items, variant = 'default', defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <div className={`accordion${variant === 'trail' ? ' accordion--trail' : ''}`}>
      {items.map(item => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`} onClick={() => toggle(item.id)}>
            <button
              className="accordion__trigger"
              onClick={(e) => { e.stopPropagation(); toggle(item.id); }}
              aria-expanded={isOpen}
            >
              <span className="accordion__trigger-main">
                {item.icon && (
                  <span className="accordion__icon" aria-hidden="true">{item.icon}</span>
                )}
                <span className="accordion__question">{item.question}</span>
              </span>
              <span className="accordion__arrow" aria-hidden="true">
                <img src={iconArrow} alt="" width={20} height={20} />
              </span>
            </button>
            <div className="accordion__body" aria-hidden={!isOpen}>
              <div className="accordion__body-inner">
                {item.answer && <p className="accordion__answer">{item.answer}</p>}
                {item.list && (
                  <div className="accordion__list">
                    {item.list.map((listItem, i) => (
                      <div key={i} className="accordion__list-item">
                        <span className="accordion__list-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="accordion__list-text">{listItem}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.locations && (
                  <div className="accordion__locations">
                    {item.locations.map((loc, i) => (
                      <div key={i} className="accordion__location">
                        <p className="accordion__location-name">{loc.name}</p>
                        <p className="accordion__location-desc">{loc.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
