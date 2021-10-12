// import s from "./Statistics.module.css";
import StatisticsList from "./StatisticsList";

export default function Statistics({ statictical}) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
        
      <ul className="stat-list">
        {statictical.map((statistic) => (
          <StatisticsList
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
