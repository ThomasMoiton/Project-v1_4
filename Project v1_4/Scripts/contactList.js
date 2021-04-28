function addContactRow(contactListTable) {

    var table = document.getElementById(contactListTable);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.id = "newContact" + rowCount;
    cell2.appendChild(element2);

    var cell3 = row.insertCell(1);
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.id = "newContact" + rowCount;
    cell3.appendChild(element3);

    var cell4 = row.insertCell(1);
    var element4 = document.createElement("input");
    element4.type = "text";
    element4.name = "txtbox[]";
    element4.id = "newContact" + rowCount;
    cell4.appendChild(element4);
}