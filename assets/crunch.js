let  userName = prompt('who is here?','');

if (userName = 'Admin'){
    let pass = prompt('password?','');

if (pass ==='TheMaster'){
    alert('welcome!');

}
else if (pass === '' || pass === null){
    alert('cancelled');
}
else {
    alert('wrong password');
}
}
else if (userName === '' || userName === null){
    alert('cancelled');
}
else {
    alert('I dont know you');
}

