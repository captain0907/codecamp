import {useQuery} from '@apollo/client';
import {IQuery} from '../../../commons/types/generated/types';
import BoardListUI from './BoardList.presenter';
import {FETCH_BOARDS} from './BoardList.queries';

const BoardList = () => {
  const {data} = useQuery<IQuery>(FETCH_BOARDS);

  return <BoardListUI data={data} />;
};

export default BoardList;
