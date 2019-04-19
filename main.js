let $buttons = $('#buttons>span')
let $slides = $('#slides')
let $images = $('#slides>img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-250px)'})
bindEvent()
$(previous).on('click',function(){
  goToSlides(current-1)
})
$(next).on('click',function(){
  goToSlides(current+1)
})
let timer = setInterval(function(){
  goToSlides(current+1)
},2000)
$(wrapper).on('mouseenter',function(){
  window.clearInterval(timer)
}).on('mouseleave',function(){
  timer = setInterval(function(){
    goToSlides(current+1)
  },2000)
})

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq(2).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}

function bindEvent(){
  $('#buttons').on('click','span',function(e){
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlides(index)
  })
}
function goToSlides(index){
  if(index>=$buttons.length){
    index = 0
  }else if(index<0){
    index = $buttons.length-1
  }
  if(current === $buttons.length-1 && index === 0){
    $slides.css({transform:`translateX(${-($buttons.length+1)*250}px)`})
    .one('transitionend',function(){
      $slides.addClass('hide').offset()
    $slides.css({transform:`translateX(${-(index+1)*250}px`})
    $slides.removeClass('hide')})
  }else if(current === 0 && index === $buttons.length-1){
    $slides.css({transform:'translateX(0px)'})
    .one('transitionend',function(){
      $slides.addClass('hide').offset()
      $slides.css({transform:`translateX(${-($buttons.length)*250}px)`})
      $slides.removeClass('hide')})
  }else{
    $slides.css({transform:`translateX(${-(index+1)*250}px)`})
  }
  current = index
}