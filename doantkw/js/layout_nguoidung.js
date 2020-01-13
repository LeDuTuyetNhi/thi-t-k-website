function kiemtra()
{
	var user=document.getElementById('ten').value;
	if(user =="")
		document.getElementById('username').innerHTML="Bạn chưa nhập tên người dùng";
	var pass=document.getElementById('mk').value;
	if(pass == "")
		document.getElementById('password').innerHTML="Bạn chưa nhập mật khẩu";