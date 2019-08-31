import React from 'react';
import styles from './NotFound.module.css';

export const NotFound: React.SFC<{}> = () => {
  return (
    <section className={styles.notFound}>
      <h1 className="text-4xl font-semibold text-red-600 text-shadow">
        404 Not Found
      </h1>
    </section>
  );
};

export default NotFound;
