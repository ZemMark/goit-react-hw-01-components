import StatsCard from './StatsCard';
import { StatsSection } from './Statistics.styled';
export function Statistics({ data }) {
  return (
    <StatsSection>
      <h2>Upload stats</h2>

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

export default Statistics;
