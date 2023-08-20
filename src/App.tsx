import './App.css'

function App() {
  
  const ar = [12,23,34,336,18,274,340,47];
  const ob = {'firstname':'praveen','lastname':'gubbala'};
  const students = [
                    {'firstname':'praveen','lastname':'gubbala',gender:'male'},
                    {'firstname':'divya','lastname':'reddy',gender:'female'},
                    {'firstname':'vendra','lastname':'jaya',gender:'female'},
                    {'firstname':'srikanth','lastname':'gubbala',gender:'male'},
                    {'firstname':'keerthi','lastname':'rao',gender:'female'},
                  ]
  const a = 12;
  const img1 = "https://bestlifeonline.com/wp-content/uploads/sites/3/2020/09/shutterstock_752082904.jpg?quality=82&strip=1&resize=640%2C360";
  const img2 = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg";
  function pqr(){
    alert("ithe enti....")
  }
  return (
    <>
      <button onClick={pqr}>Your Button</button>
      <table border={2}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student)=>{
              return (<tr className={student.gender==='male'?"male":'female'}>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.gender}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
      {
        Object.keys(ob).map((k:string)=>{
          return <li>{k}:{ob[k]}</li>
        })
      }
      <img src={a%2===0?img1:img2} alt="" />
 
      {
        a%2==0?(<h1>Even</h1>):(<h1>Odd</h1>)
      }
      <ul>
        {
          ar.map((a)=>{
            return <li>{a%2===0?(<i>{a}</i>):(<b>{a}</b>)}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
