let $buttons = $('#buttons>span')
let $slides = $('#slides')
let $images = $('#slides>img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-250px)'})
bindEvent()

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq(2).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}

function bindEvent(){
  $buttons.eq(0).on('click',function(){
    if(current === 2){
      $slides.css({transform:'translateX(-1000px)'})
      .one('transitionend',function(){
        $slides.addClass('hide')
      $slides.css({transform:'translateX(-250px)'})
      .offset()
      $slides.removeClass('hide')
      current = 0
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
        $slides.addClass('hide')
        $slides.css({transform:'translateX(-750px)'})
        .offset()
        $slides.removeClass('hide')
        current = 2
      })
    }else{
      $slides.css({transform:'translateX(-750px)'})
      current = 2
    }
  })
}