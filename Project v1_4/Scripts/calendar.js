function GetEventsOnPageLoad() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek, agendaDay'
        },
        buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
        },
        selectable: true,
        select: function () {
            showModal('Create an Event', 'Bind your information to navigate any page', null);
        },
        height: 'parent',
        events: function (start, end, timezone, callback) {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: "Home/GetEventData",
                dataType: "JSON",
                success: function (data) {
                    var events = [];
                    $.each(data, function (i, data) {
                        events.push({
                            title: data.name,
                            description: data.info,
                            start: moment(data.startdate).format("YYYY-MM-DD HH:mm:ss"),
                            end: moment(data.enddate).format("YYYY-MM-DD HH:mm:ss"),
                            backgroundColor: '#d05985',
                            borderColor: 'black',
                            id: data.id
                        });
                    });
                    callback(events);
                }
            })
        },
        nextDayThreshold: '00:00:00',
        editable: true,
        droppable: true,
        nowIndicator: true,
        eventClick: function (info) {
            GetEventDetailByEventId(info);
        },
        eventDrop: function (info) {
            console.log(info);
            UpdateEventDetails(info.id, info.start.toISOString(), info.end.toISOString());
        },
        eventResize: function (info) {
            UpdateEventDetails(info.id, info.start.toISOString(), info.end.toISOString());
        }
    })
}

function showModal(title, body, isEventDetail) {
    $("#MyPopup .modal-title").html(title);

    if (isEventDetail == null) {
        $("#MyPopup . modal-body").html(body);
        $("#MyPopup").modal("show");
    }
    else {
        var eventDetail = 'Event Name: ' + body[0].name + '</br>';
        var eventInfo = 'Event Info: ' + body[0].info + '</br>';
        var eventStart = 'Event Start Date' + moment(body[0].startdate).format("YYYY-MM-DD HH:mm:ss") + '</br>';
        var eventEnd = 'Event End Date' + moment(body[0].enddate).format("YYYY-MM-DD HH:mm:ss") + '</br>';
        $("#MyPopup .modal-body").html(eventDetail + eventInfo + eventStart + eventEnd);
        $("#MyPopup").modal("show");
    }
}

function GetEventDetailByEventId(eventinfo) {
    var object = {};
    object.EventId = eventinfo.id;
    $.ajax({
        type: "POST",
        url: "Home/GetEventDetailByEventId",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(object),
        success: function (eventdetails) {
            showModal('Event Details', eventdetails, true);
        }
    });
}

function UpdateEventDetails(eventId, startDate, endDate) {
    var object = {};
    object.EventId = eventId;
    object.startDate = startDate;
    object.EndDate = endDate;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Home/UpdateEventDetails",
        dataType: "JSON",
        data: JSON.stringify(object)
    });
}