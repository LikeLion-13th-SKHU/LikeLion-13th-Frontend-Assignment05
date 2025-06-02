import { useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // value와 onChange 함수를 한 번에 반환!
  return [value, handleChange, setValue];
}
