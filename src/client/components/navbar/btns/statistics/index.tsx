import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
// Types
import { RouteType } from '../../../../utils/routes/routes';


type Props = {
  history: { location: { pathname: string }, push: (path: string) => void };
};


/**
 * Кнопка для входа в Statistics
 */
const StatisticMenuBtn: React.FC<Props> = ({ history}) => {
  const handleClick = () => history.push(RouteType.STATS);

  return (
    <NavBtn
      label     = 'Статистика'
      toolLabel = 'Перейти в "Статистику"'
      onClick   = {handleClick}
    />
  );
};

export default StatisticMenuBtn;
