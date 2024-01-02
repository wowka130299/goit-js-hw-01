'use strict';

function getElementWidth(content, padding, border) {
    const sum = Number.parseFloat(content) + (Number.parseFloat(padding) * 2) + (Number.parseFloat(border) * 2);
    return sum;
}

