import React from "react";

const ShowDetails = props => {
  const {
    original_name,
    overview,
    number_of_episodes,
    number_of_seasons
  } = props.showDetails;
  const { episodeRunTime, hours, searchAgain } = props;
  const timeInHours = (episodeRunTime * number_of_episodes) / 60;
  const days = Math.round(timeInHours / hours);

  return (
    <section className="showDetails">
      <div className="wrapper">
        <div className="showDetails__copy">
          <h1>{original_name}</h1>
          <h3>{overview}</h3>
          <p>Each episode is approximately {episodeRunTime} minutes long.</p>
          <p>
            {number_of_seasons > 1
              ? `There are ${number_of_seasons} seasons.`
              : `There is ${number_of_seasons} season.`}
          </p>
          <p>
            {number_of_episodes > 1
              ? `There are ${number_of_episodes} episodes in total.`
              : `There is ${number_of_episodes} episode.`}
          </p>
          <p>
            {hours > 1 && days > 1
              ? `With ${hours} hours a day, you'll be able to watch this entire season in
            approximately ${days} days.`
              : `With ${hours} hour a day, you'll be able to watch this entire season in
            approximately ${days} days.`}
          </p>
          <button className="button" onClick={searchAgain}>
            Find another show
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
