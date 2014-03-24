$(document).ready(function (event) {
    CheckDetails.CheckDetailsBind();
});

var CheckDetails = {
    CheckDetailsBind: function () {

        $("#btnChkDetails").click(function (event) {

            var phoneNo = $("#txtPhoneNo").val();
            var company = $("#txtCompany").val();
            CheckDetails.CheckDetailsValidate(phoneNo, company);
        });
    },
    CheckDetailsValidate: function (phoneNo, company) {
        var valid = true;
        var phoneNo = $("#txtPhoneNo").val();
        var company = $("#txtCompany").val();
        if (phoneNo == null || phoneNo == "") {
            $("#spnPhoneNoErr").text("* Enter Phone No");
            valid = false;
        }
        else if (CheckDetails.phoneValidator(phoneNo)) {
            $("#spnPhoneNoErr").text("Phone no should contain 11 numbers");
            valid = false;
        }
        else {
            $("#spnPhoneNoErr").text("");
        }
        if (company == null || company == "") {
            $("#spnCompanyErr").text("* Enter Company Name");
            valid = false;
        }
        else if (CheckDetails.nameValidator(company)) {
            $("#spnCompanyErr").text("Enter only char");
            valid = false;
        }
        else {
            $("#spnCompanyErr").text("");
        }

        if (valid == true) {
            $("spnPhoneNoErr").text("");
            $("#spnCompanyErr").text("");
        }

        return valid;
    },

    phoneValidator: function (phoneNo) {
        var phoneExp = "^([0-9]{11})$";

        if (!(phoneNo.match(phoneExp))) {
            return true;
        } else {

            return false;
        }
    },
    nameValidator: function (company) {
        var nameExp = "^([a-z_A-Z\s]+)$";

        if (!(company.match(nameExp))) {
            return true;
        } else {

            return false;
        }
    },
}

