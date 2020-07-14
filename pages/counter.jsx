import { useSelector, useDispatch } from 'react-redux';

import { RootStyles } from '../styles';
import { add } from '../stores/counter';

export default () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleClick = () => dispatch(add(1));

  return (
    <RootStyles>
      <button onClick={handleClick}>click me!!</button>
      <div>{count} times</div>
    </RootStyles>
  );
};
