var x = test(6, 4);
var y = test(5, 9);

document.getElementById('test1').innerHTML = x;
document.getElementById('test2').innerHTML = y;

function test(eerste, tweede) {
    return eerste * tweede;
}