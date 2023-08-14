import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./registration";


const Login=()=>{
    return(
      <div class="container-lg " style={{margin:150,marginLeft:500}}>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <h4>Login</h4>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:550}}/>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" style={{width:550}}/>
  </div>
  <div>
  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> Check me out</label>
  </div><br/>
  <button type="submit" class="btn btn-primary">Login</button>
</form><br/>
<p><small>Dont't have an account?</small><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href='/Registration'>Create account</a></p>
<BrowserRouter>
<Routes>
  <Route path="/Registration" element={<Registration/>}></Route>
</Routes>
      </BrowserRouter> 
</div>
</div>  

  );
}
 export default Login;