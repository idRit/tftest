const fetch = require('node-fetch');
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');

async function getQuotes() {
    let res = fs.readFileSync('./res/ss.txt').toString();
    res = res.split('\n');
    let quotes = '';
    res.forEach(el => quotes += JSON.parse(el).quoteText + '\n');
    return (quotes);
}

async function run() {
    let quotes = await getQuotes();
    // let uc = unique_char(quotes);
    // let idx = {};
    // for (let i = 0; i < uc.length; ++i) {
    //     idx[uc[i]] = i;
    // }
    // let rs = await map(quotes, idx)
    fs.writeFileSync('./res/s2.txt', quotes);
}

async function map(string, idx) {
    let x = [];
    string.split('').forEach(el => x.push(idx[el]));
    const a = tf.data.array(x);
    return a;
}

function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}

run();