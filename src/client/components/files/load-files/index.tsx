import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading } from '../../../redux/selectors/bx';
import { State } from '../../../redux/redux-types';
// Components
import CircularProgress from '../../buttons/circular-progress';
// Functions
import { readFile } from '../../../utils/files';



type Props = {
  loading?           : boolean;
  setWarningMessage? : (m: string) => void;
  onCallback         : (f: any) => void;
};

const LoadFilesLogics: React.FC<Props> = ({ loading, onCallback }) => {

  const handlerChange = (e: any) => readFile(e, onCallback);

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

export default connect(mapStateToProps)(LoadFilesLogics);
