import Profile from "./Profile/Profile";
// import { ReactDOM } from "react-dom";
import user from "../data/user.json";
import StatisticsData from "../data/StatisticsData.json";
import Statistics from "./Statistics/Statistics";

console.log(StatisticsData);

export const App = () => {
  return (
    <div
    className="App"
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }
    // }
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={StatisticsData} />
      <Statistics stats={StatisticsData} />
            
    </div>
  );
};
