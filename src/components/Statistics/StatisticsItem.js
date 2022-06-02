import PropTypes from 'prop-types';
// import styles from 'components/Statistics/Statistics.module.css';
const StatisticsItem = ({label, percentage}) => {
    return(<>
<span className="label">{label}</span>
<span className="percentage">{percentage}%</span>
</>
)
};

StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired
}
export default StatisticsItem