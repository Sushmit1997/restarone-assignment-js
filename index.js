const onCloseArrowClick = () => {
  $(".rowDetailContainer").animate({ width: "toggle" }, 300);
};

function addRowHandlers() {
  $(".rowDetailContainer").css("display", "block").show();

  var table = document.getElementById("tableId");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function (row) {
      return function () {
        var cell = row.getElementsByTagName("td")[1];
        var initialCell = row.getElementsByTagName("td")[0];
        var companyCell = row.getElementsByTagName("td")[2];
        var workEmailCell = row.getElementsByTagName("td")[4];

        var initial = initialCell.innerText;
        var id = cell.innerHTML;
        var companyName = companyCell.innerText;
        var workEmail = workEmailCell.innerText;

        document.querySelector(".userDetailName").innerHTML = id;
        document.querySelector(".userDetailNameTop").innerHTML = id;
        document.querySelector(".rowDetailUserInitials").innerHTML = initial;
        document.querySelector(".userDetailCompanyTop").innerHTML = companyName;
        document.querySelector(".userDetailCompany").innerHTML = companyName;
        document.querySelector(".userDetailPhone").innerHTML = workEmail;

        $(".rowDetailContainer").css("display", "block");
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
