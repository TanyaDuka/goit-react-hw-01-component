import React from 'react';
import propTypes from 'prop-types';
import s from './Statistics.module.css';
import bgColor from './bgColor';

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: bgColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
