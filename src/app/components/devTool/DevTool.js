import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

const DevTool = createDevTools(
  <DockMonitor
    toggleVisibilityKey={'ctrl-h'}
    changePositionKey={'ctrl-p'}
    changeMonitorKey={'ctrl-m'}
    defaultIsVisible={true}
  >
    <LogMonitor />
    <ChartMonitor />
  </DockMonitor>
);

export default DevTool;