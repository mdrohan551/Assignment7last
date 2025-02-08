import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.message}>Oops! Page Not Found</h2>
            <p style={styles.description}>
                The page you are looking for doesn’t exist or has been moved.
            </p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif'
    },
    errorCode: {
        fontSize: '100px',
        fontWeight: 'bold',
        color: '#dc3545',
        margin: 0
    },
    message: {
        fontSize: '28px',
        fontWeight: '600',
        margin: '10px 0',
        color: '#333'
    },
    description: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '20px'
    },
 
};

export default ErrorPage;
