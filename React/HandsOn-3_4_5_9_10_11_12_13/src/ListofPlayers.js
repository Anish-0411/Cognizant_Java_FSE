function ListofPlayers() {

    const players = [
        {name:"Virat Kohli",score:98},
        {name:"Rohit Sharma",score:84},
        {name:"Shubman Gill",score:68},
        {name:"KL Rahul",score:75},
        {name:"Hardik Pandya",score:60},
        {name:"Ravindra Jadeja",score:55},
        {name:"R Ashwin",score:73},
        {name:"Mohammed Shami",score:44},
        {name:"Jasprit Bumrah",score:81},
        {name:"Surya Kumar",score:69},
        {name:"Ishan Kishan",score:90}
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>

            <h1>List of Players</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map((player,index)=>(
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            <h2>Players having score below 70</h2>

            <ul>
                {
                    below70.map((player,index)=>(
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );

}

export default ListofPlayers;