const userDetailDiv = document.querySelector(".rowDetailContainer");

const onCloseArrowClick = () => {
  // Setting width 0px before setting display none.
  userDetailDiv.style.width = "0px";
  setTimeout(() => {
    userDetailDiv.style.display = "none";
  }, 200);
};

function addRowHandlers() {
  // Setting display to block before increasing width
  setTimeout(() => {
    userDetailDiv.style.display = "block";
  }, 50);

  setTimeout(() => {
    userDetailDiv.style.width = "400px";
  }, 70);

  var table = document.getElementById("tableId");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function (row) {
      return function () {
        var initialCell = row.getElementsByTagName("td")[0];
        var nameCell = row.getElementsByTagName("td")[1];
        var companyCell = row.getElementsByTagName("td")[2];
        var workEmailCell = row.getElementsByTagName("td")[4];

        var initial = initialCell.innerText;
        var name = nameCell.innerHTML;
        var companyName = companyCell.innerText;
        var workEmail = workEmailCell.innerText;

        document.querySelector(".userDetailName").innerHTML = name;
        document.querySelector(".userDetailNameTop").innerHTML = name;
        document.querySelector(".rowDetailUserInitials").innerHTML = initial;
        document.querySelector(".userDetailCompanyTop").innerHTML = companyName;
        document.querySelector(".userDetailCompany").innerHTML = companyName;
        document.querySelector(".userDetailPhone").innerHTML = workEmail;

        // Setting display to block before increasing width
        setTimeout(() => {
          userDetailDiv.style.display = "block";
        }, 50);
        setTimeout(() => {
          userDetailDiv.style.width = "400px";
        }, 70);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
