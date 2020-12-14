import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import { albums } from './albumsarray';
import Album from './Album';

function ChetAlbums() {
  return (
    <section>
      <p>Here are some of my favourite albums by Chet Baker:</p>
      <div className="list">
        {albums.map((album) => {
          return <Album key={album.id} {...album}></Album>;
        })}
      </div>
    </section>
  );
}

ReactDom.render(<ChetAlbums />, document.getElementById('root'));
