let allButtons = $('#buttons>span')

for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    let index = $(x.currentTarget).index()
    let p =index*(-250)
    $('#images').css({
      transform:'translateX('+p+'px)'
    })
    n = index
    allButtons.eq(n).addClass('red')
    .siblings('.red').removeClass('red')
  })
}

let n = 0
let size = $('images>img').length
allButtons.eq(size%3).trigger('click')
let id = setInterval(()=>{
    size += 1
    allButtons.eq(size%3).trigger('click').addClass('red')
    .siblings('.red').removeClass('red')
},1000)

$('.window').on('mouseenter',function(){
  window.clearInterval(id)
})
$('.window').on('mouseleave',function(){
  let id = setInterval(()=>{
    size += 1
    allButtons.eq(size%3).trigger('click')
},1000)
})