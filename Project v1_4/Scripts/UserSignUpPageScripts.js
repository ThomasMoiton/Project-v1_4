$(document).ready(function () {
    //$('#CountryId').append($('<option></option>').val(0).html("Select your residential country"))
    //$('#CountryId').val(0)
    //$('#MusicTypeId').append($('<option></option>').val(0).html("Please select music type(s)"))
    //$('#MusicTypeId').val(0);
    //$("select option[value='0']:selected").attr('disabled', "disabled");
    //$("#selectButton").prop("disabled", true);
    const $result = $("#passwordErrorMesage");
    $result.text("Minimum eight characters, at least one letter and one number");
    $result.css("color", "black");
    var options = $('#MusicTypeId option');
    var arr = options.map(function (_, o) { return { t: $(o).text(), v: o.value }; }).get();
    arr.sort(function (o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
    options.each(function (i, o) {
        o.value = arr[i].v;
        $(o).text(arr[i].t);
    });

    var options = $('#CountryId option');
    var arr = options.map(function (_, o) { return { t: $(o).text(), v: o.value }; }).get();
    arr.sort(function (o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
    options.each(function (i, o) {
        o.value = arr[i].v;
        $(o).text(arr[i].t);
    });
});

function selectMusicType() {
    var musicTypeChoosen = [];
    $("#MusicTypeId option:selected").prop("disabled", true);
    var allOptionsAlreadySelected = $("#musicChoosensTable")[0];
    while (allOptionsAlreadySelected.hasChildNodes()) {
        allOptionsAlreadySelected.removeChild(allOptionsAlreadySelected.firstChild);
    }
    $("#MusicTypeId option:disabled").each(function () {
        var $this = $(this);
        musicTypeChoosen.push({ id: parseInt($this.val()) });
    });
     for (var i = 0; i < musicTypeChoosen.length; i++) {
         var newRow = document.getElementById('musicChoosensTable').insertRow(i);
         var musicAdded = newRow.insertCell();
         musicAdded.style = "color: green";
         var x = document.createElement("BUTTON");
         var t = document.createTextNode("Delete");
         x.appendChild(t);
         //document.body.appendChild(x);
         musicAdded.innerHTML = $("#MusicTypeId option:disabled")[i].text + body.appendChild(x);
        
    };

    //sorts the table by aplphabetical order
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("musicChoosensTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    //var optionsDisabled = $("#MusicTypeId option:disabled");
   
    //var musicSelected = $('#MusicTypeId option:disabled').text();
    //$('#musicTypeLabel1').text(musicSelected);
    //$('#MusicTypeId option:selected')[0].value
    //$('#MusicTypeId option:selected')[0].innerHTML
    //musicTypeChoosen.forEach(myFunction) 
}
//function selectMusicType() {
//    //passer par un for
//    $('#musicTypeChosen').val();
//    if (isNaN(parseFloat($('#MusicTypeId').val())) === false && $('#musicTypeLabel1').text() === "" && $('#MusicTypeId option:selected')[0].value === "1") {
//        $('#musicTypeLabel1').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType").show();

//    }
//    else if ($('#musicTypeLabel2').text() == "" && $('#MusicTypeId option:selected')[0].value === "2") {
//        $('#musicTypeLabel2').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType1").show();
//    }
//    else if ($('#musicTypeLabel3').text() == "" && $('#MusicTypeId option:selected')[0].value === "3") {
//        $('#musicTypeLabel3').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType2").show();
//    }
//    else if ($('#musicTypeLabel4').text() == "" && $('#MusicTypeId option:selected')[0].value === "4") {
//        $('#musicTypeLabel4').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType3").show();
//    }
//    else if ($('#musicTypeLabel5').text() == "" && $('#MusicTypeId option:selected')[0].value === "5") {
//        $('#musicTypeLabel5').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType4").show();
//    }
//    else if ($('#musicTypeLabel6').text() == "" && $('#MusicTypeId option:selected')[0].value === "6") {
//        $('#musicTypeLabel6').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType5").show();
//    }
//    else if ($('#musicTypeLabel7').text() == "" && $('#MusicTypeId option:selected')[0].value === "7") {
//        $('#musicTypeLabel7').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType6").show();
//    }
//    else if ($('#musicTypeLabel8').text() == "" && $('#MusicTypeId option:selected')[0].value === "8") {
//        $('#musicTypeLabel8').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType7").show();
//    }
//    else if ($('#musicTypeLabel9').text() == "" && $('#MusicTypeId option:selected')[0].value === "9") {
//        $('#musicTypeLabel9').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType8").show();
//       ;
//    }
//    else if ($('#musicTypeLabel10').text() == "" && $('#MusicTypeId option:selected')[0].value === "10") {
//        $('#musicTypeLabel10').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType9").show();
//    }
//    else if ($('#musicTypeLabel11').text() == "" && $('#MusicTypeId option:selected')[0].value === "11") {
//        $('#musicTypeLabel11').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType10").show();
//    }
//    else if ($('#musicTypeLabel12').text() == "" && $('#MusicTypeId option:selected')[0].value === "12") {
//        $('#musicTypeLabel12').text($('#MusicTypeId option:selected').text());
//        $("#MusicTypeId option:selected").prop("disabled", true);
//        $("#selectButton").prop("disabled", true);
//        $("#deleteButtonMusicType11").show();
//    }
//}

function enableSelect() {
    if ($("#MusicTypeId option:selected")[0].value === "0") {
        $("#selectButton").prop("disabled", true);
    }
    else {
        $("#selectButton").prop("disabled", false);
    }
}

function deleteMusicType() {
    $("#musicTypeLabel1").html("");
    $("#deleteButtonMusicType").hide();
    $('select[name=MusicTypeId] option:eq(0)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType1() {
    $("#musicTypeLabel2").html("");
    $("#deleteButtonMusicType1").hide();
    $('select[name=MusicTypeId] option:eq(1)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType2() {
    $("#musicTypeLabel3").html("");
    $("#deleteButtonMusicType2").hide();
    $('select[name=MusicTypeId] option:eq(2)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType3() {
    $("#musicTypeLabel4").html("");
    $("#deleteButtonMusicType3").hide();
    $('select[name=MusicTypeId] option:eq(3)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType4() {
    $("#musicTypeLabel5").html("");
    $("#deleteButtonMusicType4").hide();
    $('select[name=MusicTypeId] option:eq(4)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType5() {
    $("#musicTypeLabel6").html("");
    $("#deleteButtonMusicType5").hide();
    $('select[name=MusicTypeId] option:eq(5)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType6() {
    $("#musicTypeLabel7").html("");
    $("#deleteButtonMusicType6").hide();
    enableSelect();
    $('select[name=MusicTypeId] option:eq(6)').prop('disabled', false);
}

function deleteMusicType7() {
    $("#musicTypeLabel8").html("");
    $("#deleteButtonMusicType7").hide();
    $('select[name=MusicTypeId] option:eq(7)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType8() {
    $("#musicTypeLabel9").html("");
    $("#deleteButtonMusicType8").hide();
    $('select[name=MusicTypeId] option:eq(8)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType9() {
    $("#musicTypeLabel10").html("");
    $("#deleteButtonMusicType9").hide();
    $('select[name=MusicTypeId] option:eq(9)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType10() {
    $("#musicTypeLabel11").html("");
    $("#deleteButtonMusicType10").hide();
    $('select[name=MusicTypeId] option:eq(10)').prop('disabled', false);
    enableSelect();
}

function deleteMusicType11() {
    $("#musicTypeLabel12").html("");
    $("#deleteButtonMusicType11").hide();
    $('select[name=MusicTypeId] option:eq(11)').prop('disabled', false);
    enableSelect();
}
//function showPassword() {
//    var x = document.getElementById("UserPassword");
//    var y = document.getElementById("ConfirmPassword");
//    if (x.type === "password" | y.type === "password") {
//        x.type = "password";
//        y.type = "password";
//    } else {
//        x.type = "text";
//        y.type = "text";
//    }
//}
function saveContact() {
        var selectedMusicTypes = [];
        $("#MusicTypeId option:disabled").each(function () {
            var $this = $(this);
            selectedMusicTypes.push({ id: parseInt($this.val()) });
        });
    let result = selectedMusicTypes.map(a => a.id);
        var userEmail = $("#UserName").val();
        var userForename = $("#Forename").val();
        var userLastname = $("#Lastname").val();
        var userBirthdate = $("#birthdateId").val();
        var userPassword = $("#UserPassword").val();
        var userAddress = $("#Address").val();
        var userPostCode = $("#PostCode").val();
        var userCountryId = $("#CountryId").val();
        validateEmail(userEmail);
        emailValidate();
        validateForename(userForename);
        forenameValidate();
        validateLastname(userLastname);
        lastnameValidate();
        validateBirthdate(userBirthdate);
        birthdateValidate();
        validatePassword(userPassword);
        passwordValidate();
    matchPassword();
    if (emailValidate() && forenameValidate() && lastnameValidate() && birthdateValidate() && passwordValidate() === true) {
        $.ajax({
            type: "POST",
            traditional: true,
            url: 'SaveContact',
            data: {
                "email": userEmail,
                "forename": userForename,
                "lastname": userLastname,
                "birthdate": userBirthdate,
                "userPassword": userPassword,
                "address": userAddress,
                "postCode": userPostCode,
                "countryId": userCountryId,
                "MusicTypesSelected": result
            },
            success: function () {
                verification();
                window.location.href = '/Home/Index'
            },
            error: function (xhr) {

            }
        });
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function emailValidate() {
    const $result = $("#invalidEmail");
    const email = $("#UserName").val();
    $result.text("");

    if (validateEmail(email)) {
        return true;
    } else {
        $result.text(email + " not valid");
        $result.css("color", "red");
        return false;
    }
}
//function passwordVerification() {
//    var uP = $("#UserPassword").val();
//    if (uP == "") {
//        $("#passwordErrorMesage").html("**Please enter the Password!");
//        return false;
//    }
//    if (uP.length < 8) {
//        $("#passwordErrorMesage").html("**Password length must be atleast 8 characters");
//        return false;
//    }
//    return true;
//}

function validateForename(forename) {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(forename).toLowerCase());
}
function forenameValidate() {
    const $result = $("#forenameErrorMesage");
    const forename = $("#Forename").val();
    $result.text("");

    if (validateForename(forename)) {
        return true;
    } else {
        $result.text("Characters and empty spaces are not valid");
        $result.css("color", "red");
        return false;
    }
}
function validateLastname(lastname) {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(lastname).toLowerCase());
}
function lastnameValidate() {
    const $result = $("#lastnameErrorMesage");
    const lastname = $("#Lastname").val();
    $result.text("");

    if (validateForename(lastname)) {
        return true;
    } else {
        $result.text( "Characters and empty spaces are not valid");
        $result.css("color", "red");
        return false;
    }
}

function validateBirthdate(birthdate) {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(String(birthdate).toLowerCase());
}
function birthdateValidate() {
    const $result = $("#birthdateErrorMesage");
    const birthdate = $("#birthdateId").val();
    $result.text("");

    if (validateBirthdate(birthdate)) {
        return true;
    } else {
        $result.text("Date entered is not in the correct format");
        $result.css("color", "red");
        return false;
    }
}

function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password).toLowerCase());
}
function passwordValidate() {
    const $result = $("#passwordErrorMesage");
    const password = $("#UserPassword").val();
    $result.text("");

    if (validatePassword(password)) {
        return true;
    } else {
        $result.text("Minimum eight characters, at least one letter and one number");
        $result.css("color", "red");
        return false;
    }
}

function matchPassword() {
    const $result = $("#confirmPasswordErrorMesage");
    var pw1 = $("#UserPassword").val();
    var pw2 = $("#ConfirmPassword").val(); 
    if (pw1 != pw2) {
        $result.text("Passwords did not match");
        $result.css("color", "red");
        return false;
    } else {
        $result.text("");
        return true;
    }
}  

           