import * as React from 'react';
import './index.less';

interface OptionsState {
}
export default class Options extends React.Component<any, OptionsState> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="page-options">
      </div>
    );
  }
}
