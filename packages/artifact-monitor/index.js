const debug = require('debug')('watch-and-process:artifact-monitor');
const config = require('rc')('artifact-monitor');
const chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfiles
const watcher = chokidar.watch(config.baseDir, {
    ignored: config.ignorePaths
});

watcher.on('add', (event, path) => {
    console.log(event, path);
});