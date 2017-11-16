import devRun from './run.dev';
import proRun from './run.prod';

const render= process.env.NODE_ENV === 'production'?proRun:devRun;

export default render;