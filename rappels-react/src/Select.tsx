import styles from './Select.module.scss';
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

interface Props<T> {
  items: T[];
  selectedValue: string;
  onSelected(val: string): void;
  getValue?(val: T): string;
  renderItem?(val: T): ReactNode;
};

function defaultGetValue<T>(val: T) {
  return val as string;
}

function Select<T>({ items, selectedValue, onSelected, renderItem, getValue = defaultGetValue }: Props<T>) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleHostClick = (event: MouseEvent) => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (!hostRef.current?.contains(event.target as HTMLElement)) {
        setMenuOpen(false);
      }
    });
  }, [])

  return (
    <div ref={hostRef} className={styles.host} onClick={handleHostClick}>
      <div className={styles.selected}>{selectedValue}</div>
      {isMenuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div className={styles.item} key={getValue(item)} onClick={() => onSelected(getValue(item))}>{renderItem ? renderItem(item) : item as string}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
