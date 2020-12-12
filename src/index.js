import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const albums = [
  {
    title: 'Chet Baker Sings',
    year: '1955',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61wPRUL2vvL._AC_SL1200_.jpg',
  },

  {
    title: 'It Could Happen To You',
    year: '1958',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/715y1W38bxL._AC_SL1400_.jpg',
  },

  {
    title: 'She Was Too Good To Me',
    year: '1974',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/A169GHifGHL._AC_SL1500_.jpg',
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51saiXeXnRL._AC_.jpg',
    title: 'The Best Thing For You',
    year: '1984',
  },

  {
    title: 'Chet Baker In Tokyo',
    year: '1987',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/411ADRBH6ZL._AC_.jpg',
  },
];

function ChetAlbums() {
  return (
    <section>
      <p>Here are some of my favourite albums by Chet Baker:</p>
      <div className="list">
        {albums.map((album) => {
          return <Album album={album}></Album>;
        })}
      </div>
    </section>
  );
}

const Album = (props) => {
  const { img, title, year } = props.album;
  return (
    <article className="album">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h2>{year}</h2>
    </article>
  );
};

ReactDom.render(<ChetAlbums />, document.getElementById('root'));
