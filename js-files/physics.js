


 const params = {
  
    t:1,
    d: 10
  }
  
  function getAcceleration(params) {
    //list the structure of parameters
if (!isNaN(params.f / params.m)) return params.f / params.m;
if (!isNaN(params. Δv / params.Δt)) return params. Δv / params.Δt;
if (!isNaN(params.d *2) / (params.t*params.t) ) return (params.d *2)/(params.t*params.t) 
return "impossible"
}  

console.log(getAcceleration(params))