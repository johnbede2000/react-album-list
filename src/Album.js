import React from 'react';

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

export default Album;
