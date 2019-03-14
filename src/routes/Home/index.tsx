import React from 'react';
import style from './index.scss';

const Home: React.SFC<{}> = () => {
  return (
    <div className={style.home}>
      <span>this is home</span>
    </div>
  );
};

export default Home;
