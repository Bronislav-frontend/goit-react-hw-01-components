import user from './data/user.json';
import stats from './data/stats.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Container from './components/Section/Section';
import FriendList from './components/FriendsList/FriendList';
import Profile from './components/Profile/Profile';
import Stats from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionsHistory/TransactionHistory';

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
      <Container>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
        <FriendList friends={friends} />
        <Stats title="Upload stats" stats={stats} />

        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
