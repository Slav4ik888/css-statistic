import { State } from "../../redux-types";
import { createSelector } from 'reselect';


export const getProps = (_: State, props: any) => props;
export const getState = (state: State) => state;
