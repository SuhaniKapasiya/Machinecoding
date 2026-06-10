const db = require("../config");

const createToDos = (req,res)=>{
     
    const {tittle , description} = req.body;

    const sql = "INSERT INTO todos(tittle ,description) VALUES(?,?)";


     db.query(sql,[tittle,description],(err,result)=>{
        
        if(err){
            return res.status(500).json(err);
        }

        res.json({
            message :"Todo Created",
        });

     });

}


// fetch Todos API

const getTodos = (req, res)=>{

     db.query(
        "SELECT * FROM todos",
        (err,result)=>{
            if(err, result){
                return res.status(500).json(err);
            }
            res.json(result);
        }
     );
};


//update Todos APi

const updateTodo = (req,res)=>{

    const { id } = req.params;
    const { tittle ,description} = req.body;
      
    const sql = (" Update todos SET tittle  = ?, description = ?, WHERE id = ?");
    db.query(sql [tittle,description,id] ,(err,result)=>{
         
           if(err,result){
              return res.status(500).json(err);
           }

           res.json({
             message: "Todo Updated Successfully",
           });
    })

}


const deleteTodo = (req,res)=>{

    const [id] = req.params;
    const sql = ("Delete todos Where id = ? ");

    db.query(sql [id],(err,result)=>{
        if(err,result){
            return res.status(500).json(err);
        }

        res.json({
            message :"Todo Deleted",
        })
    })
}