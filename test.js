

var uid, fname, surname;

var countget;


VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];

        fname=responsevk.first_name;

        document.getElementById("firstname").innerHTML=fname;

});



VK.api('friends.get',{},function(data) {

    var responsevk=data.response;

    countget=responsevk.items.length;

    document.getElementById("counts").innerHTML=countget;

});


