let $buttons = $('#buttons > span')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstcopy = $images.eq(0).clone(true)
let $lastcopy = $images.eq(2).clone(true)

$slides.append($firstcopy)
$slides.prepend($lastcopy)
let current = 5
$slides.css({transform:'translateX(-250px)'})
$buttons.eq(0).on('click',function(){
  if(current === 2){
    $slides.css({transform:'translateX(-1000px)'})
    .one('transitionend',function(){
      $slides.hide()
      $slides.css({transform:'translateX(-250px)'})
      .offset()
      $slides.show()
    })
  }else{
    $slides.css({transform:'translateX(-250px)'})
    current = 0
  }
})
$buttons.eq(1).on('click',function(){
  $slides.css({transform:'translateX(-500px)'})
  current = 1
})
$buttons.eq(2).on('click',function(){
  if(current === 0){
    $slides.css({transform:'translateX(0px)'})
    .one('transitionend',function(){
      $slides.hide()
      $slides.css({transform:'translateX(-750px)'})
    .offset()
    $slides.show()
    })
  }else{
    $slides.css({transform:'translateX(-750px)'})
    current = 2
  }
})