import Profile from "./Profile/Profile";
import friends from '../data/friends.json'
import user from "../data/user.json";
import StatisticsData from "../data/StatisticsData.json";
import Statistics from "./Statistics/Statistics";
import Friendlist from "./FriendList/FriendList";


console.log(StatisticsData);

export const App = () => {
  return (
    <div
    className="App"
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
      <Friendlist friends={friends}/>
            
    </div>
  );
};
