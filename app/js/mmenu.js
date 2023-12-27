// const menu = new MmenuLight(document.querySelector('#menu'), {
//   // title: 'Menu',
//   // theme: 'light',
//   // selected: 'Selected'
// });
// menu.enable('all'); // '(max-width: 900px)'
// menu.offcanvas({
//   // position: 'left',// [| 'right']
//   // move: true,// [| false]
//   // blockPage: true,// [| false | 'modal']
// });

// //	Open the menu.
// document.querySelector('a[href="#menu"]')
//   .addEventListener('click', (evnt) => {
//     menu.open();

//     //	Don't forget to "preventDefault" and to "stopPropagation".
//     evnt.preventDefault();
//     evnt.stopPropagation();
//   });



$('.nav-js ul li').each(function (index) {
  let itemUp = $(this).find('span').text();
  console.log(itemUp);
});