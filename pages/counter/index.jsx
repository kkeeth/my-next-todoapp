import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootStyles } from '../../styles';
import { add, reset } from '../../stores/counter';
import Button from './components/Button';
import HelloText from './components/HelloText';

export default () => {
  const [textList, setTextList] = useState([]);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleClick = () => {
    dispatch(add(1));
    setTextList([...textList, <HelloText key={textList.length} />]);
  };
  const handleReset = () => {
    dispatch(reset());
    setTextList([]);
  };

  return (
    <RootStyles>
      <Button onClick={handleClick}>Click me!!</Button>
      <Button color="skyblue" onClick={handleReset}>
        Reset
      </Button>
      <div>{count} times</div>
      {textList}
    </RootStyles>
  );
};
