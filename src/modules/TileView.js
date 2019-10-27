import React, { Suspense } from 'react';
import useFetch from 'fetch-suspense';

import Tile from '../components/Tile';
import Tiles from '../components/Tiles';
import Text from '../components/Text';

function Data({ selector, source, component }) {
  const serverResponse = useFetch(source, { method: 'GET' });
  const entries = selector(serverResponse);
  return entries.map(entry => <Tile key={entry.title} {...entry}></Tile>);
}

export default function TileView({ items = [], ...props }) {

  return (
    <Tiles>
      {items.length > 0
        ? items.map(item => <Tile key={item.title} {...item}></Tile>)
        :
        <Suspense fallback={<Text>Loading profile...</Text>}>
          <Data {...props} />
        </Suspense>}
    </Tiles>
  );
}

