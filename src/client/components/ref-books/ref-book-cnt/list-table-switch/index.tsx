import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRefBookById } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// Components
import Table from '../../../tables/refbooks-table';
// Functions
import { getTableTypeByRefBookId } from '../../../tables/refbooks-table/utils/get-table-type-by-ref-book-id';
import { getTableDataByRefBookId } from '../../../tables/refbooks-table/utils/get-table-data-by-ref-book-id';


type Props = {
  refBookId : string; // Id Справочника
  items?    : any; // Загруженные данные справочника
  onCheck   : (id: string) => void;
};


// Выводит выбранный Справочник в виде списка с возможностью
// открывать каждый элемент
const ListTableSwitch: React.FC<Props> = ({ refBookId, items, onCheck }) => {
  console.log('refBookId: ', refBookId);

  const tableType = React.useMemo(() => getTableTypeByRefBookId(refBookId), [refBookId]);
  console.log('tableType: ', tableType);
  const tableData = React.useMemo(() => getTableDataByRefBookId(refBookId), [refBookId, items]);
  console.log('tableData: ', tableData);
  
  return (
    <>
      <Table
        type    = {tableType}
        items   = {items}
        data    = {tableData}
        onCheck = {onCheck}
      />
    </>
  );
};
  

const mapStateToProps = (state: State, props: Props) => ({
  items: getRefBookById(state, props),
});


export default connect(mapStateToProps)(ListTableSwitch);
