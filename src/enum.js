"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developr"] = 3] = "Developr";
})(Role || (Role = {}));
console.log(Role.Reporter, Role);
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60";
})(Message || (Message = {}));
var month = [0 /* Jan */, 1 /* Feb */];
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
var g = G.a;
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer[Answer["Y"] = 1] = "Y";
    Answer[Answer["X"] = Math.ceil(1)] = "X";
})(Answer || (Answer = {}));
var userList = {
    data: [{
            name: 'godaangel',
            age: 18,
            address: 'xxxx'
        }]
};
function render(list) {
    list.data.forEach(function (item) {
        console.log(item.name, item.age);
    });
}
render(userList);
