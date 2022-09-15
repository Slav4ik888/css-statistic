import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import LoadFile from '../../files/load-files';
// Functions
import * as LS from '../../../utils/local-storage';
// Types
import { FlexDirection } from '../../../utils/styles';



const useStyles = () => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
  filebox: {
    height: 100
  },
  filelabel: {
    my: 2
  }
});


type Props = {
  bxId: string;
};


const BxContainerLogics: React.FC<Props> = ({ bxId }) => {
  const
    sx = useStyles(),
    data = LS.getDataFromBGBilling();
  
  console.log('dataFromBG: ', data);
  console.log('bxId: ', bxId);

  const handerCallback = (data: any) => {
    console.log('data: ', data);
    LS.setDataFromBGBilling(data);
  };


  return (
    <Box sx={sx.root}>
      <Box sx={sx.filebox}>
        <Box sx={sx.filelabel}>Выберите файл с данными новых (обновлённых) абонентов из BG биллинга.</Box>
        <LoadFile onCallback={handerCallback} />
      </Box>
      
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
    </Box>
  )
};

export default BxContainerLogics;
