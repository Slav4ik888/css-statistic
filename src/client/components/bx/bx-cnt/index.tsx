import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import LoadFile from '../../files/load-files';
// Functions
// Types



type Props = {
  bxId: string;
};

const BxContainerLogics: React.FC<Props> = ({ bxId }) => {
  console.log('bxId: ', bxId);


  return (
    <>
      <LoadFile />
      {/* Загрузите файл с данными новых (обновлённых) абонентов из BG биллинга. */}
      
      
      {/* Проверьте созданные сущности. */}

      {/* При необходимости внесите правки вручную */}
      
      {/* 
        Нажмите "Загрузить"
        - Получить с ВХ все компании и клиентов
          (или получить тех которых хотим загрузить - по Pppoe)

        - Сверить с тем что с биллинга 
          (если Pppoe совпадает надо проверить это новый абонент и
            ему достался номер от предыдущего абонента или это абсолютно новый абонент)
        - Обновить только тех которые 
      */}
    </>
  )
};

export default BxContainerLogics;
