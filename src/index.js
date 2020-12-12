import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const albums = [
  {
    id: 0,
    title: 'Chet Baker Sings',
    year: '1955',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61wPRUL2vvL._AC_SL1200_.jpg',
  },

  {
    id: 1,
    title: 'It Could Happen To You',
    year: '1958',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/715y1W38bxL._AC_SL1400_.jpg',
  },

  {
    id: 2,
    title: 'She Was Too Good To Me',
    year: '1974',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/A169GHifGHL._AC_SL1500_.jpg',
  },

  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51saiXeXnRL._AC_.jpg',
    title: 'The Best Thing For You',
    year: '1984',
  },

  {
    id: 4,
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
          return <Album key={album.id} {...album}></Album>;
        })}
      </div>
    </section>
  );
}

const Album = ({ img, title, year }) => {
  const clickFunction = (title) => {
    alert('You clicked ' + title);
  };
  return (
    <article className="album">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h2>{year}</h2>
      <button type="button" onClick={() => clickFunction(title)}>
        Click Here
      </button>
    </article>
  );
};

ReactDom.render(<ChetAlbums />, document.getElementById('root'));
