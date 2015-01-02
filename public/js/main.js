define(["require", "exports", "./utils"], function (require, exports, u) {
    var Main = (function () {
        function Main(myname) {
            this.myname = myname;
            console.log("Hello");
        }
        Main.prototype.greet = function () {
            alert("Hello " + this.myname + u.test());
        };
        return Main;
    })();
    var m = new Main("Joe3!");
    m.greet();
});
