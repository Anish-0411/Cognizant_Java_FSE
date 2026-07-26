function Guest(){

    return(

        <div className="card">

            <h2>Welcome Guest</h2>

            <h3>Available Flights</h3>

            <table>

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                    </tr>

                    <tr>
                        <td>6E505</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                    </tr>

                    <tr>
                        <td>SG204</td>
                        <td>Bangalore</td>
                        <td>Kolkata</td>
                    </tr>

                </tbody>

            </table>

            <p><b>Please Login to Book Tickets.</b></p>

        </div>

    );

}

export default Guest;