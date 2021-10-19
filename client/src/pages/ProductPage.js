import HeaderMenu from '../components/HeaderMenu';
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = () => {
   
    
    return (
        <div className="page">
            <Container>
                <HeaderMenu />
                {/* Filter */}
                <Container>
                    
                </Container>
                {/* Sort */}
                <Container>

                </Container>
                {/* Display */}
                <Container>

                </Container>
                <Footer />
            </Container>
        </div>

    );
}

export default ProductPage;