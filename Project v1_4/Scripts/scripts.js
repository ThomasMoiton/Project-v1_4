function selectMusicType() {
$('#musicTypeChosen').val();
    if (isNaN(parseFloat($('#MusicTypeId').val())) === false && $('#musicTypeLabel').text() === "" && $('#MusicTypeId option:selected')[0].value === "1" ){
$('#musicTypeLabel').text($('#MusicTypeId option:selected').text());
$("#MusicTypeId option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType").show();

}
    else if ($('#musicTypeLabel1').text() == "" && $('#musicTypeChosen option:selected')[0].value === "2") {
$('#musicTypeLabel1').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType1").show();
}
    else if ($('#musicTypeLabel2').text() == "" && $('#musicTypeChosen option:selected')[0].value === "3") {
$('#musicTypeLabel2').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType2").show();
}
    else if ($('#musicTypeLabel3').text() == "" && $('#musicTypeChosen option:selected')[0].value === "4") {
$('#musicTypeLabel3').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType3").show();
}
    else if ($('#musicTypeLabel4').text() == "" && $('#musicTypeChosen option:selected')[0].value === "5") {
$('#musicTypeLabel4').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType4").show();
}
    else if ($('#musicTypeLabel5').text() == "" && $('#musicTypeChosen option:selected')[0].value === "6") {
$('#musicTypeLabel5').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType5").show();
}
    else if ($('#musicTypeLabel6').text() == "" && $('#musicTypeChosen option:selected')[0].value === "7") {
$('#musicTypeLabel6').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType6").show();
}
    else if ($('#musicTypeLabel7').text() == "" && $('#musicTypeChosen option:selected')[0].value === "8") {
$('#musicTypeLabel7').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType7").show();
}
    else if ($('#musicTypeLabel8').text() == "" && $('#musicTypeChosen option:selected')[0].value === "9") {
$('#musicTypeLabel8').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType8").show();
}
    else if ($('#musicTypeLabel9').text() == "" && $('#musicTypeChosen option:selected')[0].value === "10") {
$('#musicTypeLabel9').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType9").show();
}
    else if ($('#musicTypeLabel10').text() == "" && $('#musicTypeChosen option:selected')[0].value === "11") {
$('#musicTypeLabel10').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType10").show();
}
    else if ($('#musicTypeLabel11').text() == "" && $('#musicTypeChosen option:selected')[0].value === "12") {
$('#musicTypeLabel11').text($('#musicTypeChosen option:selected').text());
$("#musicTypeChosen option:selected").prop("disabled", true);
$("#selectButton").prop("disabled", true);
$("#deleteButtonMusicType11").show();
}
}

function enableSelect() {
 $("#selectButton").prop("disabled",false);
}

function deleteMusicType() {
    $("#musicTypeLabel").html("");
    $("#deleteButtonMusicType").hide();
    $('select>option:eq(1)').prop('disabled', false);
}

function deleteMusicType1() {
    $("#musicTypeLabel1").html("");
    $("#deleteButtonMusicType1").hide();
    $('select>option:eq(2)').prop('disabled', false);
}

function deleteMusicType2() {
    $("#musicTypeLabel2").html("");
    $("#deleteButtonMusicType2").hide();
    $('select>option:eq(3)').prop('disabled', false);
}

function deleteMusicType3() {
    $("#musicTypeLabel3").html("");
    $("#deleteButtonMusicType3").hide();
    $('select>option:eq(4)').prop('disabled', false);
}

function deleteMusicType4() {
    $("#musicTypeLabel4").html("");
    $("#deleteButtonMusicType4").hide();
    $('select>option:eq(5)').prop('disabled', false);
}

function deleteMusicType5() {
    $("#musicTypeLabel5").html("");
    $("#deleteButtonMusicType5").hide();
    $('select>option:eq(6)').prop('disabled', false);
}

function deleteMusicType6() {
    $("#musicTypeLabel6").html("");
    $("#deleteButtonMusicType6").hide();
    $('select>option:eq(7)').prop('disabled', false);
}

function deleteMusicType7() {
    $("#musicTypeLabel7").html("");
    $("#deleteButtonMusicType7").hide();
    $('select>option:eq(8)').prop('disabled', false);
}

function deleteMusicType8() {
    $("#musicTypeLabel8").html("");
    $("#deleteButtonMusicType8").hide();
    $('select>option:eq(9)').prop('disabled', false);
}

function deleteMusicType9() {
    $("#musicTypeLabel9").html("");
    $("#deleteButtonMusicType9").hide();
    $('select>option:eq(10)').prop('disabled', false);
}

function deleteMusicType10() {
    $("#musicTypeLabel10").html("");
    $("#deleteButtonMusicType10").hide();
    $('select>option:eq(11)').prop('disabled', false);
}

function deleteMusicType11() {
    $("#musicTypeLabel11").html("");
    $("#deleteButtonMusicType11").hide();
    $('select>option:eq(12)').prop('disabled', false);
}