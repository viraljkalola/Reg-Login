var Detail = /** @class */ (function () {
    function Detail(runame, remail, rpsw) {
        this.uname = runame;
        this.email = remail;
        this.psw = rpsw;
    }
    return Detail;
}());
var arr = [];
function register() {
    var rname = document.getElementById("uname").value;
    var remail = document.getElementById("email").value;
    var rpsw = document.getElementById("psw").value;
    if (rname == "") {
        document.getElementById("msg").innerHTML = "Please fill user name";
    }
    else if (remail == "") {
        document.getElementById("msg").innerHTML = "Please fill email id";
    }
    else if (rpsw == "") {
        document.getElementById("msg").innerHTML = "Please fill password";
    }
    else {
        var found = arr.find(function (obj) { return obj.uname === rname; });
        if (found == undefined) {
            var obj = new Detail(rname, remail, rpsw);
            arr.push(obj);
            var trbody = document.getElementById("table-contents");
            var para = document.createElement("tr");
            para.innerHTML = "\n    <td>".concat(rname, "</td>\n    <td>").concat(remail, "</td>\n    <td>").concat(rpsw, "</td>\n    ");
            trbody.appendChild(para);
            document.getElementById("msg").innerHTML = "Successfully register";
        }
        else {
            document.getElementById("msg").innerHTML = "Data already exist";
        }
    }
}
function login() {
    var rname = document.getElementById("luname").value;
    var rpsw = document.getElementById("lpsw").value;
    var found = arr.find(function (obj) { return obj.uname === rname && obj.psw === rpsw; });
    if (found == undefined) {
        document.getElementById("lmsg").innerHTML = "Invalid username or password";
    }
    else {
        document.getElementById("lmsg").innerHTML = "Login Successfully !!!";
    }
}
