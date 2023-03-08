import StatsCard from './StatsCard';
import { StatsSection } from './Statistics.styled';
export function Statistics({ data }) {
  return (
    <StatsSection>
      <h2>Upload stats</h2>

      <ul>
        {data.map((el, index) => (
          <li key={index}>
            <StatsCard id={el.id} label={el.label} percentage={el.percentage} />
          </li>
        ))}
      </ul>
    </StatsSection>
  );
}

export default Statistics;
