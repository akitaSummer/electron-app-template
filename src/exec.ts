import childProcess from 'child_process'
import chalk from 'chalk'

const which = require('which')

// 查找系统中用于安装依赖包的命令

export const findNpm = (): string => {
    const npms = ['yarn', 'tnpm', 'cnpm', 'npm'];
    for (let i = 0; i < npms.length; i++) {
        try {
                // 查找环境变量下指定的可执行文件的第一个实例
                which.sync(npms[i]);
                return npms[i]
        } catch (e) {
        }
    }
    throw new Error(chalk.red('请安装npm'));
}

// 开启子进程来执行命令

export const exec = (cmd: string, cwd: string, args?: Array<string>): void => {
    args = args || [];
    childProcess.spawnSync(cmd, args, {
        stdio: 'inherit',
        cwd
    });
}


