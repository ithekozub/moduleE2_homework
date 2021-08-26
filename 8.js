let map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
map.set('key4', 'value4');
map.set('key5', 'value5');
map.set('key6', 'value6');
map.set('key7', 'value7');

for (let elem of map){

    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);

};