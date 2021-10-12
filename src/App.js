import user from "./dataJSON/user.json";
import staticticalData from "./dataJSON/statistical-data.json";
import friends from "./dataJSON/friends.json"
import transactions from "./dataJSON/transactions.json"
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList"
import TransactionHistory from "./TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        lcoation={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics statictical={staticticalData} />
      <FriendList friendsJson={friends} />
      <TransactionHistory transactions={transactions }/>
    </div>
  );
}
