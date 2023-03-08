import PropTypes from 'prop-types';
export function StatsCard({ id, label, percentage }) {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
}
StatsCard.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsCard;
