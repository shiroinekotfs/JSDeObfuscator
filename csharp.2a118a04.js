!function(e,t,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof i.parcelRequire&&i.parcelRequire,s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(n,o){if(!t[n]){if(!e[n]){var i="function"==typeof parcelRequire&&parcelRequire;if(!o&&i)return i(n,!0);if(r)return r(n,!0);if(s&&"string"==typeof n)return s(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}p.resolve=function(t){return e[n][1][t]||t},p.cache={};var c=t[n]=new a.Module(n);e[n][0].call(c.exports,p,c,c.exports,this)}return t[n].exports;function p(e){return a(p.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=t,a.parent=r,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},i.parcelRequire=a;for(var l=0;l<n.length;l++)a(n[l]);if(n.length){var c=a(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"9bfc29c3b64cb8055b0f3c6347d3e238":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.language=n.conf=void 0;var o={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],folding:{markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}};n.conf=o;n.language={defaultToken:"",tokenPostfix:".cs",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["extern","alias","using","bool","decimal","sbyte","byte","short","ushort","int","uint","long","ulong","char","float","double","object","dynamic","string","assembly","is","as","ref","out","this","base","new","typeof","void","checked","unchecked","default","delegate","var","const","if","else","switch","case","while","do","for","foreach","in","break","continue","goto","return","throw","try","catch","finally","lock","yield","from","let","where","join","on","equals","into","orderby","ascending","descending","select","group","by","namespace","partial","class","field","event","method","param","property","public","protected","internal","private","abstract","sealed","static","struct","readonly","volatile","virtual","override","params","get","set","add","remove","operator","true","false","implicit","explicit","interface","enum","null","async","await","fixed","sizeof","stackalloc","unsafe","nameof","when"],namespaceFollows:["namespace","using"],parenFollows:["if","for","while","switch","foreach","using","catch","when"],operators:["=","??","||","&&","|","^","&","==","!=","<=",">=","<<","+","-","*","/","%","!","~","++","--","+=","-=","*=","/=","%=","&=","|=","^=","<<=",">>=",">>","=>"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/\@?[a-zA-Z_]\w*/,{cases:{"@namespaceFollows":{token:"keyword.$0",next:"@namespace"},"@keywords":{token:"keyword.$0",next:"@qualified"},"@default":{token:"identifier",next:"@qualified"}}}],{include:"@whitespace"},[/}/,{cases:{"$S2==interpolatedstring":{token:"string.quote",next:"@pop"},"$S2==litinterpstring":{token:"string.quote",next:"@pop"},"@default":"@brackets"}}],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/,"number.float"],[/0[xX][0-9a-fA-F_]+/,"number.hex"],[/0[bB][01_]+/,"number.hex"],[/[0-9_]+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",next:"@string"}],[/\$\@"/,{token:"string.quote",next:"@litinterpstring"}],[/\@"/,{token:"string.quote",next:"@litstring"}],[/\$"/,{token:"string.quote",next:"@interpolatedstring"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],qualified:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],[/\./,"delimiter"],["","","@pop"]],namespace:[{include:"@whitespace"},[/[A-Z]\w*/,"namespace"],[/[\.=]/,"delimiter"],["","","@pop"]],comment:[[/[^\/*]+/,"comment"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",next:"@pop"}]],litstring:[[/[^"]+/,"string"],[/""/,"string.escape"],[/"/,{token:"string.quote",next:"@pop"}]],litinterpstring:[[/[^"{]+/,"string"],[/""/,"string.escape"],[/{{/,"string.escape"],[/}}/,"string.escape"],[/{/,{token:"string.quote",next:"root.litinterpstring"}],[/"/,{token:"string.quote",next:"@pop"}]],interpolatedstring:[[/[^\\"{]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/{{/,"string.escape"],[/}}/,"string.escape"],[/{/,{token:"string.quote",next:"root.interpolatedstring"}],[/"/,{token:"string.quote",next:"@pop"}]],whitespace:[[/^[ \t\v\f]*#((r)|(load))(?=\s)/,"directive.csx"],[/^[ \t\v\f]*#\w.*$/,"namespace.cpp"],[/[ \t\v\f\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}},{}]},{},[]);