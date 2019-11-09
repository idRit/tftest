const tf = require('@tensorflow/tfjs');

async function run() {
    const model = await tf.loadLayersModel('');

    const prediction = model.predict();

    console.log(prediction);
}

run ();