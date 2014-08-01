/**
 * @fileoverview
 * @author
 * @module autosize
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Autosize
     * @constructor
     * @extends Base
     */
    function Autosize(comConfig) {
        var self = this;
        //调用父类构造函数
        Autosize.superclass.constructor.call(self, comConfig);
    }
    S.extend(Autosize, Base, /** @lends Autosize.prototype*/{

    }, {ATTRS : /** @lends Autosize*/{

    }});
    return Autosize;
}, {requires:['node', 'base']});



