import { createRequire } from 'module';
const d = createRequire('date-fns');

var div = document.getElementById('text')
function w(s) {
    div.innerHTML = `<h3>` + s + '</h3>'
}

document.getElementById("btn").addEventListener("click", function(){console.log('shit')})

d.format(new Date(), "'Today is a' eeee")
d.formatDistance(d.subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

d.formatRelative(d.subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."