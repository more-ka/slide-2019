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
let size = $('#images>img').length
activeButton(n%size)
let id = timer()
$('.window').on('mouseenter',function(){
  window.clearInterval(id)
})
$('.window').on('mouseleave',function(){
  let id = timer()
})
function activeButton(index){
  allButtons.eq(index).trigger('click')
}
function timer(){
  return setInterval(()=>{
    n += 1
    activeButton(n%size)
},1000)
}