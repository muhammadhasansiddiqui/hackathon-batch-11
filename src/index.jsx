import React from "react";
import Navbar from "./components/navbar";
import { useNavigate } from "react-router-dom";

function Index() {
    const styles = {
        container: {
            fontFamily: "'Arial', sans-serif",
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
        },
        heroSection: {
            position: "relative",
            width: "100%",
            height: "60%",
            overflow: "hidden",
        },
        heroImage: {
            width: "50%",
            height: "50%",
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            position: "relative",
            top: 0,
            left: 0,
            margin: "auto",
        },
        heroText: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            zIndex: 1,
            width: "90%",
        },
        section: {
            padding: "50px 20px",
            textAlign: "center",
            width: "100%",
        },
        sectionTitle: {
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#8DC63F",
        },
        cardContainer: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
        },
        card: {
            flex: "1 1 calc(25% - 20px)", // Cards take 25% width with gap
            maxWidth: "calc(25% - 20px)", // Restricts cards to 25% width
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease",
        },
        cardImage: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
        },
        cardTitle: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        footer: {
            backgroundColor: "#1A1714",
            color: "#fff",
            padding: "20px",
            width: "100%",
        },
        footerText: {
            fontSize: "0.9rem",
        },
    };

    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.heroSection}>
                <div style={styles.heroText}>
                    <img
                        style={styles.heroImage}
                        src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
                        alt="hero"
                    />
                    <h1
                        style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#8DC63F",
                            paddingTop: "5%",
                        }}
                    >
                        WELCOME TO THE SAYLANI WELFARE{" "}
                        <span style={{ color: "#0066B3" }}>TRUST</span>
                    </h1>

                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#8DC63F",
                            paddingBottom: "5%",
                        }}
                    >
                        GET IT BY SAYLANI
                    </h2>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Want loan? Choose a service</h2>
                <div style={styles.cardContainer}>
                    <div style={styles.card} onClick={() => navigate("/Shadi")}>
                        <img
                            style={styles.cardImage}
                            src="https://i.tribune.com.pk/media/images/Express-Tribune-(7)1733481952-0/Express-Tribune-(7)1733481952-0.jpg"
                            alt="SHADI"
                        />
                        <h3 style={styles.cardTitle}>SHADI LOAN</h3>
                        <p>Get your Shadi loan after filling out your information</p>
                    </div>
                    <div style={styles.card} onClick={() => navigate("/home")}>
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOlRI7T8G6QWbuTX_v0jMnRwTt9KQJ_a8Xg&s"
                            alt="HOME CONSTRUCTION"
                        />
                        <h3 style={styles.cardTitle}>HOME CONSTRUCTION LOAN</h3>
                        <p>Get your Home Construction loan after filling out your information</p>
                    </div>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/buisnees")}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmWNsO-L9uHAvOJgTDm3WxQwAarpjQeRj9g&s"
                            alt="BUSINESS STARTUP"
                        />
                        <h3 style={styles.cardTitle}>BUSINESS STARTUP LOAN</h3>
                        <p>Get your Business Startup loan after filling out your information</p>
                    </div>
                    <div
                        style={styles.card}
                        onClick={() => navigate("/education")}
                    >
                        <img
                            style={styles.cardImage}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCngzTOokEoH2-JxiEM48ZZ1bV4H185nKsvw&s"
                            alt="EDUCATION LOAN"
                        />
                        <h3 style={styles.cardTitle}>EDUCATION LOAN</h3>
                        <p>Get your Education loan after filling out your information</p>
                    </div>
                </div>
            </div>

            <footer style={styles.footer}>
                <p style={styles.footerText}>
                    &copy; {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </p>
            </footer>

            {/* Media Queries for Mobile Responsiveness */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .cardContainer {
                            flex-direction: column;
                            align-items: center;
                        }

                        .card {
                            flex: 1 1 100%;
                            max-width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Index;
