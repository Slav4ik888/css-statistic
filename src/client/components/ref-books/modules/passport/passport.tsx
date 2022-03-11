import * as React from 'react';
// Components
import CardBlock from '../../../containers/card/block';
import { TextField, TextFieldDate, TextArea } from '../../../containers/elements';
// Functions
import { getPrepearedPassportSeries } from '../../utils/get-passport-data/get-prepeared-passport-series';
import { getPrepearedPassportNumber } from '../../utils/get-passport-data/get-prepeared-passport-number';
import { getPrepearedPassportKod } from '../../utils/get-passport-data/get-prepeared-passport-kod';
// Types
import { Driver, DriverCarrier } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';


type Props = {
  group: UseGroup<Driver | DriverCarrier>;
};


const PassportCnt: React.FC<Props> = ({ group: G }) => {

  return (
    <CardBlock label='Паспортные данные'>
      
      <TextField
        label        = 'Серия'
        fullWidth
        scheme       = 'passport.series'
        group        = {G}
        defaultValue = {G.group.passport.series}
        errorField   = 'passport.series'
        onPrepeare   = {getPrepearedPassportSeries}
      />

      <TextField
        label        = 'Номер'
        fullWidth
        defaultValue = {G.group.passport.number}
        scheme       = 'passport.number'
        group        = {G}
        errorField   = 'passport.number'
        onPrepeare   = {getPrepearedPassportNumber}
      />

      <TextField
        label        = 'Код-подразделения'
        fullWidth
        defaultValue = {G.group.passport.kod}
        scheme       = 'passport.kod'
        group        = {G}
        errorField   = 'passport.kod'
        onPrepeare   = {getPrepearedPassportKod}
      />

      <TextFieldDate
        label        = 'Дата выдачи'
        type         = 'date'
        fullWidth
        defaultValue = {G.group.passport.date}
        scheme       = 'passport.date'
        group        = {G}
        errorField   = 'passport.date'
      />

      <TextArea
        grid         = {{ sm: 12 }}
        label        = 'Кем выдан'
        defaultValue = {G.group.passport.goverment}
        scheme       = 'passport.goverment'
        group        = {G}
        errorField   = 'passport.goverment'
        placeholder  = 'Кем выдан'
      />
    </CardBlock>
  )
};


export default PassportCnt;