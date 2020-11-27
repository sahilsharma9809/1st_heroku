const express =require("express")
 const app=express();

const PORT =process.env.PORT || 4444 
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
}) 
app.use('/',express.static(__dirname+'/'))
