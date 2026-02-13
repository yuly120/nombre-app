function Expreciones(){
    const nombre = 'Yuliana';
    const apellidos = 'Mendoza Lorenzo';
    return (
        <div>
            <h2>Expreciones</h2>
            <h3>tu nombre es: {nombre} y tus apellidos son :{apellidos}</h3>
            <Lista />
        </div>

    )
}
 
function Lista(){
    const user =[
        {id: 1, name: 'Hector', role: 'Web developer'},
        {id: 2, name: 'Ana', role: 'Web desinger'},
        {id: 3, name: 'Rosa', role: 'Web desinger'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>nombre</th>
                        <th>roles</th>
                    </tr>
                    <tr>
                        {
                            user.map(function(user,index ){
                            
                                return(
                                    <tr key ={index}>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    </tr>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default  Expreciones