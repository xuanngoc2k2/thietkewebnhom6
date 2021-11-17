function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
     
    if(u== " ") {
    alert("Vui lòng nhập tên!");
    return;
    }
    if(p1 == " ") {
    alert("Vui lòng nhập mật khẩu!");
    return;
    }
    if(p2 == " ") {
    alert("Vui lòng xác minh mật khẩu!");
    return;
    }
     
    if(p1 !== p2) {
        alert("Xác minh mật khẩu không đúng. Vui lòng xác minh lại mật khẩu!");
        return;
    } 
    alert("Tạo tài khoản thành công");
    }