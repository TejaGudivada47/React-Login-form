const Registration=()=>{
    const Perform=()=>{
        alert("Registered Successfully")
    }
    return(
<div class="container-lg " >
<div class="position-absolute top-50 start-50 translate-middle shadow-none p-3 mb-5 bg-body-tertiary rounded">
    <h4>Registration Form</h4><br/>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:550}}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:550}}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:550}}/>
    </div>
    <div class="mb-3">
    <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" style={{width:550}}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={Perform}>Register</button>
  </div>
</div>
    );
}
export default Registration;