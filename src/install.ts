import { exec, findNpm } from './exec'

const which = require('which')

const install = (cwd: string): void => {
    const npm = findNpm();
    exec(which.sync(npm), cwd, ['install']);
}

export default install
  