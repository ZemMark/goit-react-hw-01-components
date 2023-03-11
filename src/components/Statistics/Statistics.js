import StatsCard from './StatsCard';
import { StatsSection } from './Statistics.styled';
import PropTypes from 'prop-types';
export function Statistics({ data, title }) {
  return (
    <StatsSection>
      {title && <h2>{title}</h2>}

      <ul>
        {data.map((el, index) => (
          <li
            key={index}
            style={{
              backgroundColor: (() => {
                switch (el.label) {
                  case '.pdf':
                    return 'red';
                  case '.mp3':
                    return 'orange';
                  case '.docx':
                    return 'blue';
                  case '.psd':
                    return 'gray';

                  default:
                    return 'violet';
                }
              })(),
            }}
          >
            <StatsCard id={el.id} label={el.label} percentage={el.percentage} />
          </li>
        ))}
      </ul>
    </StatsSection>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
};
export default Statistics;
