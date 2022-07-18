function HelloWorld(People){
  console.log(` Hello World ${People} `)
}

function Pessoa(callback){
  let Name="Giøvane"
  callback(Name)
}
Pessoa(HelloWorld)