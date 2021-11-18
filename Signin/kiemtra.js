    
    
    var btnSubmit = document.querySelector('.submit');
    let checkInput = document.querySelector('.register input')
    let nameLf = document.querySelector('#username');
    let password = document.querySelector('#password');
    let passwordRp = document.querySelector('#password-repeat');
    btnSubmit.onclick = () =>
    {   
        if(checkInput.value == " ")
        {
            alert("Nhap vao form");
        }
        else if(nameLf.value == " ")
        {
            alert("Hay nhap ten!!");
        }
        else if(password.value == " ")
        {
            alert(' Chua nhap mk')
        }
        else if(passwordRp.value == " ")
        {
            alert('Nhap lai mk!!!');
        }
        else if(passwordRp.value != password.value)
        {
            alert('Mat Khau ko dung');
        }
        else
        {
            alert('Đăng Ký Thành Công!!!')
        }
    }