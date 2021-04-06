$(document).ready(function () {
    var options = $('#MusicStyleId option');
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
    $("#MusicStyleId option:selected").prop("disabled", true);
    var allOptionsAlreadySelected = $("#musicChoosensTable")[0];
    while (allOptionsAlreadySelected.hasChildNodes()) {
        allOptionsAlreadySelected.removeChild(allOptionsAlreadySelected.firstChild);
    }
    $("#MusicStyleId option:disabled").each(function () {
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
        musicAdded.innerHTML = $("#MusicStyleId option:disabled")[i].text;
        var btnDelete = newRow.insertCell();
        btnDelete.style = "color: red";
        btnDelete.innerHTML = '<button type="button" class="glyphicon glyphicon-minus-sign"></button>';
        $('select[name=MusicStyleId] option:eq(' + i + ')').prop('disabled', true);

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
}

function selectDrinkItem() {
    var drinkItemChoosen = [];
    $("#DrinkItemId option:selected").prop("disabled", true);
    var allOptionsAlreadySelected = $("#drinkItemTable")[0];
    while (allOptionsAlreadySelected.hasChildNodes()) {
        allOptionsAlreadySelected.removeChild(allOptionsAlreadySelected.firstChild);
    }
    $("#DrinkItemId option:disabled").each(function () {
        var $this = $(this);
        drinkItemChoosen.push({ id: parseInt($this.val()) });
    });
    for (var i = 0; i < drinkItemChoosen.length; i++) {
        var newRow = document.getElementById('drinkItemTable').insertRow(i);
        var drinkItemAdded = newRow.insertCell();
        drinkItemAdded.style = "color: green";
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Delete");
        x.appendChild(t);
        drinkItemAdded.innerHTML = $("#DrinkItemId option:disabled")[i].text;
        drinkItemAdded.id = $("#DrinkItemId option:disabled")[i].value;
        var cell1 = newRow.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell1.appendChild(element1);

    };

    //sorts the table by aplphabetical order
    var drinkItemTable, rows, switching, i, x, y, shouldSwitch;
    drinkItemTable = document.getElementById("drinkItemTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = drinkItemTable.rows;
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
}

function selectToBringItem() {
    var toBringItemChoosen = [];
    $("#ToBringItemId option:selected").prop("disabled", true);
    var allOptionsAlreadySelected = $("#toBringItemTable")[0];
    while (allOptionsAlreadySelected.hasChildNodes()) {
        allOptionsAlreadySelected.removeChild(allOptionsAlreadySelected.firstChild);
    }
    $("#ToBringItemId option:disabled").each(function () {
        var $this = $(this);
        toBringItemChoosen.push({ id: parseInt($this.val()) });
    });
    for (var i = 0; i < toBringItemChoosen.length; i++) {
        var newRow = document.getElementById('toBringItemTable').insertRow(i);
        var toBringItemAdded = newRow.insertCell();
        toBringItemAdded.style = "color: green";
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Delete");
        x.appendChild(t);
        toBringItemAdded.innerHTML = $("#ToBringItemId option:disabled")[i].text;
        var cell1 = newRow.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell1.appendChild(element1);

    };

    //sorts the table by aplphabetical order
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("toBringItemTable");
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
}
function enableMusicStyleSelect() {
    if ($("#MusicStyleId option:selected")[0].value === "0") {
        $("#selectMusicTypeButton").prop("disabled", true);
    }
    else {
        $("#selectMusicTypeButton").prop("disabled", false);
    }
}

function enableDrinkItemSelect() {
    if ($("#DrinkItemId option:selected")[0].value === "0") {
        $("#selectDrinkItemButton").prop("disabled", true);
    }
    else {
        $("#selectDrinkItemButton").prop("disabled", false);
    }
}

function enableToBringItemSelect() {
    if ($("#ToBringItemId option:selected")[0].value === "0") {
        $("#selectToBringItemButton").prop("disabled", true);
    }
    else {
        $("#selectToBringItemButton").prop("disabled", false);
    }
}


function addRowToDrinkTable(drinkTable) {

    var table = document.getElementById(drinkTable);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell1.appendChild(element1);


    var cell3 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.id = "newToBringItem";
    cell3.appendChild(element2);

    var hiddenLabel = document.getElementById("hiddenLabel");
    hiddenLabel.style = "visibility:block";
    var inputDrinkText = document.getElementById("inputDrinkText")
    hiddenLabel.innerHTML = inputDrinkText.value;
    inputDrinkText.style = "visibility:hidden";
    inputDrinkText.parentElement.remove();

}

function deleteDrinkTableRow(drinkTable) {
    try {
        var table = document.getElementById(drinkTable);
        var rowCount = table.rows.length;
        var op = document.getElementById("DrinkItemId").getElementsByTagName("option");

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i); 
                for (var y = 0; y < op.length; y++) {
                    if (op[y].value == row.childNodes[1].id) {
                        op[y].disabled = false
                    }
                }
                rowCount--;
                i--;
            }
        }
    } catch (e) {
        alert(e);
    }
}

function addRowToToBringTable(toBringTable) {

    var table = document.getElementById(toBringTable);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell1.appendChild(element1);


    var cell3 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.id = "newToBringItem";
    cell3.appendChild(element2);

    var inputToBringText = document.getElementById("inputToBringText");
    var hiddenLabel = document.getElementById("hiddenLabel2");
    hiddenLabel.innerHTML.value = inputToBringText;
    inputToBringText.style = "visibility:hidden";
    inputToBringText.parentElement.remove();
    hiddenLabel.innerHTML = inputToBringText.value;
    hiddenLabel.style = "visibility:block";
   

}

function deleteToBringTableRow(toBringTable) {
    try {
        var table = document.getElementById(toBringTable);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }
    } catch (e) {
        alert(e);
    }
}

function addOtherDrinkTableRow(otherDrinkItemTable) {

    var table = document.getElementById(otherDrinkItemTable);

    var rowCount = table.rows.length;

    var row = table.insertRow(rowCount);

    for (var i = 0; i < rowCount; i++) {
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.name = "chkbox[]";
        cell1.appendChild(element1);

        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.name = "txtbox[]";
        element2.id = "newDrinkItem" + rowCount;
        cell2.appendChild(element2);

        var cell3 = row.insertCell(2);
        var element3 = document.createElement("label");
        element3.type = "text";
        element3.id = "labelledDrinkItem" + rowCount;
        cell3.appendChild(element3);

        var inputDrinkText = element2;
        var hiddenLabel = document.getElementById(element3.id);
        //should get the value from the previous row.
        var currentInput = element2.id;
        let previousInput = currentInput.replace(/\d+/g, function (match) {
            return parseInt(match) - 1;
        });
        hiddenLabel.innerHTML = document.getElementById(previousInput).value;
        inputDrinkText.parentElement.remove();
        previousInput.style = "visibility:hidden";
        hiddenLabel.style = "visibility:block";
    }
}

function deleteOtherDrinkTableRow(otherDrinkItemTable) {
    try {
        var table = document.getElementById(otherDrinkItemTable);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }
    } catch (e) {
        alert(e);
    }
}



