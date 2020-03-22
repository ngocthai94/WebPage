  // $(document).scroll(() => {
//     var y = $(this).scrollTop();
//     if (y > 400)
//         $('.scroll-top').fadeIn();
//     else
//         $('.scroll-top').fadeOut();

// });

// $(".scroll-top").click(function () {
//     $("html, body").animate({
//         scrollTop: 0
//     }, "fast");
//     return false;
// });


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
// /* Preloader and animations */
// $(window).load(function () { // makes sure the whole site is loaded
// 	$('#status').fadeOut(); // will first fade out the loading animation
// 	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
// 	$('body').delay(350).css({'overflow-y': 'visible'});

// 	/* WOW Elements */
// 	if (typeof WOW == 'function') {
// 		new WOW().init();
// 	}

// 	/* Parallax Effects */
// 	if (!!$.prototype.enllax) {
// 		$(window).enllax();
// 	}

// });

// $(function(){
//   //Số lượng từ giới hạn
//   var limitW = 15;
//   //Số ký tự của từ
//   var char = 4;
//   var txt = $('p').html();
//   var txtStart = txt.slice(0,limitW).replace(/\w+$/,'');
//   var txtEnd = txt.slice(txtStart.length);
//   if ( txtEnd.replace(/\s+$/,'').split(' ').length > char ) {
//       $('p').html([
//           txtStart,
//           '<a href="#" class="more">xem thêm...</a>',
//           '<span class="detail">',
//           txtEnd,
//           '</span>'
//       ].join('')
//     );
//   }

//   $('span.detail').hide();
//   $('a.more').click(function() {
//       $(this).hide().next('span.detail').fadeIn();
//       return false;
//   });
// });


// in Bai///
function Popup(data) {
  var currentLocation = window.location;
  var link =window.location.href;
  var mywindow = window.open('/', 'div', 'height=400,width=600');
  mywindow.document.write('<html><head><title>In bài viết</title>');
  mywindow.document.write('</head><body>');
  mywindow.document.write('<p><img style="float: left" width="150px" src="Assets/Images/SmallBanner/Footer_logo_new1512.png" />TRANG THÔNG TIN ĐIỆN TỬ</p>');
  mywindow.document.write(data);
  mywindow.document.close();
  // necessary for IE >= 10
  mywindow.focus();
  // necessary for IE >= 10

  mywindow.print();
  mywindow.close();

  return true;
}
function PrintElem(elem) {
  document.getElementById('notPrint').style.display = "none";
  document.getElementById('btn-share').style.display = 'none';
  Popup($(elem).html());
  document.getElementById('notPrint').style.display = "block";
  document.getElementById('btn-share').style.display = 'block';
}
// ##### end in  bai#####


var fontLevel = 2;
    var getFontLevel = function (level) {
        if (level == 1) {
            return {
                add: 'font-12',
                remove: 'font-14 font-16 font-20'
            }
        }
        if (level == 2) {
            return {
                add: 'font-14',
                remove: 'font-12 font-16 font-20'
            }
        }
        if (level == 3) {
            return {
                add: 'font-16',
                remove: 'font-12 font-14 font-20'
            }
        }
        if (level == 4) {
            return {
                add: 'font-20',
                remove: 'font-12 font-14 font-26'
            }
        }
    }
//Function tăng font chữ
function tangFormChu() {
  var divNewsDetails = $('.motaText');
  if (fontLevel < 4) fontLevel = fontLevel + 1;
  else fontLevel = 4;
  var c = getFontLevel(fontLevel);
  divNewsDetails.removeClass(c.remove);
  divNewsDetails.addClass(c.add);
}



//Function giảm font chữ
function giamFormChu() {
  var divNewsDetails = $('.motaText');
  if (fontLevel > 1) fontLevel = fontLevel - 1;
  else fontLevel = 1;
  var c = getFontLevel(fontLevel);
  divNewsDetails.removeClass(c.remove);
  divNewsDetails.addClass(c.add);
}
// $('#btnDecreaseFontSize').on('click', function () {
//   var divDescription = $('#divDescription');
//   if (fontLevel > 1) fontLevel = fontLevel - 1;
//   else fontLevel = 1;
//   var c = getFontLevel(fontLevel);
//   divDescription.removeClass(c.remove);
//   divDescription.addClass(c.add);
// });


//Hàm giảm độ tương phản
function DecreaseContrast() {
  var valueClass = $("#content-news-info").attr("class");
  if (valueClass == "row news-info") {
      $("#content-news-info").addClass("bg-240px");
  }
  else {
      if (valueClass == "row news-info bg-240px") {
          $("#content-news-info").addClass("bg-229px");
      }
      else {
          if (valueClass == "row news-info bg-240px bg-229px") {
              $("#content-news-info").addClass("bg-220px");
          }
      }
  }
}

//Hàm tăng độ tương phản
function IncreaseContrast() {

  var valueClass = $("#content-news-info").attr("class");
  if (valueClass == "row news-info bg-240px bg-229px bg-220px") {
      $("#content-news-info").removeClass("bg-220px");
  }
  else {
      if (valueClass == "row news-info bg-240px bg-229px") {
          $("#content-news-info").removeClass("bg-229px");
      }
      else {
          if (valueClass == "row news-info bg-240px") {
              $("#content-news-info").removeClass("bg-240px");
          }
      }
  }
}


// function lamTron (){
//   let a = (8/3);

// }


function AppendSilides(data)
{
  let dem = data.length;
  let capCha = (dem/3);
  let count = Math.ceil(capCha);
//Khởi tạo lớp cha để chứa row 3 image
    KhoiTaoLopCha(count);
    var y = 1;
    var Index = 0;
    var IdReset = 0;
    var yi = 0;
    for (var i = 1; i <= dem; i++) {

        //IdReset Max = 3 thì  Reset = 0 (số lượng 3 image 1 row)
        IdReset = IdReset+1;
        //Index = 0 set lại <div class='row'> nhét lại 3 image
        if(Index == 0)
        {
            $("#IndexSilide-"+y+"").append('<div class="row" id="ImageIndex-'+y+'">'
                +'<div class="col-sm-4">'
                    +'<img src="data:image/jpeg;base64,'+data[yi].Thumbnail+'" alt="'+i+'" class="img-fluid">'
                +'</div>'
            +'</div>');
        Index = Index + 1;
        }
        else {
          $("#ImageIndex-"+y+"").append('<div class="col-sm-4">'
              +'<img src="data:image/jpeg;base64,'+data[yi].Thumbnail+'" alt="'+i+'" class="img-fluid">'
          +'</div>');
        }
        yi = yi + 1;
        if(IdReset==3)
        {
         //Reset set lại
            IdReset = 0
            y = y+1;
            Index = 0;
        }
    }
}

//Khởi tạo lớp cha chứa row 3 image
function KhoiTaoLopCha(Cap)
{
    var u;
    for (u = 1; u <= Number(Cap); u++)
    {
        if(u == 1)
        {
            //Lớp đầu tiên active
        $("#Slide_Master").append('<div id="IndexSilide-'+u+'" class="carousel-item active" data-interval="5000">'
        +'</div>')
        }
       else
       $("#Slide_Master").append('<div id="IndexSilide-'+u+'" class="carousel-item" data-interval="5000">'
        +'</div>')
    }
//End Khởi tạo
}



function carousel() {
  setTimeout(function(){
    $(".carousel-item:eq(0)").addClass("active");
}, 2000);
}


//Phan trang
function phanTrang(){
  $('#demo').pagination({
    dataSource: [1, 2, 3, 4, 5, 6],
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
        console.log(data);
    }
  })
}


//Tạo Silede Hình ảnh
function SlideImagecarousel(data)
{
    let dem =data.length;
    for (u = 0; u < Number(dem); u++)
    {
        if(u == 0)
        {
            $("#ImageAdd").append('<div class="carousel-item active" (click) = chiTiet("/mediaDetail/'+data[u].MediaID+'")>'
            +'<a>'
            +'<img src="data:image/jpeg;base64,'+data[u].Thumbnail+'" class="d-block w-100 pointer">'
            +'<div href="/mediaDetail/'+data[u].MediaID+'" class="card-img-overlay p-0 d-flex justify-content-end align-items-end">'
            +'<a class="bg-dark py-2 px-3 w-100 text-decoration-none text-white">'
            +'<p class="card-text mb-1"><small>'+data[u].TenMedia+'</small></p>'
            +'</a>'
            +'</div>'
            +'</a>'
            +'</div>')
        }
        else
        {
            $("#ImageAdd").append('<div class="carousel-item">'
            +'<a href="/mediaDetail/'+data[u].MediaID+'">'
            +'<img src="data:image/jpeg;base64,'+data[u].Thumbnail+'" class="d-block w-100 pointer">'
            +'<a href="/mediaDetail/'+data[u].MediaID+'" class="card-img-overlay p-0 d-flex justify-content-end align-items-end">'
            +'<p class="card-text mb-1"><small>'+data[u].TenMedia+'</small></p>'
            +'</a>'
            +'</a>'
            +'</div>')
        }
    }
  }

function goUp(){
  window.scroll(0, 0);
}


