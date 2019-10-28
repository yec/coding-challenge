import React, { Suspense } from 'react';
import useFetch from 'fetch-suspense';

import Tile from '../components/Tile';
import Tiles from '../components/Tiles';
import Text from '../components/Text';

function Data({ selector, source }) {
  const serverResponse = useFetch(source, { method: 'GET' });
  var entries = [];
  try {
    entries = selector(serverResponse);
  } catch (e) {
    console.log('server returned invalid response');
  }

  if (entries.length > 0) {
    return entries.map(entry => <Tile key={entry.title} url={entry.title} {...entry}></Tile>);
  } else {
    return <Text>Ooops, something went wrong.</Text>
  }
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

