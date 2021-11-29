import user from './data/user.json';
import stats from './data/stats.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import FriendList from './components/FriendsList/FriendList';
import Profile from './components/Profile/Profile';
import Stats from './components/Statistics/Stats';
import TransactionHistory from './components/Transactions/TransactionHistory';

function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
