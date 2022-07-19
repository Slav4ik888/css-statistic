import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRefbookById } from '../../../../../redux/selectors/ref-books';
import { State } from '../../../../../redux/redux-types';
// Components
import Table from '../../../../tables/refbooks-table';
// Functions
import { getTableTypeByRefBookId } from '../../../../tables/refbooks-table/utils/get-table-type-by-ref-book-id';
import { getTableDataByRefBookId } from '../../../../tables/refbooks-table/utils/get-table-data-by-ref-book-id';
import { RefbookId } from '../../../../../../types';



type Props = {
  refbookId : RefbookId; // Id Справочника
  items?    : any; // Загруженные данные справочника
  onCheck   : (id: string) => void;
};

/**
 * Выводит выбранный Справочник в виде списка с возможностью
 * открывать каждый элемент
 */
const ListTableSwitch: React.FC<Props> = ({ refbookId, items, onCheck }) => {
  const
    tableType = React.useMemo(() => getTableTypeByRefBookId(refbookId), [refbookId]),
    tableData = React.useMemo(() => getTableDataByRefBookId(refbookId), [refbookId, items]);
  
  
  return (
    <Table
      type    = {tableType}
      items   = {items}
      data    = {tableData}
      onCheck = {onCheck}
    />
  );
};
  

const mapStateToProps = (state: State, props: Props) => ({
  items: getRefbookById(state, props)
});


export default connect(mapStateToProps)(ListTableSwitch);
