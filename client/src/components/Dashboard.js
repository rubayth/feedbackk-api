import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <Button variant="info" 
                style={{
                    position: "fixed",
                    right: "23px",
                    bottom: "23px",
                    paddingTop: "15px",
                    marginBottom: 0,
                    zIndex: 997,
                    borderRadius:"50%",
                    width:"80px",
                    height:"80px",
                    fontSize:"3rem",
                    padding: "0px",
                }}
                >
                <Link to="/surveys/new">+</Link>
            </Button>
        </div>
    )
}

export default Dashboard;