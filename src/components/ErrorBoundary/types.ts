export interface IProps {
  children: JSX.Element,
}

export interface State {
  hasError: boolean,
  errorMessage: string,
  stackTrace: string,
}