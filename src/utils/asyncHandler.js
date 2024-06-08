const asyncHandler = (asyncfunction) => {
  return (req,res,next) => {
    Promise.resolve(asyncfunction(req,res,next)).catch((error) => next(error));
  }
}

export {asyncHandler}



//throw try catch 
// const asyncHandler = (fun) => async (req,res,next) => {
//   try{
//     await fun(req,res,next)
//   }catch(error){
//     res.status(err.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }
