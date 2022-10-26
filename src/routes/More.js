import MoreApp from '../components/MoreApp';
import PlusFriends from '../components/PlusFriends';
import TabBar from '../components/TabBar';
import UserInfo from '../components/UserInfo';
import UserMenu from '../components/UserMenu';
import Header from '../components/Header';
import { FaCog } from 'react-icons/fa';
import '../styles/More.scss';

function More() {
  return (
    <main>
      <Header className={'more'} heading={'More'} leftItem={''} rightItem={<FaCog className='icon' />} />
      <UserInfo />
      <UserMenu />
      <PlusFriends />
      <MoreApp />
      <TabBar />
    </main>
  );
}

export default More;