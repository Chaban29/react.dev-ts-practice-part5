import { FC, useState } from 'react';
import { Panel } from './Panel';

export const Accordion: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className='box'>
      <h2>Lviv, Ukraine</h2>
      <Panel
        isActive={activeIndex === 0}
        title='About'
        onShow={() => setActiveIndex(0)}
      >
        Lviv was founded by King Danylo around 1231-1235 (the first mention is
        from 1256).
      </Panel>
      <Panel
        isActive={activeIndex === 1}
        title='Etymology'
        onShow={() => setActiveIndex(1)}
      >
        Lviv is a city in Ukraine, the administrative center of a region,
        agglomeration, district, urban community, a national-cultural and
        educational-scientific center of the country, a large industrial center
        and a transport hub, it is considered the capital of Galicia and the
        center of Western Ukraine. It is the fifth largest city in the country
        in terms of population.
      </Panel>
      <Panel
        isActive={activeIndex === 2}
        title='Information'
        onShow={() => setActiveIndex(2)}
      >
        The once-large Jewish community of the city was sharply reduced in
        number by the Nazis during the Holocaust. For decades there was no
        working synagogue in Lviv after the final one was closed by the Soviets.
      </Panel>
    </div>
  );
};
