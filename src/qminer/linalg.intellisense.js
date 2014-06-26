// contains keys of variables that should not show in intellisense
intellisenseIgnore = {};
// creates global variables that can be seen in visual studio js file if this file is referenced
function _addIntellisenseVar(key, val, hideVar) {
    if (typeof hideVar == 'undefined')
        hideVar = true;
    if (hideVar) {
        intellisenseIgnore[key] = val;
    }
    eval(key + "=" + val);
}


// ignore suggest list! (all non global variables)
// locals (js)
_addIntellisenseVar("_idx", "1");
_addIntellisenseVar("_num", "1");
_addIntellisenseVar("_num2", "1");
_addIntellisenseVar("_len", "1");
_addIntellisenseVar("_cols", "1");
_addIntellisenseVar("_rows", "1");
_addIntellisenseVar("_k", "1");
_addIntellisenseVar("_arr", "[1]");
_addIntellisenseVar("_nestedArr", "[_arr]");
_addIntellisenseVar("_doubleNestedArr", "[_nestedArr]");
_addIntellisenseVar("_bool", "true");
_addIntellisenseVar("_asc", "true");
// locals (c++)
_addIntellisenseVar("_vec", "[1]"); // indexed objects!
_addIntellisenseVar("_vec2", "_vec");
_addIntellisenseVar("_vec3", "_vec");
_addIntellisenseVar("_valVec", "_vec");
_addIntellisenseVar("_intVec", "[1]"); // indexed objects!
_addIntellisenseVar("_intVec2", "_intVec");
_addIntellisenseVar("_rowIdxVec", "_intVec");
_addIntellisenseVar("_colIdxVec", "_intVec");
_addIntellisenseVar("_mat", "{}"); // not indexed
_addIntellisenseVar("_mat2", "_mat");
// other structures
_addIntellisenseVar("_sortRes", "{ vec: _vec, perm: _intVec }");
_addIntellisenseVar("_vecCtrParam", "{ vals: 1, mxvals: 1 }");
_addIntellisenseVar("_svdRes", "{ U: _mat, V: _mat, s: _vec }");
// globals C++ (without _), do not hide intellisense
_addIntellisenseVar("la", "{}", false); // linalg global
// special case
_addIntellisenseVar("_addIntellisenseVar", "_addIntellisenseVar"); // eval doesn't change _addIntellisenseVar, we just add the variable "_addIntellisenseVar" to ignore list
_addIntellisenseVar("intellisenseIgnore", "intellisenseIgnore"); // eval doesn't change intellisenseIgnore, we just add the variable "intellisenseIgnore" to ignore list


// implement ignore
intellisense.addEventListener('statementcompletion', function (event) {
    if (event.targetName === "this") return;
    event.items = event.items.filter(function (item) {
        return !intellisenseIgnore.hasOwnProperty(item.name);
    });
});

// Autogenerated code below
la.newVec = function () {
    /// <summary> generate an empty float vector</summary>
    return _vec;
}
la.newVec = function (_arr) {
    /// <summary> copy a javascript number array `arr`</summary>
    return _vec;
}
la.newVec = function (_vec2) {
    /// <summary> clone a float vector `vec2`</summary>
    return _vec;
}
la.newIntVec = function () {
    /// <summary> generate an empty float vector</summary>
    return _intVec;
}
la.newIntVec = function (_arr) {
    /// <summary> copy a javascript int array `arr`</summary>
    return _intVec;
}
la.newIntVec = function (_vec2) {
    /// <summary> clone an int vector `vec2`</summary>
    return _intVec;
}
la.newMat = function () {
    /// <summary> generates a 0x0 matrix</summary>
    return _mat;
}
la.newMat = function (_nestedArr) {
    /// <summary> generates a matrix from a javascript array `nestedArr`, whose elements are arrays of numbers which correspond to matrix rows (row-major dense matrix)</summary>
    return _mat;
}
la.newMat = function (_mat2) {
    /// <summary> clones a dense matrix `mat2`</summary>
    return _mat;
}
la.newSpVec = function (_len) {
    /// <summary> creates an empty sparse vector `vec`, where `len` is an optional (-1 by default) integer parameter that sets the dimension</summary>
    return _vec;
}
la.newSpVec = function (_nestedArr, _len) {
    /// <summary> creats a sparse vector `vec` from a javascript array `nestedArr`, whose elements are javascript arrays with two elements (integer row index and double value). `len` is optional and sets the dimension</summary>
    return _vec;
}
la.newSpMat = function () {
    /// <summary> creates an empty sparse matrix `mat`</summary>
    return _mat;
}
la.newSpMat = function (_rowIdxVec, _colIdxVec, _valVec) {
    /// <summary> creates an sparse matrix based on two int vectors `rowIdxVec` (row indices) and `colIdxVec` (column indices) and float vector of values `valVec`</summary>
    return _mat;
}
la.newSpMat = function (_doubleNestedArr, _rows) {
    /// <summary> creates an sparse matrix with `rows` rows (optional parameter), where `doubleNestedArr` is a javascript array of arrays that correspond to sparse matrix columns and each column is a javascript array of arrays corresponding to nonzero elements. Each element is an array of size 2, where the first number is an int (row index) and the second value is a number (value). Example: `mat = linalg.newSpMat([[[0, 1.1], [1, 2.2], [3, 3.3]], [[2, 1.2]]], { "rows": 4 });`</summary>
    return _mat;
}
_vec.at = function (_idx) {
    /// <summary> gets the value `num` of vector `vec` at index `idx`  (0-based indexing)</summary>
    return _num;
}
_intVec.at = function (_idx) {
    /// <summary> gets the value `num` of integer vector `intVec` at index `idx`  (0-based indexing)</summary>
    return _num;
}
_vec.put = function (_idx, _num) {
    /// <summary> set value of vector `vec` at index `idx` to `num` (0-based indexing)</summary>
}
_intVec.put = function (_idx, _num) {
    /// <summary> set value of integer vector `intVec` at index `idx` to `num` (0-based indexing)</summary>
}
_vec.push = function (_num) {
    /// <summary> append value `num` to vector `vec`. Returns `len` - the length  of the modified array</summary>
    return _len;
}
_intVec.push = function (_num) {
    /// <summary> append value `num` to integer vector `intVec`. Returns `len` - the length  of the modified array</summary>
    return _len;
}
_vec.unshift = function (_num) {
    /// <summary> insert value `num` to the begining of vector `vec`. Returns the length of the modified array.</summary>
    return _len;
}
_intVec.unshift = function (_num) {
    /// <summary> insert value `num` to the begining of integer vector `intVec`. Returns the length of the modified array.</summary>
    return _len;
}
_vec.pushV = function (_vec2) {
    /// <summary> append vector `vec2` to vector `vec`.</summary>
}
_intVec.pushV = function (_intVec2) {
    /// <summary> append integer vector `intVec2` to integer vector `intVec`.</summary>
}
_vec.sum = function () {
    /// <summary> return `num`: the sum of elements of vector `vec`</summary>
    return _num;
}
_intVec.sum = function () {
    /// <summary> return `num`: the sum of elements of integer vector `intVec`</summary>
    return _num;
}
_vec.getMaxIdx = function () {
    /// <summary> returns the integer index `idx` of the maximal element in vector `vec`</summary>
    return _idx;
}
_intVec.getMaxIdx = function () {
    /// <summary> returns the integer index `idx` of the maximal element in integer vector `vec`</summary>
    return _idx;
}
_vec.sort = function (_asc) {
    /// <summary> `vec2` is a sorted copy of `vec`. `asc=true` sorts in ascending order (equivalent `sort()`), `asc`=false sorts in descending order</summary>
    return _vec2;
}
_intVec.sort = function (_asc) {
    /// <summary> integer vector `intVec2` is a sorted copy of integer vector `intVec`. `asc=true` sorts in ascending order (equivalent `sort()`), `asc`=false sorts in descending order</summary>
    return _intVec2;
}
_vec.sortPerm = function (_asc) {
    /// <summary> returns a sorted copy of the vector in `sortRes.vec` and the permutation `sortRes.perm`. `asc=true` sorts in ascending order (equivalent `sortPerm()`), `asc`=false sorts in descending order.</summary>
    return _sortRes;
}
_vec.outer = function (_vec2) {
    /// <summary> the dense matrix `mat` is a rank-1 matrix obtained by multiplying `vec * vec2^T`. Implemented for dense float vectors.</summary>
    return _mat;
}
_vec.inner = function (_vec2) {
    /// <summary> `num` is the standard dot product between vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
    return _num;
}
_vec.plus = function (_vec2) {
    /// <summary>`vec3` is the sum of vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
    return _vec3;
}
_vec.minus = function (_vec2) {
    /// <summary>`vec3` is the difference of vectors `vec` and `vec2`. Implemented for dense float vectors.</summary>
    return _vec3;
}
_vec.multiply = function (_num) {
    /// <summary>`vec2` is a vector obtained by multiplying vector `vec` with a scalar (number) `num`. Implemented for dense float vectors.</summary>
    return _vec2;
}
_vec.normalize = function () {
    /// <summary> normalizes the vector `vec` (inplace operation). Implemented for dense float vectors.</summary>
}


_vec.length = _len
_intVec.length = _len
_vec.print = function () {
    /// <summary> print vector in console</summary>
}
_intVec.print = function () {
    /// <summary> print integer vector in console</summary>
}
_vec.diag = function () {
    /// <summary> `mat` is a diagonal dense matrix whose diagonal equals `vec`. Implemented for dense float vectors.</summary>
    return _mat;
}
_vec.spDiag = function () {
    /// <summary> `spMat` is a diagonal sparse matrix whose diagonal equals `vec`. Implemented for dense float vectors.</summary>
    return _spMat;
}
_vec.norm = function () {
    /// <summary> `num` is the Euclidean norm of `vec`. Implemented for dense float vectors.</summary>
    return _num;
}
_vec.sparse = function () {
    /// <summary> `spVec` is a sparse vector representation of dense vector `vec`. Implemented for dense float vectors.</summary>
    return _spVec;
}

// Manual override
la.newVec = function () {
    /// <signature>
    /// <summary> generate an empty float vector</summary>
    /// </signature>
    /// <signature>
    /// <param name="_arr" value="_arr">Array of numbers</param>
    /// <summary> copy a javascript number array `arr`</summary>
    /// </signature>
    /// <signature>
    /// <summary> clone a float vector `vec2`</summary>
    /// <param name="_vec2" value="_vec2">Vector</param>
    /// </signature>
    return _vec;
}

var vec = la.newVec()
//Rectangle.getArea()
var _vec = {
    /// <field value = '_len'>lenz</field>
    length: _len,
    minus: function (_vec2) {
        /// <signature>
        /// <summary> minuz</summary>
        /// <param name="_vec2" value="_vec2">vecz</param>
        /// </signature>
        return _vec3;
    }

}