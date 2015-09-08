// import modules
var qm = require('qminer');
var analytics = qm.analytics;
var fs = qm.fs;
var la = qm.la;
// create a new base containing the store
var base = new qm.Base({
    mode: 'createClean',
    schema: [{
        name: 'Messages',
        fields: [
            { name: 'Text', type: 'string' },
            { name: 'Value', type: 'float', nullable: true }
        ]
    }]
});
// create two feature spaces, one for each field
var ftrText = new qm.FeatureSpace(base, {
    type: 'text', source: 'Messages', field: 'Text', normalize: true,
    weight: 'tfidf', tokenizer: { type: 'simple', stopwords: 'en' }
});
var ftrValue = new qm.FeatureSpace(base, {
    type: 'numeric', source: 'Messages', field: 'Value'
});
// add values to store
var fin = fs.openRead('./sandbox/test/messages.txt');
var header = fin.readLine();
while (!fin.eof) {
    var line = fin.readLine();
    if (line == "") { continue; }
    try {
        var vals = line.split('\t');
        var rec = { Text: vals[1], Value: parseFloat(vals[0]) };
        base.store('Messages').push(rec);
    } catch (err) {
        console.log('Messages', err);
    }
};
// update the features
ftrText.updateRecords(base.store('Messages').allRecords);
ftrValue.updateRecords(base.store('Messages').allRecords);
// get the feature matrix
var X = ftrText.extractSparseMatrix(base.store('Messages').allRecords);
// get the feature vector
var y = new la.Vector();
var valMatrix = ftrValue.extractMatrix(base.store('Messages').allRecords);
for (var i = 0; i < valMatrix.cols; i++) {
    y.push(valMatrix.at(0, i));
}
// create the SVC model
var SVC = new analytics.SVC();
SVC.fit(X, y);
// create a new instance of the store
var testText = base.store('Messages').newRecord({
    Text: 'When can we meet for the meeting?'
});
// get the text features for text
var testFeatures = ftrText.extractVector(testText);
// predict if testText is a spam
var prediction = SVC.predict(testFeatures);
console.log('The text is a ' + ((prediction == -1) ? 'spam' : 'regular') + ' message!');