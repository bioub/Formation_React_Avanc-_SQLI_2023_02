import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";

type Props = {

}

type State = {
  msg: string;
}

class TryCatchBoundary extends Component<PropsWithChildren<Props>, State> {
  state: State = {
    msg: '',
  }

  static getDerivedStateFromError(error: Error) {
    return {
      msg: 'Le composant est en erreur ' + error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // appel un service de log
    console.log('Erreur from TryCatchBoundary : ', error.message);
  }

  render(): ReactNode {
    if (this.state.msg) {
      return <p>{this.state.msg}</p>
    }

    return this.props.children;
  }
}

export default TryCatchBoundary;