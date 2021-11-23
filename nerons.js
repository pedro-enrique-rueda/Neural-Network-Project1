
// In this file I will program the neurons for logic gates operations

async function l_gates(){
    const model = tf.sequential();
    model.add(tf.layers.dense({units:1, inputShape:[1]}));

    model.compile({
        loss:'meanSquaredError',
        optimizer:'sgd'
    });

    // input and spectect data
    const xs = tf.tensor2d([1,2,3,4,5],[5,1]);
    const ys = tf.tensor2d([1,2,3,4,5],[5,1]);

    await model.fit(xs,ys,{epochs:250});
    
    var x = model.predict(tf.tensor2d([8],[1,1]));
    alert(x);
}