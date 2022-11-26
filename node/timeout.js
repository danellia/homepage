function time() {
    console.log('msg', new Date().getSeconds());
}

time()
setTimeout(time, 1000);