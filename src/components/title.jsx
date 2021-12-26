import { useContext } from 'react';
import { langContext } from '../context/lang';

const Title = () => {
  const lang = useContext(langContext);
  return  (
    <div>{lang.title}</div>
  )
}

export default Title;