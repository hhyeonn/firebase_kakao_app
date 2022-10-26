import FindMethod from '../components/FindMethod';
import TabBar from '../components/TabBar';
import RecommendSection from '../components/RecommendSection';
import Header from '../components/Header';
import '../styles/Find.scss';

function Find() {
  return (
    <>
      <Header className={'find'} heading={'Find'} leftItem={'Edit'} rightItem={''} />
      <FindMethod className='find_method' />
      <RecommendSection className='recommend_Section' />
      <TabBar/>
    </>
  );
}

export default Find;