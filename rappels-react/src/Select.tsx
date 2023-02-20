import styles from './Select.module.scss';
import { MouseEvent, useEffect, useRef, useState } from 'react';

type Props = {
  items: string[];
};

function Select({ items }: Props) {
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
      <div className={styles.selected}>Titi</div>
      {isMenuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div className={styles.item} key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
