let table = document.querySelector("table").innerHTML;
document.querySelector(".searchbtn").addEventListener("click", function (e) {
  e.preventDefault();
  let cityV = document.querySelector("#cityName").value;
  if (cityV == "") {
    document.querySelector("#cityName").focus();
    document.querySelector(".msg").innerHTML = "Please Enter City Name...";
  } else {
  }

  fetch("https://api.postalpincode.in/postoffice/" + cityV + "")
    .then((response) => response.json())
    .then((resdata) => {
      resdata.map((i) => {
        document.querySelector(".msg").innerHTML = i.Message;
        document.querySelector("button").style.display = "inline";
        {
          i.PostOffice.map((sub) => {
            document.querySelector("table").innerHTML += `<tr>
                                                              <td>${sub.Pincode}</td>
                                                              <td>${sub.Name}</td>
                                                              <td>${sub.BranchType}</td>
                                                              <td>${sub.District}</td>
                                                              <td>${sub.Region}</td>
                                                              <td>${sub.State}</td>
                                                              
                                                          </tr>`;
          });
        }
      });

      // using for loop

      // let length = resdata[0]["PostOffice"].length;
      // for (let i = 0; i < length; i++) {
      //   document.querySelector("table").innerHTML += `<tr><td>${resdata[0]["PostOffice"][i]["Pincode"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["Name"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["BranchType"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["District"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["Region"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["State"]}</td>
      //                                                     <td>${resdata[0]["PostOffice"][i]["Country"]}</td>
      //                                                 </tr>`;
      // }
    });
});
