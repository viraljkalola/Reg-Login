interface Iregister {
  uname: string;
  email: string;
  psw: string;
}

class Detail implements Iregister {
  uname: string;
  email: string;
  psw: string;

  constructor(runame: string, remail: string, rpsw: string) {
    this.uname = runame;
    this.email = remail;
    this.psw = rpsw;
  }
}

var arr: any = [];

function register() {
  let rname = (document.getElementById("uname") as HTMLInputElement).value;
  let remail = (document.getElementById("email") as HTMLInputElement).value;
  let rpsw = (document.getElementById("psw") as HTMLInputElement).value;

  if (rname == "") {
    document.getElementById("msg").innerHTML = "Please fill user name";
  } else if (remail == "") {
    document.getElementById("msg").innerHTML = "Please fill email id";
  } else if (rpsw == "") {
    document.getElementById("msg").innerHTML = "Please fill password";
  } else { 

    const found = arr.find((obj) => obj.uname === rname);    
    if(found==undefined){
    var obj = new Detail(rname, remail, rpsw);
    arr.push(obj);

    let trbody = document.getElementById("table-contents");
    var para = document.createElement("tr");
    para.innerHTML = `
    <td>${rname}</td>
    <td>${remail}</td>
    <td>${rpsw}</td>
    `;
    trbody.appendChild(para);
    document.getElementById("msg").innerHTML = "Successfully register";
}
else{
    document.getElementById("msg").innerHTML = "Data already exist";
}
  }
}

function login() {
  let rname = (document.getElementById("luname") as HTMLInputElement).value;
  let rpsw = (document.getElementById("lpsw") as HTMLInputElement).value;
  const found = arr.find((obj) => obj.uname === rname && obj.psw === rpsw);
  if (found == undefined) {
    document.getElementById("lmsg").innerHTML = "Invalid username or password";
  } else {
    document.getElementById("lmsg").innerHTML = "Login Successfully !!!";
  }
}
