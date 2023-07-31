var detailpanel = document.getElementById("guestdetailpanel");

adduseropen = () => {
  detailpanel.style.display = "flex";
};
adduserclose = () => {
  detailpanel.style.display = "none";
};

//search bar logic using js
const searchFun = () => {
  const filter = document.getElementById("search_bar").value.toUpperCase();
  const myTable = document.getElementById("table-data");
  const tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let rowVisible = false;
    const tdList = tr[i].getElementsByTagName("td");

    for (let j = 0; j < tdList.length; j++) {
      const td = tdList[j];
      if (td) {
        const textValue = td.textContent || td.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          rowVisible = true;
          break;
        }
      }
    }

    tr[i].style.display = rowVisible ? "" : "none";
  }
};
