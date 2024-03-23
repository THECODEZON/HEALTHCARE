var exp=require('express');
var obj=exp();
var body1=require('body-parser')
var path1=require('path')
var encoded = body1.urlencoded({extended:true})

obj.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/appointment.html')
})
obj.post('/formprocess',encoded,(req,res)=>{
    res.send({
        PatientName:req.body.patientName,
        ChooseaDoctor :req.body.doctor,
       Date:req.body.date
    
    })
    // res.redirect('/')
})
obj.listen(4000,()=>{

    console.log("running");

})