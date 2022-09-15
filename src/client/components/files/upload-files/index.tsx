import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setWarningMessage } from '../../../redux/actions/ui';
import { State } from '../../../redux/redux-types';
// Components
import CircularProgress from '../../buttons/circular-progress';
import { getLoading } from '../../../redux/selectors/bx';
import { getFilesSize, isEmpty } from '../../../../utils/files';
import { config as cfg } from '../../../consts/bx';



type Props = {
  loading?           : boolean;
  setWarningMessage? : (m: string) => void;
  onCallback         : (f: any) => void;
};

/** To Server */
const UploadFilesLogics: React.FC<Props> = ({ loading, setWarningMessage, onCallback }) => {

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

    onCallback(file);
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

export default connect(mapStateToProps, { setWarningMessage })(UploadFilesLogics);
