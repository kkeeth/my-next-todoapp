import { useSelector, useDispatch } from 'react-redux';

import { RootStyles } from '../../styles';
import { add } from '../../stores/counter';
import Button from './components/button';

export default () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleClick = () => dispatch(add(1));

  return (
    <RootStyles>
      <Button onClick={handleClick}>click me!!</Button>
      <div>{count} times</div>
    </RootStyles>
  );
};
