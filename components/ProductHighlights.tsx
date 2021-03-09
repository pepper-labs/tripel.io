import styles from '../styles/ProductHighlights.module.css';
import { ReactNode, useEffect, useRef, useState } from 'react';

const cls = (...classNames: string[]) => classNames.join(' ');

export default function ProductHighlights() {
  const [activePageNumber, setActivePageNumber] = useState(0);
  const activate = (index: number) => () => setActivePageNumber(index);
  return <>
    <h2 className={styles.titleForMobile}>There is plenty of noise to cut through</h2>

    <section className={cls(styles.highlights, 'container')}>
      <div>
        <h2 className={styles.title}>There is plenty of noise to cut through</h2>

        <Highlight icon="/travelers.svg" title="Travelers"
                   variants={[styles['highlight--yellow'], styles['highlight--bottom-right-rounded']]}
                   onIntersect={activate(0)}>
          <li>
            <strong>Available activity options are vast</strong>, making an educated decision a labor intensive feat -
            tiring you instead of relaxing during an active trip
          </li>

          <li>
            <strong>Ratings are not always reliable</strong>, while recommendations are often driven by pure business
            interest
          </li>

          <li>
            <strong>Outdated methods of receiving host recommendations</strong> are the standard (leaflets, guestbooks,
            city maps)
          </li>
        </Highlight>
      </div>

      <div>
        <Highlight icon="/hosts.svg" title="Hosts"
                   variants={[styles['highlight--blue'], styles['highlight--bottom-right-rounded']]}
                   onIntersect={activate(1)}>
          <li>
            <strong>Curating and managing a solid recommendation portfolio</strong> requires a lot of time and effort
          </li>

          <li>
            <strong>Answering repetitive guest questions</strong> can make up to 40% of a receptionist’s time
          </li>

          <li>
            <strong>Little control over guest satisfaction</strong> when they use 3rd party sites for activity booking
          </li>
        </Highlight>

        <Highlight icon="/providers.svg" title="Providers"
                   variants={[styles['highlight--purple'], styles['highlight--top-right-rounded']]}
                   onIntersect={activate(2)}>
          <li>
            <strong>Setting up and maintaining bilateral partner agreements</strong> or an affiliate network is
            cumbersome
          </li>

          <li>
            <strong>Spreading and updating information</strong> requires significant individual marketing and sales
            resources
          </li>

          <li>
            <strong>It is often difficult to stand out in the noise</strong> as a starting company, or one with less
            resources
          </li>
        </Highlight>
      </div>
    </section>

    <div className={styles.carouselIndicator}>
      {makeIndicators(3, activePageNumber)}
    </div>
  </>;
}

const makeIndicators = (length: number, activeIndicatorIndex: number) => new Array(length)
  .fill(null)
  .map((value, index) => {
    if (index === activeIndicatorIndex) {
      return <span key={index} className={styles.active}/>;
    }
    return <span key={index}/>;
  });

const HIGHLIGHT_INTERSECTION_MARGIN_THRESHOLD = '-20%';

function Highlight(props: HighlightProps) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(notifyAll(props.onIntersect), {
      rootMargin: HIGHLIGHT_INTERSECTION_MARGIN_THRESHOLD
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref.current]);

  return <div ref={ref} className={cls(styles.highlight, ...(props.variants))}>
    <div className={styles.highlight__title}>
      <div className={styles.highlight__title__icon}>
        <img src={props.icon} alt={props.title} width="45" height="33" loading="lazy"/>
      </div>

      <div className={styles.highlight__title__text}>{props.title}</div>
    </div>

    <ul className={styles.highlight__problems}>
      {props.children}
    </ul>
  </div>;
}

const notifyAll = (onIntersect: () => any) => entries => entries.forEach(elem => {
  if (elem.isIntersecting) {
    onIntersect();
  }
});

type HighlightProps = { icon: string, title: string, children: ReactNode, variants: string[], onIntersect: () => any };
