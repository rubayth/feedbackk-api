import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList/>
            <Button variant="info" 
                style={{
                    padding: "0px",
                    position: "fixed",
                    right: "23px",
                    bottom: "23px",
                    borderRadius:"50%",
                    width:"80px",
                    height:"80px",
                    fontSize:"2rem",
                }}
                >
                <Link to="/surveys/new">+</Link>
            </Button>
        </div>
    )
}

export default Dashboard;