
  // effect toggle sidenav brand
  $("document").ready(function () {
    $(window).scroll(function () {
      if ($("html").scrollTop() >= 120) {
        $(".sidenav.brand").show();
        $("#topBannerImage").css({ "background-color": "#a7cef0" });
        $("#topBannerImage").css({ "box-shadow": "rgb(187, 183, 183) -5px 7px 10px 1px" });
      } else {
        $(".sidenav.brand").hide();
        $("#topBannerImage").css({ "background-color": "#F0F2F2" });
        $("#topBannerImage").css({ "box-shadow": "none" });
      }
    })
  })
  // -------------------------
  // feedback submit Alert
  document.getElementById("formFeedback").onsubmit = function () {
    var email = $("input[type=email]").val();
    var message = $("#message").val();
    console.log(email, message);
    alert("Thank for your feedback!" + "\n" + "Details:" + "\n" + "Your email: " + email + "\n" + "Your feedback: " + message);
    return false;
  }
  // -------------------------

  // manipulate checked box number
  // checked box number ==0

  // checked box number ==2
  $("input[type=checkbox]").on("click", function () {
    var checkedClick = $(":checked").length;
    if (checkedClick == 2) {
      console.log($(":checked"));
      $("tr").each(function () {
        $(this).children("td:eq(0), td:eq(1)").show();
        $(this).children("td:eq(2), td:eq(3)").hide();
      });
      $(".sidenav.compare").show(400);
    }
    // checked box number ==3
    else if (checkedClick == 3) {
      console.log($(":checked"));
      $("tr").each(function () {
        $(this).children("td:eq(0), td:eq(1), td:eq(2)").show();
        $(this).children("td:eq(3)").hide();
      });
    }
    // checked box number ==4
    else if (checkedClick == 4) {
      console.log($(":checked"));
      $("tr").each(function () {
        $(this).children("td:eq(0), td:eq(1), td:eq(2), td:eq(3)").show();
      });
    }
    // checked box number ==5
    else if (checkedClick == 5) {
      $(".sidenav.compare").hide(400);
      alert("Selected items must be less than 5!" + "\nPlease try again!");
      $("input:checked").removeAttr("checked");
      $(".checkbox").popover('hide');
    }
  });

  // effect tooltip checked box 
  $(".iconProducts").on("mouseenter", function () {
    $(this).siblings("div").popover('show');
  });
  $(".iconProducts").on("mouseleave", function () {
    $(this).siblings("div").popover('hide');
  });
  // -------------------------
  // deselect remove-circle
  $(".remove-circle").on("click", function () {
    console.log($("input:checked"));
    $("input:checked").removeAttr("checked");
    $(".sidenav.compare").hide(400);
  })
  // -------------------------
  // comparisonButton
  $("#comparisonButton1, #comparisonButton2").on("click", function () {
    $("#firstInputCheckbox").attr("checked", true);
    $("#firstCheckbox").popover('show');
  })
      // -------------------------
  // compare Table 
  $("input[type=checkbox]").on("click", function () {

    var checkedClick = $(":checked").length;
    if (checkedClick == 1) {

      var brand1 = $(this).parent().parent().siblings(":has(h3)").html();
      console.log(brand1);
      var row1col1 = $("#table-compare").find("tr:eq(0)").find("td:eq(0)").text();
      console.log(row1col1);
      $("#table-compare").find("tr:eq(0)").find("td:eq(0)").html(brand1);

      var item1 = $(this).parent().siblings(".detailProducts").children("p:nth-child(1)").html();
      console.log(item1);
      var row2col1 = $("#table-compare").find("tr:eq(1)").find("td:eq(0)").text();
      console.log(row2col1);
      $("#table-compare").find("tr:eq(1)").find("td:eq(0)").html(item1);

      var Capacity1 = $(this).parent().siblings(".detailProducts").children("p:nth-child(2)").html();
      console.log(Capacity1);
      var row3col1 = $("#table-compare").find("tr:eq(2)").find("td:eq(0)").text();
      console.log(row3col1);
      $("#table-compare").find("tr:eq(2)").find("td:eq(0)").html(Capacity1);

      var HP1 = $(this).parent().siblings(".detailProducts").children("p:nth-child(3)").html();
      console.log(HP1);
      var row4col1 = $("#table-compare").find("tr:eq(3)").find("td:eq(0)").text();
      console.log(row4col1);
      $("#table-compare").find("tr:eq(3)").find("td:eq(0)").html(HP1);

      var Inverter1 = $(this).parent().siblings(".detailProducts").children("p:nth-child(4)").html();
      console.log(Inverter1);
      var row5col1 = $("#table-compare").find("tr:eq(4)").find("td:eq(0)").text();
      console.log(row5col1);
      $("#table-compare").find("tr:eq(4)").find("td:eq(0)").html(Inverter1);

      var Price1 = $(this).parent().siblings(".detailProducts").children("p:nth-child(5)").html();
      console.log(Price1);
      var row6col1 = $("#table-compare").find("tr:eq(5)").find("td:eq(0)").text();
      console.log(row6col1);
      $("#table-compare").find("tr:eq(5)").find("td:eq(0)").html(Price1);
    }
    else if (checkedClick == 2) {

      var brand2 = $(this).parent().parent().siblings(":has(h3)").html();
      console.log(brand2);
      var row1col2 = $("#table-compare").find("tr:eq(0)").find("td:eq(1)").text();
      console.log(row1col2);
      $("#table-compare").find("tr:eq(0)").find("td:eq(1)").html(brand2);

      var item2 = $(this).parent().siblings(".detailProducts").children("p:nth-child(1)").html();
      console.log(item2);
      var row2col2 = $("#table-compare").find("tr:eq(1)").find("td:eq(1)").text();
      console.log(row2col2);
      $("#table-compare").find("tr:eq(1)").find("td:eq(1)").html(item2);

      var Capacity2 = $(this).parent().siblings(".detailProducts").children("p:nth-child(2)").html();
      console.log(Capacity2);
      var row3col2 = $("#table-compare").find("tr:eq(2)").find("td:eq(1)").text();
      console.log(row3col2);
      $("#table-compare").find("tr:eq(2)").find("td:eq(1)").html(Capacity2);

      var HP2 = $(this).parent().siblings(".detailProducts").children("p:nth-child(3)").html();
      console.log(HP2);
      var row4col2 = $("#table-compare").find("tr:eq(3)").find("td:eq(1)").text();
      console.log(row4col2);
      $("#table-compare").find("tr:eq(3)").find("td:eq(1)").html(HP2);

      var Inverter2 = $(this).parent().siblings(".detailProducts").children("p:nth-child(4)").html();
      console.log(Inverter2);
      var row5col2 = $("#table-compare").find("tr:eq(4)").find("td:eq(1)").text();
      console.log(row5col2);
      $("#table-compare").find("tr:eq(4)").find("td:eq(1)").html(Inverter2);

      var Price2 = $(this).parent().siblings(".detailProducts").children("p:nth-child(5)").html();
      console.log(Price2);
      var row6col2 = $("#table-compare").find("tr:eq(5)").find("td:eq(1)").text();
      console.log(row6col2);
      $("#table-compare").find("tr:eq(5)").find("td:eq(1)").html(Price2);
    }
    else if (checkedClick == 3) {

      var brand3 = $(this).parent().parent().siblings(":has(h3)").html();
      console.log(brand3);
      var row1col3 = $("#table-compare").find("tr:eq(0)").find("td:eq(2)").text();
      console.log(row1col3);
      $("#table-compare").find("tr:eq(0)").find("td:eq(2)").html(brand3);

      var item3 = $(this).parent().siblings(".detailProducts").children("p:nth-child(1)").html();
      console.log(item3);
      var row2col3 = $("#table-compare").find("tr:eq(1)").find("td:eq(2)").text();
      console.log(row2col3);
      $("#table-compare").find("tr:eq(1)").find("td:eq(2)").html(item3);

      var Capacity3 = $(this).parent().siblings(".detailProducts").children("p:nth-child(2)").html();
      console.log(Capacity3);
      var row3col3 = $("#table-compare").find("tr:eq(2)").find("td:eq(2)").text();
      console.log(row3col3);
      $("#table-compare").find("tr:eq(2)").find("td:eq(2)").html(Capacity3);

      var HP3 = $(this).parent().siblings(".detailProducts").children("p:nth-child(3)").html();
      console.log(HP3);
      var row4col3 = $("#table-compare").find("tr:eq(3)").find("td:eq(2)").text();
      console.log(row4col3);
      $("#table-compare").find("tr:eq(3)").find("td:eq(2)").html(HP3);

      var Inverter3 = $(this).parent().siblings(".detailProducts").children("p:nth-child(4)").html();
      console.log(Inverter3);
      var row5col3 = $("#table-compare").find("tr:eq(4)").find("td:eq(2)").text();
      console.log(row5col3);
      $("#table-compare").find("tr:eq(4)").find("td:eq(2)").html(Inverter3);

      var Price3 = $(this).parent().siblings(".detailProducts").children("p:nth-child(5)").html();
      console.log(Price3);
      var row6col3 = $("#table-compare").find("tr:eq(5)").find("td:eq(2)").text();
      console.log(row6col3);
      $("#table-compare").find("tr:eq(5)").find("td:eq(2)").html(Price3);
    }
    else if (checkedClick == 4) {

      var brand4 = $(this).parent().parent().siblings(":has(h3)").html();
      console.log(brand4);
      var row1col4 = $("#table-compare").find("tr:eq(0)").find("td:eq(3)").text();
      console.log(row1col4);
      $("#table-compare").find("tr:eq(0)").find("td:eq(3)").html(brand4);

      var item4 = $(this).parent().siblings(".detailProducts").children("p:nth-child(1)").html();
      console.log(item4);
      var row2col4 = $("#table-compare").find("tr:eq(1)").find("td:eq(3)").text();
      console.log(row2col4);
      $("#table-compare").find("tr:eq(1)").find("td:eq(3)").html(item4);

      var Capacity4 = $(this).parent().siblings(".detailProducts").children("p:nth-child(2)").html();
      console.log(Capacity4);
      var row3col4 = $("#table-compare").find("tr:eq(2)").find("td:eq(3)").text();
      console.log(row3col4);
      $("#table-compare").find("tr:eq(2)").find("td:eq(3)").html(Capacity4);

      var HP4 = $(this).parent().siblings(".detailProducts").children("p:nth-child(3)").html();
      console.log(HP4);
      var row4col4 = $("#table-compare").find("tr:eq(3)").find("td:eq(3)").text();
      console.log(row4col4);
      $("#table-compare").find("tr:eq(3)").find("td:eq(3)").html(HP4);

      var Inverter4 = $(this).parent().siblings(".detailProducts").children("p:nth-child(4)").html();
      console.log(Inverter4);
      var row5col4 = $("#table-compare").find("tr:eq(4)").find("td:eq(3)").text();
      console.log(row5col4);
      $("#table-compare").find("tr:eq(4)").find("td:eq(3)").html(Inverter4);

      var Price4 = $(this).parent().siblings(".detailProducts").children("p:nth-child(5)").html();
      console.log(Price4);
      var row6col4 = $("#table-compare").find("tr:eq(5)").find("td:eq(3)").text();
      console.log(row6col4);
      $("#table-compare").find("tr:eq(5)").find("td:eq(3)").html(Price4);
    }
  });

  // open modal details products
  $(".iconProducts").on("click", function () {

    var title = $(this).attr('title');
    let productDetails = database.filter(ele => ele.id == title);
    addModal(productDetails[0]);
    $("#modal-id").modal("show");
    console.log(database);
    console.log(title);
    console.log(productDetails);
  })
  // addModal function to query data
  function addModal(productDetails) {
    let x = ` <div class="row">
                            <div>
                                <table>
                                    <tr>
                                      <td colspan="2"><h3>Brand: ${productDetails.Brand} </h3></td>
                                    </tr>
                                    <tr>
                                      <td><span>Model Series</span></td>
                                      <td>${productDetails.Model}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Type:</span></td>
                                      <td>${productDetails.Type}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Color: </span></td>
                                      <td>${productDetails.Color}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Ton: </span></td>
                                      <td>${productDetails.Ton}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Cooling Capacity:</span></td>
                                      <td>${productDetails.coolingCapacity}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Heating Capacity:</span></td>
                                      <td>${productDetails.heatingCapacity}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Power Input: </span></td>
                                      <td>${productDetails.powerInput}</td>
                                    </tr>
                                    <tr>
                                      <td><span>EER:</span></td>
                                      <td>${productDetails.EER}</td>
                                    </tr>
                                    <tr>
                                      <td><span>Price:</span></td>
                                      <td>${productDetails.Price}</td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td><img src="${productDetails.image}" alt=""></td>
                                    </tr>
                                    <tr>
                                      <td><a href="./DOCU/${productDetails.link}" download>Brochure Download</a></td>
                                    </tr>
                                  </table>
                            </div>
                        </div> `
    $('.modal-body').html(x)
  }
  // -----------------
  // load data ...
  var database = [];
  $.getJSON("product-ac.json")
    .done(function (result) {
      database = result;
    })
    .fail(function () {
      alert("Get data that bai ");
    });
    //================