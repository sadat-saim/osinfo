#!/usr/bin/env node

import program from 'commander';
import os from 'os';
import chalk from 'chalk';


program.version('1.0.1', '-v, --version', 'output the current version')
    .description("A cli tool to view os information.")
    .option("-s --short", "short info")
    .option("-f --full", "full info").parse()

const options = program.opts()

const { short, full } = options

if (short && full) {
    throw new Error("Please specify a short or full info")
} else {
    if (short) {
        let info = {
            "model": os.cpus()[0].model,
            "architecture": os.arch(),
            "cpuCores": os.cpus().length,
            "userName": os.hostname(),
            "platform": os.version(),
            "freeMemory": Math.floor(os.freemem() / (1024 * 1024)),
            "totalMemory": Math.floor(os.totalmem() / (1024 * 1024))
        }

        console.log(chalk.bgMagenta.bold(` Model: ${info.model}`))
        console.log(chalk.bgMagenta.bold(` Cpu Architecture: ${info.architecture} `))
        console.log(chalk.bgMagenta.bold(` Cpu Logical Cores: ${info.cpuCores} `))
        console.log(chalk.bgMagenta.bold(` User Name: ${info.userName} `))
        console.log(chalk.bgMagenta.bold(` Platform: ${info.platform} `))
        console.log(chalk.bgMagenta.bold(` Free memory: ${info.freeMemory} `))
        console.log(chalk.bgMagenta.bold(` Total memory: ${info.totalMemory} `))
    } else {
        console.log(chalk.yellow("System architecture: " + os.arch())) //cpu architecture
        console.log(chalk.bgBlackBright.bold(" CPU core info "))
        console.log(os.cpus()) //cpu cores
        console.log(chalk.magenta.bold("Free memory: " + Math.floor(os.freemem() / (1024 * 1024)))) //free memory
        console.log(chalk.green.bold("Total memory: " + Math.floor(os.totalmem() / (1024 * 1024)))) //total memory
        console.log(chalk.cyan("Hostname: " + os.hostname())) //hostname
        console.log(chalk.bgMagenta(" Platform: " + os.platform() + " ")) //platform
        console.log(os.type()) //platform type
        console.log(chalk.blueBright("Uptime: " + Math.round(Math.floor(os.uptime()) / 3600) + " Hours")) //uptime
        console.log(os.userInfo())
        console.log(chalk.bgMagenta(" " + os.version() + " ")) // os version
    }
}



// console.log(os.userInfo())
// console.log(os.version()) // os version
// console.log(process.argv)
//console.log(process.abort()) //aborts all running process immediately
// make a cli tool that shows system information
// console.log(os.networkInterfaces())
// console.log(process.cpuUsage()) // cpu usage by user and node js
// console.log(process.memoryUsage()) // memory usage by user and node js