import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setWarningMessage } from '../../../redux/actions/ui';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import CircularProgress from '../../buttons/circular-progress';
import { getLoading } from '../../../redux/selectors/bx';
import { getFilesSize, isEmpty } from '../../../../utils/files';
import { config as cfg } from '../../../consts/bx';
// Functions
// Types



type Props = {
  loading?           : boolean;
  setWarningMessage? : (m: string) => void;
};

const LoadFilesLogics: React.FC<Props> = ({ loading, setWarningMessage }) => {

  const handlerChange = (e: any) => {
    const
      fileList = e.target.files,
      file = fileList[0];
    
    if (getFilesSize(fileList) > cfg.files.maxsize.bgBilling) {
      console.log(`Файл > ${cfg.files.maxsize.bgBilling}`);
      return setWarningMessage(`Файл слишком большой. Допустимый размер файла до 3мб.`);
    } 
    if (isEmpty(fileList)) {
      console.log(`Не выбран файл для загрузки`);
      return setWarningMessage(`Не выбран файл для загрузки...`);
    }
    console.log('file: ', file);
  };

  return (
    <>
      <input type="file" accept=".json" onChange={handlerChange} />
      <CircularProgress loading={loading} />

    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoading(state)
});

export default connect(mapStateToProps, { setWarningMessage })(LoadFilesLogics);
