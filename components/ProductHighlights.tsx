import styles from '../styles/ProductHighlights.module.css';
import { ReactNode, useEffect, useRef, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const cls = (...classNames: string[]) => classNames.join(' ');

export default function ProductHighlights() {
  const { t } = useTranslation('product-highlights');
  const [activePageNumber, setActivePageNumber] = useState(0);
  const activate = (index: number) => () => setActivePageNumber(index);
  return <>
    <h2 className={styles.titleForMobile}>{t('There is plenty of noise to cut through')}</h2>

    <section className={cls(styles.highlights, 'container')}>
      <div>
        <h2 className={styles.title}>{t('There is plenty of noise to cut through')}</h2>

        <Highlight icon="/travelers.svg" title={t('Travelers')}
                   variants={[styles['highlight--yellow'], styles['highlight--bottom-right-rounded']]}
                   onIntersect={activate(0)}>
          <li dangerouslySetInnerHTML={{ __html: t('Available activity options are vast') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('Ratings are not always reliable') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('Outdated methods of receiving host recommendations') }}/>
        </Highlight>
      </div>

      <div>
        <Highlight icon="/hosts.svg" title={t('Hosts')}
                   variants={[styles['highlight--blue'], styles['highlight--bottom-right-rounded']]}
                   onIntersect={activate(1)}>
          <li dangerouslySetInnerHTML={{ __html: t('Curating and managing a solid recommendation portfolio') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('Answering repetitive guest questions') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('Little control over guest satisfaction') }}/>
        </Highlight>

        <Highlight icon="/providers.svg" title={t('Providers')}
                   variants={[styles['highlight--purple'], styles['highlight--top-right-rounded']]}
                   onIntersect={activate(2)}>
          <li dangerouslySetInnerHTML={{ __html: t('Setting up and maintaining bilateral partner agreements') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('Spreading and updating information') }}/>

          <li dangerouslySetInnerHTML={{ __html: t('It is often difficult to stand out in the noise') }}/>
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
