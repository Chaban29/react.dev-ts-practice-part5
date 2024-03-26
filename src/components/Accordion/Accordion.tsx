import { FC, useState } from 'react';
import { Panel } from './Panel';

export const Accordion: FC = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <h2>Lviv, Ukraine</h2>
      <Panel
        title='About'
        isActive={isActive === 0}
        onShow={() => setIsActive(0)}
      >
        Lviv was founded by King Danylo around 1231-1235 (the first mention is
        from 1256).
      </Panel>
      <Panel
        title='Etymology'
        isActive={isActive === 1}
        onShow={() => setIsActive(1)}
      >
        Lviv is a city in Ukraine, the administrative center of a region,
        agglomeration, district, urban community, a national-cultural and
        educational-scientific center of the country, a large industrial center
        and a transport hub, it is considered the capital of Galicia and the
        center of Western Ukraine. It is the fifth largest city in the country
        in terms of population.
      </Panel>
      <Panel
        title='Information'
        isActive={isActive === 2}
        onShow={() => setIsActive(2)}
      >
        The once-large Jewish community of the city was sharply reduced in
        number by the Nazis during the Holocaust. For decades there was no
        working synagogue in Lviv after the final one was closed by th
      </Panel>
    </>
  );
};
