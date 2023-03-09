$(document).ready(function () {
    showemployeedata();
});

//ShowEmployee
function showemployeedata() {
    $.ajax({
        url: '/EMP/Emplist',
        type: 'Get',    
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.empName + '</td>';
                object += '<td>' + item.gender + '</td>';
                object += '<td>' + item.department + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td>' + item.startDate + '</td>';
                object += '<td>' + item.note + '</td>';
                object += '<td><a href="#"  class="btn btn-primary" onclick="Edit(' + item.id + ')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.id + ')">Delete</a></td>';
                object += '</tr>';
            });
            $('#table-data').html(object);
        },
        error: function () {
            alert("Data can't get");
        }
    });
};

//clear textbox
function cleartextbox() {
    $('#id').val('');
    $('#EmpName').val('');
    $('#Gender').val('');
    $('#Salary').val('');
    $('#Department').val('');
    $('#StartDate').val('');
    $('#Note').val('');
}

//Popup Fuction
$('#btnAddEmployee').click(function () {
    cleartextbox();
    $('#EmpMadal').modal('show');
    $('#empid').hide();
    $('#btnAddEmployee').show();
    $('#btnUpdateemp').hide();
    $('#Heading').text('Add Employee');
});

/*AddEmployee*/
function AddEmployee() {
    var objdata = {
        EmpName: $('#EmpName').val(),
        Gender: $('#Gender').val(),
        Department: $('#Department').val(),
        Salary: $('#Salary').val(),
        StartDate: $('#StartDate').val(),
        Note: $('#Note').val()
    }
    $.ajax({
        url: '/EMP/AddEmployee',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',  /*recive in controller*/
        dataType: 'json',
        success: function () {
            alert('Data saved');
            showemployeedata();
        },
        error: function () {
            alert("Data can't saved");
        }
    });
};

/*EditEmployee*/
function Edit(id) {
    $.ajax({
        url: '/EMP/Edit?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8',  /*recive in controller*/
        dataType: 'json',
        success: function (responce) {
            $('#EmpMadal').modal('show');
            $('#id').val(responce.id);
            $('#EmpName').val(responce.empName);
            $('#Gender').val(responce.gender);
            $('#Department').val(responce.department);
            $('#Salary').val(responce.salary);
            $('#StartDate').val(responce.startDate);
            $('#Note').val(responce.note);
            $('#btnUpdateemp').show();
            $('#Heading').text('Update Details');
        },
        error: function () {
            alert("Data Not found")
        }
    });
}

//UpdateEmployee
function Updateemp() {
    var objdata = {
        id: $('#id').val(),
        EmpName: $('#EmpName').val(),
        Gender: $('#Gender').val(),
        Department: $('#Department').val(),
        Salary: $('#Salary').val(),
        StartDate: $('#StartDate').val(),
        Note: $('#Note').val()
    }
    $.ajax({
        url: '/EMP/Update',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Updated');
            cleartextbox();
            showemployeedata();   
        },
        error: function () {
            alert("Data can't saved");
        }
    });
};

//Delete Employee
function Delete(id) {
    $.ajax({
        url: '/EMP/Delete?id=' + id,
        success: function () {
            alert('Data Deleted');
            showemployeedata();
        },
        error: function () {
            alert("Data can't Delete");
        }
    })
}

