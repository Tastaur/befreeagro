import { PropsWithChildren } from 'react';


export interface ReactFC<T = {}> extends React.FC<PropsWithChildren<T>> {
}