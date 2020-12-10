import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

function ChetAlbums() {
  return (
    <section>
      <p>Here are some of my favourite albums by Chet Baker:</p>
      <div className="list">
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </section>
  );
}

const Album = () => {
  return (
    <article>
      <Image />
      <Title />
      <Year />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/61wPRUL2vvL._AC_SL1200_.jpg"
    alt=""
  />
);

const Title = () => <h1>Chet Baker Sings</h1>;
const Year = () => <h2>1955</h2>;

ReactDom.render(<ChetAlbums />, document.getElementById('root'));
