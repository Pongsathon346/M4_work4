document.getElementById('ok').addEventListener('click',function(e){
    alert('ok is clicked')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('mousemove',function(e){  
    console.log('x = '+e.clientX)
    console.log('y = '+e.clientY)
}
)