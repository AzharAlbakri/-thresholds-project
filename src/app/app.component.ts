import { Component } from '@angular/core';
// import * as jquery from 'jquery';
// import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 
}

// //<!--Manage Tree-->
// //<script type="text/javascript">
//   $(function () {

//       $(document).on("click", ".show-service-details", function () {
//           $(".tree-container").addClass("col-md-4");
//           $(".canvas-container").addClass("col-sm-12 col-md-8");
//           $(".canvas-container").css("width", "auto");
//           $(".canvas-container").css("height", "auto");

//           setTimeout(function () { $(".canvas-container").css("opacity", "1"); }, 500);


//       });

//       $(document).on("click", ".delete-button", function () {
//           $(this).closest(".canvas-row").remove();
//       });

//       $(document).on("click", ".delete-main-tree", function () {
//           $(this).closest(".tree-accordion").remove();
//       });

//       $(document).on("click", ".delete-sub-li", function () {
//           $(this).closest("li").remove();
//       });


//       $(document).on("click", ".manage-force-btn", function () {
//           $(this).closest(".canvas-row").addClass("active-force");
//           var forceTitle = $(this).closest('.canvas-title').children('.flex-column').children('h6').text();
//           $("#forceTitleInput").val(forceTitle);

//           (<any>('#manageForceModal')).modal({
//               backdrop: 'static',
//               keyboard: false
//           })
//       });


//       $(document).on("click", ".tree-edit-action", function () {
//           $(this).closest(".card-header").addClass("active-tree");
//           var treeTitle = $(this).closest('.card-header').children('.card-link').children('h6').text();
//           $("#treeTitleInput").val(treeTitle);

//           (<any>$('#manageTreeModal')).modal({
//               backdrop: 'static',
//               keyboard: false
//           })
//       });



//       $(document).on("click", ".edit-sub-li", function () {
//           $(this).closest("li").addClass("active-li");
//           var liTitle = $(this).closest('li').children('.sub-li-title').children('span').text();
//           $("#liTitleInput").val(liTitle);

//           (<any>$('#manageLiModal')).modal({
//               backdrop: 'static',
//               keyboard: false
//           })
//       });


//       $(document).on("click", ".add-canvas-sub-li", function () {
//           var newLi = '<li><p>Name goes here</p><div class="ms-actions"><a  class="delete-sub-li"><img title="Remove" src="assets/images/remove-icon.svg"></a></div>';
//           $(newLi).insertBefore($(this).closest("li"));
//           (<any>$('#manageLiCanvas')).modal({
//               backdrop: 'static',
//               keyboard: false
//           })
//       });
//       $(document).on("click", "#saveForceChanges", function () {
//           $(".active-force .canvas-title h6").text((<any>$("#forceTitleInput")).val());
//           var colorVal = $(".single-color-box.active").attr('title');
//           (<any>$(".active-force .canvas-title")).css("background-color", colorVal);

//           $('.canvas-row.active-force').removeClass("active-force");
//       });


//       $("#closeBtn").click(function () {
//           $('.canvas-row.active-force').removeClass("active-force");
//       });




//       $(document).on("click", "#tree-saveChanges", function () {
//           $(".active-tree .card-link h6").text((<any>$("#treeTitleInput")).val());
//           $('.card-header.active-tree').removeClass("active-tree");
//       });


//       $("#tree-closeBtn").click(function () {
//           $('.card-header.active-tree').removeClass("active-tree");
//       });



//       $(document).on("click", "#li-saveChanges", function () {
//           $(".active-li .sub-li-title span").text((<any>$("#liTitleInput")).val());
//           $('li.active-li').removeClass("active-li");
//       });


//       $("#li-closeBtn").click(function () {
//           $('li.active-li').removeClass("active-li");
//       });





//       // $(document).on("click", ".add-sub-li", function () {
//       //     var newLi = '<li class="active-li"><a class="sub-li-title" href="#"> <span class="tab-txt edit">Threshold name</span></a> <div class="ms-actions"><a  class="delete-sub-li"><img title="Remove" src="assets/images/remove-icon.svg"></a></div></li>';
//       //     $(newLi).insertBefore($(this).closest("li"));
//       //     $(".edit").click(editHandler);
//       //     (<any>$('#manageLiModal')).modal({
//       //         backdrop: 'static',
//       //         keyboard: false
//       //     });
//       //     $("#liTitleInput").val("Threshold name");
//       // });



//       var accordionID = 2;

//       // $(document).on("click", ".add-toggle-tree", function () {
//       //     accordionID++;

//       //     var thisAccordionID = "accordionID" + accordionID;
//       //     var newTree = '<div class="tree-accordion mb-2" id="accordion"> <div class="card warning"> <div class="card-header p-2 active-tree"> <a class="card-link collapsed" data-toggle="collapse" href="#' + thisAccordionID + '"> <i class="fas fa-chevron-down mr-2"></i> <h6 class="tab-txt edit">Main Threshold name goes here</h6> </a>  <div class="ms-actions"><ul><li><a href="#" class="delete-main-tree"><img title="Remove" src="assets/images/remove-icon.svg"></a></li></ul></div> </div> <div id="' + thisAccordionID + '" class="collapse" data-parent="#accordion"> <div class="card-body pl-5 pt-0 pr-0 pb-0"> <ul class="file-tree no-l-border has-checkbox"> <li> <a class="add-sub-li" href="#"> <i class="fas fa-plus mr-1"></i> Add sub Threshold </a> </li> </ul> </div> </div> </div> </div>';
//       //     $(newTree).insertBefore($(this));

//       //     (<any>$(".file-tree")).filetree();

//       //     //$(".edit").click(editHandler);
//       //     (<any>$('#manageTreeModal')).modal({
//       //         backdrop: 'static',
//       //         keyboard: false
//       //     });
//       //     $("#treeTitleInput").val("Main Threshold name goes here");
//       // });



//       // $(document).on("click", ".add-force-area", function () {
//       //     var newForce = ' <div class="canvas-row d-flex active-force"><div class="canvas-title d-flex flex-column edit-titles">   <h6 class="tab-txt edit">Category name</h6></div> <div class="canvas-tree flex-grow-1 p-2 pr-5"> <a class="add-toggle-tree tree-add-action" href="#"> <i class="fas fa-plus mr-1"></i> Add main Threshold </a> </div><div class="ms-actions"><ul><li><a href="#" class="delete-button"><img title="Remove" src="assets/images/remove-icon.svg"></a></li></ul></div></div>';
//       //     $(newForce).insertBefore($(this));
//       //     //$(".edit").click(editHandler);

//       //     (<any>$('#manageForceModal')).modal({
//       //         backdrop: 'static',
//       //         keyboard: false
//       //     });
//       //     $("#forceTitleInput").val("Category name");
//       // });
//   });
// //</script>

// //<!--Add Roles-->
// //<script>
//   //Add Role
//   var multiSelectID = 1;
//   $(document).on("click", ".addNewGuest", function () {
//       var newAlert = "<div class='form-group'><div class='row'><div class='col-sm-12 col-md-7'><select name='select2' class='multiple multi' id='multi" + multiSelectID + "' multiple><option value='1' data-left='assets/images/ingi.png'>Mohammad Abdullah</option><option value='2' data-left='assets/images/runa.png'>Mohammad Abdullah</option><option value='3' data-left='assets/images/jogvan.png'>Mohammad Abdullah</option><option value='4' data-left='assets/images/noimage.png'>Mohammad Abdullah</option><option value='5' data-left='assets/images/noimage.png'>Mohammad Abdullah</option></select></div><div class='col-sm-12 col-md-3'><select class='form-control'><option>Guest</option><option>Leader</option><option>Editor</option></select></div><div class='col-sm-12 col-md-2'><span class='remove-icon ml-2  action-icon'><img src='assets/images/delete-icon.svg' /></span></div></div></div>";
//       $(newAlert).insertBefore($(this).closest(".addNewGuest"));
//       (<any>$('#multi' + multiSelectID)).selectator({
//           showAllOptionsOnFocus: true,
//           searchFields: 'value text subtitle right'
//       });
//       multiSelectID++;
//   });

//   //Remove Role
//   $(document).on("click", ".remove-icon", function () {
//       $(this).closest('.form-group').remove();
//   });
// //</script>
// //<!--Edit titles-->
// //<script>
//   // var editHandler = function () {
//   //     var t = $(this);
//   //     $('.tab-txt').removeAttr("contenteditable");

//   //     $(this).attr("contenteditable", "true").focus();
//   //     $(this).attr("contenteditable", "true").focusout(function () {
//   //         reAdjust();
//   //         $(this).removeAttr("contenteditable").off("focusout");
//   //         t.css("visibility", "visible");
//   //     });
//   // };
//   //$(".edit").click(editHandler);
// //</script>

// //<!--Color picker-->
// //<script>

//   $(document).on("click", ".single-color-box", function () {
//       $(".single-color-box").removeClass('active');
//       $(this).addClass('active');
//   });

// //</script>

// //<!--Add languages-->
// //<script>
//   $(document).on("click", ".addNewLang", function () {
//       var newOption = '<div class="form-group"> <div class="row d-flex"> <div class="col-sm-4"><select class="form-control"><option>English</option><option>Arabic</option><option>French</option><option>Chinese</option></select></div><div class="flex-grow-1"><input type="text" placeholder="Name" class="form-control"></div><div><span class="action-icon remove-icon ml-2 lang-action mt-2px"><img src="assets/images/delete-icon.svg" /></span></div> <div class="col-sm-12 mt-2"> <label for="exampleFormControlTextarea1"> Description </label> <textarea class="form-control text-area" placeholder="Enter Description" rows="2"></textarea> </div></div></div>';
//       $(newOption).insertBefore($(this).closest(".addNewLang"));

//   });
//   $(document).on("click", ".remove-icon", function () {
//       $(this).closest('.form-group').remove();
//   });
// //</script>

// //<!--Add / Remove Threshold-->
// //<script>
//   var singleSelectID = 1;
//   var singleSelectID2 = 2;
//   $(document).on("click", ".addNewThreshold", function () {
//       var newThreshold = '<div class="row threshold-group"> <div class="col-sm-12 col-md-2"> <div class="form-group"> <select name="select2" id="single' + singleSelectID + '" class="single single w-100" single> <option value="1" data-left="assets/images/alert-icon.svg"></option> <option value="2" data-left="assets/images/danger-icon.svg"></option> </select> </div> </div> <div class="col-sm-12 col-md-2"> <div class="form-group"> <select name="select2" class="single single w-100" id="single2' + singleSelectID2 + '" single> <option value="1" data-left="assets/images/green-icon.svg"></option> <option value="2" data-left="assets/images/yellow-icon.svg"></option> <option value="3" data-left="assets/images/red-icon.svg"></option> <option value="3" data-left="assets/images/blue-icon.svg"></option> <option value="3" data-left="assets/images/gray-icon.svg"></option> </select> </div> </div> <div class="col-sm-12 col-md-3"> <div class="form-group"> <select class="form-control"> <option><</option> <option>></option> <option>>=</option> <option><=</option> <option>=</option> </select> </div> </div> <div class="col-sm-12 col-md-3"> <input type="number" placeholder="Value" class="form-control"> </div> <div class="col-sm-12 col-md-2"> <span class="action-icon remove-icon ml-2 remove-threshold"> <img src="assets/images/delete-icon.svg" /> </span> </div> </div>';
//       $(newThreshold).insertBefore($(this).closest(".addNewThreshold"));


//       (<any>$('#single' + singleSelectID)).selectator({
//           showAllOptionsOnFocus: true,
//           searchFields: 'value text subtitle right'
//       });
//       singleSelectID++;

//       (<any>$('#single2' + singleSelectID2)).selectator({
//           showAllOptionsOnFocus: true,
//           searchFields: 'value text subtitle right'
//       });
//       singleSelectID2++;


//   });

//   $(document).on("click", ".remove-threshold", function () {
//       $(this).closest('.threshold-group').remove();
//   });
// //</script>



// ///////////////////////////////////////////////////////
// //             JS FOLDER >> script.js               //

// //Menu
// (function ($) {

//   // $.circleMenu = function (el, options) {
//   //     var plugin = this;
//   //     var $el = $(el);
//   //     var $toggle, $links;
//   //     var open = false, nbLinks, multip = 1, dir;

//   //     plugin.options = $.extend({
//   //         direction: 'up', // up down right left
//   //         position: {
//   //             x: 'right',
//   //             y: 'bottom'
//   //         }
//   //     }, options);

//   //     plugin.init = function () {
//   //         switch (plugin.options.position.x) {
//   //             case 'right':
//   //                 $el.css('right', '15px');
//   //                 break;
//   //             case 'left':
//   //                 $el.css('left', '15px');
//   //                 break;
//   //             default:
//   //                 $el.css('right', '15px');
//   //         }
//   //         switch (plugin.options.position.y) {
//   //             case 'top':
//   //                 $el.css('top', '15px');
//   //                 break;
//   //             case 'bottom':
//   //                 $el.css('bottom', '15px');
//   //                 break;
//   //             default:
//   //                 $el.css('bottom', '15px');
//   //         }
//   //         plugin.createToggle();
//   //         plugin.createLink();
//   //         plugin.initEvents();
//   //     }
//   //     plugin.createToggle = function () {
//   //         //create button
//   //         $toggle = $(document.createElement('button'));
//   //         $toggle.addClass('circle-menu-toggle');

//   //         //create icon
//   //         $icon = $(document.createElement('i'));
//   //         $icon.addClass('');
//   //         $icon.prop("aria-hidden", true);

//   //         $toggle.append($icon);
//   //         $el.append($toggle);
//   //     }
//   //     plugin.createLink = function () {
//   //         $links = $el.find('li');
//   //         nbLink = $links.length;
//   //         switch (plugin.options.direction) {
//   //             case 'up':
//   //                 dir = 'Y';
//   //                 multip = -1;
//   //                 break;
//   //             case 'down':
//   //                 dir = 'Y';
//   //                 multip = 1;
//   //                 break;
//   //             case 'right':
//   //                 dir = 'X';
//   //                 multip = 1;
//   //                 break;
//   //             case 'left':
//   //                 dir = 'X';
//   //                 multip = -1;
//   //                 break;
//   //             default:
//   //                 dir = 'Y';
//   //                 multip = -1;
//   //         }
//   //         plugin.close();
//   //     }
//   //     plugin.initEvents = function () {
//   //         $toggle.click(function () {
//   //             plugin.handleClick(plugin, $el);
//   //         });
//   //     }
//   //     plugin.handleClick = function (plugin, $el) {
//   //         open = !open;
//   //         if (open) {
//   //             plugin.open();
//   //         } else {
//   //             plugin.close();
//   //         }
//   //     }
//   //     plugin.open = function () {
//   //         $links.each(function (index) {
//   //             plugin.css($(this), 'transition-delay', ((nbLink - index) * 0.1) + 's');
//   //             plugin.css($(this), 'transform', 'translate' + dir + '(' + (multip * (index + 1) * ($(this).height() + 10)) + 'px) scale(1)');
//   //         });
//   //     }
//   //     plugin.close = function () {
//   //         $links.each(function (index) {
//   //             plugin.css($(this), 'transition-delay', ((index + 1) * 0.1) + 's');
//   //             plugin.css($(this), 'transform', 'translate' + dir + '(0px) scale(0)');
//   //         });

//   //     }
//   //     plugin.css = function ($el, prop, value) {
//   //         $el.css(prop, value);
//   //         $el.css('-webkit-' + prop, value);
//   //         $el.css('-ms-' + prop, value);
//   //         $el.css('-moz-' + prop, value);
//   //         $el.css('-o-' + prop, value);
//   //     }




//   //     plugin.init();
//   // }


//   // $.fn.circleMenu = function (options) {
//   //     return this.each(function () {
//   //         console.log($(this).attr('upgraded'));
//   //         if ($(this).attr('upgraded') == undefined) {
//   //             var plugin = new $.circleMenu(this, options);
//   //             $(this).attr('upgraded', 'true');
//   //         }
//   //     });

//   // }

// }(jQuery));

// (<any>$('#menu1')).circleMenu({
//   direction: 'down',
//   position: {
//       x: 'left',
//       y: 'top'
//   }
// });


// //Saerch

// $("#search").focusin(function () {
//   $('.voice-icon').addClass('icon-border-bottom-green');
//   $('.search-icon').addClass('icon-border-bottom-white');
// });
// $("#search").focusout(function () {
//   $('.voice-icon').removeClass('icon-border-bottom-green');
//   $('.search-icon').removeClass('icon-border-bottom-white');
// });